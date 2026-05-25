export default function OdyssixLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-red-500/40 bg-white/[0.04] shadow-[0_0_35px_rgba(220,38,38,0.25)]">
        <div className="absolute inset-1 rounded-xl border border-white/10" />
        <span className="relative text-lg font-black tracking-tighter text-white">
          OX
        </span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-600 shadow-[0_0_18px_rgba(220,38,38,0.9)]" />
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
