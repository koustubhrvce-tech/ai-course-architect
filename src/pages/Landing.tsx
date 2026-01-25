import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import {
  Sparkles,
  BookOpen,
  Users,
  BarChart3,
  Brain,
  GraduationCap,
  Building2,
  ArrowRight,
  CheckCircle2,
  Play,
  Star,
} from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Brain,
      title: "AI Tutor",
      description:
        "24/7 intelligent tutoring that adapts to each student's learning style and pace.",
      color: "bg-lms-purple-light text-lms-purple",
    },
    {
      icon: Sparkles,
      title: "AI Course Creation",
      description:
        "Generate course outlines, quizzes, and content with AI assistance in minutes.",
      color: "bg-lms-blue-light text-lms-blue",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description:
        "Deep insights into student performance, engagement, and learning outcomes.",
      color: "bg-lms-emerald-light text-lms-emerald",
    },
    {
      icon: Users,
      title: "Personalized Paths",
      description:
        "AI-driven learning paths that adapt based on individual progress and goals.",
      color: "bg-lms-amber-light text-lms-amber",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Course",
      description: "Use AI to generate outlines, or build from scratch with our intuitive editor.",
    },
    {
      step: "02",
      title: "Engage Students",
      description: "AI Tutor provides 24/7 support while you focus on what matters.",
    },
    {
      step: "03",
      title: "Track & Optimize",
      description: "Get AI-powered insights to improve your courses and student outcomes.",
    },
  ];

  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Learn smarter with AI-powered tutoring and personalized learning paths.",
      cta: "Start Learning",
    },
    {
      icon: BookOpen,
      title: "Teachers",
      description: "Create and sell courses with AI assistance. Focus on teaching, not admin.",
      cta: "Start Teaching",
    },
    {
      icon: Building2,
      title: "Institutions",
      description: "Scale your educational offerings with enterprise-grade AI tools.",
      cta: "Contact Sales",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Online Instructor",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      content:
        "LearnAI helped me create a 40-hour course in just 2 weeks. The AI course builder is incredible.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Computer Science Student",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
      content:
        "The AI Tutor feels like having a personal mentor available 24/7. My grades improved significantly.",
      rating: 5,
    },
    {
      name: "Dr. Emily Roberts",
      role: "University Professor",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      content:
        "The analytics dashboard gives me insights I never had before. I can finally see what's working.",
      rating: 5,
    },
  ];

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="container mx-auto px-6 py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lms-purple-light text-lms-purple text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              AI-Powered Education Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              The Future of Learning
              <br />
              <span className="text-lms-blue">is AI-Powered</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Create intelligent courses, provide 24/7 AI tutoring, and unlock deep learning insights.
              The most advanced LMS for modern educators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-lms-blue hover:bg-lms-blue/90 h-12 px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lms-emerald" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lms-emerald" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-lms-emerald" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-32 bottom-0 top-auto" />
            <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden mx-auto max-w-5xl">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-lms-rose" />
                  <div className="w-3 h-3 rounded-full bg-lms-amber" />
                  <div className="w-3 h-3 rounded-full bg-lms-emerald" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-background rounded-md px-4 py-1 text-xs text-muted-foreground">
                    app.learnai.com/dashboard
                  </div>
                </div>
              </div>
              <div className="aspect-[16/9] bg-muted/20 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-12 w-12 text-lms-blue mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Features That Transform Learning
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful AI tools integrated throughout the platform to enhance every aspect of education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in minutes with our intuitive platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
                )}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lms-blue text-white text-xl font-bold mb-4 relative">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Everyone in Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a student, teacher, or institution, LearnAI has the tools you need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lms-navy text-white mb-6">
                  <audience.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{audience.title}</h3>
                <p className="text-muted-foreground mb-6">{audience.description}</p>
                <Link to="/signup">
                  <Button variant="outline" className="w-full">
                    {audience.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Educators Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our community has to say about LearnAI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-lms-amber text-lms-amber" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full bg-muted"
                  />
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-lms-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Join thousands of educators and students already using LearnAI to achieve better learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-lms-blue hover:bg-lms-blue/90 h-12 px-8">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
