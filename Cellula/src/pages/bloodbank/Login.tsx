import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight, Droplet } from "lucide-react";

const BloodBankLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple hardcoded credentials for BloodBank (can be extended)
    const validEmail = "bloodbank@cellula.com";
    const validPassword = "bloodbank123";

    if (email === validEmail && password === validPassword) {
      sessionStorage.setItem("bloodbankLoggedIn", "true");
      localStorage.setItem("bloodbankEmail", email);
      navigate("/bloodbank/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center gap-2">
          <img src="/logo.png" alt="Cellula" className="h-12 w-12" />
          <span
            className="text-2xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: '"Lucida Calligraphy", cursive' }}
          >
            Cellula
          </span>
          <div className="hidden lg:flex items-center text-xs text-muted-foreground border-l border-r border-border px-4 whitespace-nowrap">
            In collaboration with NSCRC and NRCS
          </div>
        </div>
      </header>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-md space-y-6 relative z-10">
          {/* Welcome section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg">
                <Droplet className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Blood Bank Portal</h1>
            <p className="text-sm text-gray-600">Manage and register stem cell donors</p>
          </div>

          {/* Login card */}
          <Card className="border-2 border-red-200 shadow-xl bg-white/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-red-600" />
                Blood Bank Login
              </CardTitle>
              <CardDescription>Sign in to access donor registration</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="bloodbank@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Default: bloodbank@cellula.com
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Default: bloodbank123
                  </p>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 gap-2">
                  Sign In
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info cards */}
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-white/50 rounded-lg border border-red-100 backdrop-blur">
              <p className="text-xs font-medium text-red-900">Camp Registration</p>
              <p className="text-xs text-gray-600 mt-1">Register donors from your blood donation camps</p>
            </div>
            <div className="p-3 bg-white/50 rounded-lg border border-red-100 backdrop-blur">
              <p className="text-xs font-medium text-red-900">Real-time Sync</p>
              <p className="text-xs text-gray-600 mt-1">Data instantly available to hospitals and admin</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BloodBankLogin;
