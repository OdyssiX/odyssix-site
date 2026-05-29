const previewSteps = [
  "Hero παρουσίαση βίλας",
  "Direct availability request",
  "QR guest guide",
  "Local recommendations",
  "Reviews & contact",
];

export default function VillaLivePreviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Live Smart Site Preview
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Μια μικρή παρουσίαση του smart site της βίλας
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Το demo δείχνει πώς θα μπορούσε να φαίνεται μια βίλα μέσα από ένα
            ODYSSIX Smart Site: με καθαρή παρουσίαση, άμεσο αίτημα κράτησης,
            QR guest guide και χρήσιμες πληροφορίες για τον επισκέπτη.
          </p>

          <div className="mt-8 grid gap-3">
            {previewSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold text-zinc-200">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D111A] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
          <div className="absolute right-0 top-0 h-60 w-60 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/25 blur-[90px]" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>

              <div className="rounded-full border border-white/10 bg-black/30 px-4 py-1 text-[10px] font-semibold text-zinc-400">
                villa-elia.demo
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden bg-[#080A0F]">
              <div className="absolute inset-0 animate-[villaScroll_14s_ease-in-out_infinite]">
                <section className="relative h-[520px] overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-950 to-black px-6 py-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.2),transparent_25%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-black tracking-[0.3em] text-white">
                        VILLA ELIA
                      </p>
                      <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white">
                        Book direct
                      </span>
                    </div>

                    <div className="mt-28 max-w-md">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">
                        Luxury stay in Crete
                      </p>
                      <h3 className="mt-4 text-5xl font-black leading-tight text-white">
                        Private villa experience.
                      </h3>
                      <p className="mt-5 text-base leading-7 text-zinc-300">
                        A smart villa website designed for direct requests,
                        guest guidance and local recommendations.
                      </p>

                      <div className="mt-8 flex gap-3">
                        <div className="rounded-full bg-red-600 px-5 py-3 text-xs font-bold text-white">
                          Request availability
                        </div>
                        <div className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-white">
                          Guest guide
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="h-[520px] bg-[#0D111A] px-6 py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">
                    Availability request
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Direct booking request
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Ο επισκέπτης μπορεί να ζητήσει διαθεσιμότητα χωρίς να ψάχνει
                    email, τηλέφωνα ή εξωτερικές πλατφόρμες.
                  </p>

                  <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-black/25 p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-zinc-300">
                        Arrival date
                      </div>
                      <div className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-zinc-300">
                        Departure date
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-zinc-300">
                      Guests / message
                    </div>
                    <div className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">
                      Send request
                    </div>
                  </div>
                </section>

                <section className="h-[520px] bg-[#080A0F] px-6 py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">
                    QR guest guide
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Όλα όσα χρειάζεται ο επισκέπτης
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Με ένα QR μέσα στη βίλα, ο επισκέπτης ανοίγει οδηγίες,
                    Wi-Fi, house rules και τοπικές προτάσεις.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {["Check-in", "Wi-Fi", "House rules", "Emergency info"].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div className="mb-4 h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
                        <p className="font-bold text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="h-[520px] bg-[#0D111A] px-6 py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">
                    Local recommendations
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Προτάσεις γύρω από τη βίλα
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Παραλίες, εστιατόρια και εμπειρίες οργανωμένα μέσα στο
                    smart site, ώστε ο επισκέπτης να έχει καλύτερη διαμονή.
                  </p>

                  <div className="mt-8 grid gap-4">
                    {["Best beaches nearby", "Local restaurants", "Experiences & tours"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/25 p-5"
                      >
                        <p className="font-bold text-white">{item}</p>
                        <span className="rounded-full bg-red-600/20 px-3 py-1 text-xs font-bold text-red-300">
                          View
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="h-[520px] bg-[#080A0F] px-6 py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">
                    Reviews & contact
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Κλείσιμο με ξεκάθαρη ενέργεια
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Το smart site οδηγεί τον επισκέπτη σε επόμενο βήμα:
                    επικοινωνία, αίτημα, review ή άμεση κλήση.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
                      <p className="text-3xl font-black text-white">4.9</p>
                      <p className="mt-2 text-xs text-zinc-500">Reviews</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
                      <p className="text-3xl font-black text-white">24h</p>
                      <p className="mt-2 text-xs text-zinc-500">Response</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
                      <p className="text-3xl font-black text-white">QR</p>
                      <p className="mt-2 text-xs text-zinc-500">Access</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">
                    Contact owner
                  </div>
                </section>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes villaScroll {
              0%, 13% { transform: translateY(0); }
              20%, 33% { transform: translateY(-520px); }
              40%, 53% { transform: translateY(-1040px); }
              60%, 73% { transform: translateY(-1560px); }
              80%, 93% { transform: translateY(-2080px); }
              100% { transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
