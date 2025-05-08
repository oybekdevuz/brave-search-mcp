import axios from 'axios';
import { SearchResult } from '../types/index.js';

interface SearchServiceConfig {
  apiKey: string;
}

export class SearchService {
  private config: SearchServiceConfig;
  private baseUrl = 'https://api.search.brave.com';

  constructor(config: SearchServiceConfig) {
    this.config = {
      apiKey: config.apiKey || process.env.BRAVE_API_KEY || '',
    };
  }


  async search(
    query: string,
  ): Promise<SearchResult> {
    try {


      // Make request to Brave API
      const response = await axios.get(`${this.baseUrl}/res/v1/web/search`, {
        params: {
          q: query,
        },
        headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
          'X-Subscription-Token': this.config.apiKey
          ,
        },
        decompress: true,
      });

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.log("Search Error:", error);
      
      let errorMessage = 'Failed to search query';
      
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        errorMessage = `Search Error: ${error.response.data.error.message}`;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }

}
