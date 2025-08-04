"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg?url";
import ExitToAppIcon from "@/public/icon_exit_to_app.svg?url";
import ProfileIcon from "@/public/icon_profile.svg?url";
import IconButton from "../components/IconButton";
import { useRouter } from "next/navigation";

export default function PlaygroundHeader() {
  const router = useRouter();

  return (
    <header className="h-16 flex items-center justify-between px-6 py-3">
      <IconButton
        icon={<Image src={ExitToAppIcon} alt="exit-to-app" />}
        onClick={() => router.push("/")}
      />
      <div className="flex flex-1 justify-center items-center gap-2">
        <Image src={Logo} alt="logo" width={66} height={32} />
        <span>Playground</span>
      </div>
      <div>
        <IconButton
          icon={<Image src={ProfileIcon} alt="profile" />}
          onClick={() => {}}
        />
      </div>
    </header>
  );
}
