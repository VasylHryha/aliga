import React from 'react';
import RB from 'react_bootstrap';

import Header from '../Components/MainMenu';
import Content from '../Components/MainContent'
import Footer from '../Components/Footer';

var Grid = RB.Grid;

export function render(data) {
    var data = JSON.parse(data);
    try {
        React.render(<Grid><Header data={data}/>
            <Content />
            <Footer/>
        </Grid>, document.getElementsByTagName('body')[0]);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}