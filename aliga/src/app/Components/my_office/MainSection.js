import React from 'react';
import MainInfo from '../my_office/MainInfo';
import Additional from '../my_office/Additional';


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