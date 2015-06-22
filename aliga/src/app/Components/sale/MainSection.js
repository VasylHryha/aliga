import React from 'react';
import MainInfo from '../sale/MainInfo';
import Additional from '../sale/Additional';


export default React.createClass({

    render: function () {
        return (

            <section className="grid_8 ">
               <MainInfo/>
               <Additional/>
            </section>
        )


    }

});