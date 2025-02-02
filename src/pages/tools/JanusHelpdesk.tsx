import { ToolPage } from "../../components/shared/ToolPage";

export function JanusHelpdesk() {
  return (
    <ToolPage
      title="Janus Helpdesk"
      subtitle="AI-powered assistant for IT support and system access"
      intro={{
        title: "Instant IT Support Access",
        description:
          "Get immediate assistance with technical issues, system access requests, and IT-related queries. Our AI-powered helpdesk provides quick solutions and seamless support escalation when needed.",
      }}
      features={[
        {
          title: "Technical Support",
          items: [
            "Common issue resolution",
            "System troubleshooting",
            "Software installation guidance",
            "Network connectivity support",
          ],
        },
        {
          title: "Access Management",
          items: [
            "System access requests",
            "Password reset assistance",
            "Permission management",
            "Account setup support",
          ],
        },
        {
          title: "Resource Center",
          items: [
            "IT documentation library",
            "Setup guides & tutorials",
            "Best practice resources",
            "Security guidelines",
          ],
        },
      ]}
      metrics={{
        title: "Support Excellence",
        description: "The Janus Helpdesk delivers:",
        items: [
          "Faster issue resolution",
          "24/7 support availability",
          "Reduced downtime",
          "Improved user satisfaction",
        ],
      }}
      cta={{
        title: "Get IT Support Now",
        description: "Access instant IT assistance",
        buttonText: "Contact Helpdesk",
        buttonLink: "https://chatgpt.com/g/g-mLDzclrP5-janus-helpdesk",
      }}
      supportTeam={["Richard Wallace", "David Tsang", "Charles Batchelor"]}
    />
  );
}
