import { ProposalHeader } from "./ProposalHeader";
import { ModuleCard, type Module } from "./ModuleCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import samLogo from "@/assets/showautomall-logo.png";
import { Compass, Palette, Cpu, Rocket, CheckCircle2 } from "lucide-react";

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
    investment: "1+4 de BRL 28.880",
    investmentNote: "Entrada + 4 parcelas mensais",
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
    optionalAddons: [
      { name: "Smart Squad", value: "BRL 9.880 /mês" },
      { name: "Smart Pulse", value: "BRL 3.000 /mês" },
    ],
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
    investment: "1+6 de BRL 28.880",
    investmentNote: "Entrada + 6 parcelas mensais",
  },
];

const timeline = [
  {
    phase: "M1",
    label: "Smart Route — Diagnóstico",
    activities: ["Diagnóstico executivo", "Mapeamento comercial", "Análise de jornada do cliente"],
    modules: ["Smart Route"],
    color: "bg-primary",
  },
  {
    phase: "M2",
    label: "Almabrands — Branding & Território",
    activities: ["Território de marca", "Identidade visual", "Narrativa institucional"],
    modules: ["Almabrands"],
    color: "bg-primary",
  },
  {
    phase: "M3",
    label: "Smart Route + Smart Code (setup CRM)",
    activities: ["Finalização Smart Route", "Setup CRM", "Integrações iniciais"],
    modules: ["Smart Route", "Smart Code"],
    color: "bg-primary",
  },
  {
    phase: "M4",
    label: "Smart Code — Lead engine",
    activities: ["CRM proprietário live", "Automação de relacionamento", "Dashboard executivo"],
    modules: ["Smart Code"],
    color: "bg-primary",
  },
  {
    phase: "M5",
    label: "Growth Machine — Tráfego & Campanhas",
    activities: ["Campanhas de performance", "Ativação de eventos", "Funil de conversão"],
    modules: ["Growth Machine"],
    color: "bg-primary",
  },
  {
    phase: "M6+",
    label: "Growth + Smart Squad contínuos",
    activities: ["Growth contínuo", "Squad dedicado", "Evolução de dados e IA"],
    modules: ["Growth Machine", "Smart Squad"],
    color: "bg-primary/60",
    ongoing: true,
  },
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

      <div className="space-y-6">
        {modules.map((m) => <ModuleCard key={m.number} m={m} />)}
      </div>

      {/* Timeline */}
      <Card className="p-8 md:p-10 bg-card border-border overflow-hidden">
        <p className="text-xs text-primary font-mono uppercase tracking-widest mb-2">Cronograma</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-10">Jornada de execução</h3>

        {/* Horizontal — desktop */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-6 left-6 right-6 h-px bg-border" />
            <div className="grid grid-cols-6 gap-3">
              {timeline.map((t, i) => (
                <div key={t.phase} className="relative flex flex-col items-center text-center gap-4">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs text-primary-foreground shadow-gold ${t.color} ${t.ongoing ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-card" : ""}`}>
                    {t.phase}
                    {t.ongoing && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-wrap justify-center gap-1">
                      {t.modules.map(mod => (
                        <Badge key={mod} className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-1.5 py-0.5">{mod}</Badge>
                      ))}
                    </div>
                    <p className="text-xs font-semibold leading-snug">{t.label}</p>
                    <ul className="space-y-1">
                      {t.activities.map(act => (
                        <li key={act} className="text-[11px] text-muted-foreground flex items-start gap-1 text-left">
                          <CheckCircle2 className="w-3 h-3 text-primary/60 shrink-0 mt-px" />{act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical — mobile */}
        <div className="md:hidden space-y-0">
          {timeline.map((t, i) => (
            <div key={t.phase} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-primary-foreground shrink-0 shadow-gold ${t.color} ${t.ongoing ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-card" : ""}`}>
                  {t.phase}
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border my-1 min-h-[2rem]" />}
              </div>
              <div className="pb-8 pt-1.5 flex-1">
                <div className="flex flex-wrap gap-1 mb-1">
                  {t.modules.map(mod => (
                    <Badge key={mod} className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-1.5 py-0.5">{mod}</Badge>
                  ))}
                </div>
                <p className="text-sm font-semibold mb-2">{t.label}</p>
                <ul className="space-y-1">
                  {t.activities.map(act => (
                    <li key={act} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-primary/60 shrink-0 mt-px" />{act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
