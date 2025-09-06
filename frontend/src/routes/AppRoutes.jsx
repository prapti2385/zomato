import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../pages/auth/UserRegister";
import ChooseRegister from "../pages/auth/ChooseRegister";
import UserLogin from "../pages/auth/UserLogin";
import FoodPartnerRegister from "../pages/auth/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/auth/FoodPartnerLogin";
import Home from "../pages/general/Home";
import CreateFoodPage from "../pages/food-partner/CreateFoodPage";
import Profile from "../pages/food-partner/Profile";
import BottomNav from "../components/BottomNav";
import Saved from "../pages/general/Saved";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route
          path="/"
          element={
            <>
              <Home />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/saved"
          element={
            <>
              <Saved />
              <BottomNav />
            </>
          }
        />
        <Route path="/create-food" element={<CreateFoodPage />} />
        <Route path="/food-partner/:id" element={<Profile />} />
        <Route
          path="/message"
          element={<h1>Food item created successfully!</h1>}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
