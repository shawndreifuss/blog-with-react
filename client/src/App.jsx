import './style.scss'
import  {
  createBrowserRouter,
  RouterProvider,
   Route,
   Router,
  Outlet
} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Write from './pages/Write'
import Single from './pages/Single'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const Layout = () => {
  return (
  <>
  <Navbar /> 
  <Outlet /> 
  <Footer />
  </>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/write',
        element: <Write />
      },
      {
        path: '/post/:id',
        element: <Single />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
])


const App = () => {
  return (
  <div className='app'>
    <div className="container">
    <RouterProvider router={router}/>
    </div>
  </div>
  )
}




export default App