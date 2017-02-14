import React from 'react';
import ReactDOM from 'react-dom';
import ValuationWidget from '../../components/ValuationWidget.jsx';

describe('ValuationWidget', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ValuationWidget/>, div);
    });
});