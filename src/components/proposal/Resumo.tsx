import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import incorpeLogo from "@/assets/incorpe-logo.png";
import samLogo from "@/assets/showautomall-logo.png";

type Item = { name: string; price: string; note?: string };

const incorpeItems: Item[] = [
  { name: "Smart Route", price: "BRL 28.880", note: "1+4" },
  { name: "Smart Code", price: "BRL 30.000" },
  { name: "Smart Squad", price: "BRL 9.880 /mês", note: "opcional" },
  { name: "Smart Pulse", price: "BRL 3.000 /mês", note: "opcional" },
  { name: "Matter Academy · AI Scan", price: "Gratuito" },
  { name: "Matter Academy · AI Shift", price: "BRL 980 /pessoa", note: "20 part. = BRL 19.600" },
  { name: "Matter Academy · AI Next", price: "BRL 250 /pessoa/mês", note: "20 part. = BRL 5.000/mês" },
];

const samItems: Item[] = [
  { name: "Smart Route", price: "BRL 28.880", note: "1+4" },
  { name: "Almabrands", price: "BRL 40.000" },
  { name: "Smart Code", price: "BRL 30.000" },
  { name: "Smart Squad", price: "BRL 9.880 /mês", note: "opcional" },
  { name: "Smart Pulse", price: "BRL 3.000 /mês", note: "opcional" },
  { name: "Growth Machine", price: "BRL 28.880", note: "1+6" },
];

export function Resumo() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-border bg-card p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="bg-primary text-primary-foreground mb-4">Resumo Estratégico</Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Duas <span className="text-gradient-gold">propostas independentes</span>,<br/>uma só inteligência.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg">
            A Incorpe é uma empresa de operação e escala. O Shopping é uma empresa de marca, tráfego e relacionamento.
            São dores diferentes — logo, precisam de propostas diferentes.
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        <SummaryCard
          logo={incorpeLogo}
          title="Proposta Incorpe"
          tag="Operação & Escala"
          desc="Eficiência operacional, tecnologia, escala e inteligência empresarial."
          items={incorpeItems}
        />
        <SummaryCard
          logo={samLogo}
          title="Proposta Show Auto Mall"
          tag="Marca & Growth"
          desc="Branding, growth, CRM e inteligência comercial."
          items={samItems}
        />
      </div>

      <Card className="p-8 md:p-12 bg-gradient-gold text-primary-foreground border-0 shadow-gold">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-sm font-mono uppercase tracking-widest opacity-70 mb-2">Por que dual-track</p>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Propostas que conversam, mas não dependem uma da outra</h3>
            <p className="opacity-80">
              Cada negócio recebe a estrutura que pede — sem amarrar cronogramas, sem misturar investimentos, sem comprometer foco.
              Quando faz sentido, os times conversam. Quando precisa, cada um acelera no seu ritmo.
            </p>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-xs uppercase tracking-wider opacity-70">Total de módulos</p>
              <p className="text-3xl font-bold">11</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-xs uppercase tracking-wider opacity-70">Empresas do ecossistema envolvidas</p>
              <p className="text-3xl font-bold">4</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SummaryCard({ logo, title, tag, desc, items }: { logo: string; title: string; tag: string; desc: string; items: Item[] }) {
  return (
    <Card className="p-8 bg-card border-border">
      <div className="flex items-center gap-4 pb-6 mb-6 border-b border-border">
        <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0">
          <img src={logo} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
        <div>
          <p className="text-xs text-primary font-mono uppercase tracking-widest">{tag}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{desc}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.name} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border hover:border-primary/40 transition-colors">
            <div>
              <p className="font-semibold">{i.name}</p>
              {i.note && <p className="text-xs text-muted-foreground">{i.note}</p>}
            </div>
            <p className="font-bold text-primary">{i.price}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
