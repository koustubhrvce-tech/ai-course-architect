import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
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

export function StudentDashboardContent() {
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
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "John Smith",
      progress: 42,
      nextLesson: "React Hooks Deep Dive",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Emily Roberts",
      progress: 28,
      nextLesson: "Pandas DataFrames",
    },
  ];

  const aiRecommendations = [
    {
      type: "weak_area",
      title: "Struggling with Calculus",
      description: "AI detected you may need extra practice with derivatives.",
      action: "Start Review",
    },
    {
      type: "suggestion",
      title: "Complete Your Streak",
      description: "You're on a 12-day streak! Watch one lesson to keep it.",
      action: "Continue Learning",
    },
    {
      type: "recommendation",
      title: "Recommended for You",
      description: "'Advanced React Patterns' - 94% match",
      action: "View Course",
    },
  ];

  const upcomingDeadlines = [
    { title: "ML Assignment 3", course: "Machine Learning Fundamentals", dueIn: "2 days" },
    { title: "Quiz: React Basics", course: "Web Development Bootcamp", dueIn: "5 days" },
  ];

  return (
    <div className="page-container">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <TrendingUp className="h-4 w-4 text-lms-emerald" />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* In Progress Courses */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Continue Learning</h2>
            <Link to="/dashboard/my-courses">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex gap-4">
                  <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                    <div className="flex items-center gap-3">
                      <Progress value={course.progress} className="flex-1 h-2" />
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Next: {course.nextLesson}
                    </p>
                  </div>
                  <Link to={`/course/${course.id}/learn`}>
                    <Button size="sm" className="shrink-0 bg-lms-blue hover:bg-lms-blue/90">
                      <Play className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Insights & Recommendations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-lms-purple" />
            <h2 className="text-lg font-semibold">AI Insights</h2>
          </div>
          <div className="space-y-3">
            {aiRecommendations.map((rec, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lms-purple-light">
                      {rec.type === "weak_area" && <Target className="h-4 w-4 text-lms-purple" />}
                      {rec.type === "suggestion" && <Flame className="h-4 w-4 text-lms-purple" />}
                      {rec.type === "recommendation" && <Sparkles className="h-4 w-4 text-lms-purple" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium">{rec.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                      <Button variant="link" className="p-0 h-auto text-xs text-lms-blue mt-2">
                        {rec.action} →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.course}</p>
                    </div>
                    <span className="text-xs font-medium text-lms-rose">{deadline.dueIn}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
