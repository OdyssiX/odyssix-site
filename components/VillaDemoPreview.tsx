export default function VillaDemoPreview() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D111A] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/25 blur-[70px]" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.78))]" />

          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
            Villa Smart Site
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
              Crete Luxury Stay
            </p>

            <h3 className="mt-2 text-3xl font-black text-white">
              Villa Elia
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">
              Private villa experience with direct booking request and guest guide.
            </p>
          </div>
        </div>

        <div className="grid gap-3 p-4">
          <div className="rounded-2xl bg-red-600 px-4 py-3 text-center text-sm font-bold text-white">
            Request Availability
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                Guest Guide
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Check-in, Wi-Fi, house rules
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                QR Welcome
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Scan & open mini app
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                  Local Recommendations
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Beaches, restaurants, experiences
                </p>
              </div>

              <div className="grid grid-cols-2 gap-1">
                <span className="h-3 w-3 rounded-sm bg-red-500" />
                <span className="h-3 w-3 rounded-sm bg-white/70" />
                <span className="h-3 w-3 rounded-sm bg-white/50" />
                <span className="h-3 w-3 rounded-sm bg-red-500/70" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-3 text-center">
              <p className="text-lg font-black text-white">4.9</p>
              <p className="mt-1 text-[10px] text-zinc-500">Reviews</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-3 text-center">
              <p className="text-lg font-black text-white">24h</p>
              <p className="mt-1 text-[10px] text-zinc-500">Response</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-3 text-center">
              <p className="text-lg font-black text-white">QR</p>
              <p className="mt-1 text-[10px] text-zinc-500">Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
