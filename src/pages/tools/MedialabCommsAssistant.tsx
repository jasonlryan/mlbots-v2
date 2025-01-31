import { ToolPage } from "../../components/shared/ToolPage";

export function MedialabCommsAssistant() {
  return (
    <ToolPage
      title="Medialab Comms Assistant"
      subtitle="Your AI-powered guide for consistent, impactful communications"
      intro={{
        title: "Elevate Your Communications",
        description:
          "Ensure all company communications embody our values and maintain consistent messaging. Get AI-powered assistance for crafting professional, on-brand communications across all channels.",
      }}
      features={[
        {
          title: "Content Creation",
          items: [
            "Brand voice guidance",
            "Message templates",
            "Tone adjustment",
            "Style consistency checks",
          ],
        },
        {
          title: "Communication Tools",
          items: [
            "Email template library",
            "Presentation frameworks",
            "Document formatting",
            "Multi-channel support",
          ],
        },
        {
          title: "Quality Assurance",
          items: [
            "Brand compliance check",
            "Grammar and style review",
            "Messaging alignment",
            "Cultural sensitivity check",
          ],
        },
      ]}
      metrics={{
        title: "Communication Impact",
        description: "The Comms Assistant helps achieve:",
        items: [
          "Consistent brand voice",
          "Professional messaging",
          "Improved clarity",
          "Faster content creation",
        ],
      }}
      cta={{
        title: "Start Crafting Better Communications",
        description: "Access professional communication support",
        buttonText: "Launch Assistant",
        buttonLink:
          "https://chatgpt.com/g/g-673611302c588190b6de270123f33cd3-medialab-comms-bot",
      }}
      supportTeam={[
        "Communications Team",
        "Charles Batchelor",
        "Brand Managers",
      ]}
    />
  );
}
