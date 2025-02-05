import { ToolPage } from "../../components/shared/ToolPage";

export function DigitalSetupWizard() {
  return (
    <ToolPage
      title="Digital Setup Wizard"
      subtitle="Your AI-powered assistant for Meta campaign setup and optimisation"
      intro={{
        title: "Transform Your Campaign Setup Process",
        description:
          "The Digital Setup Wizard is your dedicated AI assistant, designed specifically for Medialab's Meta advertising workflows. It streamlines campaign setup, ensures best practices, and provides instant support when you need it most.",
      }}
      features={[
        {
          title: "Expert Campaign Guidance",
          items: [
            "Step-by-step setup instructions",
            "Best practice recommendations",
            "Real-time troubleshooting",
            "Budget allocation support",
          ],
        },
        {
          title: "Quality Assurance",
          items: [
            "Campaign structure verification",
            "Medialab QA checklist integration",
            "Budget tracking reminders",
            "Policy compliance checks",
          ],
        },
        {
          title: "Technical Support",
          items: [
            "Meta Pixel configuration",
            "Conversions API setup",
            "Targeting strategy optimisation",
            "Creative best practices",
          ],
        },
      ]}
      metrics={{
        title: "Driving Results",
        description: "The Digital Setup Wizard is designed to improve:",
        items: [
          "Campaign setup efficiency",
          "Error reduction in campaign launches",
          "Time savings for junior and mid-level staff",
          "Consistency in campaign structure and optimisation",
        ],
      }}
      cta={{
        title: "Start Using the Digital Setup Wizard Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access the Wizard",
        buttonLink: "https://chatgpt.com/g/g-173vPRLuF-digital-campaign-wizard",
      }}
      supportTeam={[
        "Charles Batchelor",
        "Krishan Majithia",
        "Adelphi Eden",
        "Aneena Morshed",
        "Adam Hughes",
      ]}
    />
  );
}
