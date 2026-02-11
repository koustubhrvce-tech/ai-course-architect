import { useState } from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Folder,
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Tag,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialCategories = [
  { id: 1, name: "Technology", slug: "technology", courses: 342 },
  { id: 2, name: "Business", slug: "business", courses: 256 },
  { id: 3, name: "Design", slug: "design", courses: 189 },
  { id: 4, name: "Personal Development", slug: "personal-development", courses: 145 },
  { id: 5, name: "Marketing", slug: "marketing", courses: 89 },
  { id: 6, name: "Data Science", slug: "data-science", courses: 78 },
  { id: 7, name: "Photography", slug: "photography", courses: 54 },
  { id: 8, name: "Health & Fitness", slug: "health-fitness", courses: 42 },
];

const initialTags = [
  "JavaScript", "Python", "React", "Node.js", "SQL", "Machine Learning",
  "Digital Marketing", "SEO", "Leadership", "Project Management", "Figma",
  "Adobe XD", "Data Analysis", "Excel", "Communication", "Time Management",
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [tags, setTags] = useState(initialTags);
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editCat, setEditCat] = useState({ id: 0, name: "", slug: "" });
  const [newCat, setNewCat] = useState({ name: "", slug: "", description: "" });
  const [newTag, setNewTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleAddCategory = () => {
    if (!newCat.name || !newCat.slug) {
      toast({ title: "Missing fields", description: "Name and slug are required.", variant: "destructive" });
      return;
    }
    setCategories([...categories, { id: Date.now(), name: newCat.name, slug: newCat.slug, courses: 0 }]);
    toast({ title: "Category Added", description: `"${newCat.name}" has been created.` });
    setNewCat({ name: "", slug: "", description: "" });
    setIsCatOpen(false);
  };

  const handleEditCategory = () => {
    if (!editCat.name || !editCat.slug) {
      toast({ title: "Missing fields", description: "Name and slug are required.", variant: "destructive" });
      return;
    }
    setCategories(categories.map(c => c.id === editCat.id ? { ...c, name: editCat.name, slug: editCat.slug } : c));
    toast({ title: "Category Updated", description: `"${editCat.name}" has been updated.` });
    setIsEditOpen(false);
  };

  const handleDeleteCategory = (id: number, name: string) => {
    setCategories(categories.filter(c => c.id !== id));
    toast({ title: "Category Deleted", description: `"${name}" has been removed.` });
  };

  const handleAddTag = () => {
    if (!newTag.trim()) {
      toast({ title: "Missing tag", description: "Please enter a tag name.", variant: "destructive" });
      return;
    }
    if (tags.includes(newTag.trim())) {
      toast({ title: "Duplicate", description: "This tag already exists.", variant: "destructive" });
      return;
    }
    setTags([...tags, newTag.trim()]);
    toast({ title: "Tag Added", description: `"${newTag.trim()}" has been created.` });
    setNewTag("");
    setIsTagOpen(false);
  };

  const handleDeleteTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
    toast({ title: "Tag Removed", description: `"${tag}" has been deleted.` });
  };

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminDashboardLayout title="Categories & Tags" subtitle="Manage course categories and skill tags">
      <div className="space-y-4 md:space-y-6">
        {/* Categories Section */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Folder className="h-5 w-5 text-primary" />
                Categories
              </CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:flex-none">
                  <Input
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-48 text-xs md:text-sm"
                  />
                </div>
                <Dialog open={isCatOpen} onOpenChange={setIsCatOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90">
                      <Plus className="h-4 w-4" /> Add
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Category</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-2">
                      <div className="space-y-2">
                        <Label>Title *</Label>
                        <Input placeholder="e.g., Web Development" value={newCat.name} onChange={(e) => setNewCat({ ...newCat, name: e.target.value })} />
                      </div>
                      <div className="space-y-2">
                        <Label>Slug *</Label>
                        <Input placeholder="e.g., web-development" value={newCat.slug} onChange={(e) => setNewCat({ ...newCat, slug: e.target.value })} />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Input placeholder="Brief description..." value={newCat.description} onChange={(e) => setNewCat({ ...newCat, description: e.target.value })} />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" className="flex-1" onClick={() => setIsCatOpen(false)}>Cancel</Button>
                        <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleAddCategory}>Create</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 md:px-6 md:pb-6">
            <div className="divide-y">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between px-4 md:px-3 py-3 hover:bg-muted/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Folder className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-medium truncate">{cat.name}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground">/{cat.slug}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] md:text-xs flex items-center gap-1">
                      <BookOpen className="h-3 w-3" /> {cat.courses}
                    </Badge>
                    <Button
                      variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100"
                      onClick={() => { setEditCat({ id: cat.id, name: cat.name, slug: cat.slug }); setIsEditOpen(true); }}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 text-destructive hover:text-destructive"
                      onClick={() => handleDeleteCategory(cat.id, cat.name)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Edit Category Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={editCat.name} onChange={(e) => setEditCat({ ...editCat, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Slug *</Label>
                <Input value={editCat.slug} onChange={(e) => setEditCat({ ...editCat, slug: e.target.value })} />
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" onClick={() => setIsEditOpen(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleEditCategory}>Save</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Tags Section */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Tag className="h-5 w-5 text-chart-4" />
                Skill Tags
              </CardTitle>
              <Dialog open={isTagOpen} onOpenChange={setIsTagOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Plus className="h-4 w-4" /> Add Tag
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Add Skill Tag</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <Label>Tag Name *</Label>
                      <Input placeholder="e.g., TypeScript" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setIsTagOpen(false)}>Cancel</Button>
                      <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleAddTag}>Add</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="py-1.5 px-3 text-xs cursor-default group"
                >
                  {tag}
                  <button
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleDeleteTag(tag)}
                  >
                    <X className="h-3 w-3" />
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
