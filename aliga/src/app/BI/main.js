import * as view from '../Components/index';
//import Rx from 'rx';
import * as ajax from '../helper/ajax'

ajax.getData('/dataGet').forEach(x=> view.render(x))

//view.render()