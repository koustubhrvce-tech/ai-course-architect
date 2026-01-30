import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Folder,
  Plus,
  Edit,
  Trash2,
  ChevronRight,
  BookOpen,
  GripVertical,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Technology",
    courses: 342,
    subcategories: [
      { name: "Web Development", courses: 120 },
      { name: "Mobile Development", courses: 85 },
      { name: "Data Science", courses: 78 },
      { name: "AI & Machine Learning", courses: 59 },
    ],
  },
  {
    id: 2,
    name: "Business",
    courses: 256,
    subcategories: [
      { name: "Marketing", courses: 89 },
      { name: "Finance", courses: 67 },
      { name: "Entrepreneurship", courses: 54 },
      { name: "Management", courses: 46 },
    ],
  },
  {
    id: 3,
    name: "Design",
    courses: 189,
    subcategories: [
      { name: "UI/UX Design", courses: 78 },
      { name: "Graphic Design", courses: 56 },
      { name: "3D & Animation", courses: 34 },
      { name: "Photography", courses: 21 },
    ],
  },
  {
    id: 4,
    name: "Personal Development",
    courses: 145,
    subcategories: [
      { name: "Leadership", courses: 45 },
      { name: "Communication", courses: 38 },
      { name: "Productivity", courses: 32 },
      { name: "Career Development", courses: 30 },
    ],
  },
];

const skillTags = [
  "JavaScript", "Python", "React", "Node.js", "SQL", "Machine Learning",
  "Digital Marketing", "SEO", "Leadership", "Project Management", "Figma",
  "Adobe XD", "Data Analysis", "Excel", "Communication", "Time Management",
];

export default function CategoriesPage() {
  return (
    <AdminDashboardLayout title="Categories" subtitle="Manage course categories and skill tags">
      <div className="space-y-6">
        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative">
            <Input placeholder="Search categories..." className="w-full md:w-64" />
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Add Category
          </Button>
        </div>

        {/* Categories */}
        <div className="grid gap-4 lg:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Folder className="h-5 w-5 text-primary" />
                    {category.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{category.courses} courses</Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.subcategories.map((sub, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 cursor-move" />
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{sub.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{sub.courses} courses</span>
                        <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full mt-2 gap-1">
                    <Plus className="h-4 w-4" /> Add Subcategory
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Tags */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle>Skill Tags</CardTitle>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="h-4 w-4" /> Add Tag
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="py-1.5 px-3 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  {tag}
                  <button className="ml-2 opacity-0 group-hover:opacity-100">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminDashboardLayout>
  );
}
