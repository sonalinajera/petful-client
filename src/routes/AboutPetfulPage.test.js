import AboutPetfulPage from './AboutPetfulPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("AboutPetfulPage", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><AboutPetfulPage /></BrowserRouter>, div);
    });
  });