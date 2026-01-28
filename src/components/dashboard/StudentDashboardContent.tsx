import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Trophy,
  Play,
  ArrowRight,
  Calendar,
} from "lucide-react";

export function StudentDashboardContent() {
  const stats = [
    { label: "Courses Enrolled", value: "8", icon: BookOpen },
    { label: "Hours Learned", value: "47", icon: Clock },
    { label: "Certificates", value: "3", icon: Trophy },
  ];

  const inProgressCourses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      instructor: "Stanford University",
      progress: 65,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=120&h=80&fit=crop",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "Meta",
      progress: 42,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=120&h=80&fit=crop",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "University of Michigan",
      progress: 28,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=80&fit=crop",
    },
  ];

  const upcomingDeadlines = [
    { title: "ML Assignment 3", course: "Machine Learning", dueIn: "2 days" },
    { title: "Quiz: React Basics", course: "Web Development", dueIn: "5 days" },
    { title: "Final Project", course: "Data Science", dueIn: "1 week" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-primary p-6 text-primary-foreground">
        <h2 className="text-xl font-semibold mb-1">Welcome back!</h2>
        <p className="text-primary-foreground/80 text-sm">
          You have 3 courses in progress. Keep up the great work!
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border">
            <CardContent className="p-4 text-center">
              <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Learning */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Continue Learning</h3>
          <Link to="/dashboard/my-courses" className="text-sm text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-3">
          {inProgressCourses.map((course) => (
            <Card key={course.id} className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-14 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{course.instructor}</p>
                    <h4 className="font-medium text-foreground text-sm truncate">{course.title}</h4>
                    <div className="flex items-center gap-3 mt-2">
                      <Progress value={course.progress} className="flex-1 h-1" />
                      <span className="text-xs text-muted-foreground">{course.progress}%</span>
                    </div>
                  </div>
                  <Link to={`/learn/${course.id}/lesson/1`}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 h-8 w-8 p-0">
                      <Play className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <Card className="border">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-foreground text-sm">Upcoming Deadlines</h3>
          </div>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{deadline.title}</p>
                  <p className="text-xs text-muted-foreground">{deadline.course}</p>
                </div>
                <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-1">{deadline.dueIn}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
