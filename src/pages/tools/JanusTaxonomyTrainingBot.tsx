import { ToolPage } from "../../components/shared/ToolPage";

export function JanusTaxonomyTrainingBot() {
  return (
    <ToolPage
      title="Janus Taxonomy Training Bot"
      subtitle="Your AI-powered guide for mastering Janus taxonomy and classification"
      intro={{
        title: "Master Janus Classification",
        description:
          "The Janus Taxonomy Training Bot helps you understand and apply Medialab's classification system effectively. Get instant guidance on taxonomy rules, best practices, and real-world applications.",
      }}
      features={[
        {
          title: "Taxonomy Training",
          items: [
            "Interactive learning modules",
            "Classification guidelines",
            "Real-world examples",
            "Best practice tutorials",
          ],
        },
        {
          title: "Practice & Assessment",
          items: [
            "Hands-on exercises",
            "Progress tracking",
            "Performance feedback",
            "Competency validation",
          ],
        },
        {
          title: "Resource Library",
          items: [
            "Comprehensive documentation",
            "Quick reference guides",
            "Case studies",
            "Update notifications",
          ],
        },
      ]}
      metrics={{
        title: "Learning Outcomes",
        description: "Enhance your taxonomy skills with:",
        items: [
          "Improved classification accuracy",
          "Faster decision making",
          "Consistent application of rules",
          "Better quality assurance",
        ],
      }}
      cta={{
        title: "Start Learning Today",
        description: "Begin your taxonomy training journey",
        buttonText: "Access Training",
        buttonLink: "https://chatgpt.com/g/g-taxonomy-training",
      }}
      supportTeam={[
        "Mollie Craig",
        "Priyanka Kumar",
        "Michael Furniss",
        "Sophie Lau",
        "Jadwiga Sokol",
      ]}
    />
  );
}
