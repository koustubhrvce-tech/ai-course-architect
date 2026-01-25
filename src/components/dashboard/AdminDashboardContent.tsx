import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Sparkles,
  Shield,
  Activity,
} from "lucide-react";

export function AdminDashboardContent() {
  const platformStats = [
    { label: "Total Users", value: "24,847", change: "+12%", icon: Users, color: "text-lms-blue" },
    { label: "Active Courses", value: "1,234", change: "+8%", icon: BookOpen, color: "text-lms-emerald" },
    { label: "Monthly Revenue", value: "$284,500", change: "+15%", icon: DollarSign, color: "text-lms-purple" },
    { label: "Completion Rate", value: "78%", change: "+3%", icon: TrendingUp, color: "text-lms-amber" },
  ];

  const aiHealthMetrics = [
    { label: "AI Uptime", value: 99.9, status: "healthy" },
    { label: "Response Time", value: 85, status: "healthy" },
    { label: "Accuracy Score", value: 94, status: "healthy" },
    { label: "Usage Capacity", value: 67, status: "warning" },
  ];

  const pendingActions = [
    { type: "course", title: "3 courses pending review", priority: "high" },
    { type: "user", title: "5 teacher verification requests", priority: "medium" },
    { type: "report", title: "2 content reports to review", priority: "high" },
    { type: "system", title: "AI model update available", priority: "low" },
  ];

  const recentActivity = [
    { action: "New teacher registered", user: "Dr. Emily Watson", time: "5 min ago" },
    { action: "Course approved", user: "Admin Team", time: "15 min ago" },
    { action: "Content flagged", user: "Auto-moderation", time: "1 hour ago" },
    { action: "Payment processed", user: "System", time: "2 hours ago" },
  ];

  return (
    <div className="page-container">
      {/* Platform Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platformStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-xs font-medium text-lms-emerald">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* AI Health Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-lms-purple" />
                AI System Health
              </CardTitle>
              <Badge className="bg-lms-emerald">All Systems Operational</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {aiHealthMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm text-muted-foreground">{metric.value}%</span>
                  </div>
                  <Progress
                    value={metric.value}
                    className={`h-2 ${
                      metric.status === "warning" ? "[&>div]:bg-lms-amber" : "[&>div]:bg-lms-emerald"
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-lms-purple-light border border-lms-purple/20">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-lms-purple mt-0.5" />
                <div>
                  <p className="font-medium text-sm">AI Recommendation</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Usage capacity reaching 70%. Consider upgrading AI processing resources for peak hours.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pending Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
              >
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  action.priority === "high" ? "bg-lms-rose/10" :
                  action.priority === "medium" ? "bg-lms-amber/10" : "bg-muted"
                }`}>
                  {action.priority === "high" && <AlertTriangle className="h-4 w-4 text-lms-rose" />}
                  {action.priority === "medium" && <Clock className="h-4 w-4 text-lms-amber" />}
                  {action.priority === "low" && <CheckCircle className="h-4 w-4 text-muted-foreground" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{action.title}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {action.priority}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2">View All Actions</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Security Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-lms-emerald" />
              Security Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-lms-emerald" />
                  <span className="text-sm">SSL Certificate</span>
                </div>
                <Badge className="bg-lms-emerald">Valid</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-lms-emerald" />
                  <span className="text-sm">DDoS Protection</span>
                </div>
                <Badge className="bg-lms-emerald">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-lms-emerald" />
                  <span className="text-sm">Data Encryption</span>
                </div>
                <Badge className="bg-lms-emerald">AES-256</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-lms-amber" />
                  <span className="text-sm">Failed Login Attempts</span>
                </div>
                <Badge variant="outline">12 today</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-lms-blue mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
