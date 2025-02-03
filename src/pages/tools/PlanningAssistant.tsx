import { ToolPage } from "../../components/shared/ToolPage";

export function PlanningAssistant() {
  return (
    <ToolPage
      title="Planning Assistant"
      subtitle="Your AI-powered assistant for media planning and strategy"
      intro={{
        title: "Streamline Your Planning Process",
        description:
          "The Planning Assistant helps streamline your media planning workflow with intelligent automation and strategic insights.",
      }}
      features={[
        {
          title: "Planning Support",
          items: [
            "Campaign planning assistance",
            "Strategic recommendations",
            "Budget allocation",
            "Timeline management",
          ],
        },
        {
          title: "Data Analysis",
          items: [
            "Performance insights",
            "Trend analysis",
            "Competitive research",
            "Market intelligence",
          ],
        },
        {
          title: "Workflow Optimization",
          items: [
            "Process automation",
            "Resource allocation",
            "Task management",
            "Team collaboration",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Enhance your planning workflow with:",
        items: [
          "Improved efficiency",
          "Data-driven decisions",
          "Streamlined processes",
          "Better collaboration",
        ],
      }}
      cta={{
        title: "Start Using the Planning Assistant Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access Assistant",
        buttonLink: "https://chatgpt.com/g/g-planning-assistant",
      }}
      supportTeam={[
        "Jess Talbot",
        "Mattie Mould",
        "Alexandra Gavela",
        "George Gwilliam",
        "Jack Allen",
        "Harry Darlington",
      ]}
    />
  );
}
