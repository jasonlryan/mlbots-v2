# Navigation System Instructions

## Current Implementation

- Simple HTML-based navigation system
- Currently implemented: Pages 1_1 through 1_4
- Hub page (`hub.html`) serves as the central navigation point
- Each page contains:
  - "Back to Hub" link (all pages)
  - "Previous" link (all except 1_1.html)
  - "Next" link (all except 1_4.html)

## File Structure

```
hub.html          # Central hub page
1_1.html          # First page
1_2.html          # Second page
1_3.html          # Third page
1_4.html          # Fourth page
```

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
