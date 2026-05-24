import { Navigate, useParams } from "react-router";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  Fingerprint,
  HeartPulse,
  ListChecks,
  MapPin,
  MessageSquare,
  Radar,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import SubmoduleBackButton from "../components/layout/SubmoduleBackButton";
import { type Innovation, innovationsData } from "../data/innovationsData";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

const toneClasses = {
  cyan: "border-cyan-neon/35 bg-cyan-neon/10 text-cyan-neon",
  gold: "border-accent/35 bg-accent/10 text-accent",
  red: "border-secondary/35 bg-secondary/10 text-secondary",
  green: "border-green-400/35 bg-green-400/10 text-green-400",
};

function HeroPanel({ innovation, label }: { innovation: Innovation; label: string }) {
  const Icon = innovation.icon;

  return (
    <GlassCard className="p-6 sm:p-8 overflow-hidden relative">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-neon/10 blur-3xl" />
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-background/55 border border-cyan-neon/35 flex items-center justify-center text-accent shadow-[0_0_24px_rgba(34,211,238,0.16)] mb-6">
          <Icon className="w-8 h-8" aria-hidden="true" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-neon mb-3">{label}</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-wide text-foreground leading-tight">{innovation.title}</h1>
        {innovation.acronym && <span className="mt-4 inline-flex rounded bg-secondary/25 px-3 py-1 text-xs font-bold text-secondary-foreground">{innovation.acronym}</span>}
        <p className="mt-6 text-foreground/78 leading-relaxed">{innovation.longDesc}</p>
      </div>
    </GlassCard>
  );
}

function StatGrid({ innovation }: { innovation: Innovation }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {innovation.demo.stats.map((stat) => (
        <div key={stat.label} className={`rounded-2xl border p-4 ${toneClasses[stat.tone]}`}>
          <p className="text-2xl font-heading font-bold">{stat.value}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-foreground/65">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function ProgressLine({ label, value, tone = "cyan" }: { label: string; value: number; tone?: "cyan" | "gold" | "red" | "green" }) {
  const color = tone === "gold" ? "bg-accent" : tone === "red" ? "bg-secondary" : tone === "green" ? "bg-green-400" : "bg-cyan-neon";

  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-background/55 border border-glass-border overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function BenefitsPanel({ innovation }: { innovation: Innovation }) {
  return (
    <GlassCard className="p-6 sm:p-8 bg-glass-red border-glass-red-border">
      <div className="flex items-center gap-3 mb-5">
        <ShieldCheck className="h-6 w-6 text-accent" aria-hidden="true" />
        <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Criterio institucional</h2>
      </div>
      <p className="text-sm md:text-base leading-relaxed text-foreground/82">{innovation.demo.insight}</p>
      <div className="mt-6 rounded-xl border border-glass-border bg-background/35 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-3">Beneficios esperados</p>
        <ul className="space-y-3">
          {innovation.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/85">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-neon" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}

function SeiagSystem({ innovation }: { innovation: Innovation }) {
  const evaluation = [
    ["Conocimiento público", 91, "cyan"],
    ["Ética aplicada", 86, "gold"],
    ["Criterio administrativo", 78, "green"],
    ["Entrevista pública", 82, "cyan"],
  ] as const;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mb-6">
        <HeroPanel innovation={innovation} label="Centro de evaluación de aspirantes" />
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Expediente público</p>
              <h2 className="text-2xl font-heading font-bold text-foreground">Candidato a Primer Ministro</h2>
            </div>
            <UserCheck className="h-8 w-8 text-cyan-neon" aria-hidden="true" />
          </div>
          <StatGrid innovation={innovation} />
          <div className="mt-6 space-y-4">
            {evaluation.map(([label, value, tone]) => (
              <ProgressLine key={label} label={label} value={value} tone={tone} />
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="h-6 w-6 text-cyan-neon" aria-hidden="true" />
            <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Ruta de elegibilidad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {innovation.demo.workflow.map((step, index) => (
              <div key={step} className="rounded-xl border border-glass-border bg-primary/35 p-4">
                <span className="text-3xl font-heading font-bold text-cyan-neon/35">0{index + 1}</span>
                <p className="mt-3 text-sm font-bold text-foreground">{step}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-cyan-neon/40 bg-cyan-neon/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-cyan-neon/20">
            {innovation.demo.primaryAction}
            <ArrowRight className="h-4 w-4 text-cyan-neon" aria-hidden="true" />
          </button>
        </GlassCard>
        <BenefitsPanel innovation={innovation} />
      </div>
    </>
  );
}

function CitizenControlSystem({ innovation }: { innovation: Innovation }) {
  const promises = [
    ["Hospital regional", "En ejecución", 72],
    ["Transporte eléctrico", "Retrasado", 41],
    ["Escuelas digitales", "Cumplido", 96],
  ] as const;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 mb-6">
        <HeroPanel innovation={innovation} label="Dashboard ciudadano vinculante" />
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Funcionario evaluado</p>
              <h2 className="text-2xl font-heading font-bold text-foreground">Alcaldía de Nueva Aurora</h2>
            </div>
            <Users className="h-8 w-8 text-cyan-neon" aria-hidden="true" />
          </div>
          <StatGrid innovation={innovation} />
          <div className="mt-6 rounded-2xl border border-cyan-neon/25 bg-primary/35 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-neon mb-3">Calificación ciudadana</p>
            <div className="flex items-end gap-3">
              <span className="text-6xl font-heading font-bold text-foreground">5.2</span>
              <span className="pb-2 text-foreground/55 font-bold">/ 10</span>
            </div>
            <ProgressLine label="Legitimidad de gestión" value={52} tone="red" />
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <ListChecks className="h-6 w-6 text-cyan-neon" aria-hidden="true" />
            <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Promesómetro público</h2>
          </div>
          <div className="space-y-4">
            {promises.map(([name, status, progress]) => (
              <div key={name} className="rounded-xl border border-glass-border bg-primary/35 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-heading text-lg font-bold uppercase text-foreground">{name}</h3>
                  <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{status}</span>
                </div>
                <ProgressLine label="Avance verificado" value={progress} tone={progress < 55 ? "red" : progress > 90 ? "green" : "cyan"} />
              </div>
            ))}
          </div>
        </GlassCard>
        <BenefitsPanel innovation={innovation} />
      </div>
    </>
  );
}

function DigitalLifeSystem({ innovation }: { innovation: Innovation }) {
  const timeline = ["Nacimiento registrado", "Educación vinculada", "Salud activa", "Mayoría de edad", "Perfil tributario"];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 mb-6">
        <HeroPanel innovation={innovation} label="Perfil ciudadano único" />
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Identidad verificada</p>
              <h2 className="text-2xl font-heading font-bold text-foreground">Historia integral ciudadana</h2>
            </div>
            <Fingerprint className="h-8 w-8 text-cyan-neon" aria-hidden="true" />
          </div>
          <StatGrid innovation={innovation} />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {innovation.demo.modules.map((module, index) => {
              const icons = [Database, HeartPulse, CalendarCheck];
              const Icon = icons[index] ?? Database;
              return (
                <div key={module.title} className="rounded-xl border border-cyan-neon/20 bg-primary/35 p-4">
                  <Icon className="h-6 w-6 text-cyan-neon mb-4" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-bold uppercase text-foreground">{module.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/68">{module.description}</p>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="h-6 w-6 text-cyan-neon" aria-hidden="true" />
            <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Línea de vida digital</h2>
          </div>
          <div className="space-y-3">
            {timeline.map((event, index) => (
              <div key={event} className="flex items-center gap-4 rounded-xl border border-glass-border bg-primary/35 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-neon/30 bg-cyan-neon/10 text-sm font-bold text-cyan-neon">{index + 1}</span>
                <span className="text-sm font-bold text-foreground">{event}</span>
              </div>
            ))}
          </div>
        </GlassCard>
        <BenefitsPanel innovation={innovation} />
      </div>
    </>
  );
}

function SocialContributionSystem({ innovation }: { innovation: Innovation }) {
  const activities = [
    ["Tutorías públicas", "Educación", "12 cupos"],
    ["Reforestación urbana", "Ambiente", "35 cupos"],
    ["Acompañamiento mayor", "Comunidad", "8 cupos"],
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 mb-6">
        <HeroPanel innovation={innovation} label="Gestor de contribución ciudadana" />
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Cuota anual</p>
              <h2 className="text-2xl font-heading font-bold text-foreground">45 de 100 horas cumplidas</h2>
            </div>
            <Wallet className="h-8 w-8 text-cyan-neon" aria-hidden="true" />
          </div>
          <ProgressLine label="Avance anual" value={45} tone="gold" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {innovation.demo.stats.map((stat) => (
              <div key={stat.label} className={`rounded-2xl border p-4 ${toneClasses[stat.tone]}`}>
                <p className="text-2xl font-heading font-bold">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-foreground/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-cyan-neon" aria-hidden="true" />
            <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Banco de actividades cercanas</h2>
          </div>
          <div className="space-y-4">
            {activities.map(([name, area, slots]) => (
              <div key={name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-glass-border bg-primary/35 p-4">
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-foreground">{name}</h3>
                  <p className="text-sm text-foreground/60">{area}</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">{slots}</button>
              </div>
            ))}
          </div>
        </GlassCard>
        <BenefitsPanel innovation={innovation} />
      </div>
    </>
  );
}

function IntelligentAssistanceSystem({ innovation }: { innovation: Innovation }) {
  const risks = [
    ["Impacto social", 82, "green"],
    ["Costo fiscal", 64, "gold"],
    ["Riesgo de sesgo", 28, "red"],
    ["Sostenibilidad", 76, "cyan"],
  ] as const;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mb-6">
        <HeroPanel innovation={innovation} label="Sala de análisis con IA pública" />
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Escenario de política pública</p>
              <h2 className="text-2xl font-heading font-bold text-foreground">Plan de movilidad regional</h2>
            </div>
            <BrainCircuit className="h-8 w-8 text-cyan-neon" aria-hidden="true" />
          </div>
          <StatGrid innovation={innovation} />
          <div className="mt-6 space-y-4">
            {risks.map(([label, value, tone]) => (
              <ProgressLine key={label} label={label} value={value} tone={tone} />
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Radar className="h-6 w-6 text-cyan-neon" aria-hidden="true" />
            <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Matriz de decisión responsable</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {innovation.demo.modules.map((module, index) => {
              const icons = [BarChart3, AlertTriangle, FileCheck2];
              const Icon = icons[index] ?? Scale;
              return (
                <div key={module.title} className="rounded-xl border border-cyan-neon/20 bg-primary/35 p-4">
                  <Icon className="h-6 w-6 text-cyan-neon mb-4" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-bold uppercase text-foreground">{module.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/68">{module.description}</p>
                  <span className="mt-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{module.metric}</span>
                </div>
              );
            })}
          </div>
        </GlassCard>
        <BenefitsPanel innovation={innovation} />
      </div>
    </>
  );
}

function RenderInnovationSystem({ innovation }: { innovation: Innovation }) {
  if (innovation.slug === "seiag") return <SeiagSystem innovation={innovation} />;
  if (innovation.slug === "control-ciudadano") return <CitizenControlSystem innovation={innovation} />;
  if (innovation.slug === "vida-digital") return <DigitalLifeSystem innovation={innovation} />;
  if (innovation.slug === "contribucion-social") return <SocialContributionSystem innovation={innovation} />;
  return <IntelligentAssistanceSystem innovation={innovation} />;
}

export default function InnovationSystemView() {
  const { slug } = useParams();
  const viewRef = useAnimeOnView<HTMLElement>();
  const innovation = innovationsData.find((item) => item.slug === slug);

  if (!innovation) return <Navigate to="/innovaciones" replace />;

  return (
    <section ref={viewRef} className="relative min-h-screen pt-28 pb-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.1),transparent_34%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SubmoduleBackButton to="/innovaciones" label="Volver a Innovaciones" context="Sistema simulado" />
        <RenderInnovationSystem innovation={innovation} />
      </div>
    </section>
  );
}
