# Brave Search MCP Server

A Model Context Protocol (MCP) server for performing web searches using the Brave Search API.

## Features

- Perform web searches using Brave Search API
- MCP-compatible server for integration with Model Context Protocol clients
- Easily configurable via environment variables

## Installation

```bash
# Clone the repository
git clone https://github.com/oybekdevuz/brave-search-mcp.git
cd brave-search-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Running the Server

```bash
# Start the server
npm start
```

The server will run on the port specified in your `.env` file (default: 3010).

### Environment Variables

Create a `.env` file in the root directory with the following content:

```
BRAVE_API_KEY=your-brave-api-key-here
PORT=3010
```

- `BRAVE_API_KEY` (required): Your Brave Search API key. Get it from [Brave Search API Dashboard](https://api-dashboard.search.brave.com/login).
- `PORT` (optional): The port to run the server on (default: 3010).

## MCP API

The server exposes an MCP-compatible HTTP endpoint at `/mcp`.

### Available Tool

#### web_search

Performs a web search using the Brave Search API.

**Input Schema:**

```json
{
  "query": "Your search query here"
}
```

- `query` (string, required): The search query.

**Example Request:**

```json
{
  "name": "web_search",
  "arguments": {
    "query": "latest news about AI"
  }
}
```

**Example Response:**

```json
{
  "content": [
    {
      "type": "text",
      "text": "{...Brave Search API response...}",
      "status": 200
    }
  ]
}
```

## Development

- Source code is in the `src/` directory.
- Build output is in the `build/` directory.
- Main entry point: [`src/index.ts`](src/index.ts)
- Tool implementation: [`src/tools/index.ts`](src/tools/index.ts)
- Brave Search integration: [`src/services/search-service.ts`](src/services/search-service.ts)
- Types: [`src/types/index.ts`](src/types/index.ts)



---