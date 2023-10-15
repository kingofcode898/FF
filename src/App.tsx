
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add "Switch" to your import statement
import HomePage from './pages/homePage';
import ChatPage from './pages/chatPage';
import NavBar from './pages/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<HomePage practiceTime={0} Language={""} />} />
          <Route path="/chat" element={<ChatPage/>} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
