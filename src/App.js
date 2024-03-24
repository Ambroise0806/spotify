import './App.css';
import { ListedAlbums } from './ListedAlbums/ListedAlbums'; 
import { AlbumDetails } from './AlbumDetails/AlbumDetails'; 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from './HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/albums",
    element: <ListedAlbums />,
  },
  {
    path: "/albums/:id",
    element: <AlbumDetails />,
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
