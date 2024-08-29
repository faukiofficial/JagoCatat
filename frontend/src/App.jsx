import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'

const routes = (
  <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/dashboard' exact element={<Dashboard/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/privacy' exact element={<Privacy/>}/>
        <Route path='/terms' exact element={<Terms/>}/>
    </Routes>
  </BrowserRouter>
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App