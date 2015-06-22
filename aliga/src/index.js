var serve = require('koa-static');
var bodyParser = require('koa-body-parser');
var koa = require('koa');
var app = koa();

var routing = require('koa-routing');
app.use(bodyParser());
app.use(routing(app));


var fs = require('fs');


function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
            if (err) {
                reject(err);
                console.error(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
function writFile(path, data) {
    console.log(JSON.stringify(data));
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, JSON.stringify(data), function (err) {
            if (err) {
                reject(err);
                console.log(err);
            }
        });
    });

}

var data;
app.use(function*(next) {
    var path = 'C:/Users/vasyl/WebstormProjects/untitled1/aliga/data.json';
    data = yield readFile(path);
    console.log(data);
    yield next;
});


app.use(serve('C:/Users/vasyl/WebstormProjects/untitled1/aliga'));
app.route('/')
    .get(function*(next) {
        var path = 'C:/Users/vasyl/WebstormProjects/untitled1/aliga/build/index.html';
        this.set('Content-Type', 'text/html');
        this.body = yield readFile(path);
        yield next;
    });
app.route('/dataGet')
    .get(function*(next) {

        this.body = data;
    });
app.route('/dataPost')
    .post(function*(next) {
        var path = 'C:/Users/vasyl/WebstormProjects/untitled1/aliga/data.json';
        writFile(path, this.request.body);
    });


app.listen(3000, function () {

});
