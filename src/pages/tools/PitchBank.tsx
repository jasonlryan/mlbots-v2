import { ToolPage } from "../../components/shared/ToolPage";

export function PitchBank() {
  return (
    <ToolPage
      title="Pitch Bank"
      subtitle="Your AI-powered assistant for efficient pitch content management and retrieval"
      intro={{
        title: "Transform Your Pitch Process",
        description:
          "The Pitch Bank streamlines access to Medialab's wealth of pitch materials, case studies, and strategic insights. By intelligently organising and retrieving relevant content, it helps teams respond to new business opportunities quickly and effectively.",
      }}
      features={[
        {
          title: "Smart Content Retrieval",
          items: [
            "Intelligent document indexing",
            "Context-based search",
            "Industry-specific filtering",
            "Metadata-driven organisation",
          ],
        },
        {
          title: "Case Study Management",
          items: [
            "Performance metrics tracking",
            "Strategy documentation",
            "Client success stories",
            "Result visualisation",
          ],
        },
        {
          title: "Response Creation",
          items: [
            "Customised content suggestions",
            "Relevant insight extraction",
            "Brand alignment checks",
            "Presentation elements",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Enhance your pitch capabilities with:",
        items: [
          "Rapid access to relevant case studies and materials",
          "Consistent messaging across all pitch responses",
          "Efficient content organisation and retrieval",
          "Data-driven pitch development support",
        ],
      }}
      cta={{
        title: "Start Using the Pitch Bank Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access the Bank",
        buttonLink:
          "https://chatgpt.com/g/g-6736021705e0819082922e177a07e7fc-pitch-bank",
      }}
      supportTeam={[
        "Ant Stonehewer",
        "Alf Cowan",
        "Caitlin Kennedy",
        "Suzy Jordan",
        "Eleanor Hill",
      ]}
    />
  );
}
