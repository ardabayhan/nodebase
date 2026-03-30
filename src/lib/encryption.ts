import Cryptr from "cryptr";

// Ortam değişkeninin varlığını kontrol et
if (!process.env.ENCRYPTION_KEY) {
  throw new Error("Kritik Hata: ENCRYPTION_KEY ortam değişkeni tanımlanmamış!");
}

// Artık TypeScript process.env.ENCRYPTION_KEY'in kesinlikle string olduğunu biliyor
const cryptr = new Cryptr(process.env.ENCRYPTION_KEY);

export const encrypt = (text: string) => cryptr.encrypt(text);
export const decrypt = (text: string) => cryptr.decrypt(text);
