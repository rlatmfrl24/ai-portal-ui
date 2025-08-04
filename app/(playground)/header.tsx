"use client";

import Logo from "@/public/logo.svg";
import ExitToAppIcon from "@/public/icon_exit_to_app.svg";
import ProfileIcon from "@/public/icon_profile.svg";
import IconButton from "../components/IconButton";
import { useRouter } from "next/navigation";

export default function PlaygroundHeader() {
  const router = useRouter();

  return (
    <header className="h-16 flex items-center justify-between px-6 py-3">
      <IconButton icon={<ExitToAppIcon />} onClick={() => router.push("/")} />
      <div className="flex flex-1 justify-center items-center gap-2">
        <Logo height={32} width={66} />
        <span>Playground</span>
      </div>
      <div>
        <IconButton icon={<ProfileIcon />} onClick={() => {}} />
      </div>
    </header>
  );
}
