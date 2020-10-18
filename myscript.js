function play_se(){
    var warning = new Audio('warning.mp3');
    var voice = new Audio('voice.mp3');
    warning.play();
    voice.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100,200]);
}


$(function(){
    //ページ読み込みが完了すると実行
    $('#効果音').click(play_se);
});	