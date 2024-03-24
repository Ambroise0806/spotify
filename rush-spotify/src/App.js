import './App.css';
import { GenresPage } from './GenresPage/GenresPage';
import { GenrePage } from './GenrePage/GenrePage';
import { ListingArtistes } from './artiste/listingArtistes';
import { DetailArtistes } from './artistes/DetailArtistes';
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
  {
    path: 'artiste/listingArtistes',
    element: <ListingArtistes />,
  },
  {
    path: '/DetailArtistes/:id',
    element: <DetailArtistes />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
