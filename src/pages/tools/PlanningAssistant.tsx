import { ToolPage } from "../../components/shared/ToolPage";

export function PlanningAssistant() {
  return (
    <ToolPage
      title="Planning Assistant"
      subtitle="Your AI-powered guide through Medialab's planning framework"
      intro={{
        title: "Strategic Planning Made Simple",
        description:
          "Navigate Medialab's planning framework with confidence using our AI-powered assistant. Get strategic guidance, access resources, and develop comprehensive plans aligned with our methodology.",
      }}
      features={[
        {
          title: "Strategic Framework",
          items: [
            "Planning methodology guide",
            "Strategy development tools",
            "Resource allocation planning",
            "Timeline management",
          ],
        },
        {
          title: "Resource Library",
          items: [
            "Best practice templates",
            "Case study database",
            "Planning frameworks",
            "Industry insights",
          ],
        },
        {
          title: "Collaboration Tools",
          items: [
            "Team planning support",
            "Stakeholder management",
            "Progress tracking",
            "Plan review assistance",
          ],
        },
      ]}
      metrics={{
        title: "Planning Success",
        description: "The Planning Assistant helps achieve:",
        items: [
          "Faster plan development",
          "Better strategic alignment",
          "Improved resource allocation",
          "Enhanced plan quality",
        ],
      }}
      cta={{
        title: "Start Planning Now",
        description: "Access strategic planning support",
        buttonText: "Launch Assistant",
        buttonLink:
          "https://chatgpt.com/g/g-6735f92c63fc8190b61098a7afc0c26d-planning-assistant",
      }}
      supportTeam={[
        "Strategy Team",
        "Charles Batchelor",
        "Senior Planning Leads",
      ]}
    />
  );
}
