import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  Maximize,
  CheckCircle2,
  Circle,
  Sparkles,
  Send,
  BookOpen,
  HelpCircle,
  FileText,
  Brain,
  X,
  Settings,
  Download,
  Menu,
  FileDown,
  MessageCircle,
  Loader2,
  Clock,
  ArrowLeft,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function LessonPlayer() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAITutor, setShowAITutor] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const course = {
    id: courseId,
    title: "Complete React Development Masterclass",
    progress: 42,
  };

  const currentLesson = {
    id: lessonId,
    title: "useState Hook Deep Dive",
    chapter: "Chapter 3: React Hooks",
    duration: "16:40",
  };

  const chapters = [
    {
      title: "Chapter 1: Getting Started",
      lessons: [
        { id: "1", title: "Course Introduction", duration: "8:30", completed: true },
        { id: "2", title: "Setting Up Your Environment", duration: "15:00", completed: true },
        { id: "3", title: "Your First React Component", duration: "12:45", completed: true },
      ],
    },
    {
      title: "Chapter 2: React Fundamentals",
      lessons: [
        { id: "4", title: "Understanding JSX", duration: "18:20", completed: true },
        { id: "5", title: "Props and State", duration: "22:10", completed: true },
        { id: "6", title: "Practice Exercise", duration: "30:00", completed: true },
      ],
    },
    {
      title: "Chapter 3: React Hooks",
      lessons: [
        { id: "7", title: "useState Hook Deep Dive", duration: "16:40", completed: false, current: true },
        { id: "8", title: "useEffect Hook", duration: "24:30", completed: false },
        { id: "9", title: "Custom Hooks", duration: "20:15", completed: false },
        { id: "10", title: "Hooks Best Practices", duration: "18:00", completed: false },
      ],
    },
    {
      title: "Chapter 4: Advanced Patterns",
      lessons: [
        { id: "11", title: "Context API", duration: "22:00", completed: false },
        { id: "12", title: "Render Props", duration: "18:30", completed: false },
        { id: "13", title: "Higher-Order Components", duration: "25:00", completed: false },
      ],
    },
  ];

  const resources = [
    { name: "Lesson Notes.pdf", size: "2.4 MB" },
    { name: "Source Code.zip", size: "1.2 MB" },
    { name: "Cheat Sheet.pdf", size: "450 KB" },
  ];

  const [aiConversation, setAiConversation] = useState([
    {
      role: "assistant",
      content: "Hi! I'm your AI Tutor. Ask me anything about this lesson!",
    },
  ]);

  const quickActions = [
    { icon: HelpCircle, label: "Explain", action: "explain" },
    { icon: FileText, label: "Summarize", action: "summarize" },
    { icon: Brain, label: "Quiz Me", action: "quiz" },
  ];

  const handleSendMessage = () => {
    if (!aiMessage.trim()) return;
    setAiConversation([...aiConversation, { role: "user", content: aiMessage }]);
    setAiMessage("");
    setIsTyping(true);
    setTimeout(() => {
      setAiConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "The useState hook returns an array with two elements: the current state value and a setter function to update it.",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    const messages: Record<string, string> = {
      explain: "Explain this concept simply.",
      summarize: "Summarize the key points.",
      quiz: "Quiz me on this topic.",
    };
    setAiConversation([...aiConversation, { role: "user", content: messages[action] }]);
    setIsTyping(true);
    setTimeout(() => {
      setAiConversation((prev) => [
        ...prev,
        { role: "assistant", content: "Here's my response to your request..." },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const CurriculumContent = () => (
    <div className="divide-y">
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex}>
          <div className="p-4 bg-muted/30">
            <p className="font-medium text-sm">{chapter.title}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {chapter.lessons.filter((l) => l.completed).length}/{chapter.lessons.length} completed
            </p>
          </div>
          <div>
            {chapter.lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => navigate(`/learn/${courseId}/lesson/${lesson.id}`)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors border-l-2",
                  lesson.current
                    ? "bg-lms-blue/10 border-l-lms-blue"
                    : "border-l-transparent hover:bg-muted/50"
                )}
              >
                <div className="shrink-0">
                  {lesson.completed ? (
                    <CheckCircle2 className="h-4 w-4 text-lms-emerald" />
                  ) : lesson.current ? (
                    <Play className="h-4 w-4 text-lms-blue" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn("truncate", lesson.current && "font-medium text-lms-blue")}>
                    {lesson.title}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {lesson.duration}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b bg-card flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard/my-courses")}
            className="rounded-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="hidden sm:block">
            <p className="text-sm font-medium truncate max-w-[300px]">{course.title}</p>
            <div className="flex items-center gap-2">
              <Progress value={course.progress} className="w-24 h-1.5" />
              <span className="text-xs text-muted-foreground">{course.progress}%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={showAITutor ? "default" : "outline"}
            size="sm"
            className={cn("gap-2 rounded-xl", showAITutor && "bg-lms-purple hover:bg-lms-purple/90")}
            onClick={() => setShowAITutor(!showAITutor)}
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">AI Tutor</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden rounded-xl">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Course Content</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-4rem)]">
                <CurriculumContent />
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSidebar(!showSidebar)}
            className="hidden lg:flex rounded-xl"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video & Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Video Player */}
          <div className="relative bg-black" style={{ aspectRatio: "16/9", maxHeight: "65vh" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-10 w-10 text-white" />
                ) : (
                  <Play className="h-10 w-10 text-white ml-1" />
                )}
              </button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
                </button>
                <div className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer group">
                  <div className="w-1/3 h-full bg-lms-blue rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-lms-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-sm text-white font-mono">5:32 / {currentLesson.duration}</span>
                <button className="hover:opacity-75 hidden sm:block"><Volume2 className="h-5 w-5 text-white" /></button>
                <button className="hover:opacity-75 hidden sm:block"><Settings className="h-5 w-5 text-white" /></button>
                <button className="hover:opacity-75"><Maximize className="h-5 w-5 text-white" /></button>
              </div>
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="border-b bg-card px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
            <div>
              <p className="text-xs text-muted-foreground">{currentLesson.chapter}</p>
              <p className="font-semibold">{currentLesson.title}</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none gap-2 rounded-xl">
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
              </Button>
              <Button size="sm" className="flex-1 sm:flex-none gap-2 bg-lms-emerald hover:bg-lms-emerald/90 rounded-xl">
                <CheckCircle2 className="h-4 w-4" />
                <span className="hidden sm:inline">Complete</span>
              </Button>
              <Button size="sm" className="flex-1 sm:flex-none gap-2 bg-lms-blue hover:bg-lms-blue/90 rounded-xl">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex-1 overflow-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-4 h-12">
                <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-lms-blue rounded-none">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:border-b-2 data-[state=active]:border-lms-blue rounded-none">
                  Resources
                </TabsTrigger>
                <TabsTrigger value="notes" className="data-[state=active]:border-b-2 data-[state=active]:border-lms-blue rounded-none">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="qa" className="data-[state=active]:border-b-2 data-[state=active]:border-lms-blue rounded-none">
                  Q&A
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-4 md:p-6 space-y-6">
                <div className="max-w-3xl">
                  <h2 className="text-xl font-bold mb-3">About this lesson</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In this lesson, we'll take a deep dive into the useState hook - one of the most fundamental hooks in React.
                    You'll learn how to manage state in functional components, understand the rules of hooks,
                    and see practical examples of common patterns.
                  </p>
                </div>
                <div className="max-w-3xl">
                  <h3 className="font-semibold mb-3">What you'll learn</h3>
                  <div className="grid gap-2">
                    {[
                      "How useState works under the hood",
                      "Managing different types of state (primitives, objects, arrays)",
                      "Best practices and common pitfalls",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
                        <CheckCircle2 className="h-5 w-5 text-lms-emerald shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-4">Downloadable Resources</h2>
                <div className="space-y-3 max-w-xl">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-2xl hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileDown className="h-5 w-5 text-lms-blue" />
                        <div>
                          <p className="font-medium">{resource.name}</p>
                          <p className="text-sm text-muted-foreground">{resource.size}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="notes" className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-4">Your Notes</h2>
                <div className="max-w-xl">
                  <Textarea placeholder="Take notes while watching..." className="min-h-[200px] rounded-xl resize-none" />
                  <Button className="mt-4 rounded-xl">Save Notes</Button>
                </div>
              </TabsContent>

              <TabsContent value="qa" className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-4">Questions & Answers</h2>
                <Button className="gap-2 rounded-xl mb-6">
                  <MessageCircle className="h-4 w-4" />
                  Ask a Question
                </Button>
                <p className="text-muted-foreground">No questions yet. Be the first to ask!</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Curriculum Sidebar - Desktop */}
        {showSidebar && (
          <aside className="w-80 xl:w-96 border-l bg-card flex-col hidden lg:flex shrink-0">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Course content</h3>
              <button onClick={() => setShowSidebar(false)}>
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <ScrollArea className="flex-1">
              <CurriculumContent />
            </ScrollArea>
          </aside>
        )}

        {/* AI Tutor Panel */}
        {showAITutor && (
          <aside className="w-80 xl:w-96 border-l bg-card flex flex-col hidden md:flex shrink-0">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-lms-purple flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Tutor</h3>
                  <p className="text-xs text-muted-foreground">Ask anything</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowAITutor(false)} className="rounded-xl">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {aiConversation.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "p-3 rounded-2xl text-sm",
                      msg.role === "assistant"
                        ? "bg-muted/50"
                        : "bg-lms-blue text-white ml-8"
                    )}
                  >
                    {msg.content}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 p-3">
                    <Loader2 className="h-4 w-4 animate-spin text-lms-purple" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t space-y-3">
              <div className="flex gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.action}
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs rounded-xl"
                    onClick={() => handleQuickAction(action.action)}
                  >
                    <action.icon className="h-3 w-3 mr-1" />
                    {action.label}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Ask a question..."
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                  className="min-h-[60px] rounded-xl resize-none"
                />
                <Button
                  size="icon"
                  className="shrink-0 bg-lms-purple hover:bg-lms-purple/90 rounded-xl"
                  onClick={handleSendMessage}
                  disabled={!aiMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
