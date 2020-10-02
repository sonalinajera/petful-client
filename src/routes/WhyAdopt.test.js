import WhyAdopt from './WhyAdopt';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("WhyAdopt", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><WhyAdopt /></BrowserRouter>, div);
    });
  });