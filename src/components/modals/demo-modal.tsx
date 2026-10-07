import { useState, type FormEvent, type ReactNode } from "react";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModals } from "@/providers/modal-provider";
import { cn } from "@/lib/utils";

type Form = {
  name: string;
  email: string;
  company: string;
  agents: string;
  interest: string;
};

type Errors = Partial<Record<keyof Form, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INTERESTS = ["Flights", "Umrah", "Both"];

const EMPTY: Form = {
  name: "",
  email: "",
  company: "",
  agents: "",
  interest: "Both",
};

export function DemoModal() {
  const { active, close } = useModals();
  const open = active === "demo";

  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const set = <K extends keyof Form>(key: K, value: Form[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      close();
      setTimeout(reset, 200);
    }
  };

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid work email.";
    if (form.company.trim().length < 2) next.company = "Please enter your company.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 900);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg">
        {status === "done" ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="h-14 w-14 text-gold" />
            <DialogTitle>Demo request received</DialogTitle>
            <DialogDescription>
              Thanks, {form.name.split(" ")[0]}. Our team will email{" "}
              <span className="font-semibold text-foreground">{form.email}</span>{" "}
              within one business day to schedule your 30-minute walkthrough.
            </DialogDescription>
            <Button className="mt-2 w-full" onClick={() => handleOpenChange(false)}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <DialogTitle>Book a demo</DialogTitle>
              <DialogDescription>
                A 30-minute walkthrough of flight inventory, Umrah packages and
                agent ledgers — tailored to your agency.
              </DialogDescription>
            </DialogHeader>

            <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.name} htmlFor="demo-name">
                  <Input
                    id="demo-name"
                    placeholder="Ayesha Rahman"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={!!errors.name}
                  />
                </Field>
                <Field label="Work email" error={errors.email} htmlFor="demo-email">
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder="you@agency.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                </Field>
                <Field label="Company" error={errors.company} htmlFor="demo-company">
                  <Input
                    id="demo-company"
                    placeholder="Al-Noor Travel"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    aria-invalid={!!errors.company}
                  />
                </Field>
                <Field label="Sub-agents" htmlFor="demo-agents">
                  <Input
                    id="demo-agents"
                    placeholder="e.g. 25"
                    inputMode="numeric"
                    value={form.agents}
                    onChange={(e) => set("agents", e.target.value.replace(/[^0-9]/g, ""))}
                  />
                </Field>
              </div>

              <div className="flex flex-col gap-2">
                <Label>What are you most interested in?</Label>
                <div className="grid grid-cols-3 gap-2">
                  {INTERESTS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => set("interest", opt)}
                      className={cn(
                        "h-11 rounded-xl border text-sm font-semibold transition-colors",
                        form.interest === opt
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border bg-surface-alt text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="mt-1 w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Request demo"
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No credit card required. We’ll never share your details.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <span className="text-xs font-medium text-destructive">{error}</span>}
    </div>
  );
}
