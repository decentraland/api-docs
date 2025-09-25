# Decentraland API Documentation

A unified API documentation site for Decentraland services, built with React, Redoc, and Redocly CLI.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn package manager

### Running Locally

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Start development server**

   ```bash
   yarn dev
   ```

   This will:

   - Join all API specs using Redocly CLI
   - Start the Vite dev server
   - Open http://localhost:5173 in your browser

3. **Build for production**
   ```bash
   yarn build
   ```

## 📝 Adding New API Specifications

To add a new API to the documentation, simply update the `redocly.yaml` configuration file:

```yaml
extends:
  - recommended

apis:
  social-service@v1:
    root: https://decentraland.github.io/social-service-ea/communities-openapi.yaml
    rules:
      operation-4xx-response: off
  comms-gatekeeper@v1:
    root: https://decentraland.github.io/comms-gatekeeper/comms-gatekeeper-openapi.yaml
    rules:
      operation-4xx-response: off
  # Add your new API here
  your-new-api@v1:
    root: https://your-api.com/openapi.yaml
    rules:
      operation-4xx-response: off
```

Then update the `join-specs` script in `package.json`:

```json
{
  "scripts": {
    "join-specs": "redocly join social-service@v1 comms-gatekeeper@v1 your-new-api@v1 -o public/joined-openapi.yaml --prefix-tags-with-filename --prefix-components-with-info-prop title"
  }
}
```

## 🎨 Customization

### Theme Configuration

The documentation uses a custom theme defined in `src/App.tsx`. You can modify colors, typography, and layout by updating the theme object.

### Redocly Configuration

All Redocly settings are in `redocly.yaml`. This includes:

- API specifications and their sources
- Validation rules
- OpenAPI rendering options

## 🛠️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn join-specs` - Join API specifications using Redocly CLI
- `yarn preview` - Preview production build

## 📁 Project Structure

```
├── public/
│   └── joined-openapi.yaml    # Generated unified API spec
├── src/
│   ├── App.tsx                # Main React component with Redoc
│   └── main.tsx              # React entry point
├── redocly.yaml              # Redocly configuration
└── package.json              # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Add your API specification to `redocly.yaml`
3. Update the `join-specs` script to include your API
4. Test locally with `yarn dev`
5. Submit a pull request

## 📚 Documentation

- [Redocly CLI Documentation](https://redocly.com/docs/cli/)
- [Redoc Configuration Options](https://redocly.com/docs/redoc/config/)
- [OpenAPI Specification](https://swagger.io/specification/)
