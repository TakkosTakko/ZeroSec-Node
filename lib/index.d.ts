import { ObfuscationPayload, ObfuscationResult, ObfuscationNode, ApiKeyInfo, Obfuscation } from './interfaces';
export default class ZeroSecAPI {
    private api;
    private apiKey;
    constructor(apiKey: string);
    obfuscate(payload: ObfuscationPayload): Promise<ObfuscationResult>;
    getApiKeyInfo(): Promise<ApiKeyInfo>;
    getObfuscations(): Promise<Obfuscation[]>;
}
export { ObfuscationNode, ObfuscationResult, ObfuscationPayload, ApiKeyInfo, Obfuscation };
