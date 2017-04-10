/**
 * Created by Hp on 05-Apr-17.
 */
//    made some changes
//    client 1 changes something in same line
//    client 2 changes something

var express = require('express');
var app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.get('/', function (req,res) {
   res.send('Express Working');
});
app.listen(app.get('port'), function () {
    console.log('Express starting working press ctrl-c to stop');
})