/**
 * Represents an obfuscation node.
 */
interface ObfuscationNode {
  /** The ID of the node. */
  id: number;
  /** The label of the node. */
  label: string;
}

/**
 * Represents the result of an obfuscation process.
 */
interface ObfuscationResult {
  /** The Script or URL of the obfuscation. */
  script: string;
  /** An unique identifier for the result. */
  fingerprint: string;
  /** Number of jmpFuck expressions used. */
  jmpFuckExpressionsUsed: number;
  /** Number of selfCall expressions used. */
  selfCallExpressionsUsed: number;
  /** Number of random opcodes used. */
  randomOpcodesUsed: number;
  /** The time it took to obfuscate the script. */
  time: string;
  /** The obfuscation node used. */
  nodeUsed: ObfuscationNode;
}

/**
 * Represents the payload for the obfuscation process.
 */
interface ObfuscationPayload {
  /** The Lua script to be obfuscated. */
  script: string;
  /** The platform for which the script will be obfuscated. Supported: lua, roblox, csgo, fivem. */
  platformLock?: "lua" | "roblox" | "csgo" | "fivem";
  /** The watermark for the obfuscated file */
  watermark?: string;
  /** Enables prevention of tampering with the script. Requires support for `loadstring` or `load` in the environment. */
  antiTamper?: boolean;
  /** Enables string encryption in the script (may impact performance, not recommended). */
  encryptStrings?: boolean;
  /** Maximizes security at the cost of performance. */
  maxSecurity?: boolean;
  /** Prevents easy extraction of constants. */
  constantEncryption?: boolean;
  /** Whether to include a URL in the response or not. */
  giveBackURL?: boolean;
}

/**
 * Represents the result of an api-key info request.
 */
interface ApiKeyInfo {
  /** The ID of the API key. */
  id: number;
  /** The API key. */
  apiKey: string;
  /** The author of the API key. */
  author: string;
  /** The amount of authentications made with the API key. */
  authentications: number;
  /** Whether the API key is enabled or not. This can be changed by admins. */
  enabled: boolean;
  /** The date at which the API key expires. */
  expiresAt: string;
  /** The date at which the API key was created. */
  createdAt: string;
  /** The date at which the API key was last updated. */
  updatedAt: string;
  /** Whether the API key is active or not based on the expiration date. */
  active: boolean;
}

/**
 * Represents the result of an obfuscation request.
 */
interface Obfuscation {
  /** The ID of the obfuscation. */
  id: number;
  /** The fingerprint of the obfuscation. */
  fingerprint: string;
  /** The API key used for the obfuscation. */
  apiKey: string;
  /** The size of the obfuscated file. */
  fileSize: number;
  /** The IP address of the server that requested the obfuscation. */
  ip: string;
  /** Whether the obfuscation was successful or not. */
  success: boolean;
  /** The date at which the obfuscation was requested. */
  createdAt: string;
}

export {
  ObfuscationNode,
  ObfuscationResult,
  ObfuscationPayload,
  ApiKeyInfo,
  Obfuscation
};