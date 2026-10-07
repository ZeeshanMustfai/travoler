import { useState, type FormEvent } from "react";
import { CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react";
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
import { Logo } from "@/components/logo";
import { useModals } from "@/providers/modal-provider";

type Errors = { email?: string; password?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginModal() {
  const { active, close, openDemo } = useModals();
  const open = active === "login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const reset = () => {
    setEmail("");
    setPassword("");
    setErrors({});
    setStatus("idle");
    setShowPw(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      close();
      setTimeout(reset, 200);
    }
  };

  const validate = () => {
    const next: Errors = {};
    if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulated auth request
    setTimeout(() => setStatus("done"), 900);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {status === "done" ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="h-14 w-14 text-gold" />
            <DialogTitle>You’re signed in</DialogTitle>
            <DialogDescription>
              Welcome back. Redirecting you to your Travoler dashboard…
            </DialogDescription>
            <Button className="mt-2 w-full" onClick={() => handleOpenChange(false)}>
              Continue
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <Logo size={40} showWordmark={false} className="mb-1" />
              <DialogTitle>Sign in to Travoler</DialogTitle>
              <DialogDescription>
                Access your flight inventory, Umrah packages and agent ledgers.
              </DialogDescription>
            </DialogHeader>

            <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate>
              <div className="flex flex-col gap-2">
                <Label htmlFor="login-email">Work email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@agency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="text-xs font-medium text-destructive">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="login-password">Password</Label>
                  <a href="#" className="text-xs font-semibold text-gold hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPw ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={!!errors.password}
                    className="pr-11"
                  />
                  <button
                    type="button"
                    aria-label={showPw ? "Hide password" : "Show password"}
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-xs font-medium text-destructive">{errors.password}</span>
                )}
              </div>

              <Button type="submit" className="mt-1 w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              New to Travoler?{" "}
              <button
                type="button"
                onClick={() => {
                  close();
                  setTimeout(openDemo, 150);
                }}
                className="font-semibold text-gold hover:underline"
              >
                Book a demo
              </button>
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
