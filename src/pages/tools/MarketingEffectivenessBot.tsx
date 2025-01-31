import { ToolPage } from "../../components/shared/ToolPage";

export function MarketingEffectivenessBot() {
  return (
    <ToolPage
      title="Marketing Effectiveness Training Bot"
      subtitle="Your AI-powered guide to marketing measurement, MMM, and Apollo processes"
      intro={{
        title: "Simplify Complex Marketing Concepts",
        description:
          "The Marketing Effectiveness Training Bot is your dedicated learning companion, designed to help you understand and apply advanced marketing measurement concepts. Whether you're new to Marketing Mix Modeling or looking to deepen your knowledge of Apollo processes, this AI assistant makes complex topics accessible and actionable.",
      }}
      features={[
        {
          title: "Marketing Mix Modeling (MMM)",
          items: [
            "Clear explanations of econometric principles",
            "Channel contribution analysis",
            "Budget optimisation guidance",
            "ROI measurement frameworks",
          ],
        },
        {
          title: "Regional Testing Support",
          items: [
            "Incrementality testing methodologies",
            "Test design best practices",
            "Results interpretation",
            "Statistical significance guidance",
          ],
        },
        {
          title: "Professional Development",
          items: [
            "Continuous learning resources",
            "Apollo process training",
            "Best practice documentation",
            "Knowledge sharing platform",
          ],
        },
      ]}
      metrics={{
        title: "Learning Outcomes",
        description: "Our AI assistant helps you achieve:",
        items: [
          "Deep understanding of marketing measurement principles",
          "Confidence in interpreting complex data models",
          "Mastery of Apollo processes and methodologies",
          "Enhanced client communication skills",
        ],
      }}
      cta={{
        title: "Start Using the Marketing Effectiveness Bot Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access the Bot",
        buttonLink: "https://chatgpt.com/g/g-vfXGVlnpb-marketing-effectiveness",
      }}
      supportTeam={[
        "Joe Slade",
        "Noel McGarrell",
        "Farid Hamid",
        "Nicole Young",
        "Adam Cunnington",
      ]}
    />
  );
}
