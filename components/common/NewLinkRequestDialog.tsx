"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useDialogsState } from "@/store/dialogs";
import NewSiteForm from "@/components/forms/NewSiteForm";
import NewLinkRequestForm from "../forms/NewLinkRequestForm";

interface DialogsStore {
  isNewLinkRequestDialogOpen: boolean;
  updateNewLinkRequestDialogOpen: () => void;
}

export function NewLinkRequestDialog({ open }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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

  if (isDesktop) {
    return (
      <Dialog
        open={isNewLinkRequestDialogOpen}
        onOpenChange={updateNewLinkRequestDialogOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request Link</DialogTitle>
          </DialogHeader>
          <NewLinkRequestForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={isNewLinkRequestDialogOpen}
      onOpenChange={updateNewLinkRequestDialogOpen}
    >
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Request Link</DrawerTitle>
        </DrawerHeader>
        <NewLinkRequestForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
