const _crypto = require('crypto');

const myEncryptWithIv = (text, algo, encKey, encIv, encFormat, txtFormat) => {
  let cipher = _crypto.createCipheriv(algo, Buffer.from(encKey, encFormat), Buffer.from(encIv, encFormat)); 
  
  let encrypted = cipher.update(text);
  
  encrypted = Buffer.concat([encrypted, cipher.final()]); 

  return encrypted.toString(txtFormat);
};

const myDecryptWithIv = (text, algo, encKey, encIv, encFormat, txtFormat) => {
  let encryptedText = Buffer.from(text, txtFormat); 

  let decipher = _crypto.createDecipheriv(algo, Buffer.from(encKey, encFormat), Buffer.from(encIv, encFormat)); 
    
  let decrypted = decipher.update(encryptedText); 
  decrypted = Buffer.concat([decrypted, decipher.final()]);
    
  return decrypted.toString();
};

module.exports = {
  myEncryptWithIv,
  myDecryptWithIv
}