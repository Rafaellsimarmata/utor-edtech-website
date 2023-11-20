import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Footer, Navbar } from "./components";
import { ProtectedRoute } from "./routes/protectedRoutes";
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
} from "./pages";
import ProfilePage from "./pages/test/profile";

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
              <Route path="/messages" element={<Messages />} />
              <Route path="/message/:id" element={<Message />} />
              <Route path="/addpath" element={<Add />} />
              <Route path="learn/:id" element={<Learn />} />
              <Route path="addTopic/:id" element={<AddTopicPath />} />
              <Route path="/path/:id" element={<Path />} />
            </Route>
          </Route>

          <Route element={<Layout />}>
            <Route path="/paths" element={<Paths />} />
            <Route index element={<Home />} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// export const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         // homepage / landing page
//         path: "/",
//         element: <Home />,
//       },
//       {
//         // daftar kelas
//         path: "/paths",
//         element: <Paths />,
//       },
//       {
//         // Kelas yang terdaftar
//         path: "/mypath",
//         element: <MyPaths />,
//       },
//       {
//         // page mentor untuk melihat orderan yang dibeli (buat 2 orders for mentor and student)
//         path: "/orders",
//         element: <Orders />,
//       },
//       {
//         // both for mentor and student
//         path: "/messages",
//         element: <Messages />,
//       },
//       {
//         // chat message both for mento and student
//         path: "/message/:id",
//         element: <Message />,
//       },
//       {
//         // add kelas just for mentor
//         path: "/addpath",
//         element: <Add />,
//       },
//       {
//         // detail kelas
//         path: "/path/:id",
//         element: <Path />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);
