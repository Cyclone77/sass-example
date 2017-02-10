$(function() {

    //生成博客内容数据
    var pattern = /((((1[6-9]|[2-9]\d)\d{2})-(1[02]|0?[13578])-([12]\d|3[01]|0?[1-9]))|(((1[6-9]|[2-9]\d)\d{2})-(1[012]|0?[13456789])-([12]\d|30|0?[1-9]))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(1\d|2[0-8]|0?[1-9]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))/,
        str = '';
    console.log(pattern.test(str));
})

var i = 0,intervalID = setInterval(function() {
    if (i < 10) {
        console.log(i);
        i++;
    }
    if (i>5) clearInterval(intervalID);
}, 1000);

console.log(intervalID);
