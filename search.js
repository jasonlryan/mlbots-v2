// Create a new file for our search functionality
const searchIndex = {
  pages: null,
  init: async function () {
    try {
      // Get list of HTML files
      const response = await fetch("/api/pages");
      const pages = await response.json();

      // Build search index from actual page content
      this.pages = await Promise.all(
        pages.map(async (page) => {
          const content = await fetch(page).then((r) => r.text());
          const parser = new DOMParser();
          const doc = parser.parseFromString(content, "text/html");

          // Extract searchable content from relevant sections
          const searchableContent = [
            ...Array.from(doc.querySelectorAll("h1, h2, h3, p, li")).map(
              (el) => el.textContent
            ),
            doc.title,
          ].join(" ");

          return {
            url: page,
            title: doc.title,
            content: searchableContent,
          };
        })
      );
    } catch (error) {
      console.error("Error building search index:", error);
    }
  },

  search: function (query) {
    if (!this.pages) return [];

    const searchTerm = query.toLowerCase();
    return this.pages
      .map((page) => {
        const matches = page.content
          .toLowerCase()
          .match(new RegExp(`.{0,50}${searchTerm}.{0,50}`, "g"));

        if (!matches) return null;

        return {
          title: page.title,
          url: page.url,
          matches: matches.map((match) => `...${match.trim()}...`),
        };
      })
      .filter(Boolean);
  },
};
