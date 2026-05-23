import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Shield, Smartphone, Target, Users } from "lucide-react";

export type InnovationDemo = {
  subtitle: string;
  scenario: string;
  primaryAction: string;
  stats: Array<{ label: string; value: string; tone: "cyan" | "gold" | "red" | "green" }>;
  modules: Array<{ title: string; description: string; metric: string }>;
  workflow: string[];
  insight: string;
};

export type Innovation = {
  id: number;
  slug: string;
  title: string;
  acronym?: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  demo: InnovationDemo;
};

export const innovationsData: Innovation[] = [
  {
    id: 1,
    slug: "seiag",
    title: "Sistema de Evaluación Integral para el Acceso al Gobierno",
    acronym: "SEIAG",
    icon: Shield,
    shortDesc: "Acceso al poder público basado en conocimiento, ética y compromiso social.",
    longDesc:
      "Evalúa conocimiento público, ética, criterio, entrevista pública y compromiso social. Busca que el acceso al poder dependa de capacidades reales y no solo de popularidad electoral.",
    benefits: ["Profesionalización del poder", "Menos improvisación institucional", "Mayor legitimidad democrática"],
    demo: {
      subtitle: "Centro de postulación y evaluación pública",
      scenario:
        "Un aspirante a Primer Ministro entra al sistema, presenta pruebas, publica su entrevista y queda en una lista verificable por la Asamblea y la ciudadanía.",
      primaryAction: "Iniciar evaluación",
      stats: [
        { label: "Candidatos activos", value: "128", tone: "cyan" },
        { label: "Puntaje ético promedio", value: "86%", tone: "gold" },
        { label: "Entrevistas públicas", value: "42", tone: "green" },
      ],
      modules: [
        { title: "Prueba de conocimiento público", description: "Examen sobre Constitución, administración estatal, economía pública y derechos fundamentales.", metric: "92 preguntas" },
        { title: "Dilemas éticos", description: "Casos simulados para medir criterio, transparencia y manejo de conflicto de interés.", metric: "18 escenarios" },
        { title: "Audiencia ciudadana", description: "Entrevista pública con trazabilidad, preguntas ciudadanas y calificación de la Asamblea.", metric: "Transmisión abierta" },
      ],
      workflow: ["Registro del aspirante", "Verificación documental", "Pruebas técnicas", "Entrevista pública", "Ranking de elegibilidad"],
      insight: "El sistema no reemplaza la decisión política: obliga a que la elección parta de evidencia, mérito y ética demostrable.",
    },
  },
  {
    id: 2,
    slug: "control-ciudadano",
    title: "Sistema de Control Ciudadano del Poder Público",
    icon: Users,
    shortDesc: "La ciudadanía participa como actor real de control político.",
    longDesc:
      "Permite evaluación periódica de funcionarios, seguimiento de promesas, calificación ciudadana, informes públicos y revocatoria simplificada cuando la gestión pierde legitimidad.",
    benefits: ["Evaluación constante", "Seguimiento de promesas", "Revocatoria simplificada"],
    demo: {
      subtitle: "Tablero vinculante de control de gestión",
      scenario:
        "Una ciudadana revisa el cumplimiento del alcalde, califica su gestión, compara promesas y activa alertas si los indicadores caen por debajo del mínimo institucional.",
      primaryAction: "Calificar gestión",
      stats: [
        { label: "Participación mensual", value: "63%", tone: "cyan" },
        { label: "Promesas verificadas", value: "214", tone: "gold" },
        { label: "Alertas de gestión", value: "17", tone: "red" },
      ],
      modules: [
        { title: "Calificación ciudadana", description: "Votación periódica con identidad digital, ponderación territorial y control antifraude.", metric: "5,2 / 10" },
        { title: "Promesómetro público", description: "Seguimiento de compromisos de campaña, presupuesto ejecutado y evidencia documental.", metric: "78% trazado" },
        { title: "Revocatoria simplificada", description: "Ruta guiada cuando se cumplen umbrales de baja gestión y participación mínima.", metric: "Proceso activo" },
      ],
      workflow: ["Seleccionar funcionario", "Revisar indicadores", "Emitir calificación", "Adjuntar evidencia", "Activar control vinculante"],
      insight: "La permanencia en el poder se convierte en una relación continua de resultados, no en un cheque en blanco entre elecciones.",
    },
  },
  {
    id: 3,
    slug: "vida-digital",
    title: "Sistema de Vida Digital Ciudadana",
    icon: Smartphone,
    shortDesc: "Un portal estatal que acompaña a cada persona durante su vida.",
    longDesc:
      "Registra nacimientos, activa derechos al cumplir 18 años y gestiona salud, educación, becas, empleo e impuestos. No digitaliza trámites: busca eliminarlos.",
    benefits: ["Menos trámites", "Servicios anticipados", "Historia ciudadana integral"],
    demo: {
      subtitle: "Perfil ciudadano único y servicios anticipados",
      scenario:
        "Una persona entra a su panel y el Estado ya le sugiere becas, citas médicas, actualización tributaria y activación de derechos según su etapa de vida.",
      primaryAction: "Abrir mi vida digital",
      stats: [
        { label: "Trámites evitados", value: "12", tone: "green" },
        { label: "Servicios sugeridos", value: "8", tone: "cyan" },
        { label: "Perfil completo", value: "94%", tone: "gold" },
      ],
      modules: [
        { title: "Registro automático de vida", description: "Nacimiento, salud, educación y mayoría de edad conectados sin formularios repetidos.", metric: "Activo" },
        { title: "Historia integral", description: "Línea de tiempo de derechos, beneficios, salud, educación, empleo e impuestos.", metric: "24 eventos" },
        { title: "Servicios personalizados", description: "Recomendaciones estatales según edad, territorio, formación y necesidades detectadas.", metric: "IA asistida" },
      ],
      workflow: ["Identidad verificada", "Eventos de vida detectados", "Derechos activados", "Servicios sugeridos", "Confirmación ciudadana"],
      insight: "La meta no es digitalizar filas: es que el ciudadano no tenga que perseguir al Estado para recibir lo que ya le corresponde.",
    },
  },
  {
    id: 4,
    slug: "contribucion-social",
    title: "Sistema de Contribución Social Obligatoria",
    icon: Target,
    shortDesc: "Corresponsabilidad ciudadana con opciones flexibles e incentivos.",
    longDesc:
      "Cada ciudadano cumple una cuota anual de contribución social en educación, ambiente, bienestar animal, comunidad o apoyo a adultos mayores. Incluye incentivos y sanciones proporcionales.",
    benefits: ["Participación activa", "Soluciones locales", "Incentivos por cumplimiento"],
    demo: {
      subtitle: "Gestor de horas de contribución e impacto comunitario",
      scenario:
        "Un ciudadano elige actividades disponibles cerca de su barrio, registra horas verificadas y recibe incentivos por cumplir su cuota anual.",
      primaryAction: "Iniciar contribución",
      stats: [
        { label: "Horas cumplidas", value: "45h", tone: "gold" },
        { label: "Meta anual", value: "100h", tone: "cyan" },
        { label: "Impacto local", value: "18 proyectos", tone: "green" },
      ],
      modules: [
        { title: "Banco de actividades", description: "Tutorías, reforestación, apoyo comunitario, cuidado animal y acompañamiento a adultos mayores.", metric: "312 opciones" },
        { title: "Validación institucional", description: "Las entidades receptoras confirman asistencia, resultados y horas cumplidas.", metric: "QR + firma" },
        { title: "Incentivos y sanciones", description: "Beneficios tributarios, prioridad en programas o alertas por incumplimiento.", metric: "Estado cumplidor" },
      ],
      workflow: ["Elegir causa", "Reservar cupo", "Cumplir actividad", "Validar horas", "Recibir incentivo"],
      insight: "El sistema convierte la ciudadanía en una práctica concreta: derechos activos acompañados de deberes medibles y útiles.",
    },
  },
  {
    id: 5,
    slug: "asistencia-inteligente",
    title: "Sistema de Asistencia Inteligente para la Gestión Pública",
    icon: BrainCircuit,
    shortDesc: "IA pública para respaldar decisiones estatales con evidencia.",
    longDesc:
      "Infraestructura pública de inteligencia artificial para analizar datos, proyectar escenarios y respaldar decisiones estatales. La IA no decide; exige que las decisiones humanas estén fundamentadas.",
    benefits: ["Decisiones basadas en datos", "Proyección de escenarios", "Auditoría de sesgos"],
    demo: {
      subtitle: "Sala de análisis predictivo para decisiones públicas",
      scenario:
        "Un ministerio consulta escenarios de política pública, compara riesgos, detecta sesgos y genera un informe técnico antes de tomar una decisión.",
      primaryAction: "Analizar escenario",
      stats: [
        { label: "Modelos activos", value: "36", tone: "cyan" },
        { label: "Riesgo estimado", value: "Bajo", tone: "green" },
        { label: "Sesgos detectados", value: "3", tone: "red" },
      ],
      modules: [
        { title: "Simulador de escenarios", description: "Proyecta impacto presupuestal, territorial, social y ambiental de cada alternativa.", metric: "5 años" },
        { title: "Auditoría de sesgos", description: "Revisa fuentes, población afectada, brechas de datos y riesgos de discriminación.", metric: "Obligatoria" },
        { title: "Informe para decisión humana", description: "Entrega evidencia explicable para que la autoridad decida y asuma responsabilidad.", metric: "Trazable" },
      ],
      workflow: ["Cargar problema público", "Cruzar datos oficiales", "Simular alternativas", "Auditar riesgos", "Emitir informe"],
      insight: "La inteligencia artificial no gobierna: ilumina los costos, riesgos y opciones para que la decisión humana sea responsable.",
    },
  },
];
