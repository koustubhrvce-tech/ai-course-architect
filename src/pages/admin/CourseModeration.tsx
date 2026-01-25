import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Eye,
  Sparkles,
  Flag,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const pendingCourses = [
  {
    id: 1,
    title: "Advanced Machine Learning with Python",
    teacher: "Dr. Sarah Chen",
    category: "Data Science",
    submitted: "2 hours ago",
    lessons: 24,
    aiScore: 92,
  },
  {
    id: 2,
    title: "Complete UI/UX Design Bootcamp",
    teacher: "Alex Thompson",
    category: "Design",
    submitted: "5 hours ago",
    lessons: 18,
    aiScore: 88,
  },
  {
    id: 3,
    title: "Blockchain Fundamentals",
    teacher: "Michael Brown",
    category: "Technology",
    submitted: "1 day ago",
    lessons: 12,
    aiScore: 75,
  },
];

const flaggedContent = [
  {
    id: 1,
    type: "Course",
    title: "Quick Money Trading",
    reason: "Misleading claims",
    reports: 12,
    severity: "high",
  },
  {
    id: 2,
    type: "Lesson",
    title: "Chapter 5: Advanced Techniques",
    reason: "Copyright violation",
    reports: 3,
    severity: "medium",
  },
  {
    id: 3,
    type: "Review",
    title: "Spam review on React Course",
    reason: "Promotional content",
    reports: 8,
    severity: "low",
  },
];

const aiInsights = [
  { label: "Content Quality Score", value: "87%", trend: "+2%" },
  { label: "Avg. Course Completion", value: "68%", trend: "+5%" },
  { label: "Student Satisfaction", value: "4.6/5", trend: "+0.2" },
  { label: "Flagged Content Rate", value: "0.3%", trend: "-0.1%" },
];

export default function CourseModeration() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Course Moderation</h1>
            <p className="text-muted-foreground">Review and moderate platform content</p>
          </div>
          <Button className="gap-2" variant="outline">
            <Sparkles className="h-4 w-4 text-lms-purple" />
            AI Content Scan
          </Button>
        </div>

        {/* AI Insights */}
        <div className="grid gap-4 sm:grid-cols-4">
          {aiInsights.map((insight) => (
            <Card key={insight.label}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{insight.label}</p>
                  <span className="text-xs text-lms-emerald">{insight.trend}</span>
                </div>
                <p className="text-2xl font-bold mt-1">{insight.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Moderation Tabs */}
        <Card>
          <Tabs defaultValue="pending">
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="pending" className="gap-2">
                    <Clock className="h-4 w-4" />
                    Pending Review
                    <Badge variant="secondary" className="ml-1">3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="flagged" className="gap-2">
                    <Flag className="h-4 w-4" />
                    Flagged Content
                    <Badge variant="destructive" className="ml-1">3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="approved">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Recently Approved
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search content..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <TabsContent value="pending" className="m-0 space-y-4">
                {pendingCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-24 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          by {course.teacher} • {course.category} • {course.lessons} lessons
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Submitted {course.submitted}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* AI Quality Score */}
                      <div className="text-center px-4 py-2 rounded-lg bg-muted">
                        <div className="flex items-center gap-1">
                          <Sparkles className="h-4 w-4 text-lms-purple" />
                          <span className="font-bold">{course.aiScore}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">AI Score</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Eye className="h-4 w-4" />
                          Preview
                        </Button>
                        <Button size="sm" className="gap-1 bg-lms-emerald hover:bg-lms-emerald/90">
                          <ThumbsUp className="h-4 w-4" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive" className="gap-1">
                          <ThumbsDown className="h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="flagged" className="m-0 space-y-4">
                {flaggedContent.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-card"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        item.severity === "high" ? "bg-lms-rose/10" :
                        item.severity === "medium" ? "bg-lms-amber/10" : "bg-muted"
                      }`}>
                        <AlertTriangle className={`h-5 w-5 ${
                          item.severity === "high" ? "text-lms-rose" :
                          item.severity === "medium" ? "text-lms-amber" : "text-muted-foreground"
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.type}</Badge>
                          <h3 className="font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Reason: {item.reason} • {item.reports} reports
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        item.severity === "high" ? "destructive" :
                        item.severity === "medium" ? "secondary" : "outline"
                      }>
                        {item.severity} priority
                      </Badge>
                      <Button variant="outline" size="sm">Review</Button>
                      <Button size="sm" variant="destructive">Remove</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="approved" className="m-0">
                <div className="text-center py-12 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-lms-emerald" />
                  <p>Recently approved courses will appear here</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </AdminLayout>
  );
}
