const express = require("express");
const path = require("path");
const fs = require("fs");
const siteConfig = require("./config");
const app = express();
const port = 8000;

function getNavigation(currentPath) {
  // Get all content pages (flattened)
  const contentPages = siteConfig.pages
    .filter((section) => section.type === "section")
    .flatMap((section) => section.pages)
    .sort((a, b) => a.order - b.order);

  const currentIndex = contentPages.findIndex((p) => p.path === currentPath);

  // Return empty for index page
  if (currentPath === "index.html") return "";

  let nav = [];

  // Always show back to hub
  nav.push('<a href="index.html">← Back to Tools Hub</a>');

  // Previous link if not first content page
  if (currentIndex > 0) {
    nav.push(`<a href="${contentPages[currentIndex - 1].path}">← Previous</a>`);
  }

  // Next link if not last content page
  if (currentIndex < contentPages.length - 1) {
    nav.push(`<a href="${contentPages[currentIndex + 1].path}">Next →</a>`);
  }

  return nav.join(" ");
}

app.get("/api/pages", (req, res) => {
  res.json(siteConfig.pages.map((p) => p.path));
});

// Add template middleware
app.use((req, res, next) => {
  const send = res.send;
  res.send = function (html) {
    if (typeof html === "string") {
      // Read nav template
      const navTemplate = fs.readFileSync("components/nav.html", "utf8");
      const currentPath = req.path.slice(1) || "index.html";
      const navigation = getNavigation(currentPath);

      // Replace navigation placeholder in template
      const navHtml = navTemplate.replace("{{navigation}}", navigation);

      // Replace entire nav section in page
      html = html.replace(/<nav class="nav-global">[\s\S]*?<\/nav>/, navHtml);
    }
    send.call(this, html);
  };
  next();
});

// Serve static files
app.use(express.static(__dirname));

// Serve login page as default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
