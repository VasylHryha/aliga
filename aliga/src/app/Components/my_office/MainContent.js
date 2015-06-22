import React from 'react';
import MainSection from '../my_office/MainSection';
import SearchResult from '../my_office/SearchResult';


export default React.createClass({

    render: function () {
        // console.log(this.props.data)
        return (
            <main className="container_12 wrap main">
                <SearchResult/>
                <MainSection/>
            </main>
        )
    }

});

/*
 */
