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

    var response = new Promise(function (resolve, reject) {
        var request = getAjax();
        request.open('GET', path, true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    resolve(request.responseText);
                }
                else {
                    reject('error ' + request.responseText + ' ' + request.status);
                }
            }
        };
        request.send();
    });

    return response.then(function (data) {
        return data;
    }).catch(function (err) {
        console.error(err);
    });
}
export function sendData(path, data) {

    var request = getAjax();
    request.open('POST', path, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(data);

}