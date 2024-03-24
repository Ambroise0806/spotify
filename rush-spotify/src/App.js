import './App.css';
import { GenresPage } from './GenresPage/GenresPage';
import { GenrePage } from './GenrePage/GenrePage';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from './HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/genres",
    element: <GenresPage />,
  },
  {
    path: "/genres/:id",
    element: <GenrePage />,
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
