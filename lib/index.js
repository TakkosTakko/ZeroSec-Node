"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ZeroSecAPI {
    constructor(apiKey) {
        if (!apiKey)
            throw new Error('API key is required');
        this.apiKey = apiKey;
        this.api = axios_1.default.create({
            baseURL: 'https://api.zero.vodka/v1',
            headers: {
                'Authorization': apiKey
            }
        });
    }
    obfuscate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, status } = yield this.api.post('/obfuscate', payload);
            if (status !== 200)
                throw new Error(data.error);
            return data;
        });
    }
    getApiKeyInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, status } = yield this.api.get(`/key/${this.apiKey}/info`);
            if (status !== 200)
                throw new Error(data.error);
            return data;
        });
    }
    getObfuscations() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, status } = yield this.api.get(`/key/${this.apiKey}/obfuscations`);
            if (status !== 200)
                throw new Error(data.error);
            return data;
        });
    }
}
exports.default = ZeroSecAPI;
