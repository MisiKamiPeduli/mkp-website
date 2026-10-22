"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const fieldClasses =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contact-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl bg-popover p-0 text-popover-foreground shadow-xl backdrop:bg-black/50"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 id="contact-dialog-title" className="text-2xl font-bold">
            Contact us
          </h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            onClick={onClose}
            className="-m-2"
          >
            <X className="size-5" />
          </Button>
        </div>

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClasses}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClasses}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Subject
            <input
              name="subject"
              type="text"
              required
              className={fieldClasses}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Message
            <textarea
              name="message"
              rows={5}
              required
              className={`${fieldClasses} resize-y`}
            />
          </label>
          <Button type="submit" disabled className="mt-2 self-end">
            Send message
          </Button>
        </form>
      </div>
    </dialog>
  );
}
