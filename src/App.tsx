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

// Course Pages
import CourseDetail from "./pages/dashboard/CourseDetail";
import LessonEditor from "./pages/dashboard/LessonEditor";
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

            {/* Unified Dashboard - Role-based content */}
            <Route path="/dashboard" element={<UnifiedDashboardPage />} />
            <Route path="/dashboard/*" element={<UnifiedDashboardPage />} />

            {/* Course Management (Teacher) */}
            <Route path="/dashboard/courses/:id" element={<CourseDetail />} />
            <Route path="/dashboard/courses/:courseId/lessons/:lessonId" element={<LessonEditor />} />

            {/* Course Learning (Student) */}
            <Route path="/course/:id" element={<CoursePreview />} />
            <Route path="/course/:id/learn" element={<CourseLearn />} />

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
