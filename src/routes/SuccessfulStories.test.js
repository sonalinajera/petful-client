import SuccessfulStories from './SuccessfulStories';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("SuccessfulStories", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><SuccessfulStories /></BrowserRouter>, div);
    });
  });