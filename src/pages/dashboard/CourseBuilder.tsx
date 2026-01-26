import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UnifiedDashboard } from "@/components/layout/UnifiedDashboard";
import { CourseBuilderStepper } from "@/components/course-builder/CourseBuilderStepper";
import { CourseBasicInfo } from "@/components/course-builder/CourseBasicInfo";
import { CourseCurriculum } from "@/components/course-builder/CourseCurriculum";
import { CourseCertificate } from "@/components/course-builder/CourseCertificate";
import { CourseSettings } from "@/components/course-builder/CourseSettings";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Save, Eye, Rocket } from "lucide-react";

export interface CourseData {
  // Basic Info
  title: string;
  subtitle: string;
  description: string;
  category: string;
  level: string;
  language: string;
  thumbnail: string;
  promoVideo: string;
  
  // Pricing
  price: number;
  salePrice: number;
  
  // Curriculum
  sections: Section[];
  
  // Certificate
  certificateEnabled: boolean;
  certificateTemplate: string;
  certificateTitle: string;
  certificateDescription: string;
  
  // Settings
  isPublic: boolean;
  enableDrip: boolean;
  enableComments: boolean;
  enableReviews: boolean;
  maxStudents: number;
  enrollmentDuration: number;
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "text" | "quiz" | "assignment";
  duration: number;
  content: string;
  videoUrl?: string;
  isFree: boolean;
}

const steps = [
  { id: 1, title: "Basic Info", description: "Course details" },
  { id: 2, title: "Curriculum", description: "Lessons & content" },
  { id: 3, title: "Certificate", description: "Completion reward" },
  { id: 4, title: "Settings", description: "Publish options" },
];

const initialCourseData: CourseData = {
  title: "",
  subtitle: "",
  description: "",
  category: "",
  level: "beginner",
  language: "english",
  thumbnail: "",
  promoVideo: "",
  price: 0,
  salePrice: 0,
  sections: [],
  certificateEnabled: true,
  certificateTemplate: "modern",
  certificateTitle: "Certificate of Completion",
  certificateDescription: "has successfully completed the course",
  isPublic: true,
  enableDrip: false,
  enableComments: true,
  enableReviews: true,
  maxStudents: 0,
  enrollmentDuration: 0,
};

export default function CourseBuilder() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState<CourseData>(initialCourseData);
  const [isSaving, setIsSaving] = useState(false);

  const updateCourseData = (updates: Partial<CourseData>) => {
    setCourseData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const handlePublish = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
    navigate("/dashboard/courses");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <CourseBasicInfo data={courseData} onUpdate={updateCourseData} />;
      case 2:
        return <CourseCurriculum data={courseData} onUpdate={updateCourseData} />;
      case 3:
        return <CourseCertificate data={courseData} onUpdate={updateCourseData} />;
      case 4:
        return <CourseSettings data={courseData} onUpdate={updateCourseData} />;
      default:
        return null;
    }
  };

  return (
    <UnifiedDashboard title="Course Builder" subtitle="Create a new course">
      <div className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto space-y-6">
        {/* Stepper */}
        <CourseBuilderStepper steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />

        {/* Step Content */}
        <div className="min-h-[500px]">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex-1 sm:flex-none rounded-xl"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={handleSaveDraft}
              disabled={isSaving}
              className="flex-1 sm:flex-none rounded-xl"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none rounded-xl"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            {currentStep < steps.length ? (
              <Button
                onClick={handleNext}
                className="flex-1 sm:flex-none bg-lms-blue hover:bg-lms-blue/90 rounded-xl"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handlePublish}
                disabled={isSaving}
                className="flex-1 sm:flex-none bg-lms-emerald hover:bg-lms-emerald/90 rounded-xl"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Publish Course
              </Button>
            )}
          </div>
        </div>
      </div>
    </UnifiedDashboard>
  );
}
