import Reflux from 'reflux';
import {actions} from  '../Actions/MainMenu';


import IndexRent from '../Components/rent/Index';
import IndexSale from '../Components/sale/Index';
import IndexDailyRent from '../Components/daily_rent/Index';
import IndexMoreService from '../Components/more_service/Index';
import IndexForum from '../Components/forum/Index';
import IndexMyOffice from '../Components/my_office/Index';


let pages = new Map([
    ['rent', IndexRent],
    ['sale', IndexSale],
    ['daily_rent', IndexDailyRent],
    ['more_service', IndexMoreService],
    ['forum', IndexForum],
    ['my_office', IndexMyOffice]
]);


//at first time loaded sale page
var pageName = 'sale';
//var page ;
/**
 *handle key string of element and then return page name which we want to load
 * @param str
 * @returns {*}
 */
function getPageName(str) {
    var begin = str.indexOf('$');
    var res = str.slice(begin + 1);
    var end = res.indexOf('.');
    if (end > 0) {
        res = res.slice(0, end);
    }
    console.log(res, 3)
    return res;
}


export var store = Reflux.createStore({


    listenables: [actions],
    getPage  () {
        return pages.get(pageName);
    },
    getPageName () {
        return pageName;
    },
    onSelect (elementKey) {
        pageName = getPageName(elementKey);
       // page= this.getPage(pageName);
       // this.trigger(pageName);
    },
    getState() {
        return {
            pageName: pageName,
            page: this.getPage(pageName)
        };
    },
    getInitialState() {
        return {
            pageName: getPageName('sale'),
            page: this.getPage(pageName)
        };
    },
    onUpdate(e){
        console.log(e);
        // this.trigger(b);

    }
    //componentDidUpdate:function(){
    //    this.setState({pageName:pageName,
    //    page:getPage()})
    //}

});