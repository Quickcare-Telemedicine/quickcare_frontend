import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import Services from "../pages/Services";
import MyAccount from "../Dashboard/user-account/MyAccount";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Contact from "../pages/Contact";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProjectedRoute from "./ProjectedRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Bot from "/Users/ramansh/Downloads/quickcare_web/src/pages/Chatbot.jsx";
import Appointments from "/Users/ramansh/Downloads/quickcare_web/src/pages/appointment-booking.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/chatbot" element={<Bot />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route
        path="/users/profile/me"
        element={
          <ProjectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProjectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProjectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProjectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
