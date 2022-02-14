import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { Combined } from "./reducers/reducers";
import { myLogger } from "./reducers/customMiddle";

const store=createStore(Combined,applyMiddleware(thunk,myLogger))


export default store