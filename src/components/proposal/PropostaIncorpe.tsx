import { ProposalHeader } from "./ProposalHeader";
import { ModuleCard, type Module } from "./ModuleCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import incorpeLogo from "@/assets/incorpe-logo.png";
import { Compass, Cpu, Users, GraduationCap, Calendar, Gift, Zap, Crown, BookOpen, CheckCircle2 } from "lucide-react";

const modules: Module[] = [
  {
    number: "01",
    name: "Smart Route",
    subtitle: "Plano Estratégico de Escala e Eficiência",
    icon: Compass,
    description: "Planejamento estratégico e inteligência comercial potencializada por IA para acelerar vendas e conquistar novos mercados.",
    objective: [
      "Organizar o próximo ciclo de crescimento",
      "Estruturar a arquitetura de gestão",
      "Mapear gargalos operacionais",
      "Desenhar a nova camada tecnológica",
      "Estruturar indicadores",
      "Construir a lógica de eficiência operacional do grupo",
    ],
    deliverables: [
      "Diagnóstico executivo",
      "Imersão operacional",
      "Mapeamento da cadeia de valor",
      "Mapeamento de processos",
      "Mapeamento de sistemas",
      "Análise da estrutura organizacional",
      "Análise de KPIs",
      "Análise financeira-operacional",
      "Roadmap tecnológico",
      "Roadmap de IA e automação",
      "Governança",
      "Priorização executiva",
      "Modelo de acompanhamento",
    ],
    duration: "4 meses",
    investment: "1+4 de BRL 28.880",
    investmentNote: "Entrada + 4 parcelas mensais",
    badge: "Fundação",
    highlight: true,
  },
  {
    number: "02",
    name: "Smart Code",
    subtitle: "Núcleo de Tecnologia, IA e Automação",
    icon: Cpu,
    description: "Transformar estratégia em produto digital proprietário — do diagnóstico ao MVP em produção.",
    objective: "Transformar a operação em uma operação orientada por inteligência.",
    deliverables: [
      "Integração ERP + BI",
      "Integração WhatsApp + CRM + cobrança",
      "RPA",
      "Automação financeira",
      "Automação de cobrança",
      "Painéis executivos",
      "Monitoramento operacional",
      "Gestão de distratos",
      "Gestão de inadimplência",
      "Gestão da esteira de aprovação",
      "Painéis de engenharia",
      "Painéis de vendas",
      "Painéis de lote",
      "Monitoramento de produtividade",
      "IA para leitura operacional",
      "IA para gestão executiva",
      "Central de indicadores",
      "Motor de alertas operacionais",
    ],
    duration: "4 meses",
    investment: "BRL 30.000",
  },
  {
    number: "03",
    name: "Smart Squad",
    subtitle: "Evolução contínua e Operação de Inteligência",
    icon: Users,
    description: "Depois da implantação do Smart Route e Smart Code, é preciso uma evolução contínua. É aqui que entra o Squad mensal — um time dedicado de IA aplicada operando junto à Incorpe.",
    objective: [
      "Evoluir sistemas",
      "Desenvolver melhorias",
      "Criar automações",
      "Implementar IA",
      "Acompanhar indicadores",
      "Melhorar eficiência",
      "Manter o roadmap tecnológico vivo",
    ],
    deliverables: [
      "Squad contínuo — Time dedicado de IA aplicada",
      "Sustentação tecnológica — Evolução do Smart Code",
      "Novos casos de uso de IA",
      "Consultoria estratégica recorrente ao CTO e liderança",
      "Aceleração de IA — Replicação por novas áreas",
      "Pilotos de inovação contínuos",
    ],
    duration: "A medida que o Smart Code for entregue",
    investment: "BRL 9.880 /mês",
    optionalAddons: [
      { name: "Smart Pulse", value: "BRL 3.000 /mês" },
    ],
  },
];

const academy = [
  {
    name: "AI Scan",
    sub: "Diagnóstico",
    icon: Gift,
    time: "2 semanas",
    price: "Gratuito",
    desc: "Diagnostica a maturidade em IA da organização, mapeia a fluência dos colaboradores e gera clareza sobre onde começar.",
    items: ["Diagnóstico organizacional", "Assessment individual de fluência", "Mapa de literacia por perfis", "Leitura de gaps e oportunidades", "Insumos para desenho de proposta", "Relatório de maturidade"],
  },
  {
    name: "AI Shift",
    sub: "Imersão Executiva",
    icon: Zap,
    time: "2 dias de imersão",
    price: "BRL 980 /pessoa",
    priceNote: "20 colaboradores · Total BRL 19.600 (de BRL 1.500)",
    desc: "Programa de formação acessível em IA aplicada ao trabalho e negócios, para profissionais e empresas em transição digital.",
    items: ["Imersão para mínimo 20 participantes", "Estratégia de transformação digital", "Framework de aplicações contextualizado", "Plano de aplicação da IA na organização"],
  },
  {
    name: "AI Next",
    sub: "Formação Contínua",
    icon: BookOpen,
    time: "12 meses · 3 meses por faixa",
    price: "BRL 250 /pessoa/mês",
    priceNote: "20 colaboradores · BRL 5.000 /mês",
    desc: "Jornada Faixa Branca → Verde → Marrom → Preta. Metodologia TD Matter para construção de cultura de IA.",
    items: ["Jornada por faixas (Branca → Preta)", "Treinamento contínuo (Metodologia TD Matter)", "Construção de cultura IA", "Formação prática em ferramentas de IA", "Certificação Matter Academy"],
  },
  {
    name: "AI Next Prime",
    sub: "Liderança",
    icon: Crown,
    time: "12 meses",
    price: "BRL 500 /pessoa/mês",
    priceNote: "Mínimo 4 líderes · BRL 2.000 /mês",
    desc: "Para quem quer aprender IA com profundidade em grupo reduzido — sem o custo de uma mentoria individual.",
    items: ["Grupo mínimo de 4 pessoas", "Formação prática em ferramentas de IA", "Aplicações no dia a dia profissional", "Desenvolvimento de novas competências digitais", "Certificação Matter Academy"],
  },
];

const timeline = [
  {
    phase: "M1",
    label: "Smart Route — Diagnóstico & Mapeamento",
    activities: ["Diagnóstico executivo", "Imersão operacional", "Mapeamento inicial"],
    modules: ["Smart Route"],
    color: "bg-primary",
  },
  {
    phase: "M2",
    label: "Smart Route + Smart Code (Setup)",
    activities: ["Finalização do Smart Route", "Setup do Smart Code", "Primeiras integrações"],
    modules: ["Smart Route", "Smart Code"],
    color: "bg-primary",
  },
  {
    phase: "M3",
    label: "Smart Code — Integrações & Painéis",
    activities: ["ERP + BI integrado", "WhatsApp + CRM live", "Painéis executivos ativos"],
    modules: ["Smart Code"],
    color: "bg-primary",
  },
  {
    phase: "M4",
    label: "Smart Code — IA & Automação",
    activities: ["Motor de alertas IA", "Automações de cobrança", "Central de indicadores"],
    modules: ["Smart Code"],
    color: "bg-primary",
  },
  {
    phase: "M5+",
    label: "Smart Squad — Evolução contínua",
    activities: ["Squad dedicado ativo", "Novos casos de uso IA", "Consultoria estratégica mensal"],
    modules: ["Smart Squad"],
    color: "bg-primary/60",
    ongoing: true,
  },
];

export function PropostaIncorpe() {
  return (
    <div className="space-y-12">
      <ProposalHeader
        eyebrow="Proposta Incorpe"
        title="INCORPE"
        subtitle="Eficiência operacional, tecnologia, escala e inteligência empresarial para a próxima década do grupo."
        logo={incorpeLogo}
      />

      {/* Modules */}
      <div className="space-y-6">
        {modules.map((m) => <ModuleCard key={m.number} m={m} />)}
      </div>

      {/* Academy module */}
      <Card className="bg-card border-border p-8 md:p-10">
        <div className="flex items-start gap-5 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-gold">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-primary font-mono uppercase tracking-widest mb-1">MÓDULO 04</p>
            <h3 className="text-2xl md:text-3xl font-bold">Matter Academy — Capacitação</h3>
            <p className="text-muted-foreground mt-1">Tirar o medo → Gerar linguagem comum → Destravar decisões</p>
          </div>
        </div>
        <p className="text-foreground/80 mb-8 leading-relaxed">
          Programas premium para líderes e equipes, focados no domínio da IA aplicada à estratégia e ao negócio.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {academy.map((a) => (
            <div key={a.name} className="p-6 rounded-2xl border border-border bg-background/40 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <a.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{a.name}</h4>
                    <p className="text-xs text-muted-foreground">{a.sub}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{a.price}</p>
                  {a.priceNote && <p className="text-[11px] text-muted-foreground">{a.priceNote}</p>}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{a.desc}</p>
              <ul className="space-y-1.5 mb-4">
                {a.items.map((i) => (
                  <li key={i} className="text-xs text-muted-foreground flex gap-2">
                    <span className="text-primary">▸</span>{i}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground pt-3 border-t border-border flex items-center gap-2">
                <Calendar className="w-3 h-3" /> {a.time}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline */}
      <Card className="p-8 md:p-10 bg-card border-border overflow-hidden">
        <p className="text-xs text-primary font-mono uppercase tracking-widest mb-2">Cronograma</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-10">Jornada de execução</h3>

        {/* Horizontal connector — desktop */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-6 right-6 h-px bg-border" />
            <div className="grid grid-cols-5 gap-4">
              {timeline.map((t, i) => (
                <div key={t.phase} className="relative flex flex-col items-center text-center gap-4">
                  {/* Node */}
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-primary-foreground shadow-gold ${t.color} ${t.ongoing ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-card" : ""}`}>
                    {t.phase}
                    {t.ongoing && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                  {/* Content */}
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

        {/* Vertical timeline — mobile */}
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
