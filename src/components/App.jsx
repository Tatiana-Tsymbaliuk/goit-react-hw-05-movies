import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Button } from "./Button/Button";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesDetiails from "pages/MovieDetails";
export const App = () => {
  return (
    <div>
      <Header/>
      <Button/>
      <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/movies" element ={<Movies/>}/>
    <Route path="/movies/:moviesId" element ={<MoviesDetiails/>}/>
      </Routes>
    </div>
  );
};
