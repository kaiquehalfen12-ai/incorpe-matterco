import incorpeLogo from "@/assets/incorpe-logo.png";
import samLogo from "@/assets/showautomall-logo.png";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Globe, Target, Award, TrendingUp } from "lucide-react";

const clients = [
  {
    name: "INCORPE",
    logo: incorpeLogo,
    site: "incorpe.com.br",
    siteUrl: "https://www.incorpe.com.br/",
    sector: "Setor Imobiliário",
    intro: "Empresa do setor imobiliário focada no desenvolvimento de loteamentos e bairros planejados, com atuação voltada para a realização do sonho da casa própria e valorização patrimonial.",
    positioning: [
      "Desenvolvimento de bairros planejados e loteamentos residenciais",
      "Foco em qualidade de vida, segurança e valorização imobiliária",
      "Apelo emocional ligado à conquista do patrimônio familiar",
      "Atuação pautada em transparência, inovação e compromisso",
    ],
    differentials: [
      "Infraestrutura completa nos empreendimentos",
      "Documentação regularizada e segurança jurídica",
      "Certificações ISO 9001 e PBQPH",
      "Programas habitacionais (Minha Casa Minha Vida)",
      "Atendimento consultivo pré e pós-venda",
    ],
    goals: [
      "Fortalecer autoridade e credibilidade no mercado imobiliário",
      "Gerar percepção de confiança e segurança",
      "Potencializar geração de leads qualificados",
      "Ampliar presença digital e posicionamento institucional",
    ],
  },
  {
    name: "SHOW AUTO MALL BH",
    logo: samLogo,
    site: "showautomallbh.com.br",
    siteUrl: "https://showautomallbh.com.br/",
    sector: "Shopping Automotivo",
    intro: "Shopping automotivo em Belo Horizonte com mais de 35 anos de tradição. Reúne lojistas, concessionárias e ampla variedade de veículos seminovos e novos em uma experiência completa de compra.",
    positioning: [
      "Referência regional em compra e venda de veículos",
      "Conceito de \"shopping do automóvel\" — variedade, conveniência e experiência",
      "Ambiente voltado para conforto, segurança e credibilidade",
      "Forte presença em seminovos premium e multimarcas",
    ],
    differentials: [
      "Mais de 35 anos de atuação",
      "Diversos lojistas e concessionárias em um único espaço",
      "Grande variedade de veículos novos e seminovos",
      "Estrutura com espaço kids, pet friendly e ambiente familiar",
      "Atendimento especializado e experiência diferenciada",
    ],
    goals: [
      "Consolidar posição como principal shopping automotivo da região",
      "Fortalecer percepção de confiança e tradição",
      "Aumentar fluxo de visitantes e oportunidades comerciais",
      "Valorizar a experiência oferecida no espaço físico",
      "Reforçar presença digital — performance e branding",
    ],
  },
];

export function Cliente() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-border bg-card p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Cliente</p>
            <h1 className="text-4xl md:text-5xl font-bold">INCORPE <span className="text-muted-foreground">+</span> Show Auto Mall</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Badge className="bg-primary text-primary-foreground gap-2 text-sm py-2 px-3 self-start">
              <Calendar className="w-4 h-4" /> Proposta — 21.05.2026
            </Badge>
            <Badge variant="outline" className="self-start border-primary/40 text-primary py-2 px-3">
              Dual-Track Strategy
            </Badge>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        {clients.map((c) => (
          <Card key={c.name} className="p-8 bg-card border-border space-y-6">
            <div className="flex items-center gap-5 pb-6 border-b border-border">
              <div className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0">
                <img src={c.logo} alt={c.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{c.sector}</p>
                <h2 className="text-2xl font-bold">{c.name}</h2>
                <a href={c.siteUrl} target="_blank" rel="noreferrer" className="text-sm text-primary inline-flex items-center gap-1 hover:underline">
                  <Globe className="w-3 h-3" /> {c.site}
                </a>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{c.intro}</p>

            <Section icon={Target} title="Posicionamento" items={c.positioning} />
            <Section icon={Award} title="Diferenciais Competitivos" items={c.differentials} />
            <Section icon={TrendingUp} title="Objetivos Estratégicos" items={c.goals} />
          </Card>
        ))}
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, items }: { icon: typeof Target; title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-primary" />
        <h3 className="font-bold uppercase tracking-wider text-xs">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
