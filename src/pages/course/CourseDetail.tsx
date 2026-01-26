import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Play,
  Clock,
  Users,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Award,
  BookOpen,
  FileText,
  Globe,
  Smartphone,
  LifeBuoy,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const course = {
    id,
    title: "Complete React Development Masterclass",
    subtitle: "Learn React from scratch and build real-world applications with hooks, context, and more",
    description: `Master React development from beginner to advanced level. This comprehensive course covers everything you need to know to build modern, scalable web applications.

You'll learn React fundamentals, hooks, context API, state management, routing, and much more. By the end of this course, you'll be able to build complete React applications from scratch.`,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      title: "Senior React Developer",
      students: 45000,
      courses: 12,
      rating: 4.9,
    },
    price: 99.99,
    salePrice: 49.99,
    rating: 4.8,
    reviews: 2847,
    students: 12453,
    duration: "24 hours",
    lessons: 156,
    level: "All Levels",
    language: "English",
    lastUpdated: "January 2024",
    includes: [
      { icon: Play, text: "24 hours on-demand video" },
      { icon: FileText, text: "15 articles" },
      { icon: BookOpen, text: "45 coding exercises" },
      { icon: Award, text: "Certificate of completion" },
      { icon: Smartphone, text: "Access on mobile and TV" },
      { icon: LifeBuoy, text: "Lifetime access" },
    ],
    learnings: [
      "Build powerful, fast, user-friendly and reactive web apps",
      "Apply for high-paid jobs or work as a freelancer",
      "Learn React Hooks and Functional Components",
      "Manage complex state with Context API and Redux",
      "Build a full-stack application with React and Node.js",
    ],
  };

  const curriculum = [
    {
      title: "Getting Started with React",
      lessons: [
        { title: "Course Introduction", duration: "8:30", isFree: true },
        { title: "What is React?", duration: "12:15", isFree: true },
        { title: "Setting Up Your Development Environment", duration: "15:00", isFree: false },
        { title: "Creating Your First React App", duration: "20:00", isFree: false },
      ],
    },
    {
      title: "React Fundamentals",
      lessons: [
        { title: "Understanding JSX", duration: "18:20", isFree: false },
        { title: "Components and Props", duration: "22:10", isFree: false },
        { title: "State and Lifecycle", duration: "25:00", isFree: false },
        { title: "Handling Events", duration: "15:30", isFree: false },
      ],
    },
    {
      title: "React Hooks Deep Dive",
      lessons: [
        { title: "Introduction to Hooks", duration: "10:00", isFree: false },
        { title: "useState Hook", duration: "24:30", isFree: false },
        { title: "useEffect Hook", duration: "28:00", isFree: false },
        { title: "Custom Hooks", duration: "32:00", isFree: false },
      ],
    },
    {
      title: "Advanced Patterns",
      lessons: [
        { title: "Context API", duration: "26:00", isFree: false },
        { title: "useReducer for Complex State", duration: "22:00", isFree: false },
        { title: "Performance Optimization", duration: "30:00", isFree: false },
      ],
    },
  ];

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2 rounded-xl">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 rounded-xl">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button className="bg-lms-blue hover:bg-lms-blue/90 rounded-xl">
              Buy Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-card border-b">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Badge className="bg-lms-emerald">{course.level}</Badge>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-lms-amber text-lms-amber" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()} students
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={course.instructor.avatar} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Created by {course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Last updated {course.lastUpdated}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {course.language}
                </span>
              </div>
            </div>

            {/* Course Card - Desktop */}
            <div className="hidden lg:block">
              <Card className="rounded-2xl sticky top-24 shadow-lg">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full aspect-video object-cover rounded-t-2xl"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-lms-blue ml-1" />
                    </div>
                  </button>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${course.salePrice}</span>
                    <span className="text-lg text-muted-foreground line-through">${course.price}</span>
                    <Badge variant="secondary" className="bg-lms-rose/10 text-lms-rose">
                      50% off
                    </Badge>
                  </div>
                  <Button className="w-full bg-lms-blue hover:bg-lms-blue/90 rounded-xl h-12 text-lg">
                    Buy Now
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl h-12">
                    Add to Cart
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    30-Day Money-Back Guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What you'll learn */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.learnings.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-lms-emerald shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Course Content</h2>
                  <p className="text-sm text-muted-foreground">
                    {curriculum.length} sections • {totalLessons} lessons
                  </p>
                </div>
                <div className="space-y-2">
                  {curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {expandedSections.includes(sectionIndex) ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                          <span className="font-medium">{section.title}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {section.lessons.length} lessons
                        </span>
                      </button>
                      {expandedSections.includes(sectionIndex) && (
                        <div className="divide-y">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <Play className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{lesson.title}</span>
                                {lesson.isFree && (
                                  <Badge variant="secondary" className="text-xs">
                                    Preview
                                  </Badge>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground whitespace-pre-line">{course.description}</p>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Instructor</h2>
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{course.instructor.name}</h3>
                    <p className="text-muted-foreground">{course.instructor.title}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-lms-amber" />
                        {course.instructor.rating} Rating
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.instructor.students.toLocaleString()} Students
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.instructor.courses} Courses
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - This Course Includes */}
          <div className="hidden lg:block">
            <Card className="rounded-2xl sticky top-[420px]">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">This course includes:</h3>
                <div className="space-y-3">
                  {course.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Buy Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 lg:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">${course.salePrice}</span>
              <span className="text-sm text-muted-foreground line-through">${course.price}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-xl">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-lms-blue hover:bg-lms-blue/90 rounded-xl px-6">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
