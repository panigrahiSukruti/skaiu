import {create} from 'zustand';

const useStore = create((set) => ({
  emails: [],
  addEmail: (email) => set((state) => ({ emails: [...state.emails, email] })),
  setEmails: (emails) => set(() => ({ emails })),
  removeEmail: (id) => set((state) => ({
    emails: state.emails.filter((email) => email.id !== id)
  })),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
