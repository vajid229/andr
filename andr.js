var dc = document
var vid = dc.getElementById('vd')
var b=dc.getElementById('po')
var c=dc.getElementById('ui')
var d=dc.getElementById('ty')


function er(){
    vid.play();
    vid.playbackRate = 0.5;
    document.getElementById('disp').style.backgroundColor = 'black';
    vid.style.visibility = 'hidden';
    vid.style.transition = '7s';
    document.getElementById('ty').style.visibility = 'hidden';
    document.getElementById('ty').style.transition = '7s';
    
}

