const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590156077853",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/odyssixdigital/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/odyssix-digital-9594a1413",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 transition hover:border-red-500/40 hover:bg-red-600 hover:text-white"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
}
