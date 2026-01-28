import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { DollarSign, Users, BookOpen, Star, ArrowRight, Plus, TrendingUp } from "lucide-react";

export function TeacherDashboardContent() {
  const stats = [
    { label: "Total Revenue", value: "$84,254", change: "+12.5%", icon: DollarSign },
    { label: "Total Students", value: "3,842", change: "+8.2%", icon: Users },
    { label: "Active Courses", value: "12", icon: BookOpen },
    { label: "Avg. Rating", value: "4.8", icon: Star },
  ];

  const topCourses = [
    { title: "Machine Learning Fundamentals", students: 1245, revenue: "$24,500", rating: 4.9 },
    { title: "Python for Data Science", students: 892, revenue: "$17,840", rating: 4.8 },
    { title: "Web Development Bootcamp", students: 756, revenue: "$15,120", rating: 4.7 },
  ];

  const recentActivity = [
    { action: "New enrollment", course: "Machine Learning", time: "5 min ago" },
    { action: "Review received", course: "Python for Data Science", time: "1 hour ago" },
    { action: "Payout processed", course: "$2,450.00", time: "2 hours ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Action */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Overview</h2>
          <p className="text-sm text-muted-foreground">Your teaching performance this month</p>
        </div>
        <Link to="/dashboard/courses/new">
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="h-4 w-4" />
            Create Course
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-4 w-4 text-primary" />
                {stat.change && (
                  <span className="text-xs text-accent flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Top Courses */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Top Performing Courses</h3>
            <Link to="/dashboard/courses" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <Card className="border">
            <CardContent className="p-0">
              <div className="divide-y">
                {topCourses.map((course, index) => (
                  <div key={index} className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">{course.title}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <span>{course.students} students</span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-accent" />
                          {course.rating}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{course.revenue}</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
          <Card className="border">
            <CardContent className="p-4 space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.course}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Earnings Summary */}
          <Card className="border mt-4">
            <CardContent className="p-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">This Month</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Gross Revenue</span>
                  <span className="font-medium text-foreground">$12,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform Fee (15%)</span>
                  <span className="font-medium text-foreground">-$1,867</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-sm">
                  <span className="font-medium text-foreground">Net Earnings</span>
                  <span className="font-bold text-primary">$10,583</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
