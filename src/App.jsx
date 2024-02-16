import MessageList from "./components/MessagesList/index";
import Messages from "./components/Messages/index";

import "./App.css";

const App = () => {
  return (
    <div className="App-container">
      <MessageList />
      <Messages />
    </div>
  );
};

export default App;
