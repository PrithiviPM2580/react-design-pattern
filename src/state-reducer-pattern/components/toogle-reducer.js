export function toogleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        on: !state.on,
        clicks: state.clicks++,
      };
  }
}
