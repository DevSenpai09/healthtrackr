import Navigation from "@/components/webapp/_shared/navigation";

export default function WebappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[280px_1fr] overflow-hidden h-screen w-full">
      <Navigation />
      {children}
    </div>
  );
}
