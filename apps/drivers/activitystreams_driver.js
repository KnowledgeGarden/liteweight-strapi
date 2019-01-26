/* 
 * @author park
 * @see https://github.com/jasnell/activitystrea.ms
 */
const as = require('activitystrea.ms');
const AS2Stream = as.Stream;
var ActivityStream,
    instance;

ActivityStream = function() {
    var self = this;

    self.sendObject = function(stuff, callback) {
        //as.object()
    };

};
if (!instance) {
    instance = new ActivityStream();
}
module.exports = instance;