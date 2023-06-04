import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Button } from "./Button/Button";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesDetiails from "pages/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <Header/>
      <Button/>
      <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/movies" element ={<Movies/>}/>
    <Route path="/movies/:moviesId" element ={<MoviesDetiails/>}>
    <Route path="/movies/:moviesId/cast" element ={<Cast/>}/>
    <Route path="/movies/:moviesId/reviews" element ={<Reviews/>}/>
    </Route>
      </Routes>
    </div>
  );
};
