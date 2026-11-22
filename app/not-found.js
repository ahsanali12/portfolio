import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen pt-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="glass-card p-12 md:p-20 rounded-[2rem] text-center">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg mb-4 leading-tight">Page Not Found</h1>
        <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
          This page doesn&apos;t exist or has moved. Here are the most useful places to go next.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:scale-105">
            Go to Home
          </Link>
          <Link href="/case-studies" className="bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:bg-white/10">
            View Case Studies
          </Link>
          <Link href="/services" className="bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:bg-white/10">
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
