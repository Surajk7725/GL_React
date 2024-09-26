import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import UserForm from './components/details';
import Profile from './components/profile';
import Login from './components/login';
import Signup from './components/signup';
import ForgotPassword from './components/forgot';
import Github from './components/github';
import Home from './components/home';
import Leetcode from './components/leetcode';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<UserForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/github" element={<Github />} />
        <Route path="/leetcode" element={<Leetcode />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
