import { create } from "zustand";

interface DialogsState {
  isAddSiteDialogOpen: boolean;
  updateAddSiteDialogOpen: () => void;
  isNewLinkRequestDialogOpen: boolean;
  updateNewLinkRequestDialogOpen: () => void;
}

export const useDialogsState = create<DialogsState>((set) => ({
  isAddSiteDialogOpen: false,
  isNewLinkRequestDialogOpen: false,

  updateNewLinkRequestDialogOpen: () =>
    set((state) => ({
      isNewLinkRequestDialogOpen: !state.isNewLinkRequestDialogOpen,
    })),
  updateAddSiteDialogOpen: () =>
    set((state) => ({ isAddSiteDialogOpen: !state.isAddSiteDialogOpen })),
}));
