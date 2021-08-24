/* The Middleware that checks day and time,
if it is work time it Calls the next middleware,
if not it sends the message that the application is not available*/
const dateFormat = require("dateformat");
var now = new Date();
module.exports = function (req, res, next) {
    if ((dateFormat(now, "dddd")==="Saturday" || dateFormat(now, "dddd")==="Sunday")||(17<parseInt(dateFormat(now, "HH"))|| parseInt(dateFormat(now, "HH"))<9) ) {
        res.render('Not_Available')
    } else {
        next();
    }
}