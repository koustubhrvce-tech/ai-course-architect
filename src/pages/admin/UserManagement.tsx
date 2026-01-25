import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  Sparkles,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

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
      return <Badge className="bg-lms-emerald/10 text-lms-emerald border-0"><CheckCircle className="h-3 w-3 mr-1" />{status}</Badge>;
    case "inactive":
    case "rejected":
      return <Badge className="bg-lms-rose/10 text-lms-rose border-0"><XCircle className="h-3 w-3 mr-1" />{status}</Badge>;
    case "pending":
      return <Badge className="bg-lms-amber/10 text-lms-amber border-0"><Clock className="h-3 w-3 mr-1" />{status}</Badge>;
    case "suspended":
      return <Badge className="bg-lms-rose/10 text-lms-rose border-0">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function UserManagement() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-muted-foreground">Manage students, teachers, and administrators</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-2 bg-lms-blue hover:bg-lms-blue/90">
              <UserPlus className="h-4 w-4" />
              Add User
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-lms-blue/10">
                  <GraduationCap className="h-6 w-6 text-lms-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12,542</p>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-lms-emerald/10">
                  <Users className="h-6 w-6 text-lms-emerald" />
                </div>
                <div>
                  <p className="text-2xl font-bold">195</p>
                  <p className="text-sm text-muted-foreground">Total Teachers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-lms-purple/10">
                  <Shield className="h-6 w-6 text-lms-purple" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Admin Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Tables */}
        <Card>
          <Tabs defaultValue="students">
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                  <TabsTrigger value="admins">Admins</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Sparkles className="h-4 w-4 text-lms-purple" />
                    AI Segment
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <TabsContent value="students" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Spent</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell className="text-muted-foreground">{student.email}</TableCell>
                        <TableCell>{student.courses}</TableCell>
                        <TableCell>{getStatusBadge(student.status)}</TableCell>
                        <TableCell className="text-muted-foreground">{student.joined}</TableCell>
                        <TableCell className="font-medium">{student.spent}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuItem className="text-lms-rose">Suspend</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="teachers" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Earnings</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell className="text-muted-foreground">{teacher.email}</TableCell>
                        <TableCell>{teacher.courses}</TableCell>
                        <TableCell>{teacher.students.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(teacher.status)}</TableCell>
                        <TableCell className="font-medium">{teacher.earnings}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>View Courses</DropdownMenuItem>
                              <DropdownMenuItem>Approve/Reject</DropdownMenuItem>
                              <DropdownMenuItem className="text-lms-rose">Suspend</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="admins" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {admins.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell className="font-medium">{admin.name}</TableCell>
                        <TableCell className="text-muted-foreground">{admin.email}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{admin.role}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{admin.lastLogin}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                              <DropdownMenuItem className="text-lms-rose">Remove Admin</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </AdminLayout>
  );
}
