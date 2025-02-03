import { ToolPage } from "../../components/shared/ToolPage";

export function PitchContentAssistant() {
  return (
    <ToolPage
      title="Pitch Content Assistant"
      subtitle="Your AI-powered assistant for creating compelling pitch content"
      intro={{
        title: "Elevate Your Pitch Content",
        description:
          "The Pitch Content Assistant helps you create and organize compelling pitch materials with intelligent automation and creative insights.",
      }}
      features={[
        {
          title: "Content Creation",
          items: [
            "Template library",
            "Content suggestions",
            "Brand storytelling",
            "Visual asset organization",
          ],
        },
        {
          title: "Pitch Strategy",
          items: [
            "Audience analysis",
            "Competitive insights",
            "Value proposition",
            "Key messaging framework",
          ],
        },
        {
          title: "Quality Assurance",
          items: [
            "Brand compliance",
            "Content review",
            "Formatting checks",
            "Presentation optimization",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Enhance your pitch content with:",
        items: [
          "Faster content creation",
          "Consistent messaging",
          "Professional presentation",
          "Compelling storytelling",
        ],
      }}
      cta={{
        title: "Start Creating Better Pitches Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access Assistant",
        buttonLink: "https://chatgpt.com/g/g-pitch-content-assistant",
      }}
      supportTeam={[
        "Ant Stonehewer",
        "Ali Cowan",
        "Caitlin Kennedy",
        "Suzy Jordan",
        "Eleanor Hill",
      ]}
    />
  );
}
