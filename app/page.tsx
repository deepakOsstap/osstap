export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-brand-accent bg-blue-50 rounded-full mb-4 border border-blue-100">
        OSSTAP FOUNDATION READY
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl">
        We build technology that moves businesses forward.
      </h1>
      <p className="mt-4 max-w-xl text-brand-secondary text-lg">
        Osstap is an engineering-first technology consultancy helping businesses design, build, and scale high-performance digital products.
      </p>
    </div>
  );
}
