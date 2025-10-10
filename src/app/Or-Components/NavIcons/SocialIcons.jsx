import Image from "next/image";

export default function SocialIcons() {
  const icons = [
    { src: "/social/face.png", alt: "Facebook", link: "https://facebook.com" },
    { src: "/social/ins.png", alt: "Instagram", link: "https://instagram.com" },
    { src: "/social/you.png", alt: "YouTube", link: "https://youtube.com" },
    { src: "/social/in.png", alt: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div className="flex justify-center gap-6 mt-4">
      {icons.map((icon, i) => (
        <a
          key={i}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={35}
            height={35}
            className="object-contain"
          />
        </a>
      ))}
    </div>
  );
}
