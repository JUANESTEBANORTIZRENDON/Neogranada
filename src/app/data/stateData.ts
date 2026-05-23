import type { LucideIcon } from "lucide-react";
import { Building, Flag, Globe2, Landmark, Map, Scale, ShieldCheck, Users } from "lucide-react";

export type StateMetric = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

export const stateSummary =
  "La República de Neogranada surge como una reinterpretación moderna de los proyectos estatales latinoamericanos. Integra justicia social, participación democrática, identidad cultural y herramientas tecnológicas avanzadas para construir una organización política legítima y adaptada al siglo XXI.";

export const stateMetrics: StateMetric[] = [
  { label: "Territorio", value: "200.000 km²", detail: "Extensión territorial continental", icon: Map },
  { label: "Población", value: "10,2 millones", detail: "Población estimada", icon: Users },
  { label: "Capital", value: "Nueva Aurora", detail: "Centro administrativo nacional", icon: Building },
  { label: "Gobierno", value: "Tecnocrático de Asamblea", detail: "Ejecutivo dual con control legislativo", icon: Flag },
];

export const stateDetails = [
  { label: "Naturaleza", value: "Estado social, democrático y tecnológico de derecho", icon: ShieldCheck },
  { label: "Principios", value: "Justicia, libertad, innovación, participación y sostenibilidad", icon: Scale },
  { label: "Soberanía", value: "Interna, externa y digital", icon: Landmark },
  { label: "Idioma oficial", value: "Español", icon: Globe2 },
];

export const territorialData = [
  "Mar territorial: 12 millas náuticas",
  "Zona económica exclusiva: 200 millas náuticas",
  "Forma de gobierno: tecnocrático de Asamblea con ejecutivo dual",
];

export const constitutionHighlights = [
  "Constitución base orientada al Estado social, democrático y tecnológico de derecho.",
  "Preámbulo centrado en dignidad, justicia, libertad, sostenibilidad e innovación pública.",
  "Ejecutivo dual con Presidente y Primer Ministro para separar representación y gestión.",
  "Asamblea Nacional con capacidad de control, moción de eficiencia y seguimiento programático.",
  "Rama Judicial independiente con soporte tecnológico y garantías de debido proceso.",
];
