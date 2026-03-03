export interface ThemeDefinition {
    name: string;
    color: string;
    gradient: string;
    accent: string;
    text: string;
}

export const TATTVA_THEMES: { [key: string]: ThemeDefinition } = {
    gauranga: { name: 'Gauranga', color: '#F57C00', gradient: 'linear-gradient(135deg, #F57C00 0%, #E65100 100%)', accent: '#F57C00', text: '#fff' },
    nityananda: { name: 'Nityananda', color: '#3949AB', gradient: 'linear-gradient(135deg, #3949AB 0%, #283593 100%)', accent: '#3949AB', text: '#fff' },
    advaita: { name: 'Advaita', color: '#121212', gradient: 'linear-gradient(135deg, #121212 0%, #000000 100%)', accent: '#121212', text: '#fff' },
    gadadhara: { name: 'Gadadhara', color: '#C61B54', gradient: 'linear-gradient(135deg, #C61B54 0%, #9E1546 100%)', accent: '#C61B54', text: '#fff' },
    srivasa: { name: 'Srivasa', color: '#375B15', gradient: 'linear-gradient(135deg, #375B15 0%, #23400D 100%)', accent: '#375B15', text: '#fff' }
};

export const DEFAULT_THEME = 'gauranga';
