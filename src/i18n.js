import ar from './Locales/ar/translation.json';
import ku from './Locales/ku/translation.json';
import en from './Locales/en/translation.json';

const translations = {
    ar,
    en,
    ku
};

export function getTranslation(language){
    return translations[language];
}