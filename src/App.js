// import './App.css';
// import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Cars from './Components/Cars';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
// import Newcars from './Components/Newcars';
import ContactUs from './Components/ContactUs';
// import Header from './Components/Header';


function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<><ScrollToTop/><Navbar/><Home/><Footer/></>
    },
    {
      path:'/about',
      element:<><ScrollToTop/><Navbar/><About/><Footer/></>
    },
    {
      path:'/cars',
      element:<><ScrollToTop/><Navbar/><Cars/><Footer/></>
    },
    {
      path:'/services',
      element:<><ScrollToTop/><Navbar/><Services/><Footer/></>
    },
    {
      path:'/contactUs',
      element:<><ScrollToTop/><Navbar/><ContactUs/><Footer/></>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>      
    </div>
  );
}


export default App;
