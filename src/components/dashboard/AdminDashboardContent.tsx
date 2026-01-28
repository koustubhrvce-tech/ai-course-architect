import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Shield,
  GraduationCap,
  UserCog,
  Building2,
  Settings,
  Globe,
  Search,
  ArrowUpRight,
} from "lucide-react";

export function AdminDashboardContent() {
  const platformStats = [
    { label: "Total Users", value: "24,847", change: "+12%", icon: Users },
    { label: "Active Courses", value: "1,234", change: "+8%", icon: BookOpen },
    { label: "Monthly Revenue", value: "$284.5K", change: "+15%", icon: DollarSign },
    { label: "Completion Rate", value: "78%", change: "+3%", icon: TrendingUp },
  ];

  const quickActions = [
    { label: "Manage Users", icon: Users, href: "/dashboard/users", color: "bg-primary" },
    { label: "Manage Courses", icon: BookOpen, href: "/dashboard/moderation", color: "bg-accent" },
    { label: "Manage Teachers", icon: GraduationCap, href: "/dashboard/users?tab=teachers", color: "bg-chart-4" },
    { label: "Manage Students", icon: UserCog, href: "/dashboard/users?tab=students", color: "bg-chart-3" },
    { label: "Add Franchise", icon: Building2, href: "/dashboard/franchise/new", color: "bg-destructive" },
    { label: "SEO Settings", icon: Search, href: "/dashboard/seo-settings", color: "bg-chart-2" },
  ];

  const pendingActions = [
    { title: "5 teacher verifications", priority: "high" },
    { title: "3 courses pending", priority: "high" },
    { title: "12 payout requests", priority: "medium" },
  ];

  const systemHealth = [
    { label: "Server Uptime", value: "99.9%", healthy: true },
    { label: "Database", value: "42%", healthy: true },
    { label: "API Response", value: "145ms", healthy: true },
    { label: "Storage", value: "68%", healthy: false },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {platformStats.map((stat) => (
          <Card key={stat.label} className="border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-4 w-4 text-primary" />
                <span className="text-xs text-accent flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Admin Control Center */}
      <Card className="border">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="h-4 w-4 text-primary" />
            Admin Control Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => (
              <Link key={action.label} to={action.href}>
                <div className="flex items-center gap-3 p-3 border hover:border-primary/50 transition-colors cursor-pointer">
                  <div className={`h-10 w-10 ${action.color} flex items-center justify-center flex-shrink-0`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-sm text-foreground">{action.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pending Actions */}
        <Card className="border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Pending Actions</CardTitle>
              <Badge variant="destructive" className="text-xs">20</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {pendingActions.map((action, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-muted/50">
                <AlertTriangle className={`h-4 w-4 ${action.priority === "high" ? "text-destructive" : "text-chart-3"}`} />
                <span className="text-sm text-foreground">{action.title}</span>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-2">
              View All
            </Button>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="border lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 grid-cols-2">
              {systemHealth.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between p-3 bg-muted/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle className={`h-4 w-4 ${metric.healthy ? "text-accent" : "text-chart-3"}`} />
                    <span className="text-sm text-foreground">{metric.label}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{metric.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Franchise Overview */}
      <Card className="border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Building2 className="h-4 w-4" />
              Franchise Network
            </CardTitle>
            <Link to="/dashboard/franchise/new">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Add Franchise
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-3 bg-muted/50">
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground">Franchises</p>
            </div>
            <div className="text-center p-3 bg-muted/50">
              <p className="text-2xl font-bold text-foreground">8,542</p>
              <p className="text-xs text-muted-foreground">Users</p>
            </div>
            <div className="text-center p-3 bg-muted/50">
              <p className="text-2xl font-bold text-foreground">$45.2K</p>
              <p className="text-xs text-muted-foreground">Revenue</p>
            </div>
            <div className="text-center p-3 bg-muted/50">
              <p className="text-2xl font-bold text-foreground">+18%</p>
              <p className="text-xs text-muted-foreground">Growth</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
