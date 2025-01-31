const siteConfig = {
  pages: [
    {
      id: "index",
      path: "index.html",
      title: "Medialab AI Tools Hub",
      type: "home",
    },
    // Section 1: Current Tools
    {
      id: "section-1",
      type: "section",
      pages: [
        {
          id: "setup-wizard",
          path: "1_1_Digital_Setup_Wizard.html",
          title: "Digital Setup Wizard",
          order: 1,
        },
        {
          id: "marketing-bot",
          path: "1_2_MarketingEffectiveness_Bot.html",
          title: "Marketing Effectiveness Bot",
          order: 2,
        },
        {
          id: "channel4",
          path: "1_3_Channel4_Insider.html",
          title: "Channel 4 Insider",
          order: 3,
        },
        {
          id: "hr-faq",
          path: "1_4_HR_FAQ_Bot.html",
          title: "HR FAQ Bot",
          order: 4,
        },
      ],
    },
    // Future sections can be added here
  ],
};

module.exports = siteConfig;
