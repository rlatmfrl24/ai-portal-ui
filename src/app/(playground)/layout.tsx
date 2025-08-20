import PlaygroundHeader from "./header";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex flex-col">
      <PlaygroundHeader />
      <div className="flex-1 px-6 pb-6 flex">{children}</div>
    </div>
  );
}
