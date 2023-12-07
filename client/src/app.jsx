import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Footer, Navbar } from "./components/index.js";
import { ProtectedRoute } from "./routes/protectedRoutes.jsx";
import {
  Home,
  Paths,
  Path,
  Login,
  Register,
  Add,
  Orders,
  Messages,
  Message,
  MyPaths,
  Learn,
  AddTopicPath,
  MyClass,
  ProfilePage,
} from "./pages";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Toaster position="top-right" />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/mypaths" element={<MyPaths />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/myclass" element={<MyClass />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/message/:id" element={<Message />} />
              <Route path="/addpath" element={<Add />} />
              <Route path="learn/:id" element={<Learn />} />
              <Route path="addTopic/:id" element={<AddTopicPath />} />
              <Route path="/path/:id" element={<Path />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>

          <Route element={<Layout />}>
            <Route path="/paths" element={<Paths />} />
            <Route index element={<Home />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
