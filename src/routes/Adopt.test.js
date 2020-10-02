import Adopt from './Adopt';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("Adopt", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><Adopt /></BrowserRouter>, div);
    });
  });