define(["exports","../Components/index"],function(e,n){"use strict";n.render()});
define(["exports","react"],function(e,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(a),t=r["default"].createClass({displayName:"header",render:function(){return console.log(this.props),r["default"].createElement("header",{className:"header "},r["default"].createElement("nav",{className:" main-menu wrap container_12"},r["default"].createElement("a",{className:"grid_2 rent main-menu__link ",href:"#"},"Rent"),r["default"].createElement("a",{className:"grid_2 sale main-menu__link",href:"#"},"Sale"),r["default"].createElement("a",{className:"grid_2 daily-rent main-menu__link",href:"#"},"Daily rent"),r["default"].createElement("a",{className:"grid_2 more-service main-menu__link",href:"#"},"more service"),r["default"].createElement("a",{className:"grid_2 forum main-menu__link",href:"#"},"Forum"),r["default"].createElement("a",{className:"grid_2 my-office main-menu__link",href:"#"},"My office")),r["default"].createElement("nav",{className:"search-menu container_12"}))}});e.header=t});
define(["exports","react","rx","Build/script/Components/header.js"],function(e,t,r,n){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}function o(){a["default"].render(a["default"].createElement(n.header,{data:u}),document.getElementById("content"))}Object.defineProperty(e,"__esModule",{value:!0}),e.render=o;{var a=d(t);d(r)}console.log(n.header);var u={rent:"������",sale:"������",daily_rent:"�������� ������",forum:"�����",my_office:"̳� �������"}});
define(["exports"],function(e){"use strict";function t(){var e=null;try{e=new XMLHttpRequest}catch(t){}try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}try{e=new XMLHttpRequest("Microsoft.XMLHTTP")}catch(t){}return e}function n(e){var n=new Promise(function(n,r){var o=t();o.open("GET",e,!0),o.onreadystatechange=function(){4==o.readyState&&(200==o.status?n(o.responseText):r("error "+o.responseText+" "+o.status))},o.send()});return n.then(function(e){return e})["catch"](function(e){console.error(e)})}function r(e,n){var r=t();r.open("POST",e,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.send(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.getData=n,e.sendData=r});