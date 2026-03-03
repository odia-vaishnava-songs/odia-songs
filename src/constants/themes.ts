export interface ThemeDefinition {
    name: string;
    color: string;
    gradient: string;
    accent: string;
    text: string;
}

export const TATTVA_THEMES: { [key: string]: ThemeDefinition } = {
    gauranga: { name: 'Gauranga', color: '#8A5082', gradient: 'linear-gradient(135deg, #8A5082 0%, #6F5F90 100%)', accent: '#8A5082', text: '#fff' },
    nityananda: { name: 'Nityananda', color: '#FF9933', gradient: 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)', accent: '#FF9933', text: '#fff' },
    advaita: { name: 'Advaita', color: '#4CAF50', gradient: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', accent: '#4CAF50', text: '#fff' },
    gadadhara: { name: 'Gadadhara', color: '#2196F3', gradient: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', accent: '#2196F3', text: '#fff' },
    srivasa: { name: 'Srivasa', color: '#9C27B0', gradient: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)', accent: '#9C27B0', text: '#fff' }
};

export const DEFAULT_THEME = 'gauranga';
