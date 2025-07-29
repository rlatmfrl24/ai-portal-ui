import { Flex, Text, Button } from "@radix-ui/themes";
import Logo from "../public/logo.svg?url";
import Image from "next/image";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Image src={Logo} alt="logo" />
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let&apos;s go</Button>
    </Flex>
  );
}
