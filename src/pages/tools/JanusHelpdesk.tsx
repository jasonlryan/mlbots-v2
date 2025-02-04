import { ToolPage } from "../../components/shared/ToolPage";

export function JanusHelpdesk() {
  return (
    <ToolPage
      title="Janus Helpdesk"
      subtitle="Your AI-powered assistant for Janus platform support and guidance"
      intro={{
        title: "Transform Your Janus Experience",
        description:
          "The Janus Helpdesk is your dedicated AI assistant for navigating the Janus platform. Get instant support for data submission, taxonomy management, and workflow optimization within the Apollo ecosystem.",
      }}
      features={[
        {
          title: "Taxonomy Management",
          items: [
            "Step-by-step creation guidance",
            "Hierarchy level structuring",
            "Naming convention support",
            "Entity ID validation",
          ],
        },
        {
          title: "Data Submission Support",
          items: [
            "Forecasting data guidance",
            "TV clock management",
            "Offline actuals entry",
            "CPT recording assistance",
          ],
        },
        {
          title: "Error Resolution",
          items: [
            "Real-time troubleshooting",
            "Error message interpretation",
            "Schema validation support",
            "Process optimization tips",
          ],
        },
      ]}
      metrics={{
        title: "Driving Results",
        description: "The Janus Helpdesk is designed to improve:",
        items: [
          "Accelerated onboarding and training",
          "Reduced data submission errors",
          "Streamlined taxonomy creation",
          "Faster issue resolution",
        ],
      }}
      cta={{
        title: "Start Using the Janus Helpdesk Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access Helpdesk",
        buttonLink: "https://chatgpt.com/g/g-taxonomy-training",
      }}
      supportTeam={[
        "Mollie Craig",
        "Anannya Kumarvel",
        "Michael Furness",
        "Sophie Lau",
        "Jadwiga Sokoli",
      ]}
    />
  );
}
