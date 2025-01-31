import { ToolPage } from "../../components/shared/ToolPage";

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
        title: "Join the DataGPT Hero Project",
        description:
          "We're actively scaling and testing this tool across Medialab teams",
        buttonText: "Request Access",
        buttonLink: "mailto:joe.slade@medialabgroup.co.uk",
        beta: true,
      }}
      supportTeam={[
        "Ben Cunnington",
        "Aneena Morshed",
        "Krishan Majithia",
        "Charles Batchelor",
      ]}
    />
  );
}
