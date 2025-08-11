import Header from "@/components/webapp/_shared/header";
import Navigation from "@/components/webapp/_shared/navigation";

export default function WebappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[240px_1fr] overflow-hidden h-screen w-full">
      <Navigation />
      <div className="grid grid-rows-[auto_1fr] relative overflow-y-auto custom-scroll-bar">
        <Header />
        {children}
      </div>
    </div>
  );
}
