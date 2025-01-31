interface Feature {
  title: string;
  items: string[];
}

interface ToolPageProps {
  title: string;
  subtitle: string;
  intro: {
    title: string;
    description: string;
  };
  features: Feature[];
  metrics: {
    title: string;
    description: string;
    items: string[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    beta?: boolean;
  };
  supportTeam?: string[];
}

export function ToolPage({
  title,
  subtitle,
  intro,
  features,
  metrics,
  cta,
  supportTeam,
}: ToolPageProps) {
  return (
    <>
      <div className="hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="container">
        <section className="intro">
          <h2>{intro.title}</h2>
          <p>{intro.description}</p>
        </section>

        <section className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <ul>
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="metrics">
          <h2>{metrics.title}</h2>
          <p>{metrics.description}</p>
          <ul>
            {metrics.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cta-section">
          {cta.beta && (
            <div className="beta-tag">Currently in Testing Phase</div>
          )}
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
          <a
            href={cta.buttonLink}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.buttonText}
          </a>
        </section>

        {supportTeam && (
          <section className="contact">
            <h2>Support Team</h2>
            <p>For feedback or questions, contact:</p>
            <p>{supportTeam.join(", ")}</p>
          </section>
        )}
      </div>
    </>
  );
}
