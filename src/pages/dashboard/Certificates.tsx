import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { UnifiedDashboard } from "@/components/layout/UnifiedDashboard";
import {
  Award,
  Download,
  Share2,
  ExternalLink,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const certificates = [
  {
    id: "1",
    courseName: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    completedDate: "Jan 15, 2024",
    credentialId: "CERT-WD-2024-001",
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=225&fit=crop",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: "2",
    courseName: "UI/UX Design Fundamentals",
    instructor: "Sarah Johnson",
    completedDate: "Dec 20, 2023",
    credentialId: "CERT-UX-2023-045",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
  {
    id: "3",
    courseName: "Python for Data Science",
    instructor: "Mike Chen",
    completedDate: "Nov 10, 2023",
    credentialId: "CERT-DS-2023-089",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
  },
];

function CertificatesContent() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Stats */}
      <div className="grid gap-3 grid-cols-3">
        <Card className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
          <CardContent className="p-3 md:p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-chart-3/10">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-chart-3" />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-bold">{certificates.length}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Certificates</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-3 md:p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-bold">12</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Skills</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
          <CardContent className="p-3 md:p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-chart-2/10">
              <Share2 className="h-4 w-4 md:h-5 md:w-5 text-chart-2" />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-bold">8</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Shared</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <Card key={cert.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-32 md:h-40">
              <img src={cert.thumbnail} alt={cert.courseName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-chart-3" />
                  <span className="text-white font-medium text-xs">Certificate of Completion</span>
                </div>
              </div>
            </div>
            <CardContent className="p-3 md:p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-foreground text-xs md:text-sm line-clamp-2">{cert.courseName}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground">by {cert.instructor}</p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Completed {cert.completedDate}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {cert.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-[10px]">{skill}</Badge>
                ))}
                {cert.skills.length > 3 && <Badge variant="secondary" className="text-[10px]">+{cert.skills.length - 3}</Badge>}
              </div>
              <div className="pt-2 border-t">
                <p className="text-[10px] text-muted-foreground mb-2">ID: {cert.credentialId}</p>
                <div className="flex gap-1.5">
                  <Button variant="outline" size="sm" className="flex-1 gap-1 text-[10px] md:text-xs h-7 md:h-8">
                    <Download className="h-3 w-3" /> Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1 text-[10px] md:text-xs h-7 md:h-8">
                    <Share2 className="h-3 w-3" /> Share
                  </Button>
                  <Button variant="ghost" size="sm" className="px-2 h-7 md:h-8">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Certificates() {
  const { user } = useAuth();

  if (user?.role === "admin") {
    return (
      <AdminDashboardLayout title="Certificates" subtitle="Manage course certificates">
        <CertificatesContent />
      </AdminDashboardLayout>
    );
  }

  return (
    <UnifiedDashboard title="My Certificates" subtitle="View and share your achievements">
      <CertificatesContent />
    </UnifiedDashboard>
  );
}
