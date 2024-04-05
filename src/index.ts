import axios, { AxiosInstance } from 'axios';
import { ObfuscationPayload, ObfuscationResult, ObfuscationNode, ApiKeyInfo, Obfuscation } from './interfaces';

export default class ZeroSecAPI {
  private api: AxiosInstance;
  private apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey)
      throw new Error('API key is required');

    this.apiKey = apiKey;
    this.api = axios.create({
      baseURL: 'https://api.zero.vodka/v1',
      headers: {
        'Authorization': apiKey
      }
    });
  }

  async obfuscate(payload: ObfuscationPayload): Promise<ObfuscationResult> {
    const {
      data,
      status
    } = await this.api.post('/obfuscate', payload);

    if (status !== 200)
      throw new Error(data.error);

    return data;
  }

  async getApiKeyInfo(): Promise<ApiKeyInfo> {
    const {
      data,
      status
    } = await this.api.get(`/key/${this.apiKey}/info`);

    if (status !== 200)
      throw new Error(data.error);

    return data;
  }

  async getObfuscations(): Promise<Obfuscation[]> {
    const {
      data,
      status
    } = await this.api.get(`/key/${this.apiKey}/obfuscations`);

    if (status !== 200)
      throw new Error(data.error);

    return data;
  }
}

export {
  ObfuscationNode,
  ObfuscationResult,
  ObfuscationPayload,
  ApiKeyInfo,
  Obfuscation
};