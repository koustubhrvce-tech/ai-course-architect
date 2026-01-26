import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UnifiedDashboard } from "@/components/layout/UnifiedDashboard";
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Users,
  Star,
  DollarSign,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=225&fit=crop",
    status: "published",
    students: 1245,
    rating: 4.8,
    reviews: 342,
    revenue: 24500,
    lessons: 45,
    completionRate: 68,
    lastUpdated: "2 days ago",
  },
  {
    id: "2",
    title: "Advanced React & TypeScript",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
    status: "published",
    students: 892,
    rating: 4.9,
    reviews: 215,
    revenue: 18900,
    lessons: 32,
    completionRate: 72,
    lastUpdated: "1 week ago",
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop",
    status: "draft",
    students: 0,
    rating: 0,
    reviews: 0,
    revenue: 0,
    lessons: 18,
    completionRate: 0,
    lastUpdated: "3 hours ago",
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
    status: "review",
    students: 0,
    rating: 0,
    reviews: 0,
    revenue: 0,
    lessons: 28,
    completionRate: 0,
    lastUpdated: "1 day ago",
  },
];

const statusColors = {
  published: "bg-lms-emerald/10 text-lms-emerald",
  draft: "bg-muted text-muted-foreground",
  review: "bg-lms-amber/10 text-lms-amber",
};

export default function CourseManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && course.status === activeTab;
  });

  return (
    <UnifiedDashboard title="Course Management" subtitle="Create and manage your courses">
      <div className="p-6 space-y-6">
        <div className="flex justify-end">
          <Link to="/dashboard/courses/new">
            <Button className="gap-2 bg-lms-blue hover:bg-lms-blue/90">
              <Plus className="h-4 w-4" />
              Create Course
            </Button>
          </Link>
        </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lms-blue/10">
              <BookOpen className="h-5 w-5 text-lms-blue" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Courses</p>
              <p className="text-2xl font-bold">{courses.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lms-emerald/10">
              <Users className="h-5 w-5 text-lms-emerald" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Students</p>
              <p className="text-2xl font-bold">
                {courses.reduce((sum, c) => sum + c.students, 0).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lms-amber/10">
              <Star className="h-5 w-5 text-lms-amber" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Rating</p>
              <p className="text-2xl font-bold">4.85</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lms-purple/10">
              <DollarSign className="h-5 w-5 text-lms-purple" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold">
                ${courses.reduce((sum, c) => sum + c.revenue, 0).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Tabs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({courses.length})</TabsTrigger>
          <TabsTrigger value="published">
            Published ({courses.filter((c) => c.status === "published").length})
          </TabsTrigger>
          <TabsTrigger value="draft">
            Drafts ({courses.filter((c) => c.status === "draft").length})
          </TabsTrigger>
          <TabsTrigger value="review">
            In Review ({courses.filter((c) => c.status === "review").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="grid gap-4">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full lg:w-48 h-28 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={statusColors[course.status as keyof typeof statusColors]}>
                              {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Updated {course.lastUpdated}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground">{course.title}</h3>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/dashboard/courses/${course.id}`} className="flex items-center gap-2">
                                <Edit className="h-4 w-4" />
                                Edit Course
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Students</p>
                          <p className="font-medium flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {course.students.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Rating</p>
                          <p className="font-medium flex items-center gap-1">
                            <Star className="h-3 w-3 text-lms-amber" />
                            {course.rating || "N/A"} ({course.reviews})
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-medium text-lms-emerald">
                            ${course.revenue.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Lessons</p>
                          <p className="font-medium">{course.lessons}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Completion</p>
                          <div className="flex items-center gap-2">
                            <Progress value={course.completionRate} className="h-2 flex-1" />
                            <span className="text-xs">{course.completionRate}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </UnifiedDashboard>
  );
}
