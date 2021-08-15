"use strict";

window.onscroll = function(event){
    //スクロール値の取得
    let position = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(position);

    //positionの値が300以上で#page-topに.openを追加。
    //300以下で#page-topの.openを削除。
    if(position >= 1){
        document.getElementById('fixed--top').classList.add('fixed--top--open');
        document.getElementById('fixed--top').classList.remove('fixed--top--close');
        document.getElementById('header').classList.add('header__close');
    } else {
        document.getElementById('fixed--top').classList.remove('fixed--top--open');
        document.getElementById('fixed--top').classList.add('fixed--top--close');
        document.getElementById('header').classList.remove('header__close');

    }
};

const hambarger = document.getElementById('hambarger');
const hambarger__gnavi = document.getElementById('hambarger--gnavi');
hambarger.onclick = function(evt){
    evt.preventDefault();

    //toggleを使った記述。
    hambarger.classList.toggle('hambarger--open');
    hambarger.classList.toggle('hambarger--close');
    hambarger__gnavi.classList.toggle('hambarger--gnavi--open');
    hambarger__gnavi.classList.toggle('hambarger--gnavi--close');
    //mbtn.classList.toggle('close');
};
