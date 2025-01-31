const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

app.use((req, res, next) => {
  const send = res.send;
  res.send = function (html) {
    if (typeof html === "string") {
      const page = req.path.slice(1) || "index.html";
      let navigation = "";

      // Add navigation based on current page
      if (page === "1_1_Digital_Setup_Wizard.html") {
        navigation = '<a href="1_2_MarketingEffectiveness_Bot.html">Next →</a>';
      } else if (page === "1_2_MarketingEffectiveness_Bot.html") {
        navigation = '<a href="1_1_Digital_Setup_Wizard.html">← Previous</a>';
      }

      // Replace navigation placeholder
      html = html.replace("{{navigation}}", navigation);
    }
    send.call(this, html);
  };
  next();
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
