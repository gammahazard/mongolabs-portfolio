// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const { Canvas, Image, ImageData } = require('canvas');
import '@testing-library/jest-dom/extend-expect';  // Import additional matchers from jest-dom
import { configure } from '@testing-library/react';  // Import configure from @testing-library/react

// Configure RTL to automatically wait for elements to be available
configure({ asyncUtilTimeout: 5000 });

// You can add more setup code here if needed, this adds canvas as global object as it breaks testing, and it is only used for rendering background css animation

global.Canvas = Canvas;
global.Image = Image;
global.ImageData = ImageData;