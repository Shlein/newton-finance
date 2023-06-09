import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {FAVOURITE_POSTS_PAGE_ROUTE, MAIN_PAGE_ROUTE} from "./contants/routeConstants";
import Layout from "./components/Layout/Layout";
import PostListPage from "./Pages/PostListPage/PostListPage";
import FavouritePostsPage from "./Pages/FavouritePostsPage/FavouritePostsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path={MAIN_PAGE_ROUTE} element={<Layout />}>
              <Route index element={<PostListPage />}/>
              <Route path={FAVOURITE_POSTS_PAGE_ROUTE} element={<FavouritePostsPage />}/>
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
