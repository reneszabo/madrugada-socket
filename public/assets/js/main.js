var socket = io();
var numAnim;
$(document).on('click', '#btn--send-update', function() {
    socket.emit('update-page');
});
socket.on('onUpdateData', function (data) {
    $('#last-update').html(data.date)
    if (numAnim === undefined) {
        numAnim = new CountUp("followers-number", 0, data.followers,0 , 2);
        numAnim.start();
    }else{
        numAnim.update(data.followers);
    }
});