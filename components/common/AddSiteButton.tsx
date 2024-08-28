"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useDialogsState } from "@/store/dialogs";

interface DialogsStore {
  isAddSiteDialogOpen: boolean;
  updateAddSiteDialogOpen: () => void;
}

export function AddSiteButton() {
  const updateAddSiteDialogOpen = useDialogsState(
    (state: DialogsStore) => state.updateAddSiteDialogOpen
  );
  const isAddSiteDialogOpen = useDialogsState(
    (state: DialogsStore) => state.isAddSiteDialogOpen
  );
  const [localIsAddSiteDialogOpen, setLocalIsAddSiteDialogOpen] =
    useState<boolean>(isAddSiteDialogOpen);

  useEffect(() => {
    setLocalIsAddSiteDialogOpen(isAddSiteDialogOpen);
  }, [isAddSiteDialogOpen]);

  return (
    <Button onClick={() => updateAddSiteDialogOpen()}>Add New Site</Button>
  );
}
