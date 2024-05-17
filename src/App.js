import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
    <div>
    <Home/>
    </div>
    </Provider>
  );
}

export default App;
