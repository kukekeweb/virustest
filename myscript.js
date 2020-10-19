function play_se(){
    var warning = new Audio('warning.mp3');
    var voice = new Audio('voice.mp3');
    warning.play();
    voice.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100,200]);
}


$(function(){
    //ページ読み込みが完了すると実行




　　//モーダル表示
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
       $('#alert').modal('close');
       play_se();
    });


　　//端末情報取得
　　var device = navigator.userAgent.match(/Android|iPhone|iPad|iPod/);
    if(device == null){
       device = '端末';
    }
    $('#device').text(device);


    //カウントダウン処理
    var time = 120;
    setInterval(function(){
        time--;
        $('#timer').text(time);
    }, 1000);
});   
