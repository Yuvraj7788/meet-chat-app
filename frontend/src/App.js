
import { Route } from 'react-router-dom';
import './App.css';
import  ChatPage  from './Pages/ChatPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage}  />
    </div>
  );
<<<<<<< HEAD
}
=======
} 
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4

export default App;
