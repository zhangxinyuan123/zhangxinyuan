function size(originSize,type) {
    type=type||"width";

    var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
    var scale=0;
    if(type=="width"){
        scale=width/originSize*100;

    }else if(type=="height"){
        scale=height/originSize*100;

    }
    var html=document.getElementsByTagName('html')[0]
    html.style.fontSize=scale+"px";
};
window.onload=function () {
    size(750);
};