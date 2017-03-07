import React from 'react';
import {render} from 'react-dom';
import ValuationWidget from './components/ValuationWidget';

// Load react slider css
require('style-loader!css-loader!../node_modules/rc-slider/assets/index.css');

// Load App css
require('style-loader!css-loader!sass-loader!./styles/app.scss');

render(<ValuationWidget/>, document.getElementById('valuationWidget'));
