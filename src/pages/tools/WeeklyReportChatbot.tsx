import { ToolPage } from "../../components/shared/ToolPage";

// URGENT FIX: Force redeployment on Vercel - Updated March 12, 2024
export function WeeklyReportChatbot() {
  return (
    <ToolPage
      title="Weekly Report Chatbot"
      subtitle="Your AI-powered assistant for generating and analysing weekly performance reports"
      intro={{
        title: "Transform Your Reporting Process",
        description:
          "The Weekly Report Chatbot streamlines the creation and analysis of performance reports. Built with advanced natural language processing, it helps you generate insightful reports and extract meaningful patterns from your weekly data.",
      }}
      features={[
        {
          title: "Report Generation",
          items: [
            "Automated data compilation",
            "Performance trend analysis",
            "Key metrics highlighting",
            "Custom report templates",
          ],
        },
        {
          title: "Data Analysis",
          items: [
            "Week-over-week comparisons",
            "Anomaly detection",
            "Performance insights",
            "Recommendation engine",
          ],
        },
        {
          title: "Collaboration Tools",
          items: [
            "Team sharing capabilities",
            "Comment integration",
            "Version control",
            "Export flexibility",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Enhance your reporting workflow with:",
        items: [
          "70% reduction in report preparation time",
          "Automated insight generation",
          "Standardised reporting format",
          "Improved data accuracy and consistency",
        ],
      }}
      cta={{
        title: "Email Joe for Access",
        description: "Click the button below to send an email request",
        buttonText: "Send Email Request",
        buttonLink:
          "mailto:joe.slade@medialabgroup.co.uk?subject=Weekly%20Report%20Chatbot%20Access%20Request&body=Hi%20Joe%2C%0A%0AI'd%20like%20to%20request%20access%20to%20the%20Weekly%20Report%20Chatbot.%0A%0AThanks!",
        beta: true,
      }}
      supportTeam={[
        "Oksana Petychuk",
        "Joe Slade",
        "Chiara Bossell",
        "Maya Ward",
        "David Ruddle",
      ]}
    />
  );
}
