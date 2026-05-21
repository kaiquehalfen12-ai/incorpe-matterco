import { Badge } from "@/components/ui/badge";

export function ProposalHeader({
  eyebrow,
  title,
  subtitle,
  logo,
  accent = "primary",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  logo: string;
  accent?: "primary" | "danger";
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative flex flex-col md:flex-row md:items-center gap-8">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white p-3 flex items-center justify-center shrink-0 shadow-elegant">
          <img src={logo} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex-1">
          <Badge className={`mb-4 ${accent === "danger" ? "bg-destructive/20 text-destructive border-destructive/40" : "bg-primary text-primary-foreground"}`}>
            {eyebrow}
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-gold">Proposta</span> — {title}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
