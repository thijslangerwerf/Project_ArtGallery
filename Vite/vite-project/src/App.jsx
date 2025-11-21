import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
import HomePage from './pages/homepage';
import MainLayout from './layouts/MainLayout.jsx';
import Jobs from './pages/Jobs.jsx';
import "./App.css"


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='jobs' element={<Jobs />} />
  </Route>
));

const App = () => {
  return <RouterProvider router={router} />;
};

export default App

