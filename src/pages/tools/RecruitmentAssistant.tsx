import { ToolPage } from "../../components/shared/ToolPage";

export function RecruitmentAssistant() {
  return (
    <ToolPage
      title="Recruitment Assistant"
      subtitle="AI-powered support for streamlining the hiring process"
      intro={{
        title: "Optimise Your Recruitment Process",
        description:
          "Get AI-powered assistance with job descriptions, candidate screening, and interview preparation. Streamline your hiring process while ensuring consistency and quality in recruitment.",
      }}
      features={[
        {
          title: "Job Posting Support",
          items: [
            "Job description templates",
            "Role requirement analysis",
            "Inclusive language check",
            "Market alignment review",
          ],
        },
        {
          title: "Candidate Management",
          items: [
            "CV screening assistance",
            "Candidate evaluation tools",
            "Interview question generator",
            "Feedback templates",
          ],
        },
        {
          title: "Process Optimisation",
          items: [
            "Workflow automation",
            "Communication templates",
            "Timeline tracking",
            "Compliance checking",
          ],
        },
      ]}
      metrics={{
        title: "Recruitment Excellence",
        description: "The Recruitment Assistant helps deliver:",
        items: [
          "Faster hiring process",
          "Better candidate experience",
          "Consistent evaluation",
          "Improved hiring quality",
        ],
      }}
      cta={{
        title: "Start Optimising Recruitment",
        description: "Access recruitment support tools",
        buttonText: "Launch Assistant",
        buttonLink:
          "https://chatgpt.com/g/g-673f5e0490948191a1019f39b9425626-recruitment-assistant-sam-copy",
      }}
      supportTeam={["HR Team", "Charles Batchelor", "Talent Acquisition Leads"]}
    />
  );
}
