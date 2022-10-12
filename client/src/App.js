import React, { useEffect, useState } from "react";
import FooterComp from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AudioStories from "./pages/audio-stories/AudioStories";
import Music from "./pages/music/Music";
import Theatre from "./pages/thertre/Theatre";
import ToonlandMovies from "./pages/toonland-movies/ToonlandMovies";
import Library from "./pages/library/Library";
import Workshops from "./pages/workshops/Workshops";
import Mall from "./pages/mall/Mall";
import Faq from "./pages/faq/Faq";
import Interaction from "./pages/interaction/Interaction";
import Careers from "./pages/careers/Careers";
import InteractWithUs from "./pages/interaction/interactWithUs/InteractWithUs";
import Comics from "./pages/comics/Comics";
import Toolbar from "./components/toolbar/Toolbar";
import SubscribePlan from "./pages/subscribePlan/SubscribePlan";
import Refer from "./pages/refer/Refer";

import MallHomepage from "./underdev/pages/mall/homepage/MallHomepage";
import Profile from "./underdev/pages/profile/Profile";
import EditProfile from "./underdev/pages/profile/EditProfile";
import Product from "./underdev/pages/mall/product/Product";
import CartPage from "./underdev/pages/cart/Cart";
import PurchasedProducts from "./underdev/pages/purchasedProducts/PurchasedProducts";
import Login from "./underdev/pages/auth/Login";

import FirebaseUpload from "./underdev/firebase";
import PageNotFound from "./pages/404.js/404";

//

function App() {
  return (
    <div>
      <Header />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audiostory" element={<AudioStories />} />
        <Route path="/toonmusic" element={<Music />} />
        <Route path="/theatre" element={<Theatre />} />
        <Route path="/library" element={<Library />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/toonmall" element={<Mall />} />
        <Route path="/toonmovies" element={<ToonlandMovies />} />
        <Route path="/interaction" element={<Interaction />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/interactwithus" element={<InteractWithUs />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/plans" element={<SubscribePlan />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="*" element={<PageNotFound />} />

        {/* ---UNDER-DEV---  */}

        {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/explore/mall" element={<MallHomepage />} />
        <Route path="/explore/profile" element={<OtherUsers />} />
        <Route path="/explore/profile/:username" element={<Profile />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Razorpay" element={<Razorpay />} />
        <Route path="/prchPds" element={<PurchasedProducts />} /> */}

        <Route path="/firebase" element={<FirebaseUpload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore/mall" element={<MallHomepage />} />
        <Route path="/explore/library" element={<Library />} />
        <Route path="/explore/profile/:username" element={<Profile />} />
        <Route path="/explore/profile/edit" element={<EditProfile />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/prchPds" element={<PurchasedProducts />} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;

// <Route path="/explore/profile/edit" element={<EditProfile />} />
