import React from 'react';
import MainInfo from '../rent/MainInfo';
import Additional from '../rent/Additional';


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