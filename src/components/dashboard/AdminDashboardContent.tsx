import { Link } from "react-router-dom";
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
  Shield,
  Activity,
  GraduationCap,
  UserCog,
  Building2,
  Settings,
  FileText,
  Globe,
  CreditCard,
  BarChart3,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export function AdminDashboardContent() {
  const platformStats = [
    { label: "Total Users", value: "24,847", change: "+12%", trend: "up", icon: Users, color: "text-lms-blue" },
    { label: "Active Courses", value: "1,234", change: "+8%", trend: "up", icon: BookOpen, color: "text-lms-emerald" },
    { label: "Monthly Revenue", value: "$284,500", change: "+15%", trend: "up", icon: DollarSign, color: "text-lms-purple" },
    { label: "Completion Rate", value: "78%", change: "+3%", trend: "up", icon: TrendingUp, color: "text-lms-amber" },
  ];

  const quickActions = [
    { 
      label: "Manage Users", 
      description: "View, edit, and manage all platform users",
      icon: Users, 
      href: "/dashboard/users",
      color: "bg-lms-blue" 
    },
    { 
      label: "Manage Courses", 
      description: "Review, approve, and moderate courses",
      icon: BookOpen, 
      href: "/dashboard/moderation",
      color: "bg-lms-emerald" 
    },
    { 
      label: "Manage Teachers", 
      description: "Verify instructors and manage payouts",
      icon: GraduationCap, 
      href: "/dashboard/users?tab=teachers",
      color: "bg-lms-purple" 
    },
    { 
      label: "Manage Students", 
      description: "View enrollments and progress",
      icon: UserCog, 
      href: "/dashboard/users?tab=students",
      color: "bg-lms-amber" 
    },
    { 
      label: "Add Franchise", 
      description: "Create new franchise location",
      icon: Building2, 
      href: "/dashboard/franchise/new",
      color: "bg-lms-rose" 
    },
    { 
      label: "Platform Settings", 
      description: "Configure system settings",
      icon: Settings, 
      href: "/dashboard/settings",
      color: "bg-slate-600" 
    },
  ];

  const pendingActions = [
    { type: "teacher", title: "5 teacher verification requests", priority: "high", count: 5 },
    { type: "course", title: "3 courses pending approval", priority: "high", count: 3 },
    { type: "payout", title: "12 payout requests pending", priority: "medium", count: 12 },
    { type: "report", title: "2 content reports to review", priority: "high", count: 2 },
    { type: "refund", title: "4 refund requests", priority: "medium", count: 4 },
  ];

  const recentActivity = [
    { action: "New teacher registered", user: "Dr. Emily Watson", time: "5 min ago", type: "teacher" },
    { action: "Course approved", user: "Admin Team", time: "15 min ago", type: "course" },
    { action: "Payout processed", user: "System", time: "1 hour ago", type: "payout" },
    { action: "User suspended", user: "Moderation", time: "2 hours ago", type: "user" },
    { action: "Franchise created", user: "Admin", time: "3 hours ago", type: "franchise" },
  ];

  const systemHealth = [
    { label: "Server Uptime", value: "99.9%", status: "healthy" },
    { label: "Database Load", value: "42%", status: "healthy" },
    { label: "API Response", value: "145ms", status: "healthy" },
    { label: "Storage Used", value: "68%", status: "warning" },
  ];

  const revenueBreakdown = [
    { label: "Course Sales", amount: "$198,500", percentage: 70 },
    { label: "Subscriptions", amount: "$62,300", percentage: 22 },
    { label: "Certificates", amount: "$15,400", percentage: 5 },
    { label: "Franchise Fees", amount: "$8,300", percentage: 3 },
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
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend === 'up' ? 'text-lms-emerald' : 'text-lms-rose'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* God Level Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-lms-purple" />
            Admin Control Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => (
              <Link key={action.label} to={action.href}>
                <div className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer group">
                  <div className={`h-12 w-12 rounded-lg ${action.color} flex items-center justify-center shrink-0`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold group-hover:text-lms-blue transition-colors">{action.label}</p>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pending Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Pending Actions</CardTitle>
              <Badge variant="outline" className="bg-lms-rose/10 text-lms-rose border-lms-rose/20">
                {pendingActions.reduce((acc, item) => acc + item.count, 0)} total
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
              >
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  action.priority === "high" ? "bg-lms-rose/10" : "bg-lms-amber/10"
                }`}>
                  {action.priority === "high" ? (
                    <AlertTriangle className="h-4 w-4 text-lms-rose" />
                  ) : (
                    <Clock className="h-4 w-4 text-lms-amber" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{action.title}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {action.count}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2">
              View All Actions
            </Button>
          </CardContent>
        </Card>

        {/* Revenue Breakdown */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Revenue Breakdown
              </CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                View Reports
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueBreakdown.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.amount}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={item.percentage} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground w-8">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {systemHealth.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 ${
                      metric.status === "healthy" ? "text-lms-emerald" : "text-lms-amber"
                    }`} />
                    <span className="text-sm">{metric.label}</span>
                  </div>
                  <Badge className={`${
                    metric.status === "healthy" ? "bg-lms-emerald" : "bg-lms-amber"
                  }`}>
                    {metric.value}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg border border-dashed">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Last Backup</p>
                  <p className="text-xs text-muted-foreground">Today at 3:00 AM</p>
                </div>
                <Button variant="outline" size="sm">Run Backup</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`h-2 w-2 rounded-full mt-2 ${
                    activity.type === "teacher" ? "bg-lms-purple" :
                    activity.type === "course" ? "bg-lms-blue" :
                    activity.type === "payout" ? "bg-lms-emerald" :
                    activity.type === "franchise" ? "bg-lms-rose" :
                    "bg-lms-amber"
                  }`} />
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

      {/* Franchise Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Franchise Network
            </CardTitle>
            <Link to="/dashboard/franchise/new">
              <Button size="sm" className="gap-2 bg-lms-purple hover:bg-lms-purple/90">
                <Plus className="h-4 w-4" />
                Add Franchise
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Total Franchises</span>
              </div>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Franchise Users</span>
              </div>
              <p className="text-2xl font-bold">8,542</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Franchise Revenue</span>
              </div>
              <p className="text-2xl font-bold">$45,200</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Growth</span>
              </div>
              <p className="text-2xl font-bold">+18%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
