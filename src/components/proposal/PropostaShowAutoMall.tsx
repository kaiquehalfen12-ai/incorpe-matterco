import { ProposalHeader } from "./ProposalHeader";
import { ModuleCard, type Module } from "./ModuleCard";
import { Card } from "@/components/ui/card";
import samLogo from "@/assets/showautomall-logo.png";
import { Compass, Palette, Cpu, Rocket } from "lucide-react";

const modules: Module[] = [
  {
    number: "01",
    name: "Smart Route",
    subtitle: "Plano Estratégico do Shopping",
    icon: Compass,
    description: "Planejamento estratégico e inteligência comercial potencializada por IA para acelerar vendas e conquistar novos mercados.",
    objective: "Reposicionamento estratégico do Shopping Auto Mall.",
    deliverables: [
      "Diagnóstico",
      "Mapeamento comercial",
      "Análise de jornada",
      "Benchmark",
      "Estratégia de posicionamento",
      "Estratégia de tráfego",
      "Estratégia de dominância regional",
      "Modelo de aquisição",
      "Modelo de relacionamento",
      "Plano de crescimento",
      "Governança comercial",
      "Modelo de ativação e eventos",
    ],
    duration: "4 meses",
    investment: "BRL 28.880",
    investmentNote: "Modelo 1+4 (entrada + 4 parcelas)",
    badge: "Fundação",
    highlight: true,
  },
  {
    number: "02",
    name: "Almabrands",
    subtitle: "Branding e Posicionamento",
    icon: Palette,
    description: "Reposicionamento de marca para transformar o Shopping Auto Mall no principal polo automotivo da região.",
    objective: "Transformar o Shopping Auto Mall no principal polo automotivo da região.",
    deliverables: [
      "Reposicionamento",
      "Branding",
      "Território de marca",
      "Comunicação",
      "Campanhas",
      "Sinalização",
      "Fachada",
      "Experiência física",
      "Narrativa",
      "Campanhas institucionais",
      "Arquitetura de comunicação",
    ],
    duration: "2 meses",
    investment: "BRL 40.000",
  },
  {
    number: "03",
    name: "Smart Code",
    subtitle: "CRM e Inteligência Comercial",
    icon: Cpu,
    description: "Construção de um CRM próprio para o shopping — transformar estratégia em produto digital proprietário, do diagnóstico ao MVP em produção.",
    objective: "Construção de um CRM próprio para o shopping.",
    deliverables: [
      "Gestão centralizada de leads",
      "Tracking completo",
      "Automação de relacionamento",
      "Integração WhatsApp",
      "Distribuição inteligente",
      "Ranking de lojistas",
      "Indicadores e funil",
      "NPS",
      "CRM proprietário",
      "Dashboard executivo",
      "Campanhas automáticas",
      "Motor de relacionamento",
      "Base de clientes do shopping",
      "Remarketing",
      "Dados comportamentais",
    ],
    duration: "4 meses",
    investment: "BRL 30.000",
    investmentNote: "Smart Squad BRL 9.880/mês + Smart Pulse BRL 3.000/mês (opcionais)",
  },
  {
    number: "04",
    name: "Growth Machine",
    subtitle: "Operação de Crescimento e Performance",
    icon: Rocket,
    description: "Operação completa de growth — tráfego, conversão, campanhas, eventos, parcerias, mídia, ativação, dados e acompanhamento comercial.",
    objective: [
      "Gerar tráfego",
      "Melhorar conversão",
      "Estruturar campanhas e eventos",
      "Parcerias e mídia",
      "Ativação e dados",
      "Acompanhamento comercial",
    ],
    deliverables: [
      "App de acompanhamento de métricas em tempo real",
      "Jornada do cliente desenhada por tipo",
      "Dashboard de performance comercial com metas",
      "Playbook de vendas em formato de sistema",
    ],
    duration: "6 meses",
    investment: "BRL 28.880",
    investmentNote: "Modelo 1+6 (entrada + 6 parcelas)",
  },
];

const timeline = [
  { phase: "M1", label: "Smart Route — Diagnóstico" },
  { phase: "M2", label: "Almabrands — Branding & Território" },
  { phase: "M3", label: "Smart Route + Smart Code (setup CRM)" },
  { phase: "M4", label: "Smart Code — Lead engine" },
  { phase: "M5", label: "Growth Machine — Tráfego & Campanhas" },
  { phase: "M6+", label: "Growth + Smart Squad contínuos" },
];

export function PropostaShowAutoMall() {
  return (
    <div className="space-y-12">
      <ProposalHeader
        eyebrow="Proposta Show Auto Mall"
        title="Show Auto Mall BH"
        subtitle="Branding, growth, CRM e inteligência comercial — para consolidar o principal polo automotivo da região."
        logo={samLogo}
        accent="danger"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { v: "4", l: "Módulos estratégicos" },
          { v: "+35", l: "Anos de tradição da marca" },
          { v: "12+", l: "Meses de transformação" },
          { v: "BRL 28.880", l: "Investimento de entrada" },
        ].map((k) => (
          <Card key={k.l} className="p-6 bg-card border-border">
            <p className="text-3xl font-bold text-gradient-gold">{k.v}</p>
            <p className="text-sm text-muted-foreground mt-1">{k.l}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        {modules.map((m) => <ModuleCard key={m.number} m={m} />)}
      </div>

      <Card className="p-8 md:p-10 bg-card border-border">
        <p className="text-xs text-primary font-mono uppercase tracking-widest mb-2">Cronograma</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-8">Jornada de execução</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {timeline.map((t, i) => (
            <div key={t.phase} className="relative">
              <div className="p-5 rounded-2xl border border-border bg-background/50 hover:border-primary/50 transition-colors h-full">
                <div className="text-2xl font-bold text-gradient-gold mb-2">{t.phase}</div>
                <p className="text-xs text-muted-foreground leading-snug">{t.label}</p>
              </div>
              {i < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-primary/40" />
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
