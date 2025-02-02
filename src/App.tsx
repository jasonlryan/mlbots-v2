import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { FinanceSheetConverter } from "./pages/tools/FinanceSheetConverter";
import { WeeklyReportChatbot } from "./pages/tools/WeeklyReportChatbot";
import { JanusHelpdesk } from "./pages/tools/JanusHelpdesk";
import { PlanningAssistant } from "./pages/tools/PlanningAssistant";
import { PitchBank } from "./pages/tools/PitchBank";
import { MedialabCommsAssistant } from "./pages/tools/MedialabCommsAssistant";
import { RecruitmentAssistant } from "./pages/tools/RecruitmentAssistant";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route
              path="tools/digital-setup-wizard"
              element={<DigitalSetupWizard />}
            />
            <Route
              path="tools/marketing-effectiveness-bot"
              element={<MarketingEffectivenessBot />}
            />
            <Route
              path="tools/channel4-insider"
              element={<Channel4Insider />}
            />
            <Route path="tools/hr-faq-bot" element={<HRFAQBot />} />
            <Route
              path="tools/print-delivery-manager"
              element={<PrintDeliveryManager />}
            />
            <Route
              path="tools/finance-sheet-converter"
              element={<FinanceSheetConverter />}
            />
            <Route
              path="tools/weekly-report-chatbot"
              element={<WeeklyReportChatbot />}
            />
            <Route path="tools/janus-helpdesk" element={<JanusHelpdesk />} />
            <Route
              path="tools/planning-assistant"
              element={<PlanningAssistant />}
            />
            <Route path="tools/pitch-bank" element={<PitchBank />} />
            <Route
              path="tools/medialab-comms-assistant"
              element={<MedialabCommsAssistant />}
            />
            <Route
              path="tools/recruitment-assistant"
              element={<RecruitmentAssistant />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
