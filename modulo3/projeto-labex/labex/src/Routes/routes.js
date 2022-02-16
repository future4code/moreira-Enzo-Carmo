import HomePage from "../pages/HomePage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path={"/"} element={<HomePage />}/>
            <Route exact path={"/createtrippage"} element={<CreateTripPage />}/>
            <Route exact path={"/listtripspage"} element={<ListTripsPage />}/>
            <Route exact path={"/applicationformpage"} element={<ApplicationFormPage />}/>
            <Route exact path={"/adminhomepage"} element={<AdminHomePage />}/>
            <Route exact path={"/loginpage"} element={<LoginPage />}/>
            <Route exact path={"/tripdetailspage"} element={<TripDetailsPage />}/>
        </Routes>
        </BrowserRouter>
    )
}