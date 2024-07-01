// store.js
import create from 'zustand';

const useStore = create((set) => ({
  // User related state
  user: null,
  setUser: (user) => set({ user }),

  // Project related state
  projects: [],
  setProjects: (projects) => set({ projects }),
  deleteProject: (projectId) => set((state) => ({
    projects: state.projects.filter((project) => project.id !== projectId),
  })),
  fetchProjects: async (userId) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/projects/${userId}`;
      const res = await fetch(url);
      const data = await res.json();
      set({ projects: data });
    } catch (error) {
      console.error(error);
    }
  },

  // Email related state
  emails: [],
  addEmail: (email) => set((state) => ({ emails: [...state.emails, email] })),
  setEmails: (emails) => set(() => ({ emails })),
  removeEmail: (id) => set((state) => ({
    emails: state.emails.filter((email) => email.id !== id)
  })),

  // Sidebar related state
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
