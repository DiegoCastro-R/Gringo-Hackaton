import create from 'zustand';

// Mock store
const useAuthStore = create((set) => ({
    isLoggedIn: false,
    toggleLogin: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}));


export default useAuthStore