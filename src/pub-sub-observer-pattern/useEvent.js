import eventBus from "./eventBus";
import { useEffect } from "react";

export function useEvent(eventName, handler) {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe(eventName, handler);

    return () => unsubscribe();
  }, [eventName, handler]);
}
