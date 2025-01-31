import { Link } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const tools = [
    {
      title: "Digital Setup Wizard",
      description:
        "AI-powered assistant for flawless Meta campaign setup and optimisation. Get step-by-step guidance and best practices.",
      link: "/tools/digital-setup-wizard",
    },
    {
      title: "Marketing Effectiveness Bot",
      description:
        "Analyse campaign performance and get AI-driven insights for optimisation and improvement.",
      link: "/tools/marketing-effectiveness-bot",
    },
    {
      title: "Channel 4 Insider",
      description:
        "Your AI-powered expert for Channel 4 media opportunities and insights. Get tailored recommendations and up-to-date information.",
      link: "/tools/channel4-insider",
    },
    {
      title: "HR FAQ Bot",
      description:
        "Your AI-powered guide for HR policies, line management, and company benefits. Get instant answers aligned with Medialab's policies.",
      link: "/tools/hr-faq-bot",
    },
    {
      title: "Print Delivery Manager",
      description:
        "AI-powered assistant for flawless print insert delivery scheduling. Automate and streamline your print delivery workflow.",
      link: "/tools/print-delivery-manager",
    },
    {
      title: "Finance Sheet Converter",
      description:
        "AI-powered tool for standardising and converting financial documents. Transform complex spreadsheets into consistent formats.",
      link: "/tools/finance-sheet-converter",
    },
    {
      title: "Weekly Report Chatbot",
      description:
        "AI-powered assistant for generating and analysing weekly performance reports. Streamline your reporting workflow with automated insights.",
      link: "/tools/weekly-report-chatbot",
    },
    {
      title: "Janus Helpdesk",
      description:
        "AI-powered assistant for IT support and system access. Get instant help with technical issues and access requests.",
      link: "/tools/janus-helpdesk",
    },
    {
      title: "Planning Assistant",
      description:
        "Your AI-powered guide through Medialab's planning framework. Get strategic guidance, resources, and insights at every step.",
      link: "/tools/planning-assistant",
    },
    {
      title: "Pitch Bank",
      description:
        "Your AI-powered assistant for efficient pitch content management and retrieval. Access and organise pitch materials, case studies, and strategic insights.",
      link: "/tools/pitch-bank",
    },
    {
      title: "Medialab Comms Assistant",
      description:
        "Your AI-powered guide for consistent, impactful communications. Ensure all company communications embody our values and maintain consistent messaging.",
      link: "/tools/medialab-comms-assistant",
    },
    {
      title: "Recruitment Assistant",
      description:
        "AI-powered support for streamlining the hiring process. Get help with job descriptions, candidate screening, and interview preparation.",
      link: "/tools/recruitment-assistant",
    },
  ];

  const filteredTools = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="hero">
        <h1>Medialab AI Tools Hub</h1>
        <p>Your gateway to AI-powered marketing solutions</p>
      </div>

      <div className="container">
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search all AI tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <section className="tools-grid">
          {filteredTools.map((tool) => (
            <div key={tool.title} className="tool-card">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <Link to={tool.link} className="tool-link">
                Learn More
              </Link>
            </div>
          ))}
          {filteredTools.length === 0 && (
            <p className="no-results">No tools found matching your search.</p>
          )}
        </section>
      </div>
    </div>
  );
}
