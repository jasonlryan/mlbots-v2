import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "./hooks/useAuth";
import { useAuth } from "./hooks/useAuth";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { DigitalSetupWizard } from "./pages/tools/DigitalSetupWizard";
import { MarketingEffectivenessBot } from "./pages/tools/MarketingEffectivenessBot";
import { Channel4Insider } from "./pages/tools/Channel4Insider";
import { HRFAQBot } from "./pages/tools/HRFAQBot";
import { PrintDeliveryManager } from "./pages/tools/PrintDeliveryManager";
import WeeklyReportChatbot from "./pages/tools/WeeklyReportChatbot";
import { JanusHelpdesk } from "./pages/tools/JanusHelpdesk";
import { PlanningAssistant } from "./pages/tools/PlanningAssistant";
import { MedialabCommsAssistant } from "./pages/tools/MedialabCommsAssistant";
import { RecruitmentAssistant } from "./pages/tools/RecruitmentAssistant";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function LoginRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Login />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/digital-setup-wizard"
              element={
                <ProtectedRoute>
                  <DigitalSetupWizard />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/marketing-effectiveness-bot"
              element={
                <ProtectedRoute>
                  <MarketingEffectivenessBot />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/channel4-insider"
              element={
                <ProtectedRoute>
                  <Channel4Insider />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/hr-faq-bot"
              element={
                <ProtectedRoute>
                  <HRFAQBot />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/print-delivery-manager"
              element={
                <ProtectedRoute>
                  <PrintDeliveryManager />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/weekly-report-chatbot"
              element={
                <ProtectedRoute>
                  <WeeklyReportChatbot />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/janus-helpdesk"
              element={
                <ProtectedRoute>
                  <JanusHelpdesk />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/planning-assistant"
              element={
                <ProtectedRoute>
                  <PlanningAssistant />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/medialab-comms-assistant"
              element={
                <ProtectedRoute>
                  <MedialabCommsAssistant />
                </ProtectedRoute>
              }
            />
            <Route
              path="tools/recruitment-assistant"
              element={
                <ProtectedRoute>
                  <RecruitmentAssistant />
                </ProtectedRoute>
              }
            />
          </Route>
          {/* Catch any other routes and redirect to home if authenticated, login if not */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Navigate to="/" replace />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </AuthProvider>
  );
}

export default App;
