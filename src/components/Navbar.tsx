
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Forside", path: "/" },
  { name: "Ydelser", path: "/services" },
  { name: "Om os", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Kontakt", path: "/contact" },
  { name: "Book et gratis møde", path: "/book-mode" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl flex items-center justify-between">
        <NavLink 
          to="/" 
          className="font-display text-2xl font-bold flex items-center"
        >
          <span className="text-primary">Engage</span>
          <span>Pro</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-foreground/80 hover:text-primary transition-all duration-300 relative py-2",
                  isActive && "text-primary font-medium",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-3 p-6">
          {NavLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "py-2 px-4 rounded-md transition-all duration-300",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-accent"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
