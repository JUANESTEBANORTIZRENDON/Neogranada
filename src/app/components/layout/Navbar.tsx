import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Search, Sun, User, X } from "lucide-react";
import escudoNeogranada from "../../../imports/optimized/nav-shield-180.png";

const navItems = [
  { label: "Inicio", to: "/inicio" },
  { label: "El Estado", to: "/estado" },
  { label: "Innovaciones", to: "/innovaciones" },
  { label: "Participación", to: "/participacion" },
  { label: "Mi cuenta", to: "/mi-cuenta" },
];

type ThemeMode = "dark" | "light";

const getStoredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem("neogranada-theme");
  if (storedTheme === "dark" || storedTheme === "light") return storedTheme;

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70 ${
    isActive ? "bg-accent/15 text-accent" : "text-foreground/75 hover:text-foreground hover:bg-foreground/5"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getStoredTheme);
  const isLight = theme === "light";
  const ThemeIcon = isLight ? Moon : Sun;
  const themeLabel = isLight ? "Modo oscuro" : "Modo claro";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("neogranada-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/82 backdrop-blur-md border-b border-cyan-neon/35 shadow-[0_0_26px_rgba(34,211,238,0.11)] min-h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-4">
        <Link to="/inicio" className="flex items-center gap-3 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70 rounded-full">
          <img
            src={escudoNeogranada}
            alt="Escudo de Neogranada"
            className="h-24 w-24 shrink-0 object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.48)]"
            decoding="async"
          />
          <span className="font-heading font-bold text-sm sm:text-lg xl:text-xl tracking-wider uppercase whitespace-nowrap">Neogranada</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <label className="relative block">
            <span className="sr-only">Buscar trámites</span>
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-neon/80" aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar trámites..."
              className="bg-primary/50 border border-cyan-neon/35 rounded-full pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-cyan-neon/70 w-48 text-foreground placeholder:text-foreground/40 transition-colors shadow-[0_0_16px_rgba(34,211,238,0.08)]"
            />
          </label>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm font-bold text-foreground/80 border-l border-glass-border pl-4 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70 rounded"
            aria-label={`Cambiar a ${themeLabel}`}
          >
            <ThemeIcon className="w-4 h-4 text-cyan-neon" aria-hidden="true" />
            <span>{themeLabel}</span>
          </button>
          <Link
            to="/mi-cuenta"
            className="flex items-center gap-2 border border-cyan-neon/30 px-3 py-1.5 rounded-full bg-primary/30 hover:bg-primary/60 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
          >
            <User className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium hidden xl:block">Bienvenido, Ciudadano</span>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-foreground/80 hover:text-foreground p-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-24 left-0 right-0 bg-background/96 backdrop-blur-xl border-b border-cyan-neon/35 overflow-hidden shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-foreground/90 font-medium py-3 px-4 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70 ${
                      isActive ? "bg-accent/15 text-accent" : "hover:bg-foreground/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-4 pt-4 border-t border-glass-border/50 flex flex-col gap-4">
                <label className="relative block">
                  <span className="sr-only">Buscar trámites</span>
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-neon/80" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Buscar trámites..."
                    className="w-full bg-primary/50 border border-cyan-neon/35 rounded-lg pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-neon/70"
                  />
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-sm text-foreground/80 font-bold"
                    aria-label={`Cambiar a ${themeLabel}`}
                  >
                    <ThemeIcon className="w-4 h-4 text-cyan-neon" aria-hidden="true" />
                    <span>{themeLabel}</span>
                  </button>
                  <Link to="/mi-cuenta" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-accent text-sm font-medium">
                    <User className="w-4 h-4" aria-hidden="true" />
                    <span>Bienvenido, Ciudadano</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
