// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// Google VR View Card API
export const onClientEntry = () => {
    const script = document.createElement('script');
    script.src = 'https://storage.googleapis.com/vrview/2.0/build/vrview.min.js';
    document.body.appendChild(script);
  };
