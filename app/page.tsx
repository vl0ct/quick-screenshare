import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowUpRightIcon, Monitor, Users } from "lucide-react";
import Link from "next/link";
import { CustomRoomIdForm } from "./_components/custom-room-id-form";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex h-[90vh] max-w-3xl flex-col justify-center gap-8 px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex gap-2">
            <Badge
              render={
                <a
                  href="https://github.com/VA5UDEV/screen-sharing"
                  target="_blank"
                >
                  Repo Link <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              }
            />
            <Badge render={<ThemeSwitch iconSize={12} />} />
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Share Your Screen Instantly
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-xl text-balance">
            Create, join, and share your screen with others in real-time.
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor size={20} />
                Start Sharing
              </CardTitle>
              <CardDescription>
                Create a room and share your screen with others
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Link href="/host">
                <Button className="w-full">Create Room</Button>
              </Link>
              <CustomRoomIdForm />
            </CardContent>
          </Card>
          <Card className="my-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users size={20} />
                Join a Room
              </CardTitle>
              <CardDescription>
                Enter a room code to view someone's screen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/join">
                <Button variant="default" className="w-full">
                  Join Room
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Alert className="absolute bottom-0 w-full rounded-none border-none">
        <AlertCircle />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          Screen sharing isn't supported on mobile devices. Mobile users can
          still join a room to view screens shared by others.
        </AlertDescription>
      </Alert>
    </div>
  );
}
