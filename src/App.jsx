import Toogle from "./state-reducer-pattern/components/Toogle";
import { customToogleReducer } from "./state-reducer-pattern/components/toogle-reducer";
const App = () => {
  return (
    <>
      <Toogle />
      <Toogle reducer={customToogleReducer} />
    </>
  );
};

export default App;
