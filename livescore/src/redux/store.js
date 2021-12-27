import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { Combined } from "./reducers/reducers";

const store=createStore(Combined,applyMiddleware(thunk))


export default store