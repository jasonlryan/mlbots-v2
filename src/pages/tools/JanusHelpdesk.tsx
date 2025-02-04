import { ToolPage } from "../../components/shared/ToolPage";

export function JanusHelpdesk() {
  return (
    <ToolPage
      title="Janus Taxonomy Training Bot"
      subtitle="Your AI-powered guide for mastering the Janus platform and Apollo processes"
      intro={{
        title: "A dedicated Assistant",
        description:
          "The Janus Taxonomy Training Bot is your dedicated assistant for navigating the Janus platform, ensuring accurate data submission, and streamlining your workflow within the Apollo ecosystem. From taxonomy creation to troubleshooting, we're here to help you succeed.",
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
        title: "Key Benefits",
        description: "Enhance your Janus workflow with:",
        items: [
          "Accelerated onboarding and training process",
          "Reduced manual errors in data submission",
          "Streamlined taxonomy creation",
          "Faster issue resolution",
        ],
      }}
      cta={{
        title: "Coming January 2025",
        description:
          "Currently in MVP stage - Help desk functionality now operational",
        buttonText: "Join Early Access",
        buttonLink: "https://chatgpt.com/g/g-taxonomy-training",
        beta: true,
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
