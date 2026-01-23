// Singleton instance of WebsimSocket
// This ensures we only connect once even if components re-render
export const room = new WebsimSocket();

// Helper to initialize if not already done
let initialized = false;
export async function initRoom() {
  if (initialized) return;
  await room.initialize();
  initialized = true;
  return room;
}