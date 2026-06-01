import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="glass-card p-10 rounded-2xl text-center">
        <h1 className="font-headline-lg text-headline-lg mb-4">Page Not Found</h1>
        <p className="text-on-surface-variant mb-8">The page you requested does not exist.</p>
        <Link href="/" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md font-bold">
          Return Home
        </Link>
      </div>
    </main>
  );
}

