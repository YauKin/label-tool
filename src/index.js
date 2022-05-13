import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LabelList from './view/label/index'
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/labellist" element={<LabelList />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

