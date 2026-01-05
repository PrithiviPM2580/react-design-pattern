import { crossTabChannel } from "./broadcast";

const listeners = new Map();

const eventBus = {
  subscribe(eventName, handler) {
    if (!listeners.has(eventName)) {
      listeners.set(eventName, new Set());
    }

    listeners.get(eventName).add(handler);

    return () => {
      listeners.get(eventName)?.delete(handler);
    };
  },
  publish(eventName, payload, { broadcast = true } = {}) {
    listeners.get(eventName)?.forEach((handler) => handler(payload));

    if (broadcast) {
      crossTabChannel.postMessage({ eventName, payload });
    }
  },
};

export default eventBus;
