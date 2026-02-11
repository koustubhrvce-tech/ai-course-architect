import { useState } from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  MoreVertical,
  UserPlus,
  Download,
  Shield,
  GraduationCap,
  Users,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const students = [
  { id: 1, name: "Emma Wilson", email: "emma@example.com", courses: 5, status: "active", joined: "Jan 15, 2024", spent: "$249" },
  { id: 2, name: "James Chen", email: "james@example.com", courses: 3, status: "active", joined: "Feb 2, 2024", spent: "$149" },
  { id: 3, name: "Sarah Johnson", email: "sarah@example.com", courses: 8, status: "active", joined: "Dec 10, 2023", spent: "$499" },
  { id: 4, name: "Michael Brown", email: "michael@example.com", courses: 2, status: "inactive", joined: "Mar 5, 2024", spent: "$79" },
  { id: 5, name: "Lisa Anderson", email: "lisa@example.com", courses: 4, status: "suspended", joined: "Jan 22, 2024", spent: "$199" },
];

const teachers = [
  { id: 1, name: "Dr. John Smith", email: "john@example.com", courses: 12, students: 2840, status: "verified", earnings: "$45,200" },
  { id: 2, name: "Prof. Maria Garcia", email: "maria@example.com", courses: 8, students: 1560, status: "verified", earnings: "$28,400" },
  { id: 3, name: "Alex Thompson", email: "alex@example.com", courses: 3, students: 420, status: "pending", earnings: "$5,600" },
  { id: 4, name: "Jennifer Lee", email: "jennifer@example.com", courses: 6, students: 890, status: "verified", earnings: "$15,800" },
  { id: 5, name: "Robert Wilson", email: "robert@example.com", courses: 2, students: 150, status: "rejected", earnings: "$0" },
];

const admins = [
  { id: 1, name: "Admin User", email: "admin@lms.com", role: "Super Admin", lastLogin: "2 hours ago" },
  { id: 2, name: "Support Team", email: "support@lms.com", role: "Support Admin", lastLogin: "30 mins ago" },
  { id: 3, name: "Content Mod", email: "content@lms.com", role: "Content Moderator", lastLogin: "1 day ago" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
    case "verified":
      return <Badge className="bg-primary/10 text-primary border-0 text-[10px] md:text-xs"><CheckCircle className="h-3 w-3 mr-1" />{status}</Badge>;
    case "inactive":
    case "rejected":
      return <Badge className="bg-destructive/10 text-destructive border-0 text-[10px] md:text-xs"><XCircle className="h-3 w-3 mr-1" />{status}</Badge>;
    case "pending":
      return <Badge className="bg-chart-3/10 text-chart-3 border-0 text-[10px] md:text-xs"><Clock className="h-3 w-3 mr-1" />{status}</Badge>;
    case "suspended":
      return <Badge className="bg-destructive/10 text-destructive border-0 text-[10px] md:text-xs">{status}</Badge>;
    default:
      return <Badge variant="secondary" className="text-[10px] md:text-xs">{status}</Badge>;
  }
};

export default function UserManagement() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "student", password: "", confirmPassword: "" });
  const { toast } = useToast();

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (newUser.password !== newUser.confirmPassword) {
      toast({ title: "Password mismatch", description: "Passwords do not match.", variant: "destructive" });
      return;
    }
    if (newUser.password.length < 8) {
      toast({ title: "Weak password", description: "Password must be at least 8 characters.", variant: "destructive" });
      return;
    }
    toast({ title: "User Created", description: `${newUser.name} has been added as ${newUser.role}.` });
    setNewUser({ name: "", email: "", role: "student", password: "", confirmPassword: "" });
    setIsAddOpen(false);
  };

  return (
    <AdminDashboardLayout title="User Management" subtitle="Manage students, teachers, and administrators">
      <div className="space-y-4 md:space-y-6">
        {/* Stats */}
        <div className="grid gap-3 grid-cols-3">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-3 md:p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-bold">12,542</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
            <CardContent className="p-3 md:p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-chart-2/10">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-chart-2" />
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-bold">195</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Teachers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
            <CardContent className="p-3 md:p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-chart-4/10">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-chart-4" />
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-bold">8</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Admins</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Tables */}
        <Card>
          <Tabs defaultValue="students">
            <CardHeader className="pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <TabsList className="w-full md:w-auto">
                  <TabsTrigger value="students" className="text-xs md:text-sm">Students</TabsTrigger>
                  <TabsTrigger value="teachers" className="text-xs md:text-sm">Teachers</TabsTrigger>
                  <TabsTrigger value="admins" className="text-xs md:text-sm">Admins</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 md:flex-none">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users..." className="pl-9 w-full md:w-56 text-xs md:text-sm" />
                  </div>
                  <Button variant="outline" size="icon" className="h-9 w-9 shrink-0">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 hidden sm:flex">
                    <Download className="h-4 w-4" /> Export
                  </Button>
                  <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90">
                        <UserPlus className="h-4 w-4" />
                        <span className="hidden sm:inline">Add User</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-2">
                        <div className="space-y-2">
                          <Label>Full Name *</Label>
                          <Input placeholder="John Doe" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Email *</Label>
                          <Input type="email" placeholder="john@example.com" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Role</Label>
                          <Select value={newUser.role} onValueChange={(v) => setNewUser({ ...newUser, role: v })}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Password *</Label>
                          <Input type="password" placeholder="Min 8 characters" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Confirm Password *</Label>
                          <Input type="password" placeholder="Re-enter password" value={newUser.confirmPassword} onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })} />
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" className="flex-1" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                          <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleAddUser}>Create User</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 p-2 md:p-6 md:pt-4">
              <TabsContent value="students" className="m-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs">Name</TableHead>
                        <TableHead className="text-xs hidden md:table-cell">Email</TableHead>
                        <TableHead className="text-xs">Courses</TableHead>
                        <TableHead className="text-xs">Status</TableHead>
                        <TableHead className="text-xs hidden sm:table-cell">Joined</TableHead>
                        <TableHead className="text-xs hidden lg:table-cell">Spent</TableHead>
                        <TableHead className="w-10"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((s) => (
                        <TableRow key={s.id}>
                          <TableCell className="text-xs md:text-sm font-medium p-2 md:p-4">{s.name}</TableCell>
                          <TableCell className="text-xs text-muted-foreground hidden md:table-cell">{s.email}</TableCell>
                          <TableCell className="text-xs md:text-sm p-2 md:p-4">{s.courses}</TableCell>
                          <TableCell className="p-2 md:p-4">{getStatusBadge(s.status)}</TableCell>
                          <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">{s.joined}</TableCell>
                          <TableCell className="text-xs font-medium hidden lg:table-cell">{s.spent}</TableCell>
                          <TableCell className="p-2 md:p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-7 w-7"><MoreVertical className="h-4 w-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Profile</DropdownMenuItem>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Send Message</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Suspend</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="teachers" className="m-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs">Name</TableHead>
                        <TableHead className="text-xs hidden md:table-cell">Email</TableHead>
                        <TableHead className="text-xs">Courses</TableHead>
                        <TableHead className="text-xs hidden sm:table-cell">Students</TableHead>
                        <TableHead className="text-xs">Status</TableHead>
                        <TableHead className="text-xs hidden lg:table-cell">Earnings</TableHead>
                        <TableHead className="w-10"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teachers.map((t) => (
                        <TableRow key={t.id}>
                          <TableCell className="text-xs md:text-sm font-medium p-2 md:p-4">{t.name}</TableCell>
                          <TableCell className="text-xs text-muted-foreground hidden md:table-cell">{t.email}</TableCell>
                          <TableCell className="text-xs md:text-sm p-2 md:p-4">{t.courses}</TableCell>
                          <TableCell className="text-xs hidden sm:table-cell">{t.students.toLocaleString()}</TableCell>
                          <TableCell className="p-2 md:p-4">{getStatusBadge(t.status)}</TableCell>
                          <TableCell className="text-xs font-medium hidden lg:table-cell">{t.earnings}</TableCell>
                          <TableCell className="p-2 md:p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-7 w-7"><MoreVertical className="h-4 w-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Profile</DropdownMenuItem>
                                <DropdownMenuItem>View Courses</DropdownMenuItem>
                                <DropdownMenuItem>Approve/Reject</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Suspend</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="admins" className="m-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs">Name</TableHead>
                        <TableHead className="text-xs hidden md:table-cell">Email</TableHead>
                        <TableHead className="text-xs">Role</TableHead>
                        <TableHead className="text-xs hidden sm:table-cell">Last Login</TableHead>
                        <TableHead className="w-10"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {admins.map((a) => (
                        <TableRow key={a.id}>
                          <TableCell className="text-xs md:text-sm font-medium p-2 md:p-4">{a.name}</TableCell>
                          <TableCell className="text-xs text-muted-foreground hidden md:table-cell">{a.email}</TableCell>
                          <TableCell className="p-2 md:p-4"><Badge variant="secondary" className="text-[10px] md:text-xs">{a.role}</Badge></TableCell>
                          <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">{a.lastLogin}</TableCell>
                          <TableCell className="p-2 md:p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-7 w-7"><MoreVertical className="h-4 w-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Remove Admin</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </AdminDashboardLayout>
  );
}
