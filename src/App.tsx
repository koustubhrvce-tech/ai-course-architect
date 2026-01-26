import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Marketing Pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

// Unified Dashboard
import UnifiedDashboardPage from "./pages/UnifiedDashboardPage";

// Dashboard Sub-pages
import MyCourses from "./pages/dashboard/MyCourses";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import Messages from "./pages/dashboard/Messages";
import Certificates from "./pages/dashboard/Certificates";
import CourseManagement from "./pages/dashboard/CourseManagement";
import CourseBuilder from "./pages/dashboard/CourseBuilder";
import UsersPage from "./pages/dashboard/Users";
import Moderation from "./pages/dashboard/Moderation";

// Course Pages
import CourseDetailPage from "./pages/course/CourseDetail";
import LessonPlayer from "./pages/learn/LessonPlayer";

// Course Learning (legacy)
import CourseLearn from "./pages/course/CourseLearn";
import CoursePreview from "./pages/course/CoursePreview";

// E-commerce
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

// Other
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Marketing Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Unified Dashboard - Main */}
            <Route path="/dashboard" element={<UnifiedDashboardPage />} />
            
            {/* Dashboard Sub-routes (shared + role-specific) */}
            <Route path="/dashboard/my-courses" element={<MyCourses />} />
            <Route path="/dashboard/courses" element={<CourseManagement />} />
            <Route path="/dashboard/courses/new" element={<CourseBuilder />} />
            <Route path="/dashboard/courses/:id/edit" element={<CourseBuilder />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/certificates" element={<Certificates />} />
            <Route path="/dashboard/users" element={<UsersPage />} />
            <Route path="/dashboard/moderation" element={<Moderation />} />

            {/* Course Pages (Standalone) */}
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/learn/:courseId/lesson/:lessonId" element={<LessonPlayer />} />

            {/* E-commerce */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
