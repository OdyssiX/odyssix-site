export default function OdyssixLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/35 bg-gradient-to-br from-white/[0.10] to-red-950/30 shadow-[0_0_36px_rgba(220,38,38,0.24)]">
        <div className="absolute inset-1 rounded-xl border border-white/10 bg-black/20" />

        <div className="relative h-8 w-8">
          <div className="absolute left-0 top-0 h-8 w-8 rounded-full border-[3px] border-white/85 border-r-transparent shadow-[0_0_18px_rgba(255,255,255,0.10)]" />

          <div className="absolute left-[17px] top-[5px] h-7 w-[4px] rotate-45 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.65)]" />
          <div className="absolute left-[17px] top-[5px] h-7 w-[4px] -rotate-45 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.65)]" />

          <div className="absolute -right-1 top-0 h-1.5 w-1.5 rounded-sm bg-red-400" />
          <div className="absolute -right-3 top-2 h-1.5 w-1.5 rounded-sm bg-white/70" />
          <div className="absolute -right-1 bottom-0 h-1.5 w-1.5 rounded-sm bg-white/60" />
          <div className="absolute -right-4 bottom-2 h-1.5 w-1.5 rounded-sm bg-red-500/80" />
        </div>

        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.95)]" />
      </div>

      <div className="leading-none">
        <div className="text-xl font-black tracking-[0.22em] text-white">
          ODYSSIX
        </div>
        <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-red-300">
          Smart Digital Systems
        </div>
      </div>
    </div>
  );
}
