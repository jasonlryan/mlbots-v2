import { ToolPage } from "../../components/shared/ToolPage";

export function Channel4Insider() {
  return (
    <ToolPage
      title="Channel 4 Insider"
      subtitle="Your AI-powered expert for Channel 4 media opportunities and insights"
      intro={{
        title: "Transform Your Media Planning Process",
        description:
          "Channel 4 Insider is your dedicated AI assistant, providing tailored insights and recommendations for different team roles. Access up-to-date information on programming, commercial opportunities, audience insights, and strategic direction – all in one place.",
      }}
      features={[
        {
          title: "Media Opportunities",
          items: [
            "Latest sponsorship opportunities",
            "AFP and contextual advertising",
            "BVOD targeting capabilities",
            "Commercial innovation updates",
          ],
        },
        {
          title: "Audience & Performance",
          items: [
            "Demographic insights and trends",
            "Campaign case studies",
            "Programming performance data",
            "Effectiveness research",
          ],
        },
        {
          title: "Strategic Intelligence",
          items: [
            "Market positioning updates",
            "Sustainability & DE&I policies",
            "Financial performance analysis",
            "Competitive landscape insights",
          ],
        },
      ]}
      metrics={{
        title: "Role-Based Insights",
        description: "Tailored information for every team member:",
        items: [
          "Board Members: High-level strategic summaries and market context",
          "Planners: Detailed media planning insights and opportunities",
          "Client Teams: Client-specific recommendations and performance data",
          "Leadership: Commercial strategy and industry positioning",
        ],
      }}
      cta={{
        title: "Start Using the Channel 4 Insider Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access the Insider",
        buttonLink: "https://chatgpt.com/g/g-lVG99vF8Y-channel-4-insider",
      }}
      supportTeam={[
        "Steve Parker",
        "Ollie White",
        "Jon Manning",
        "James Taylor",
        "Kieran MacCallum",
      ]}
    />
  );
}
