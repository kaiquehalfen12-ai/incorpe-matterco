import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import matterLogo from "@/assets/matter-logo.png";
import { SobreMatter } from "@/components/proposal/SobreMatter";
import { Cliente } from "@/components/proposal/Cliente";
import { PropostaIncorpe } from "@/components/proposal/PropostaIncorpe";
import { PropostaShowAutoMall } from "@/components/proposal/PropostaShowAutoMall";
import { Resumo } from "@/components/proposal/Resumo";
import {
  SmartRoutePrototype, SmartCodePrototype, SmartSquadPrototype,
  MatterAcademyPrototype, AlmabrandsPrototype, GrowthMachinePrototype,
} from "@/components/proposal/Prototypes";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matter&Co. · Proposta INCORPE + Show Auto Mall" },
      { name: "description", content: "Proposta estratégica Matter&Co. para INCORPE e Show Auto Mall BH — eficiência operacional, branding, growth e inteligência aplicada." },
    ],
  }),
  component: Index,
});

type TabId =
  | "sobre" | "cliente" | "incorpe" | "samall" | "resumo"
  | "p-route" | "p-code" | "p-squad" | "p-academy" | "p-alma" | "p-growth";

const tabs: { id: TabId; label: string; group: string }[] = [
  { id: "sobre", label: "Sobre a Matter", group: "Institucional" },
  { id: "cliente", label: "Cliente", group: "Institucional" },
  { id: "incorpe", label: "Proposta Incorpe", group: "Propostas" },
  { id: "samall", label: "Proposta Show Auto Mall", group: "Propostas" },
  { id: "resumo", label: "Resumo Estratégico", group: "Propostas" },
  { id: "p-route", label: "Smart Route", group: "Protótipos" },
  { id: "p-code", label: "Smart Code", group: "Protótipos" },
  { id: "p-squad", label: "Smart Squad", group: "Protótipos" },
  { id: "p-academy", label: "Matter Academy", group: "Protótipos" },
  { id: "p-alma", label: "Almabrands", group: "Protótipos" },
  { id: "p-growth", label: "Growth Machine", group: "Protótipos" },
];

function Index() {
  const [active, setActive] = useState<TabId>("sobre");
  const [navOpen, setNavOpen] = useState(false);

  const groups = Array.from(new Set(tabs.map(t => t.group)));

  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={matterLogo} alt="Matter&Co." className="h-7" />
            <span className="hidden md:block text-xs text-muted-foreground font-mono uppercase tracking-widest border-l border-border pl-3">Proposta · INCORPE + Show Auto Mall</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setNavOpen(!navOpen)} aria-label="Abrir menu">
            {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Tab nav */}
        <nav className={`${navOpen ? "block" : "hidden"} lg:block border-t border-border bg-card/50`}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-3 items-center">
            {groups.map((g) => (
              <div key={g} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mr-1 hidden md:inline">{g}</span>
                <div className="flex flex-wrap gap-1">
                  {tabs.filter(t => t.group === g).map(t => (
                    <button
                      key={t.id}
                      onClick={() => { setActive(t.id); setNavOpen(false); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                        active === t.id
                          ? "bg-primary text-primary-foreground shadow-gold"
                          : "bg-background/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16">
        {active === "sobre" && <SobreMatter />}
        {active === "cliente" && <Cliente />}
        {active === "incorpe" && <PropostaIncorpe />}
        {active === "samall" && <PropostaShowAutoMall />}
        {active === "resumo" && <Resumo />}
        {active === "p-route" && <SmartRoutePrototype />}
        {active === "p-code" && <SmartCodePrototype />}
        {active === "p-squad" && <SmartSquadPrototype />}
        {active === "p-academy" && <MatterAcademyPrototype />}
        {active === "p-alma" && <AlmabrandsPrototype />}
        {active === "p-growth" && <GrowthMachinePrototype />}
      </div>

      <footer className="border-t border-border bg-card/30 py-8 mt-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={matterLogo} alt="Matter&Co." className="h-6 opacity-70" />
            <span className="text-xs text-muted-foreground">© 2026 Matter&Co. — Inteligência de negócios.</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Proposta 21.05.2026</span>
        </div>
      </footer>
    </main>
  );
}
