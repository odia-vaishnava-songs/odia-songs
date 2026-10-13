export interface ThemeDefinition {
    name: string;
    color: string;
    gradient: string;
    accent: string;
    text: string;
    songBg?: string;
}

export const TATTVA_THEMES: { [key: string]: ThemeDefinition } = {
    gauranga: {
        name: 'Gauranga',
        color: '#F57C00',
        gradient: 'linear-gradient(135deg, #F57C00 0%, #E65100 100%)',
        accent: '#FFB300',
        songBg: '#FFB300',
        text: '#fff'
    },
    nityananda: {
        name: 'Nityananda',
        color: '#3880ff',
        gradient: 'linear-gradient(135deg, #3880ff 0%, #1E88E5 100%)',
        accent: '#00CBFE',
        songBg: '#00CBFE',
        text: '#fff'
    },
    advaita: {
        name: 'Advaita',
        color: '#1E293B',
        gradient: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        accent: '#38BDF8',
        songBg: '#0f172a',
        text: '#fff'
    },
    gadadhara: {
        name: 'Gadadhara',
        color: '#D81B60',
        gradient: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
        accent: '#F472B6',
        songBg: '#F472B6',
        text: '#fff'
    },
    srivasa: {
        name: 'Srivasa',
        color: '#15803D',
        gradient: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
        accent: '#22C55E',
        songBg: '#22C55E',
        text: '#fff'
    }
};

export const DEFAULT_THEME = 'nityananda';
