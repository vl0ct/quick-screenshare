import { CustomRoomIdForm } from "@/app/_components/custom-room-id-form";
import { Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionEffect } from "@/components/effects/motion-effect";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Feature() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4">
      <MotionEffect
        slide={{
          direction: "down",
        }}
        fade
        zoom
        delay={0.45}
      >
        <div className="mx-auto grid w-full gap-6 px-4 md:grid-cols-1">
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
      </MotionEffect>
    </div>
  );
}
