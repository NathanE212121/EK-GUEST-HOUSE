export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-warm opacity-30 blur-3xl animate-aurora-1" />
      <div className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-emerald-deep opacity-25 blur-3xl animate-aurora-2" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-accent opacity-20 blur-3xl animate-aurora-3" />
    </div>
  );
}
