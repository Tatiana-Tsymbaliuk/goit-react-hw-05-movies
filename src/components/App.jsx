import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetiails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/movies" element ={<Movies/>}/>
    <Route path="/movies/:moviesId" element ={<MoviesDetiails/>}>
    <Route path="/movies/:moviesId/cast" element ={<Cast/>}/>
    <Route path="/movies/:moviesId/reviews" element ={<Reviews/>}/>
    </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
