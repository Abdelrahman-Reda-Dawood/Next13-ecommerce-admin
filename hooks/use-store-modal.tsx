import { create } from 'zustand';

interface useStoreModalStore {
  isopen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isopen: false,
  onOpen: () => set({ isopen: true }),
  onClose: () => set({ isopen: false }),
}));
