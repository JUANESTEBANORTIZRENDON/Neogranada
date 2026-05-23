import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Shield, Smartphone, Target, Users } from "lucide-react";

export type Innovation = {
  id: number;
  title: string;
  acronym?: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
};

export const innovationsData: Innovation[] = [
  {
    id: 1,
    title: "Sistema de Evaluación Integral para el Acceso al Gobierno",
    acronym: "SEIAG",
    icon: Shield,
    shortDesc: "Acceso al poder público basado en conocimiento, ética y compromiso social.",
    longDesc:
      "Evalúa conocimiento público, ética, criterio, entrevista pública y compromiso social. Busca que el acceso al poder dependa de capacidades reales y no solo de popularidad electoral.",
    benefits: ["Profesionalización del poder", "Menos improvisación institucional", "Mayor legitimidad democrática"],
  },
  {
    id: 2,
    title: "Sistema de Control Ciudadano del Poder Público",
    icon: Users,
    shortDesc: "La ciudadanía participa como actor real de control político.",
    longDesc:
      "Permite evaluación periódica de funcionarios, seguimiento de promesas, calificación ciudadana, informes públicos y revocatoria simplificada cuando la gestión pierde legitimidad.",
    benefits: ["Evaluación constante", "Seguimiento de promesas", "Revocatoria simplificada"],
  },
  {
    id: 3,
    title: "Sistema de Vida Digital Ciudadana",
    icon: Smartphone,
    shortDesc: "Un portal estatal que acompaña a cada persona durante su vida.",
    longDesc:
      "Registra nacimientos, activa derechos al cumplir 18 años y gestiona salud, educación, becas, empleo e impuestos. No digitaliza trámites: busca eliminarlos.",
    benefits: ["Menos trámites", "Servicios anticipados", "Historia ciudadana integral"],
  },
  {
    id: 4,
    title: "Sistema de Contribución Social Obligatoria",
    icon: Target,
    shortDesc: "Corresponsabilidad ciudadana con opciones flexibles e incentivos.",
    longDesc:
      "Cada ciudadano cumple una cuota anual de contribución social en educación, ambiente, bienestar animal, comunidad o apoyo a adultos mayores. Incluye incentivos y sanciones proporcionales.",
    benefits: ["Participación activa", "Soluciones locales", "Incentivos por cumplimiento"],
  },
  {
    id: 5,
    title: "Sistema de Asistencia Inteligente para la Gestión Pública",
    icon: BrainCircuit,
    shortDesc: "IA pública para respaldar decisiones estatales con evidencia.",
    longDesc:
      "Infraestructura pública de inteligencia artificial para analizar datos, proyectar escenarios y respaldar decisiones estatales. La IA no decide; exige que las decisiones humanas estén fundamentadas.",
    benefits: ["Decisiones basadas en datos", "Proyección de escenarios", "Auditoría de sesgos"],
  },
];
