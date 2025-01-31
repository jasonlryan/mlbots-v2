import { ToolPage } from "../../components/shared/ToolPage";

export function PrintDeliveryManager() {
  return (
    <ToolPage
      title="Print Delivery Manager"
      subtitle="Your AI-powered assistant for flawless print insert delivery scheduling"
      intro={{
        title: "Streamline Your Print Delivery Process",
        description:
          "The Print Delivery Manager automates the creation and verification of print insert delivery schedules. Built with precision and attention to detail, it ensures accurate, standardised documentation for all your print delivery needs.",
      }}
      features={[
        {
          title: "Smart Schedule Creation",
          items: [
            "Automated Excel workbook generation",
            "Standardised template integration",
            "Multi-region delivery support",
            "Comprehensive detail collection",
          ],
        },
        {
          title: "Quality Assurance",
          items: [
            "Double-check verification system",
            "Missing information alerts",
            "Format consistency checks",
            "Error prevention protocols",
          ],
        },
        {
          title: "Delivery Management",
          items: [
            "Contact detail organisation",
            "Delivery instruction tracking",
            "Packaging specification tools",
            "Timeline management features",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Transform your print delivery workflow with:",
        items: [
          "Significant reduction in manual scheduling time",
          "Enhanced accuracy in delivery documentation",
          "Standardised process across all publications",
          "Simplified multi-region delivery coordination",
        ],
      }}
      cta={{
        title: "Start Using the Print Delivery Manager Today",
        description: "Available January 2025 - Join our early access program",
        buttonText: "Access the Manager",
        buttonLink: "https://chatgpt.com/g/g-vfXGVlnpb-print-delivery-manager",
      }}
      supportTeam={[
        "James Taylor",
        "Molly Giles",
        "Olivia Jacobs",
        "Scarlett Ryder",
        "Krysalyn Quainoo",
      ]}
    />
  );
}
