# Technical Specifications for React Refactor

## 1. Development Environment

### Project Setup

- **Framework**: Vite
  - Reasoning: Faster build times, better dev experience, and more modern than CRA
  - Version: Latest stable (currently 5.x)
- **Node/npm Requirements**:
  - Node.js >= 18.0.0 (LTS)
  - npm >= 9.0.0
- **TypeScript**: Yes
  - Reasoning: Type safety, better IDE support, easier maintenance
  - Version: Latest stable (currently 5.x)

### Project Structure

```
medialab-bots/
├── v1/                     # Current HTML version (reference)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   ├── shared/       # Shared components (CTASection, FeatureCard)
│   │   └── search/       # Search-related components
│   ├── pages/            # Page components for each tool
│   ├── types/            # TypeScript type definitions
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # Global styles and CSS modules
│   ├── assets/           # Images and other static assets
│   └── config/           # Configuration files
├── public/               # Static files
└── tests/                # Test files
```

## 2. Dependencies

### Core Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^5.x",
    "typescript": "^5.x",
    "vitest": "^1.x",
    "@testing-library/react": "^14.x",
    "@testing-library/jest-dom": "^6.x",
    "eslint": "^8.x",
    "prettier": "^3.x"
  }
}
```

## 3. State Management

### Authentication

- Use React Context for auth state
- Store auth token in sessionStorage (matching current implementation)
- Create AuthProvider component and useAuth hook

```typescript
// Example Auth Context Structure
interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<void>;
  logout: () => void;
}
```

### Search Functionality

- Use local state (useState) for search input and results
- Implement debounced search using custom hook
- Store search index in memory during session

## 4. Component Architecture

### Base Components

```typescript
// Example Component Structure
interface CTASectionProps {
  toolName: string;
  availability: "available" | "upcoming";
  availabilityDate?: string;
  ctaLink: string;
  toolType:
    | "Wizard"
    | "Bot"
    | "Insider"
    | "Manager"
    | "Converter"
    | "Chatbot"
    | "Helpdesk";
}
```

### Routing Structure

```typescript
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <ToolsHub /> },
      { path: "/digital-setup", element: <DigitalSetupWizard /> },
      // ... other tool routes
    ],
  },
];
```

## 5. Testing Strategy

### Test Structure

```
tests/
├── components/           # Component tests
├── pages/               # Page tests
├── hooks/               # Custom hook tests
└── utils/               # Utility function tests
```

### Testing Requirements

- Unit tests for all shared components
- Integration tests for page components
- Minimum 80% test coverage
- E2E tests for critical paths (login, navigation)

## 6. Build & Deployment

### Build Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
  },
  server: {
    port: 3000,
  },
});
```

### Environment Variables

```env
VITE_API_URL=http://localhost:8000
VITE_AUTH_ENABLED=true
VITE_DEFAULT_TOOL_TYPE=Bot
```

### Production Deployment

- Build output: Single-page application
- Static file hosting
- Environment-specific builds
- Gzip compression enabled

## 7. Performance Requirements

- First Contentful Paint < 1.5s
- Time to Interactive < 3.0s
- Lighthouse score > 90
- Bundle size < 200KB (initial load)

## 8. Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 9. Security Considerations

- Implement CSP headers
- Sanitize all user inputs
- HTTPS only
- Regular dependency updates
- Protected routes implementation

## 10. Development Workflow

1. Branch naming: `feature/`, `bugfix/`, `refactor/`
2. Commit message format: Conventional Commits
3. PR review requirements: 1 approval
4. CI checks must pass:
   - TypeScript compilation
   - Unit tests
   - Linting
   - Build verification
