import {create} from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    chatbotName: '',
    welcomeMessage: '',
    inputPlaceholder: '',
    primaryColor: '',
    fontSize: '',
    fontColor: '',
    chatHeight: '',
    showSources: false,
    chatIconSize: '',
    positionOnScreen: '',
    distanceFromBottom: '',
    horizontalDistance: '',
    botIcon: null,
  },
  setFormData: (newFormData) => set((state) => ({
    formData: { ...state.formData, ...newFormData },
  })),
}));

export default useFormStore;
