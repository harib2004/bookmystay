
import './App.css';
import SignIn from './Components/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp';
import MyComponent from './Components/Home/Main';
import Blog from './Components/Blog';
import Album from './Components/Home/destinations';




function App() {
  return (


    <div className="app">


      <Router>
        <Routes>
          <Route path='/' element={<MyComponent />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='album' element={<Album />} />



        </Routes>
      </Router>


    </div>
  );
}

export default App;
