export function toogleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        on: !state.on,
        clicks: state.clicks++,
      };
  }
}

export function customToogleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      if (state.clicks >= 3) return state;
      return {
        on: !state.on,
        clicks: state.clicks++,
      };
  }
}
