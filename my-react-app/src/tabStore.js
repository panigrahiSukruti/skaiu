import {create} from 'zustand';

const useTabStore = create((set) => ({
  activeTab: 'general',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useTabStore;
