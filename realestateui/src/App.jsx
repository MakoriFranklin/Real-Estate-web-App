import Navbar from "./components/navbar/Navbar"
import "./layout.scss"
import HomePage from "./pages/homepage/HomePage"
import {
  createBrowserRouter,
  
  RouterProvider
} from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout from "./components/layout/Layout";
import Login from "./pages/loginPage/Login";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },

        {
          path:"/listPage",
          element:<ListPage/>
        },

        {
          path:"/login",
          element:<Login/>
        },

        {
          path:"/:id",
          element:<SinglePage/>
        },

        {
          path:"/profile",
          element:<ProfilePage/>
        }

      ]
    }

    
  ]);

  return (

    

    <RouterProvider router={router}/>
  )
}

export default App
