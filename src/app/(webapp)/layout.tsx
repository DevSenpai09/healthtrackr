import Logo from "@/components/ui/logo";
import Header from "@/components/webapp/_shared/header";
import Navigation from "@/components/webapp/_shared/navigation";

export default function WebappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid place-content-center gap-5 h-screen p-5 md:hidden">
        <span className="mx-auto">
          <Logo size={200} variant="logo-3" />
        </span>
        <p className="text-center text-[#797979]">
          This feature is best experienced on a larger screen. Please switch to
          desktop view — it&apos;s not available on devices smaller than 768px.
        </p>
      </div>

      <div className="hidden md:grid grid-cols-[240px_1fr] overflow-hidden h-screen w-full">
        <Navigation />
        <div className="grid grid-rows-[auto_1fr] relative overflow-y-auto custom-scroll-bar">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
