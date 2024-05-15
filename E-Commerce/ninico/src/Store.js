import { createStore } from "redux";
import rootreducer from "./Components/Reducer/Main";

 const Store = createStore(
    rootreducer
)

export default Store;