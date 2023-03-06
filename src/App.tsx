import { useEffect, useState } from 'react';

import './App.css';
import SVGConverter from './Svg';
import SVGComponent from './Comp';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SVGConverter svgUrl="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg" />
      {/* <SVGConverter svgUrl="https://simplyjet-v2-test.sos-ch-gva-2.exo.io/aircraft_shape/1678089981774~1675770204274_large-jet.svg" /> */}
    </div>
  );
}

export default App;
