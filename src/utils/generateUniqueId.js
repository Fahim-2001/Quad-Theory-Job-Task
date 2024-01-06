export default function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substring(2, 5);
    const uniqueId = timestamp + randomString;
  
    return uniqueId.substring(0, 10);
  }
  
  
  