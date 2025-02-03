import { ToolPage } from "../../components/shared/ToolPage";

export function RecruitmentAssessmentBot() {
  return (
    <ToolPage
      title="Recruitment Assessment Bot"
      subtitle="Your AI-powered assistant for recruitment and candidate assessment"
      intro={{
        title: "Streamline Your Recruitment Process",
        description:
          "The Recruitment Assessment Bot helps you evaluate and manage candidates effectively with intelligent automation and structured assessment frameworks.",
      }}
      features={[
        {
          title: "Candidate Assessment",
          items: [
            "Skills evaluation",
            "Cultural fit analysis",
            "Interview preparation",
            "Assessment frameworks",
          ],
        },
        {
          title: "Process Management",
          items: [
            "Application tracking",
            "Interview scheduling",
            "Feedback collection",
            "Progress monitoring",
          ],
        },
        {
          title: "Quality Assurance",
          items: [
            "Assessment consistency",
            "Bias prevention",
            "Compliance checking",
            "Documentation support",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Enhance your recruitment process with:",
        items: [
          "Faster assessments",
          "Better candidate experience",
          "Consistent evaluation",
          "Improved decision-making",
        ],
      }}
      cta={{
        title: "Start Using the Assessment Bot Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access Bot",
        buttonLink: "https://chatgpt.com/g/g-recruitment-bot",
      }}
      supportTeam={[
        "James Ashton",
        "Jonny Harte",
        "Loren Bower",
        "Sam Butterfield",
        "Alex Kirk",
      ]}
    />
  );
}
