import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, Mail, Lock, User, Eye, EyeOff, GraduationCap, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"student" | "instructor">("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { ...formData, role });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center bg-lms-navy p-12">
        <div className="max-w-lg text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-lms-purple/20">
              <Sparkles className="h-10 w-10 text-lms-purple" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">Start Your Learning Journey</h2>
          <p className="mt-4 text-lg text-white/70">
            Join thousands of learners and instructors on the most intelligent learning platform.
          </p>
          
          <div className="mt-12 space-y-6 text-left">
            <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lms-blue/20">
                <Sparkles className="h-5 w-5 text-lms-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI-Powered Learning</h3>
                <p className="text-sm text-white/60">Personalized paths tailored to your learning style</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lms-emerald/20">
                <BookOpen className="h-5 w-5 text-lms-emerald" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Expert-Led Courses</h3>
                <p className="text-sm text-white/60">Learn from industry professionals worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lms-amber/20">
                <GraduationCap className="h-5 w-5 text-lms-amber" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Verified Certificates</h3>
                <p className="text-sm text-white/60">Earn credentials recognized by employers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lms-navy">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">LearnAI</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
            <p className="mt-2 text-muted-foreground">Start your learning journey today</p>
          </div>

          {/* Role Selection */}
          <div className="space-y-3">
            <Label>I want to</Label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-colors",
                  role === "student"
                    ? "border-lms-blue bg-lms-blue-light"
                    : "border-border hover:border-lms-blue/50"
                )}
              >
                <GraduationCap className={cn("h-8 w-8", role === "student" ? "text-lms-blue" : "text-muted-foreground")} />
                <span className={cn("font-medium", role === "student" ? "text-lms-blue" : "text-foreground")}>
                  Learn
                </span>
                <span className="text-xs text-muted-foreground">Explore courses</span>
              </button>
              <button
                type="button"
                onClick={() => setRole("instructor")}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-colors",
                  role === "instructor"
                    ? "border-lms-purple bg-lms-purple-light"
                    : "border-border hover:border-lms-purple/50"
                )}
              >
                <BookOpen className={cn("h-8 w-8", role === "instructor" ? "text-lms-purple" : "text-muted-foreground")} />
                <span className={cn("font-medium", role === "instructor" ? "text-lms-purple" : "text-foreground")}>
                  Teach
                </span>
                <span className="text-xs text-muted-foreground">Create courses</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 text-lms-purple shrink-0" />
              <p className="text-xs text-muted-foreground">
                We personalize your learning experience using AI to help you learn faster and more effectively.
              </p>
            </div>

            <Button
              type="submit"
              className={cn(
                "w-full",
                role === "student" ? "bg-lms-blue hover:bg-lms-blue/90" : "bg-lms-purple hover:bg-lms-purple/90"
              )}
            >
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-lms-blue hover:underline font-medium">
              Sign in
            </Link>
          </p>

          <p className="text-center text-xs text-muted-foreground">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">Terms of Service</a> and{" "}
            <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
