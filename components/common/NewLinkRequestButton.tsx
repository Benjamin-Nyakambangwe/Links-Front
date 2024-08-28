"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useDialogsState } from "@/store/dialogs";

interface DialogsStore {
  isNewLinkRequestDialogOpen: boolean;
  updateNewLinkRequestDialogOpen: () => void;
}

export function NewLinkRequestButton() {
  const updateNewLinkRequestDialogOpen = useDialogsState(
    (state: DialogsStore) => state.updateNewLinkRequestDialogOpen
  );
  const isNewLinkRequestDialogOpen = useDialogsState(
    (state: DialogsStore) => state.isNewLinkRequestDialogOpen
  );
  const [localIsNewLinkRequestDialogOpen, setLocalIsNewLinkRequestDialogOpen] =
    useState<boolean>(isNewLinkRequestDialogOpen);

  useEffect(() => {
    setLocalIsNewLinkRequestDialogOpen(isNewLinkRequestDialogOpen);
  }, [isNewLinkRequestDialogOpen]);

  return (
    <Button onClick={() => updateNewLinkRequestDialogOpen()}>
      Request Link
    </Button>
  );
}
