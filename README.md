# js-encrypt-decrypt

# Installation
Dillinger requires [Node.js](https://nodejs.org/) v8+ to run.
```sh
npm install js-encrypt-decrypt --save
```
## Step 1 : Import a package
```sh
const _encryptPackage = require('js-encrypt-decrypt');
```
## Step 2 : Install crypto moudle and generate your encryption key and IV using crypto module

#### Step 2.1 : Create ecnryption key.
```sh
npm i crypto --save
const crypto = require('crypto');
const encryptionKeyBuffer = crypto.randomBytes(32);
const encryptionKeyType = 'hex'; // you can choose other formats like base64 etc.
const encryptionKey = encryptionKeyBuffer.toString(encryptionKeyType);
```

#### Step 2.2 : Create ecnryption IV.
```sh
const crypto = require('crypto');
const encryptionIVBuffer = crypto.randomBytes(16);
const encryptionIV = encryptionIVBuffer.toString(encryptionKeyType);
```

## Step 3: Call the the `myEncryptWithIv` fuction to get the encrypted string.
The function accepts below parameters:
 - text : The text which you want to encrypt
 - algo : Using which algo you want to perform encryption
 - encKey: Encryption key which we have generated at step 2.1
 - encIv: Encryption IV which we have generated at step 2.2
 - encKeyIvFormat: String format of key and IV // hex or base64 etc.
 - encTextFormat: Final encrypted string format.

```sh
const text = 'Test string';
const algo = 'aes-256-cbc';
const encTextFormat = 'hex';
const finalEncryptString = _encryptPackage.myEncryptWithIv(text, algo, encryptionKey, encryptionIV, encryptionKeyType, encTextFormat);
console.log("This is the finalEncryptedString ==> ", finalEncryptString);
```
## Step 4: Call the the `myDecryptWithIv` fuction to get the decrypted string.
```sh
const finalDecryptString = _encryptPackage.myDecryptWithIv(finalEncryptString, algo, encryptionKey, encryptionIV, encryptionKeyType, encTextFormat);
console.log("This is the finalDecryptString ==> ", finalEncryptString);
```
## License
MIT