export default function OdyssixLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-500/35 bg-gradient-to-br from-white/[0.10] to-red-950/30 shadow-[0_0_36px_rgba(220,38,38,0.24)] md:h-12 md:w-12">
        <div className="absolute inset-1 rounded-xl border border-white/10 bg-black/20" />

        <div className="relative h-7 w-7 md:h-8 md:w-8">
          <div className="absolute left-0 top-0 h-7 w-7 rounded-full border-[3px] border-white/85 border-r-transparent shadow-[0_0_18px_rgba(255,255,255,0.10)] md:h-8 md:w-8" />

          <div className="absolute left-[15px] top-[4px] h-7 w-[4px] rotate-45 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.65)] md:left-[17px] md:top-[5px]" />
          <div className="absolute left-[15px] top-[4px] h-7 w-[4px] -rotate-45 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.65)] md:left-[17px] md:top-[5px]" />

          <div className="absolute -right-1 top-0 h-1.5 w-1.5 rounded-sm bg-red-400" />
          <div className="absolute -right-3 top-2 h-1.5 w-1.5 rounded-sm bg-white/70" />
          <div className="absolute -right-1 bottom-0 h-1.5 w-1.5 rounded-sm bg-white/60" />
          <div className="absolute -right-4 bottom-2 h-1.5 w-1.5 rounded-sm bg-red-500/80" />
        </div>

        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.95)]" />
      </div>

      <div className="min-w-0 leading-none">
        <div className="text-base font-black tracking-[0.18em] text-white md:text-xl md:tracking-[0.22em]">
          ODYSSIX
        </div>
        <div className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.24em] text-red-300 sm:block">
          Smart Digital Systems
        </div>
      </div>
    </div>
  );
}
