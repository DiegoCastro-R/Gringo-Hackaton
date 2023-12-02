// AppContextStore.js
import create from 'zustand';

const useAppContextStore = create((set) => ({
    language: 'en', // Default language
    selectedTab: 0, // Default selected tab
    updateLanguage: (newLanguage) => set({ language: newLanguage }),
    updateSelectedTab: (newTab) => set({ selectedTab: newTab }),
}));

export default useAppContextStore;
