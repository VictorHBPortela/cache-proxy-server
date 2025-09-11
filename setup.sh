#!/bin/bash

# Cache Proxy Server Setup Script
echo "🚀 Setting up Cache Proxy Server..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

echo "🔗 Linking globally (this will make 'cache-proxy-server' command available)..."
npm run link

echo ""
echo "✅ Setup complete! You can now use:"
echo "   cache-proxy-server --port 3000 --origin http://dummyjson.com"
echo ""
echo "Or run locally with:"
echo "   npm run proxy -- --port 3000 --origin http://dummyjson.com"
echo ""
echo "To uninstall the global command later, run:"
echo "   npm run unlink"