import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {  NextUIProvider } from '@nextui-org/react';
import { Layout } from './layouts/layout';
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom";
import Candidates from "./components/candidates/candidates";
function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<div className="text-2xl text-red-600">Hello</div>} />
            <Route path="candidates" element={<Candidates/>} />
            <Route path="requests" element={<Candidates/>} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </NextUIProvider>
  );
}

export default App;
