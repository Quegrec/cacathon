'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", href: "/accueil" },
  { label: "Tutos", href: "/tutos" },
  { label: "Partage", href: "/partage" },
  { label: "Profil", href: "/profil" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around p-2">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span
            className={`text-sm ${
              pathname === item.href ? "font-bold text-blue-600" : "text-gray-500"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
