import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Target, CheckCircle2, Sparkles, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Module {
  number: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  objective: string | string[];
  deliverables: string[];
  duration: string;
  investment: string;
  investmentNote?: string;
  badge?: string;
  highlight?: boolean;
  optionalAddons?: { name: string; value: string }[];
}

export function ModuleCard({ m }: { m: Module }) {
  const objectives = Array.isArray(m.objective) ? m.objective : [m.objective];
  return (
    <Card className={`relative overflow-hidden bg-card border-border p-8 md:p-10 ${m.highlight ? "border-primary/50 shadow-gold" : ""}`}>
      {m.highlight && <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-gold" />}
      <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-gold">
            <m.icon className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-primary font-mono uppercase tracking-widest mb-1">MÓDULO {m.number}</p>
            <h3 className="text-2xl md:text-3xl font-bold">{m.name}</h3>
            <p className="text-muted-foreground mt-1">{m.subtitle}</p>
          </div>
        </div>
        {m.badge && (
          <Badge className="bg-primary/10 border border-primary/30 text-primary">
            <Sparkles className="w-3 h-3 mr-1" /> {m.badge}
          </Badge>
        )}
      </div>

      <p className="text-foreground/80 leading-relaxed mb-8">{m.description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <h4 className="font-bold uppercase tracking-wider text-xs">Objetivo</h4>
          </div>
          <ul className="space-y-2">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <h4 className="font-bold uppercase tracking-wider text-xs">Entregáveis</h4>
          </div>
          <ul className="grid grid-cols-1 gap-1.5">
            {m.deliverables.map((d) => (
              <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-border">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Execução</p>
            <p className="font-bold">{m.duration}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-gold text-primary-foreground">
          <DollarSign className="w-5 h-5" />
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80">Investimento</p>
            <p className="font-bold text-lg">{m.investment}</p>
            {m.investmentNote && <p className="text-xs opacity-80">{m.investmentNote}</p>}
          </div>
        </div>
      </div>

      {m.optionalAddons && m.optionalAddons.length > 0 && (
        <div className="mt-5 pt-5 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <Plus className="w-3.5 h-3.5 text-primary" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Módulos complementares (opcionais)</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {m.optionalAddons.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <span className="text-sm font-semibold text-foreground">{a.name}</span>
                <span className="text-primary/60">·</span>
                <span className="text-sm font-bold text-gradient-gold">{a.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
