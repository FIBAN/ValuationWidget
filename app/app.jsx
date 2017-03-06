import React from 'react';
import {render} from 'react-dom';
import ValuationWidget from './components/ValuationWidget';

// Load foundation
//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
//$(document).foundation();

// Load App css
require('style-loader!css-loader!sass-loader!./styles/app.scss');

require('style-loader!css-loader!../node_modules/rc-slider/assets/index.css');

render(<ValuationWidget/>, document.getElementById('valuationWidget'));
