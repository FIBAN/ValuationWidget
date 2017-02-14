import React from 'react';
import ReactDOM from 'react-dom';
import ValuationDisplay from '../../components/ValuationDisplay.jsx';

describe('ValuationDisplay', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        	<ValuationDisplay
	        	reqReturn={0}
	        	entrySales={0}
	        	salesMargin={0}
	        	invPeriod={0}
	        	initInvest={0}
        	/>,
    	 div);
    });
});