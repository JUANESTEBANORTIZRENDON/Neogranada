import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import InicioView from "./routes/InicioView";
import EstadoView from "./routes/EstadoView";
import InnovacionesView from "./routes/InnovacionesView";
import InnovationSystemView from "./routes/InnovationSystemView";
import ParticipacionView from "./routes/ParticipacionView";
import ConstitucionView from "./routes/ConstitucionView";
import PoderPublicoView from "./routes/PoderPublicoView";
import MonedaView from "./routes/MonedaView";
import MiCuentaView from "./routes/MiCuentaView";
import cityBackground from "../imports/image.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<InicioView />} />
          <Route path="/estado" element={<EstadoView />} />
          <Route path="/innovaciones" element={<InnovacionesView />} />
          <Route path="/innovaciones/:slug" element={<InnovationSystemView />} />
          <Route path="/participacion" element={<ParticipacionView />} />
          <Route path="/constitucion" element={<ConstitucionView />} />
          <Route path="/constitucion-base" element={<ConstitucionView />} />
          <Route path="/poder-publico" element={<PoderPublicoView />} />
          <Route path="/moneda" element={<MonedaView />} />
          <Route path="/mi-cuenta" element={<MiCuentaView />} />
          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-accent/30 selection:text-foreground">
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[-3] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cityBackground})` }}
        />
        <div aria-hidden="true" className="fixed inset-0 z-[-2] bg-background/80 backdrop-blur-[3px]" />
        <div aria-hidden="true" className="fixed inset-0 z-[-1] bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div aria-hidden="true" className="fixed inset-0 z-[-1] neo-grid-overlay" />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
