"use client";

import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";
import { Sheet, SheetContent, SheetTrigger } from "@v1/ui/sheet";
import { useState } from "react";
import { MainMenu } from "./main-menu";

export function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          className="rounded-full w-8 h-8 items-center relative flex md:hidden"
        >
          <Icons.Menu size={16} />
        </Button>
      </div>
      <SheetContent side="left" className="border-r rounded-none -ml-2">
        <div className="ml-2 mb-8">
          <Icons.Logo />
        </div>

        <MainMenu onSelect={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
