"use client";
import { ChefHat } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const navlinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/dishes", label: "Signature Dishes" },
    { path: "/reservations", label: "Reservations" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="bg-gradient-br from-bg-dark-bg to-bg-transparent border-b border-border-dark h-20 flex items-center px-6">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center transform transition duration-300 ease-in-out hover:scale-108">
            <ChefHat className="w-6 h-6 text-dark-bg" />
          </div>
          <div>
            <div className="text-xl text-text-primary font-serif">Maison Étoile</div>
            <div className="text-xs text-gold tracking-widest">FINE DINING</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {navlinks.map((navlink) => {
            const isActive = pathname === navlink.path;
            return (
              <Link
                key={navlink.path}
                href={navlink.path}
                className={`relative pb-2 inline-block transition-colors ${isActive
                    ? "text-gold"
                    : "text-text-secondary hover:text-text-primary"
                  } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:transition-transform after:duration-300 ${isActive
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
              >
                {navlink.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;