import React from 'react';
import logo from '../../content/assets/TOPEL-ER-logotipo-sm.svg'; // Tell Webpack this SVG file uses this image
console.log(logo); // /TOPEL-ER-logotipo-sm.svg
function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
export default Logo;