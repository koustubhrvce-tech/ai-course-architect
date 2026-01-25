import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
  MessageSquare,
  X,
  Settings,
  Download,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CourseLearn() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAITutor, setShowAITutor] = useState(true);
  const [aiMessage, setAiMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const course = {
    title: "Complete React Development Masterclass",
    currentChapter: "Chapter 3: React Hooks",
    currentLesson: "useState Hook Deep Dive",
    progress: 42,
  };

  const chapters = [
    {
      title: "Chapter 1: Getting Started",
      lessons: [
        { title: "Course Introduction", duration: "8:30", completed: true },
        { title: "Setting Up Your Environment", duration: "15:00", completed: true },
        { title: "Your First React Component", duration: "12:45", completed: true },
      ],
    },
    {
      title: "Chapter 2: React Fundamentals",
      lessons: [
        { title: "Understanding JSX", duration: "18:20", completed: true },
        { title: "Props and State", duration: "22:10", completed: true },
        { title: "Practice Exercise", duration: "30:00", completed: true },
      ],
    },
    {
      title: "Chapter 3: React Hooks",
      lessons: [
        { title: "useState Hook Deep Dive", duration: "16:40", completed: false, current: true },
        { title: "useEffect Hook", duration: "24:30", completed: false },
        { title: "Custom Hooks", duration: "20:15", completed: false },
        { title: "Hooks Best Practices", duration: "18:00", completed: false },
      ],
    },
    {
      title: "Chapter 4: Advanced Patterns",
      lessons: [
        { title: "Context API", duration: "22:00", completed: false },
        { title: "Render Props", duration: "18:30", completed: false },
        { title: "Higher-Order Components", duration: "25:00", completed: false },
      ],
    },
  ];

  const [aiConversation, setAiConversation] = useState([
    {
      role: "assistant",
      content: "Hi! I'm your AI Tutor for this course. I'm here to help you understand React Hooks better. What would you like to know about useState?",
    },
  ]);

  const quickActions = [
    { icon: HelpCircle, label: "Explain This", action: "explain" },
    { icon: FileText, label: "Summarize", action: "summarize" },
    { icon: Brain, label: "Quiz Me", action: "quiz" },
    { icon: BookOpen, label: "Examples", action: "examples" },
  ];

  const handleSendMessage = () => {
    if (!aiMessage.trim()) return;

    setAiConversation([
      ...aiConversation,
      { role: "user", content: aiMessage },
    ]);
    setAiMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setAiConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Great question! The useState hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. Here's a simple example:\n\n```jsx\nconst [count, setCount] = useState(0);\n```\n\nThis creates a state variable 'count' initialized to 0, and 'setCount' is the function you use to update it.",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    const messages: Record<string, string> = {
      explain: "Can you explain this concept in simpler terms?",
      summarize: "Please summarize the key points from this lesson.",
      quiz: "Quiz me on what I've learned so far.",
      examples: "Can you give me some practical examples?",
    };

    setAiConversation([
      ...aiConversation,
      { role: "user", content: messages[action] },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        explain:
          "useState is like a memory box for your component. You put something in (initial value), and React remembers it between renders. When you want to change what's in the box, you use the setter function, and React automatically updates your UI!",
        summarize:
          "**Key Points:**\n• useState adds state to functional components\n• Returns [value, setter] array\n• State updates trigger re-renders\n• Can hold any value type\n• Multiple useState calls allowed",
        quiz: "Let's test your knowledge!\n\n**Question:** What does useState return?\n\nA) A single value\nB) An object with value and setter\nC) An array with value and setter function\nD) A function only\n\nThink about it and let me know your answer!",
        examples:
          "Here are some common useState patterns:\n\n**1. Toggle:**\n```jsx\nconst [isOpen, setIsOpen] = useState(false);\nsetIsOpen(!isOpen);\n```\n\n**2. Form Input:**\n```jsx\nconst [name, setName] = useState('');\n<input onChange={(e) => setName(e.target.value)} />\n```",
      };
      setAiConversation((prev) => [
        ...prev,
        { role: "assistant", content: responses[action] },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-lms-navy">
      {/* Sidebar - Chapter Navigation */}
      <aside className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col h-screen max-lg:hidden">
        <div className="p-4 border-b border-sidebar-border">
          <Link
            to="/dashboard/my-courses"
            className="flex items-center gap-2 text-sidebar-muted hover:text-sidebar-foreground mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="text-sm">Back to My Courses</span>
          </Link>
          <h2 className="font-semibold text-sidebar-foreground line-clamp-2">{course.title}</h2>
          <div className="flex items-center gap-2 mt-3">
            <Progress value={course.progress} className="flex-1 h-2" />
            <span className="text-xs text-sidebar-muted">{course.progress}%</span>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mb-4">
                <h3 className="px-3 py-2 text-sm font-medium text-sidebar-foreground">
                  {chapter.title}
                </h3>
                <div className="space-y-1">
                  {chapter.lessons.map((lesson, lessonIndex) => (
                    <button
                      key={lessonIndex}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-sm transition-colors",
                        lesson.current
                          ? "bg-lms-blue text-white"
                          : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      )}
                    >
                      {lesson.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-lms-emerald shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{lesson.title}</p>
                        <p className="text-xs opacity-60">{lesson.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Course Resources */}
        <div className="p-4 border-t border-sidebar-border">
          <Button variant="outline" className="w-full gap-2 text-sidebar-foreground border-sidebar-border">
            <Download className="h-4 w-4" />
            Course Resources
          </Button>
        </div>
      </aside>

      {/* Main Content - Video Player */}
      <div className="flex-1 flex flex-col">
        {/* Video Area */}
        <div className="flex-1 bg-black relative flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div
              className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-10 w-10 text-white" />
              ) : (
                <Play className="h-10 w-10 text-white ml-2" />
              )}
            </div>
            <p className="text-white/60 text-sm">Click to {isPlaying ? "pause" : "play"}</p>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
              </button>
              <div className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer">
                <div className="w-1/3 h-full bg-lms-blue rounded-full" />
              </div>
              <span className="text-sm text-white">5:32 / 16:40</span>
              <button className="hover:opacity-75">
                <Volume2 className="h-5 w-5 text-white" />
              </button>
              <button className="hover:opacity-75">
                <Settings className="h-5 w-5 text-white" />
              </button>
              <button className="hover:opacity-75">
                <Maximize className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-lms-navy-light p-4 flex items-center justify-between">
          <div>
            <p className="text-white/60 text-sm">{course.currentChapter}</p>
            <p className="text-white font-medium">{course.currentLesson}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button size="sm" className="bg-lms-emerald hover:bg-lms-emerald/90 gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Mark Complete
            </Button>
            <Button size="sm" className="bg-lms-blue hover:bg-lms-blue/90">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "border-white/20 hover:bg-white/10",
                showAITutor ? "bg-lms-purple text-white border-lms-purple" : "text-white"
              )}
              onClick={() => setShowAITutor(!showAITutor)}
            >
              <Sparkles className="h-4 w-4 mr-1" />
              AI Tutor
            </Button>
          </div>
        </div>
      </div>

      {/* AI Tutor Panel */}
      {showAITutor && (
        <aside className="w-96 bg-card border-l border-border flex flex-col h-screen max-xl:hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-lms-purple flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">AI Tutor</h3>
                <p className="text-xs text-muted-foreground">Context: {course.currentLesson}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowAITutor(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-b border-border">
            <div className="grid grid-cols-4 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.action}
                  onClick={() => handleQuickAction(action.action)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <action.icon className="h-4 w-4 text-lms-purple" />
                  <span className="text-xs text-muted-foreground">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Conversation */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {aiConversation.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex gap-3", message.role === "user" && "flex-row-reverse")}
                >
                  <div
                    className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                      message.role === "assistant" ? "bg-lms-purple" : "bg-lms-blue"
                    )}
                  >
                    {message.role === "assistant" ? (
                      <Sparkles className="h-4 w-4 text-white" />
                    ) : (
                      <MessageSquare className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "flex-1 rounded-xl p-3 text-sm",
                      message.role === "assistant" ? "bg-muted" : "bg-lms-blue text-white"
                    )}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ThumbsUp className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ThumbsDown className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-lms-purple flex items-center justify-center shrink-0">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted rounded-xl p-3 flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-lms-purple" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Textarea
                placeholder="Ask about this lesson..."
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                className="resize-none"
                rows={2}
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!aiMessage.trim() || isTyping}
                className="bg-lms-purple hover:bg-lms-purple/90 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
