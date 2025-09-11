# Cache Proxy Server

A caching proxy server built with Node.js, Express, and Redis that provides caching capabilities for HTTP requests.

Project for studying purposes only.

Inspiration from: https://roadmap.sh/projects/caching-server

## Features

- HTTP proxy with Redis caching
- Command-line interface
- TypeScript support
- Redis with Docker support
- Configurable port and origin

## Prerequisites

- Node.js (v16 or higher)
- Redis server (for caching)
- npm or yarn

## Installation & Usage

### Quick Setup (Recommended)

```bash
# Clone the repository
git clone <https://github.com/VictorHBPortela/cache-proxy-server.git>
cd cache-proxy-server

# Run the setup script (installs deps, builds, and links globally)
./setup.sh

# Now you can use the command globally
cache-proxy-server --port 3000 --origin http://dummyjson.com
```

### Option 1: Global Installation (Manual)

After cloning the repository:

```bash
# Clone the repository
git clone <https://github.com/VictorHBPortela/cache-proxy-server.git>
cd cache-proxy-server

# Install dependencies
npm install

# Build the project
npm run build

# Link globally (makes cache-proxy-server command available)
npm run link

# Now you can use the command globally
cache-proxy-server --port 3000 --origin http://dummyjson.com
```

To uninstall the global command later:

```bash
npm run unlink
```

### Option 2: Local Usage (without global install)

```bash
# Clone and setup
git clone <your-repo-url>
cd cache-proxy-server
npm install
npm run build

# Run directly with node
node dist/index.js --port 3000 --origin http://dummyjson.com

# Or use the npm script
npm run serve -- --port 3000 --origin http://dummyjson.com
```

### Option 3: Using npx (one-time usage)

If the package is published to npm:

```bash
npx cache-proxy-server --port 3000 --origin http://dummyjson.com
```

### Option 4: Development Mode

For development with auto-reload:

```bash
npm run dev -- --port 3000 --origin http://dummyjson.com
```

## Command Line Options

- `--port, -p`: Specify the port number (required)
- `--origin, -o`: Specify the origin URL to proxy (required)
- `clear-cache`: Clear the Redis cache

## Examples

```bash
# Basic usage
cache-proxy-server --port 3000 --origin http://dummyjson.com

# Using short flags
cache-proxy-server -p 8080 -o https://api.example.com

# Clear cache
cache-proxy-server clear-cache

# Development mode
npm run dev -- --port 3000 --origin http://dummyjson.com
```

## Docker Usage (OPTIONAL)

```bash
# Run Redis with Docker Compose
docker-compose up --build

# Or through CLI
docker run -d --name redis -p 6379:6379 redis:<version>
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode (with auto-reload)
npm run dev -- --port 3000 --origin http://dummyjson.com

# Build the project
npm run build

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## Project Structure

```
├── index.ts              # Main entry point
├── middlewares/          # Express middlewares
│   ├── errorHandler.ts   # Error handling middleware
│   └── proxyMiddleware.ts # Proxy middleware with caching
├── utils/               # Utility functions
│   ├── cache.ts         # Redis cache utilities
│   ├── commandParser.ts # CLI argument parsing
│   └── responses.ts     # Response helpers
├── dist/               # Compiled JavaScript (after build)
└── docker-compose.yml  # Docker configuration
```

## License

ISC
