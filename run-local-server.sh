#!/bin/bash

# Chinese New Year Red Envelope Web Server
# This script starts a local development server

echo "🧧 Starting Chinese New Year Red Envelope Server..."
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3"
    echo "📱 Open your browser to: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Using Python 2"
    echo "📱 Open your browser to: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python is not installed!"
    echo ""
    echo "Please install Python from https://www.python.org/downloads/"
    exit 1
fi
