"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface ShareOptionsProps {
  roomId: string;
}

export function ShareOptions({ roomId }: ShareOptionsProps) {
  function copyRoomId() {
    navigator.clipboard.writeText(roomId);
    toast("Room code copied!", {
      description: "Share this code with others to let them join your room.",
    });
  }

  function copyShareableLink() {
    const shareableUrl = `${window.location.origin}/join?room=${roomId}`;
    navigator.clipboard.writeText(shareableUrl);
    toast("Shareable link copied!", {
      description:
        "Share this link with others to let them join your room directly.",
    });
  }

  return (
    <div className="mt-4 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground px-3 text-sm">Room Code</p>
        <code className="bg-muted relative flex h-12 w-full items-center overflow-hidden rounded-lg font-mono text-sm tracking-tight">
          <span className="flex-1 truncate px-4">
            {roomId || "Generating room code..."}
          </span>

          <div className="text-muted-foreground flex h-full w-12 shrink-0 items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyRoomId}
              disabled={!roomId}
              className="cursor-pointer"
            >
              <CopyIcon className="size-4" />
            </Button>
          </div>
        </code>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background text-muted-foreground px-2">or</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground px-3 text-sm">Shareable Link</p>
        <code className="bg-muted relative flex h-12 w-full items-center overflow-hidden rounded-lg font-mono text-sm tracking-tight">
          <span className="flex-1 truncate px-4">
            {roomId
              ? `${window.location.origin}/join?room=${roomId}`
              : "Generating link..."}
          </span>

          <div className="text-muted-foreground flex h-full w-12 shrink-0 items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyShareableLink}
              disabled={!roomId}
              className="cursor-pointer"
            >
              <CopyIcon className="size-4" />
            </Button>
          </div>
        </code>
      </div>
    </div>
  );
}
