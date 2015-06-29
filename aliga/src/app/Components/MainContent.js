import React from 'react';
import Reflux from 'reflux'
import {store} from '../Stores/MainMenu'
import RB from 'react_bootstrap';



export default React.createClass({
    mixins: [Reflux.connect(store)],
    render: function () {
        return (
            <div>
                {React.createElement(this.state.page.content)}
            </div>
        )
    }
});

