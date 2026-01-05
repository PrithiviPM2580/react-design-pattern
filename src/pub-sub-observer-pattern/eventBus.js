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
  publish(eventName, payload) {
    listeners.get(eventName)?.forEach((handler) => handler(payload));
  },
};

export default eventBus;
