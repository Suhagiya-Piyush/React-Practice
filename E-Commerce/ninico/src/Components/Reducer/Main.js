//combine all reducer here and then send store

// (object wise)

import {combineReducers} from "redux";
import { cartreducer, WishList } from "./Reducer";

const rootreducer = combineReducers({
    cartreducer,WishList
})

export default rootreducer;