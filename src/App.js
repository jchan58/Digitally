import './App.css';
import RequestCode from './RequestCode';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import RequestCodeForm from './RequestCodeForm';
import Drawer from './Drawer';
import Box from '@mui/material/Box';
import Success from './Success';

function App() {
  const routes = [
    { path: "/", element: <RequestCodeForm/> },
    { path: "/home", element: <RequestCodeForm/> },
    { path: "/success", element: <Success/> },
  ];
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route exact path={path} element={element} key={key} />
  ));

  return (
    <React.Fragment>
      <Box component="main" sx={{ pl: 8, pt: 8 }}>
        <BrowserRouter>
          <Routes>{routeComponents}</Routes>
        </BrowserRouter>
      </Box>
    </React.Fragment>
  );
}

export default App;
