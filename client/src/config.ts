export const ENCRYPTION_SECRET_CODE = "2200333911532491";
export const SERVER_URL = "http://localhost:4443";

const textEncoder = new TextEncoder()
export const textDecoder = new TextDecoder()

export const getKey = async () => {
  const rawKey = textEncoder.encode(ENCRYPTION_SECRET_CODE);
  return await crypto.subtle.importKey(
    "raw",
    rawKey,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"]
  );
};

export const encryptData = async (data: any) => {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey();
  const encodedData = textEncoder.encode(JSON.stringify(data));
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encodedData
  );

  return {
    iv: Array.from(iv),
    encrypted: Array.from(new Uint8Array(encrypted)),
  };
};