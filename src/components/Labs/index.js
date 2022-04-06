import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples";
import {Link} from "react-router-dom";

const Index = () => {
  return (
      <>
        <h1>Labs!</h1>
        <Link to="/hello">Hello</Link>|
        <Link to="/tuiter">Tuiter</Link>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <ReduxExamples/>
      </>
  )
};

export default Index;