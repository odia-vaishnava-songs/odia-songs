export const STATUS_COLORS = {
    NOT_DONE: '#ef4444',
    IN_PROGRESS: '#f97316',
    COMPLETED: '#00a38d'
} as const;

export type StatusType = keyof typeof STATUS_COLORS;

export const getStatusBackground = (status: StatusType | string | undefined) => {
    const s = status?.toUpperCase();
    switch (s) {
        case 'NOT_DONE': return '#fee2e2';
        case 'IN_PROGRESS': return '#ffedd5';
        case 'COMPLETED': return '#e6fffa';
        default: return '#fee2e2'; // Fallback to Red background
    }
};

export const getStatusColor = (status: StatusType | string | undefined, verified?: boolean) => {
    if (verified === true) return '#00a38d'; // Green
    const s = status?.toUpperCase();
    if (s === 'IN_PROGRESS') return '#f97316'; // Orange
    if (s === 'COMPLETED') return '#00a38d'; // Green
    return '#ef4444'; // Red (Standard for Not Done or Missing)
};

// FORCE_SYNC_VERSION: 1.1
// TIMESTAMP: 2026-03-01T11:58:00
