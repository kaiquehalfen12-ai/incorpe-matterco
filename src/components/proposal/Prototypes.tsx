import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Compass, Target, TrendingUp, AlertCircle, CheckCircle2, Activity,
  Cpu, Database, Zap, Bell, BarChart3, MessageSquare, GitBranch,
  Users, Sparkles, Calendar as CalIcon,
  GraduationCap, Award, BookOpen,
  Palette, Layers, Eye,
  Rocket, MousePointerClick, DollarSign, ArrowUp, ArrowDown,
} from "lucide-react";

// ============ SMART ROUTE ============
export function SmartRoutePrototype() {
  const phases = [
    { name: "Diagnóstico Executivo", weeks: "Sem 1-2", status: 100 },
    { name: "Imersão Operacional", weeks: "Sem 3-4", status: 100 },
    { name: "Mapeamento Cadeia de Valor", weeks: "Sem 5-6", status: 75 },
    { name: "Análise KPIs & Financeira", weeks: "Sem 7-8", status: 50 },
    { name: "Roadmap Tech + IA", weeks: "Sem 9-12", status: 25 },
    { name: "Governança & Priorização", weeks: "Sem 13-16", status: 10 },
  ];

  return (
    <div className="space-y-8">
      <Hero icon={Compass} eyebrow="Produto · Smart Route" title="Plano Estratégico de Escala" subtitle="Diagnóstico executivo, roadmap tecnológico e governança operacional para o próximo ciclo de crescimento." />

      <div className="grid md:grid-cols-4 gap-4">
        <KPI label="Fase atual" value="3/6" icon={Activity} />
        <KPI label="Processos mapeados" value="84" sub="+12 esta sprint" icon={GitBranch} />
        <KPI label="Gargalos identificados" value="17" sub="6 críticos" icon={AlertCircle} accent />
        <KPI label="Eficiência projetada" value="+38%" sub="vs. baseline" icon={TrendingUp} />
      </div>

      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Cronograma de execução · 4 meses</h3>
          <Badge className="bg-primary/10 border border-primary/30 text-primary">Sprint atual: Sem 5-6</Badge>
        </div>
        <div className="space-y-4">
          {phases.map((p) => (
            <div key={p.name}>
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${p.status === 100 ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="font-medium">{p.name}</span>
                  <span className="text-muted-foreground text-xs">· {p.weeks}</span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">{p.status}%</span>
              </div>
              <Progress value={p.status} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Target className="w-4 h-4 text-primary" />Top gargalos operacionais</h3>
          <div className="space-y-3">
            {[
              { area: "Esteira de aprovação", impact: "Alto", delay: "12 dias" },
              { area: "Gestão de distratos", impact: "Alto", delay: "9 dias" },
              { area: "Integração ERP × CRM", impact: "Médio", delay: "Manual" },
              { area: "Cobrança / inadimplência", impact: "Alto", delay: "Sem alerta" },
              { area: "Painéis de engenharia", impact: "Médio", delay: "Sem dado" },
            ].map((i) => (
              <div key={i.area} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <span className="text-sm font-medium">{i.area}</span>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={i.impact === "Alto" ? "border-destructive/40 text-destructive" : "border-primary/40 text-primary"}>{i.impact}</Badge>
                  <span className="text-xs text-muted-foreground">{i.delay}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" />Indicadores executivos</h3>
          <div className="space-y-4">
            {[
              { label: "Ciclo médio de aprovação", from: "18d", to: "6d", pct: 67 },
              { label: "Conversão comercial", from: "11%", to: "19%", pct: 73 },
              { label: "Inadimplência projetada", from: "8.2%", to: "4.1%", pct: 50 },
              { label: "Produtividade engenharia", from: "100", to: "143", pct: 43 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm">{m.label}</span>
                  <span className="text-xs text-muted-foreground">{m.from} → <span className="text-primary font-bold">{m.to}</span></span>
                </div>
                <Progress value={m.pct} className="h-1.5" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============ SMART CODE ============
export function SmartCodePrototype() {
  const integrations = [
    { name: "ERP", status: "online", latency: "42ms" },
    { name: "BI", status: "online", latency: "120ms" },
    { name: "WhatsApp Cloud API", status: "online", latency: "88ms" },
    { name: "CRM", status: "online", latency: "30ms" },
    { name: "Cobrança", status: "warning", latency: "780ms" },
    { name: "RPA Engine", status: "online", latency: "55ms" },
  ];

  return (
    <div className="space-y-8">
      <Hero icon={Cpu} eyebrow="Produto · Smart Code" title="Núcleo de Tecnologia, IA & Automação" subtitle="Do diagnóstico ao MVP em produção — operação orientada por inteligência." />

      <div className="grid md:grid-cols-4 gap-4">
        <KPI label="Automações ativas" value="47" sub="+9 esta semana" icon={Zap} />
        <KPI label="Integrações" value="12/14" sub="2 em deploy" icon={Database} />
        <KPI label="Alertas IA (24h)" value="23" sub="6 acionáveis" icon={Bell} accent />
        <KPI label="Horas poupadas /mês" value="640h" sub="≈ 4 FTEs" icon={Activity} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Painéis executivos — visão geral</h3>
            <Badge className="bg-primary/10 border border-primary/30 text-primary">Tempo real</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Vendas", value: "BRL 4.8M", trend: "+23%", icon: TrendingUp },
              { title: "Lotes em estoque", value: "1.247", trend: "-4%", icon: Layers },
              { title: "Distratos (mês)", value: "12", trend: "-30%", icon: AlertCircle },
              { title: "Esteira aprovação", value: "6d", trend: "-67%", icon: GitBranch },
              { title: "Produtividade", value: "143", trend: "+43%", icon: Activity },
              { title: "Inadimplência", value: "4.1%", trend: "-50%", icon: DollarSign },
            ].map((p) => (
              <div key={p.title} className="p-4 rounded-xl bg-background/50 border border-border hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{p.title}</span>
                  <p.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold">{p.value}</p>
                <p className={`text-xs mt-1 ${p.trend.startsWith("-") && !["Distratos (mês)", "Esteira aprovação", "Inadimplência"].includes(p.title) ? "text-destructive" : "text-primary"}`}>{p.trend} vs. mês anterior</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Status das integrações</h3>
          <div className="space-y-2">
            {integrations.map((i) => (
              <div key={i.name} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${i.status === "online" ? "bg-primary animate-pulse" : "bg-destructive"}`} />
                  <span className="text-sm font-medium">{i.name}</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{i.latency}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-primary" />IA — Alertas operacionais recentes</h3>
        <div className="space-y-3">
          {[
            { type: "Crítico", msg: "Lote 142 — risco de distrato. Cliente sem contato há 18 dias.", time: "há 2h" },
            { type: "Atenção", msg: "Esteira jurídica acima da meta SLA (>10d). 4 processos parados.", time: "há 5h" },
            { type: "Insight", msg: "Conversão da campanha Bairros Planejados +34% — sugestão de reforço de budget.", time: "há 1d" },
            { type: "Crítico", msg: "Inadimplência cluster Norte subiu 1.8pp em 7 dias. Acionar cobrança.", time: "há 1d" },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
              <Badge variant="outline" className={a.type === "Crítico" ? "border-destructive/40 text-destructive" : a.type === "Atenção" ? "border-primary/40 text-primary" : "border-border"}>{a.type}</Badge>
              <p className="text-sm flex-1">{a.msg}</p>
              <span className="text-xs text-muted-foreground">{a.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ============ SMART SQUAD ============
export function SmartSquadPrototype() {
  const squad = [
    { role: "AI Engineer", count: 1 },
    { role: "Data Engineer", count: 1 },
    { role: "Full-stack Dev", count: 2 },
    { role: "Product / Tech Lead", count: 1 },
    { role: "Consultor estratégico (CTO advisory)", count: 1 },
  ];

  return (
    <div className="space-y-8">
      <Hero icon={Users} eyebrow="Produto · Smart Squad" title="Evolução contínua & Operação de Inteligência" subtitle="Time dedicado de IA aplicada, operando junto à organização todos os dias." />

      <div className="grid md:grid-cols-3 gap-4">
        <KPI label="Sprint atual" value="#14" sub="ciclo de 2 semanas" icon={CalIcon} />
        <KPI label="Casos de uso de IA ativos" value="11" sub="+3 piloto" icon={Sparkles} />
        <KPI label="Tickets entregues /mês" value="38" sub="média 6 meses" icon={CheckCircle2} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Composição do squad</h3>
          <div className="space-y-2">
            {squad.map((s) => (
              <div key={s.role} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <span className="text-sm">{s.role}</span>
                <Badge className="bg-primary/10 border border-primary/30 text-primary">{s.count}×</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Backlog priorizado</h3>
          <div className="space-y-2">
            {[
              { t: "IA preditiva de inadimplência v2", p: "P0" },
              { t: "Painel CFO unificado", p: "P0" },
              { t: "Automação fluxo de boletos", p: "P1" },
              { t: "Chatbot interno RH", p: "P2" },
              { t: "Replicação CRM em nova BU", p: "P1" },
            ].map((i) => (
              <div key={i.t} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <span className="text-sm">{i.t}</span>
                <Badge variant="outline" className={i.p === "P0" ? "border-destructive/40 text-destructive" : "border-border"}>{i.p}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-bold mb-4">Ritual de sustentação</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            { d: "Daily", t: "15min · alinhamento rápido" },
            { d: "Sprint planning", t: "Quinzenal · priorização" },
            { d: "Review executivo", t: "Mensal · com a liderança" },
            { d: "Roadmap review", t: "Trimestral · com C-level" },
          ].map((r) => (
            <div key={r.d} className="p-4 rounded-xl bg-background/50 border border-border">
              <p className="font-bold">{r.d}</p>
              <p className="text-xs text-muted-foreground mt-1">{r.t}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ============ MATTER ACADEMY ============
export function MatterAcademyPrototype() {
  const belts = [
    { name: "Faixa Branca", desc: "Fundamentos de IA, primeiros prompts e casos básicos", weeks: "Mês 1-3", color: "bg-white" },
    { name: "Faixa Verde", desc: "IA aplicada ao seu trabalho, automações simples", weeks: "Mês 4-6", color: "bg-green-500" },
    { name: "Faixa Marrom", desc: "Casos de negócio, design de soluções, integrações", weeks: "Mês 7-9", color: "bg-amber-700" },
    { name: "Faixa Preta", desc: "Liderança em IA, propagação de cultura, governança", weeks: "Mês 10-12", color: "bg-black border border-border" },
  ];

  return (
    <div className="space-y-8">
      <Hero icon={GraduationCap} eyebrow="Produto · Matter Academy" title="Capacitação executiva em IA aplicada" subtitle="Tirar o medo → Gerar linguagem comum → Destravar decisões." />

      <div className="grid md:grid-cols-4 gap-4">
        <KPI label="Programas" value="4" sub="Scan · Shift · Next · Prime" icon={BookOpen} />
        <KPI label="Carga total (Next)" value="12m" sub="4 faixas progressivas" icon={Award} />
        <KPI label="Mín. participantes" value="20" sub="Shift / Next" icon={Users} />
        <KPI label="Certificação" value="Sim" sub="Matter Academy" icon={Sparkles} />
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-bold mb-6">Jornada AI Next — 4 faixas</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {belts.map((b, i) => (
            <div key={b.name} className="relative p-5 rounded-2xl border border-border bg-background/50 hover:border-primary/40 transition-colors">
              <div className={`w-10 h-2 rounded-full mb-4 ${b.color}`} />
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Etapa 0{i+1}</p>
              <h4 className="font-bold text-lg">{b.name}</h4>
              <p className="text-xs text-muted-foreground mt-2 mb-3 leading-relaxed">{b.desc}</p>
              <Badge variant="outline" className="text-xs">{b.weeks}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Diagnóstico de maturidade (AI Scan)</h3>
          <div className="space-y-3">
            {[
              { l: "Fluência individual", v: 38 },
              { l: "Cultura organizacional", v: 22 },
              { l: "Casos de uso ativos", v: 15 },
              { l: "Governança & ética", v: 8 },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span>{s.l}</span>
                  <span className="text-primary font-bold">{s.v}/100</span>
                </div>
                <Progress value={s.v} className="h-2" />
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-2 border-t border-border">Sugestão: começar pelo Shift (linguagem comum) antes do Next.</p>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Investimento — visão consolidada</h3>
          <div className="space-y-2">
            {[
              { p: "AI Scan", v: "Gratuito", n: "2 semanas" },
              { p: "AI Shift", v: "BRL 980/pessoa", n: "20 part. = BRL 19.600" },
              { p: "AI Next", v: "BRL 250/pessoa/mês", n: "20 part. = BRL 5.000/mês" },
              { p: "AI Next Prime", v: "BRL 500/pessoa/mês", n: "min. 4 = BRL 2.000/mês" },
            ].map((i) => (
              <div key={i.p} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <div>
                  <p className="font-semibold text-sm">{i.p}</p>
                  <p className="text-xs text-muted-foreground">{i.n}</p>
                </div>
                <p className="font-bold text-primary text-sm">{i.v}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============ ALMABRANDS ============
export function AlmabrandsPrototype() {
  return (
    <div className="space-y-8">
      <Hero icon={Palette} eyebrow="Produto · Almabrands" title="Branding & Posicionamento" subtitle="Transformar o Shopping Auto Mall no principal polo automotivo da região." />

      <div className="grid md:grid-cols-4 gap-4">
        <KPI label="Território de marca" value="1" sub="redefinição completa" icon={Eye} />
        <KPI label="Touchpoints redesenhados" value="22" sub="físico + digital" icon={Layers} />
        <KPI label="Campanhas" value="6" sub="institucional + perf." icon={Sparkles} />
        <KPI label="Duração" value="2 meses" icon={CalIcon} />
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-bold mb-6">Arquitetura de marca</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Propósito", d: "Tornar a jornada de comprar um carro um evento de família, com confiança e variedade real." },
            { t: "Promessa", d: "O maior shopping do automóvel — onde tradição encontra experiência completa." },
            { t: "Personalidade", d: "Tradicional, acessível, confiante, familiar e moderno." },
          ].map((b) => (
            <div key={b.t} className="p-5 rounded-2xl bg-background/50 border border-border">
              <p className="text-xs text-primary font-mono uppercase tracking-wider mb-2">{b.t}</p>
              <p className="text-sm leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Entregas físicas</h3>
          <ul className="space-y-2">
            {["Fachada principal", "Sinalização interna", "Wayfinding por setor", "Identidade visual de eventos", "Material de PDV", "Uniformes & atendimento"].map((i) => (
              <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Entregas digitais</h3>
          <ul className="space-y-2">
            {["Manual de marca", "Templates redes sociais", "Site institucional V2", "Hub de campanhas", "Vídeos institucionais", "Narrativa central + tom de voz"].map((i) => (
              <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

// ============ GROWTH MACHINE ============
export function GrowthMachinePrototype() {
  return (
    <div className="space-y-8">
      <Hero icon={Rocket} eyebrow="Produto · Growth Machine" title="Operação de Crescimento & Performance" subtitle="Tráfego, conversão, campanhas, eventos, parcerias, dados e acompanhamento comercial." />

      <div className="grid md:grid-cols-4 gap-4">
        <KPI label="Leads /mês (proj.)" value="3.200" sub="+180%" icon={MousePointerClick} />
        <KPI label="CAC" value="BRL 42" sub="-37%" icon={DollarSign} />
        <KPI label="Conversão visita→venda" value="9.4%" sub="+4.1pp" icon={ArrowUp} />
        <KPI label="ROI mídia" value="6.8×" sub="trim. anterior 3.1×" icon={TrendingUp} />
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-bold mb-6">Funil de performance</h3>
        <div className="space-y-3">
          {[
            { stage: "Impressões", v: "1.840.000", pct: 100 },
            { stage: "Cliques", v: "92.300", pct: 60 },
            { stage: "Leads", v: "3.200", pct: 35 },
            { stage: "Visitas físicas", v: "1.180", pct: 18 },
            { stage: "Vendas", v: "311", pct: 9 },
          ].map((s) => (
            <div key={s.stage}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium">{s.stage}</span>
                <span className="text-muted-foreground"><span className="text-foreground font-bold">{s.v}</span></span>
              </div>
              <div className="h-8 rounded-lg bg-background/50 border border-border overflow-hidden">
                <div className="h-full bg-gradient-gold flex items-center px-3 text-xs font-bold text-primary-foreground" style={{ width: `${s.pct}%` }}>{s.pct}%</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-card border-border lg:col-span-2">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary" />Performance por canal</h3>
          <div className="space-y-3">
            {[
              { ch: "Google Ads · Search", leads: 1240, cpl: "BRL 28", trend: "up" },
              { ch: "Meta · Performance", leads: 980, cpl: "BRL 35", trend: "up" },
              { ch: "Eventos & ativações", leads: 460, cpl: "BRL 71", trend: "up" },
              { ch: "WhatsApp Direct", leads: 320, cpl: "BRL 12", trend: "up" },
              { ch: "Influencers regionais", leads: 200, cpl: "BRL 88", trend: "down" },
            ].map((c) => (
              <div key={c.ch} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <span className="text-sm font-medium">{c.ch}</span>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">{c.leads} leads</span>
                  <span className="text-xs font-mono">{c.cpl}</span>
                  {c.trend === "up" ? <ArrowUp className="w-4 h-4 text-primary" /> : <ArrowDown className="w-4 h-4 text-destructive" />}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Calendário de ativação</h3>
          <div className="space-y-2">
            {[
              { m: "Mês 1", e: "Festival Multimarcas" },
              { m: "Mês 2", e: "Drive-thru Test Day" },
              { m: "Mês 3", e: "Família no Show" },
              { m: "Mês 4", e: "Semana do Seminovo" },
              { m: "Mês 5", e: "Black Show Auto" },
              { m: "Mês 6", e: "Top Lojistas Awards" },
            ].map((c) => (
              <div key={c.m} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                <Badge variant="outline" className="text-xs">{c.m}</Badge>
                <span className="text-xs">{c.e}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============ shared mini-components ============
function Hero({ icon: Icon, eyebrow, title, subtitle }: { icon: typeof Compass; eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative flex flex-col md:flex-row gap-6 items-start">
        <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-gold">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <p className="text-xs text-primary font-mono uppercase tracking-widest mb-2">{eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-3 text-lg max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function KPI({ label, value, sub, icon: Icon, accent }: { label: string; value: string; sub?: string; icon: typeof Compass; accent?: boolean }) {
  return (
    <Card className={`p-5 bg-card border-border ${accent ? "border-primary/40" : ""}`}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <p className="text-3xl font-bold">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </Card>
  );
}
