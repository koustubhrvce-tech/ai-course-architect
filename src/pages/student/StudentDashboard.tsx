import StudentLayout from "@/components/student/StudentLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  Sparkles,
  Target,
  Flame,
  ArrowRight,
} from "lucide-react";

export default function StudentDashboard() {
  const stats = [
    { label: "Courses Enrolled", value: "8", icon: BookOpen, color: "text-lms-blue" },
    { label: "Hours Learned", value: "47", icon: Clock, color: "text-lms-emerald" },
    { label: "Certificates", value: "3", icon: Trophy, color: "text-lms-amber" },
    { label: "Day Streak", value: "12", icon: Flame, color: "text-lms-rose" },
  ];

  const inProgressCourses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      progress: 65,
      nextLesson: "Neural Networks Basics",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=ml",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "John Smith",
      progress: 42,
      nextLesson: "React Hooks Deep Dive",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=web",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Emily Roberts",
      progress: 28,
      nextLesson: "Pandas DataFrames",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=data",
    },
  ];

  const aiRecommendations = [
    {
      type: "weak_area",
      title: "Struggling with Calculus",
      description: "AI detected you may need extra practice with derivatives. Here's a targeted review.",
      action: "Start Review",
    },
    {
      type: "suggestion",
      title: "Complete Your Streak",
      description: "You're on a 12-day streak! Watch just one lesson to keep it going.",
      action: "Continue Learning",
    },
    {
      type: "recommendation",
      title: "Recommended for You",
      description: "Based on your interests: 'Advanced React Patterns' - 94% match",
      action: "View Course",
    },
  ];

  const upcomingDeadlines = [
    { title: "ML Assignment 3", course: "Machine Learning Fundamentals", dueIn: "2 days" },
    { title: "Quiz: React Basics", course: "Web Development Bootcamp", dueIn: "5 days" },
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back, Student!</h1>
            <p className="text-muted-foreground">Continue your learning journey</p>
          </div>
          <Button className="bg-lms-blue hover:bg-lms-blue/90">
            <Play className="mr-2 h-4 w-4" />
            Resume Learning
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <TrendingUp className="h-4 w-4 text-lms-emerald" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* In Progress Courses */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Continue Learning</h2>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {inProgressCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card border border-border rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                    <div className="flex items-center gap-3">
                      <Progress value={course.progress} className="flex-1 h-2" />
                      <span className="text-sm font-medium text-foreground">{course.progress}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Next: {course.nextLesson}
                    </p>
                  </div>
                  <Button size="sm" className="shrink-0 bg-lms-blue hover:bg-lms-blue/90">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights & Recommendations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-lms-purple" />
              <h2 className="text-lg font-semibold text-foreground">AI Insights</h2>
            </div>
            <div className="space-y-3">
              {aiRecommendations.map((rec, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lms-purple-light">
                      {rec.type === "weak_area" && <Target className="h-4 w-4 text-lms-purple" />}
                      {rec.type === "suggestion" && <Flame className="h-4 w-4 text-lms-purple" />}
                      {rec.type === "recommendation" && <Sparkles className="h-4 w-4 text-lms-purple" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground">{rec.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                      <Button variant="link" className="p-0 h-auto text-xs text-lms-blue mt-2">
                        {rec.action} →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Deadlines */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Upcoming Deadlines</h3>
              <div className="space-y-2">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-foreground">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.course}</p>
                    </div>
                    <span className="text-xs font-medium text-lms-rose">{deadline.dueIn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
