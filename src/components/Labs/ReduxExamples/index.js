import React from "react";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import hello from "./Reducers/hello";
import todos from "./Reducers/todoReducer";
import {createStore, combineReducers} from "redux";
import Todos from "./TodosComponent";
import {Provider} from "react-redux";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);

const ReduxExamples = () =>{

  return(
      <Provider store={store}>
      <div>
        <h2> React Examples</h2>
        <Todos/>
        <HelloReduxExampleComponent/>
      </div>
      </Provider>

  );
};

export default ReduxExamples;