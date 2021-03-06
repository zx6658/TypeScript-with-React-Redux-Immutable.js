import * as React from "react";
import Profile from "./components/Profile";
import CounterContainer from "./containers/CounterContainer";
import TodoListContainer from "./containers/TodoListContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile name="이승규" job="프론트조아" />
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
