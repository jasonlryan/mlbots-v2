import React from "react";
import { ToolPage } from "../../components/shared/ToolPage";

// Using a direct mailto link without JavaScript handling
const EmailButton = () => {
  const emailAddress = "joe@medialab.co";
  const subject = "Weekly Report Chatbot Access Request";
  const body =
    "Hi Joe,%0A%0AI'd like to request access to the Weekly Report Chatbot tool.%0A%0AThanks!";
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  return (
    <a
      href={mailtoLink}
      className="cta-button"
      style={{ display: "inline-block", textDecoration: "none" }}
    >
      Send Email Request
    </a>
  );
};

// URGENT FIX: Redeploying on Vercel with explicit mailto handling
export default function WeeklyReportChatbot() {
  return (
    <ToolPage
      title="Weekly Report Chatbot"
      subtitle="AI-powered assistant for creating weekly reports"
      intro={{
        title: "Streamline Your Weekly Reporting Process",
        description:
          "The Weekly Report Chatbot uses advanced AI to help you generate comprehensive weekly reports in minutes instead of hours. Simply provide the key information, and the chatbot will structure and format it into a professional report.",
      }}
      features={[
        {
          title: "Key Features",
          items: [
            "Natural language interface for easy data input",
            "Customizable templates for consistent reporting",
            "Automatic formatting and structure",
            "Export options (PDF, Word, Email)",
            "Data visualization capabilities",
          ],
        },
        {
          title: "Use Cases",
          items: [
            "Team performance summaries",
            "Project status updates",
            "Client reporting",
            "Department metrics compilation",
            "Executive briefings",
          ],
        },
      ]}
      metrics={{
        title: "Impact & Benefits",
        description:
          "Teams using the Weekly Report Chatbot have reported significant improvements in their reporting workflows:",
        items: [
          "75% reduction in time spent creating weekly reports",
          "Increased consistency and quality of reporting",
          "Better information sharing across teams",
          "More time for analysis rather than report creation",
          "Improved decision-making based on timely reports",
        ],
      }}
      cta={{
        title: "Email Joe for Access",
        description:
          "Send an email request to get access to the Weekly Report Chatbot",
        buttonText: "Send Email Request",
        buttonLink: "#",
        customButton: <EmailButton />,
      }}
      supportTeam={["Joe Smith", "Sarah Johnson"]}
    />
  );
}
