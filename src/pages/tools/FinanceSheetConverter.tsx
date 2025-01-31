import { ToolPage } from "../../components/shared/ToolPage";

export function FinanceSheetConverter() {
  return (
    <ToolPage
      title="Finance Sheet Converter"
      subtitle="Your AI-powered assistant for precise financial data extraction and processing"
      intro={{
        title: "Transform Financial Document Processing",
        description:
          "The Finance Sheet Converter automates the extraction and organisation of financial data from PDFs into structured Excel templates. Built with meticulous attention to detail, it ensures accurate data processing while saving valuable time during month-end closing and daily operations.",
      }}
      features={[
        {
          title: "Invoice Processing",
          items: [
            "Automated VAT calculations",
            "Line-by-line data extraction",
            "Structured Excel output",
            "Verification checkpoints",
          ],
        },
        {
          title: "Credit Card Statements",
          items: [
            "Transaction detail capture",
            "Page-by-page verification",
            "Credit entry handling",
            "Duplicate detection",
          ],
        },
        {
          title: "Google Invoice Processing",
          items: [
            "Account-level breakdown",
            "Campaign spending tracking",
            "Regulatory fee capture",
            "Invalid activity adjustments",
          ],
        },
      ]}
      metrics={{
        title: "Key Benefits",
        description: "Streamline your financial workflows with:",
        items: [
          "80% automation rate for credit card statements",
          "Significant reduction in manual processing time",
          "Enhanced accuracy through systematic verification",
          "Streamlined month-end closing process",
        ],
      }}
      cta={{
        title: "Start Using the Finance Sheet Converter Today",
        description: "Available now for all Medialab team members",
        buttonText: "Access the Converter",
        buttonLink: "https://chatgpt.com/g/g-QDoMerxQe-finance-sheet-converter",
      }}
      supportTeam={[
        "Katherine Condon",
        "David Tsang",
        "Siva Ananda",
        "Richard Wallace",
      ]}
    />
  );
}
