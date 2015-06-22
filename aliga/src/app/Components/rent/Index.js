import React from 'react';
import SearchMenu from '../rent/SearchMenu'
import MainContent from '../rent/MainContent'

export default React.createClass({
    render: function () {
        return (<main>
            <h1>rent</h1>
            <SearchMenu/>
            <MainContent/>
        </main>

        )
    }
});