/**
 * Created by sf on 2017/6/14.
 */

function start() {
    console.log("Request handler 'start' was called.");
    return "hello start";
}
function upload() {
    console.log("Request handler 'upload' was called.");
}
exports.start = start;
exports.upload = upload;