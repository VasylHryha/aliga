import Rx from 'rx';
function getAjax() {
    var xml = null;
    try {
        xml = new XMLHttpRequest();
    } catch (e) {
    }

    try {
        xml = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
    }

    try {
        xml = new XMLHttpRequest('Microsoft.XMLHTTP');
    } catch (e) {
    }

    return xml;
}

export function getData(path) {

    var response = new Rx.Observable.create ((res)=> {
        var request = getAjax();
        request.open('GET', path, true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    res.onNext( request.responseText);
                }
                else {
                    console.log('error ' + request.responseText + ' ' + request.status);
                }
            }
        };
        request.send();

    });

    return response;

    //return response.then(function (data) {
    //    return data;
    //}).catch(function (err) {
    //    console.error(err);
    //});
}
export function sendData(path, data) {
console.log(data);
    var request = getAjax();
    request.open('POST', path, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(data);

}