"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Νέο αίτημα ODYSSIX από ${form.name || "ενδιαφερόμενο"}`;

    const body = `
Όνομα: ${form.name}
Επιχείρηση: ${form.business}
Τηλέφωνο: ${form.phone}
Email: ${form.email}

Τι χρειάζεται:
${form.message}
`.trim();

    const mailtoLink = `mailto:odyssixdigital@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-3xl border border-white/10 bg-black/25 p-5 text-left md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            Όνομα
          </span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
            placeholder="Το όνομά σας"
          />
        </label>

        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            Επιχείρηση
          </span>
          <input
            value={form.business}
            onChange={(event) => updateField("business", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
            placeholder="Όνομα επιχείρησης"
          />
        </label>

        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            Τηλέφωνο
          </span>
          <input
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
            placeholder="Το τηλέφωνό σας"
          />
        </label>

        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            Email
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
            placeholder="Το email σας"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
          Τι χρειάζεστε;
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/50"
          placeholder="Περιγράψτε σύντομα τι θέλετε να φτιάξουμε."
        />
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(220,38,38,0.28)] transition hover:bg-red-500"
      >
        Αποστολή αιτήματος με email
      </button>

      <p className="mt-4 text-center text-xs leading-6 text-zinc-500">
        Η φόρμα θα ανοίξει έτοιμο email προς την ODYSSIX με τα στοιχεία σας.
      </p>
    </form>
  );
}
