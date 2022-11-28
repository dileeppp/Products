import './App.css';
import {Routes,Route} from 'react-router-dom'
import About from './Components/About';
import NoMatch from './Components/NoMatch';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import OrderSummary from './Components/OrderSummary';
import Users from './Components/Users';
import Products from './Components/Products';
import Featured from './Components/Featured';
import New from './Components/New';
import UserDetails from './Components/UserDetails';
import Profile from './Components/Profile';
import { AuthProvider } from './Components/auth';
import Login  from './Components/Login';
import RequireAuth from './Components/RequireAuth';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <NavBar/>
      <Routes>
        <Route  path = '/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path ='*' element={<NoMatch/>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='login' element={<Login/>}/>

        <Route path='products' element={<RequireAuth><Products/></RequireAuth>}>
          <Route index element={<Featured/>}/>
          <Route path='featured/' element={<Featured/>}/>
          <Route path='new' element={<New/>}/>
        </Route>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:userId' element={<UserDetails/>}/>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>

      </Routes>
      </AuthProvider>
    
    </div>
  );
}

export default App;
