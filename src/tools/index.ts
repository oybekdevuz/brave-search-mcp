import { SearchService } from '../services/search-service.js';
import { 
  WebSearchArgs, 
  ToolResponse 
} from '../types/index.js';

// Initialize service
const searchService = new SearchService({
  apiKey: process.env.BRAVE_API_KEY || ''
});

export const tools = [
  {
    name: "web_search",
    description: "Seach from web to get more information",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Give a clear search query for get clear response"
        },
      },
      required: ["query"]
    },
    handler: async (args: WebSearchArgs): Promise<ToolResponse> => {
      const result:any = await searchService.search(args.query);

      if (!result.success) {
        return {
          content: [{
            type: "text",
            text: `Error searching: ${result.error}`,
            status: 500
          }]
        };
      }
      
      
      
      return {
        content: [{
          type: "text",
          text: JSON.stringify(result.data),
          status: 200
        }]
      };
    }
  }
];
