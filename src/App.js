import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DetailDeLAlbum from './composants/detaildelalbum';
import listedesalbums from './composants/listedesalbums';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/albums" element={<listedesalbums />} />
                <Route path="albums/:id" element={<detaildelalbum />} />
            </Routes>
        </Router>
    );
}
export default App;