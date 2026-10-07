// Mobile Back Button and Modal History Stack Handler
// Prevents PWA/Mobile browser from closing unexpectedly when pressing hardware/gesture back button

type BackHandlerFn = () => void;

interface ModalEntry {
    id: string;
    onBack: BackHandlerFn;
}

const modalStack: ModalEntry[] = [];
let isPoppingProgrammatically = false;
let lastBackTime = 0;
let showToastCallback: ((message: string) => void) | null = null;

export const setExitToastCallback = (cb: ((message: string) => void) | null) => {
    showToastCallback = cb;
};

/**
 * Register a modal/overlay/view with browser history.
 * Pushes a history state so pressing Android hardware back will close the modal instead of the app.
 */
export const pushBackHandler = (id: string, onBack: BackHandlerFn) => {
    // Avoid duplicate registrations of the same modal
    const existingIndex = modalStack.findIndex(m => m.id === id);
    if (existingIndex !== -1) {
        modalStack.splice(existingIndex, 1);
    }

    modalStack.push({ id, onBack });
    window.history.pushState({ appModalId: id, timestamp: Date.now() }, '');
};

/**
 * Programmatically close a modal (e.g. when user clicks on-screen X or ArrowLeft button).
 * Pops browser history to keep stack in sync.
 */
export const popBackHandler = (id?: string) => {
    if (modalStack.length === 0) return;

    if (id) {
        const index = modalStack.findIndex(m => m.id === id);
        if (index === -1) return;
        modalStack.splice(index, 1);
    } else {
        modalStack.pop();
    }

    isPoppingProgrammatically = true;
    window.history.back();
    setTimeout(() => {
        isPoppingProgrammatically = false;
    }, 100);
};

export const hasActiveModal = () => modalStack.length > 0;

/**
 * Initializes the root sentinel and listens for popstate events.
 */
export const initMobileBackHandler = () => {
    if (typeof window === 'undefined') return () => {};

    // Push initial baseline guard if not already present
    if (!window.history.state?.appRootSentinel) {
        window.history.replaceState({ appRootBase: true }, '');
        window.history.pushState({ appRootSentinel: true }, '');
    }

    const handlePopState = () => {
        // If we closed this modal programmatically via on-screen button, ignore popstate
        if (isPoppingProgrammatically) {
            isPoppingProgrammatically = false;
            return;
        }

        // 1. If any modal / detail view / drawer is active, close the top-most one!
        if (modalStack.length > 0) {
            const topModal = modalStack.pop();
            if (topModal) {
                try {
                    topModal.onBack();
                } catch (e) {
                    console.error('[BackHandler] Error running onBack:', e);
                }
            }
            return;
        }

        // 2. If at root with no modals open: Double-Back to Exit logic
        const isRoot = window.location.pathname === '/' || window.location.pathname === '/songs';
        if (isRoot) {
            const now = Date.now();
            if (now - lastBackTime < 2000) {
                // Second back tap within 2 seconds: Allow exit!
                window.history.back();
            } else {
                // First back tap: Prevent exit, show toast, and re-arm sentinel
                lastBackTime = now;
                if (showToastCallback) {
                    showToastCallback("ଆପ୍ ବନ୍ଦ କରିବା ପାଇଁ ପୁଣି Back ଦବାନ୍ତୁ (Press BACK again to exit)");
                }
                window.history.pushState({ appRootSentinel: true }, '');
            }
        }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
        window.removeEventListener('popstate', handlePopState);
    };
};
