# ZeroSec (api client)

![npm](https://img.shields.io/npm/v/zerosec?style=flat-square)
![npm](https://img.shields.io/npm/dt/zerosec?style=flat-square)

This repository is a client library that provides a convenient way to interact with the ZeroSec Obfuscation Service. This service allows you to obfuscate Lua scripts for various platforms while offering options for security and performance trade-offs.

## Installation

To use zerosec in your project, install it using npm:

```bash
npm install zerosec
```

## Usage

```javascript
import ZeroSec, { ObfuscationPayload, ObfuscationResult } from 'zerosec';

// Create an instance of ZeroSec with your API key
const apiKey = 'your-api-key';
const zeroSec = new ZeroSec(apiKey);

// Prepare the obfuscation payload
const payload: ObfuscationPayload = {
  script: 'print("Hello, world!")',
  platformLock: 'lua',
  antiTamper: true,
  encryptStrings: true
};

// Obfuscate the script
try {
  const obfuscationResult: ObfuscationResult = await zeroSec.obfuscate(payload);
  console.log('Obfuscation successful:', obfuscationResult);
} catch (error) {
  console.error('Obfuscation error:', error.message);
}
```

## Documentation

For detailed information about the available options and methods, refer to the [API documentation](https://docs.zero.sex/).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).