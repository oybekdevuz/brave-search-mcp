export interface ToolContent {
  type: "text";
  text: string;
  status: number;
}

export interface ToolResponse {
  content: ToolContent[];
  [key: string]: any; // Allow additional properties for MCP SDK compatibility
}

export interface WebSearchArgs {
  query: string;
}


export type ToolArgs = WebSearchArgs

export interface Tool<T = any> {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, any>;
    required: string[];
  };
  handler: (args: T) => Promise<ToolResponse>;
}

export interface ListToolsResponse {
  tools: Array<{
    name: string;
    description: string;
    inputSchema: Tool["inputSchema"];
  }>;
}

export interface SearchResult {
  success: boolean;
  error?: string;
  data?: string;
}
