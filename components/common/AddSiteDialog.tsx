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

interface DialogsStore {
  isAddSiteDialogOpen: boolean;
  updateAddSiteDialogOpen: () => void;
}

export function AddSiteDialog({ open }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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

  if (isDesktop) {
    return (
      <Dialog open={isAddSiteDialogOpen} onOpenChange={updateAddSiteDialogOpen}>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Site</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
          <NewSiteForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isAddSiteDialogOpen} onOpenChange={updateAddSiteDialogOpen}>
      {/* <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger> */}
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>New Site</DrawerTitle>
          {/* <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription> */}
        </DrawerHeader>
        <NewSiteForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
