import { Link } from "react-router";
import escudoNeogranada from "../../../imports/optimized/nav-shield-180.png";

export default function Footer() {
  return (
    <footer className="bg-background/95 border-t border-glass-border py-10 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img src={escudoNeogranada} alt="Escudo de Neogranada" className="h-11 w-11 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.28)]" loading="lazy" decoding="async" />
            <div>
              <span className="block text-sm font-bold text-foreground uppercase tracking-wider">Neogranada</span>
              <span className="block text-xs text-foreground/50">República de Neogranada</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground/70">
            <Link to="/constitucion-base" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded">
              Constitución
            </Link>
            <Link to="/participacion" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded">
              Comunidad
            </Link>
            <Link to="/estado" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded">
              Transparencia
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-foreground/50 text-center md:text-right">
            <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
            <div className="flex items-center gap-2 bg-primary/30 px-3 py-1.5 rounded-full border border-glass-border">
              <span>Alojado en</span>
              <span className="text-foreground font-medium tracking-wide">RENDER</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
