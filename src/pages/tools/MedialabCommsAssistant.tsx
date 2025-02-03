import { ToolPage } from "../../components/shared/ToolPage";

export function MedialabCommsAssistant() {
  return (
    <ToolPage
      title="Medialab Comms Assistant"
      subtitle="Your AI-powered assistant for internal and external communications"
      intro={{
        title: "Enhance Your Communications",
        description:
          "The Media Lab Comms Assistant helps you create and manage effective communications across all channels with intelligent automation and strategic insights.",
      }}
      features={[
        {
          title: "Content Management",
          items: [
            "Message templates",
            "Brand voice guidance",
            "Content calendar",
            "Channel optimization",
          ],
        },
        {
          title: "Communication Strategy",
          items: [
            "Audience targeting",
            "Message timing",
            "Channel selection",
            "Impact measurement",
          ],
        },
        {
          title: "Quality Control",
          items: [
            "Style guide compliance",
            "Tone consistency",
            "Grammar checking",
            "Message effectiveness",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Enhance your communications with:",
        items: [
          "Consistent messaging",
          "Improved engagement",
          "Time efficiency",
          "Better coordination",
        ],
      }}
      cta={{
        title: "Start Using the Comms Assistant Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access Assistant",
        buttonLink: "https://chatgpt.com/g/g-comms-assistant",
      }}
      supportTeam={[
        "Adam King",
        "Cerys Hayes",
        "Henry Brown",
        "Chryanmayni Ponniah",
        "Ben",
      ]}
    />
  );
}
