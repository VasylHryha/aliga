import React from 'react';
import SearchMenu from '../my_office/SearchMenu'
import MainContent from '../my_office/MainContent'

export default React.createClass({
    render: function () {
        return (<main>
            <h1>my_office</h1>
            <SearchMenu/>
            <MainContent/>
        </main>

        )
    }
});