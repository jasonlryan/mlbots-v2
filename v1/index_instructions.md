# Navigation System Instructions

## Current Implementation

- Simple HTML-based navigation system
- Currently implemented: Pages 1_1 through 1_4, and 2_1 through 2_4
- Hub page (`hub.html`) serves as the central navigation point
- Each page follows standardized structure and styling

## Standard Page Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Tool Name] - Medialab</title>
    <link rel="stylesheet" href="global.css" />
  </head>
  <body>
    <!-- Global Navigation -->
    <nav class="nav-global">
      <div class="nav-left">
        <img
          src="images/medialab-logo.png"
          alt="Medialab Logo"
          class="nav-logo"
        />
        <a href="index.html">Medialab AI Tools Hub</a>
        <div class="search-form">
          <input
            type="search"
            class="nav-search"
            placeholder="Search all AI tools..."
          />
          <button class="nav-button">Search</button>
        </div>
      </div>
      <div class="nav-links">{{navigation}}</div>
    </nav>

    <!-- Hero Section -->
    <div class="hero">
      <h1>[Tool Name]</h1>
      <p>[One-line description]</p>
    </div>

    <div class="container">
      <!-- Introduction -->
      <section class="intro">
        <h2>[Main Value Proposition]</h2>
        <p>[Detailed description]</p>
      </section>

      <!-- Features Grid -->
      <section class="features">
        [3 feature cards with h3 headings and ul lists]
      </section>

      <!-- Metrics/Benefits -->
      <section class="metrics">
        <h2>Key Benefits</h2>
        <p>[Benefits intro]</p>
        <ul>
          [4 key benefits]
        </ul>
      </section>

      <!-- Call to Action -->
      <section class="cta-section">
        <h2>Start Using [Tool Name] Today</h2>
        <p>[Availability Status]</p>
        <a href="[Tool URL]" class="cta-button">Access the [Tool Type]</a>
      </section>

      <!-- Contact Information -->
      <section class="contact">
        <h2>Development Team</h2>
        <p>For feedback or questions, contact:</p>
        <p>[Team member names]</p>
      </section>
    </div>
  </body>
</html>
```

## CTA Section Standards

Each page's CTA section should follow this format:

```html
<section class="cta-section">
  <h2>Start Using [Tool Name] Today</h2>
  <p>[One of the following status messages:]</p>
  <!-- For available tools -->
  <p>Available now for all Medialab team members</p>
  <!-- For upcoming tools -->
  <p>Available [Month Year] - Join our early access program</p>
  <a href="[Tool URL]" class="cta-button">Access the [Tool Type]</a>
</section>
```

## Tool Type References

Use these consistent terms in CTAs:

- Digital Setup Wizard -> "Wizard"
- Marketing Effectiveness Bot -> "Bot"
- Channel 4 Insider -> "Insider"
- HR FAQ Bot -> "Bot"
- Print Delivery Manager -> "Manager"
- Finance Sheet Converter -> "Converter"
- Weekly Report Chatbot -> "Chatbot"
- Janus Helpdesk -> "Helpdesk"

## Adding New Pages

1. Copy the standard page structure
2. Replace all placeholders in [brackets]
3. Add three feature cards with relevant capabilities
4. List 4 key benefits in the metrics section
5. Use the standardized CTA format
6. Add the development team contacts
7. Add to index.html using the tool card template

## Index.html Tool Card Template

```html
<div class="tool-card">
  <h3>[Tool Name]</h3>
  <p>[One-line description matching hero text]</p>
  <a href="[filename].html" class="tool-link">Learn More</a>
</div>
```

## File Structure

```
hub.html                           # Central hub page
1_1_Digital_Setup_Wizard.html      # Digital Setup Wizard
1_2_MarketingEffectiveness_Bot.html # Marketing Effectiveness Bot
1_3_Channel4_Insider.html         # Channel 4 Insider
1_4_HR_FAQ_Bot.html              # HR FAQ Bot
2_1_Print_Delivery_Manager.html   # Print Delivery Manager
2_2_Finance_Sheet_Converter.html  # Finance Sheet Converter
2_3_Weekly_Report_Chatbot.html    # Weekly Report Chatbot
2_4_Janus_Helpdesk.html          # Janus Helpdesk
```

## File Naming Convention

Use descriptive filenames that include both the numeric sequence and the tool name:

- Format: `[section]_[number]_[ToolName].html`
- Example: `1_1_Digital_Setup_Wizard.html`
- Use underscores to separate words
- Avoid spaces in filenames
- Keep consistent capitalization

## Template for New Pages

When adding new pages (1_5.html through 1_12.html), use this structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page [N]</title>
  </head>
  <body>
    <h1>Page [N]</h1>
    <div>
      <a href="hub.html">Back to Hub</a> | <a href="1_[N-1].html">Previous</a> |
      <a href="1_[N+1].html">Next</a>
    </div>
  </body>
</html>
```

## Adding New Pages (5-12)

1. Create new HTML file named `1_[N].html`
2. Copy template above
3. Replace [N] with current page number
4. Replace [N-1] with previous page number
5. Replace [N+1] with next page number
6. For the final page (1_12.html), remove the Next link and trailing pipe

## Navigation Rules

- First page (1_1.html): Only "Hub" and "Next" links
- Middle pages: "Hub", "Previous", and "Next" links
- Last page (currently 1_4.html, will be 1_12.html): Only "Hub" and "Previous" links

## Remaining Pages to Add

- [ ] 1_5.html
- [ ] 1_6.html
- [ ] 1_7.html
- [ ] 1_8.html
- [ ] 1_9.html
- [ ] 1_10.html
- [ ] 1_11.html
- [ ] 1_12.html

## Important Notes

- Keep the HTML structure simple and consistent
- No need for complex configuration files
- All navigation is hardcoded for simplicity and reliability
- Test each new page's navigation links after creation
- Keep all styling in global.css
- Maintain consistent spacing and formatting
- Use the same color scheme (defined in global.css)
- Test all navigation links after adding new pages
- Ensure responsive design works on all screen sizes

## Global Navigation Template

For index.html:

```html
<nav class="nav-global">
  <div class="nav-left">
    <img src="images/medialab-logo.png" alt="Medialab Logo" class="nav-logo" />
    <a href="index.html" class="nav-title">Tools Index</a>
    <div class="search-form">
      <input
        type="search"
        class="nav-search"
        placeholder="Search all AI tools..."
      />
      <button class="nav-button">Search</button>
    </div>
  </div>
  <div class="nav-links">{{navigation}}</div>
</nav>
```

For all other pages:

```html
<nav class="nav-global">
  <div class="nav-left">
    <img src="images/medialab-logo.png" alt="Medialab Logo" class="nav-logo" />
    <div class="search-form">
      <input
        type="search"
        class="nav-search"
        placeholder="Search all AI tools..."
      />
      <button class="nav-button">Search</button>
    </div>
  </div>
  <div class="nav-links">{{navigation}}</div>
</nav>
```

## Implementation Notes

1. The index page includes the "Tools Index" link in the navigation
2. Other pages omit this link but maintain the same styling and structure
3. All pages use the same global CSS classes defined in global.css
4. The search form and logo are consistent across all pages
