import { ToolPage } from "../../components/shared/ToolPage";

export function HRFAQBot() {
  return (
    <ToolPage
      title="HR FAQ Bot"
      subtitle="Your AI-powered guide for HR policies, line management, and company benefits"
      intro={{
        title: "Streamline Your HR Experience",
        description:
          "The HR FAQ Bot is your dedicated AI assistant for navigating HR policies, managing teams effectively, and accessing company benefits. Whether you're a line manager or team member, get instant answers aligned with Medialab's policies and best practices.",
      }}
      features={[
        {
          title: "Line Management Support",
          items: [
            "Radical Candor feedback framework",
            "Performance review guidance",
            "OKR setting and examples",
            "Team development strategies",
          ],
        },
        {
          title: "HR Policies & Benefits",
          items: [
            "Leave policies and procedures",
            "Company benefits explained",
            "Payroll information access",
            "Promotion process guidance",
          ],
        },
        {
          title: "Resources & Tools",
          items: [
            "Quick access to HR platforms",
            "Business case templates",
            "Policy document navigation",
            "Process workflows explained",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Empowering better people management through:",
        items: [
          "Instant access to HR policies and procedures",
          "Structured guidance for feedback and performance reviews",
          "Clear explanation of company benefits and perks",
          "Consistent support for management challenges",
        ],
      }}
      cta={{
        title: "Start Using the HR FAQ Bot Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access the Bot",
        buttonLink: "https://chatgpt.com/g/g-9FL8tVaan-hr-faq-bot",
      }}
      supportTeam={["Daisy Hall", "Harry Darlington", "Ant Stonehewer"]}
    />
  );
}
