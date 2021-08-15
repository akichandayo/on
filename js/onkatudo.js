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
        document.getElementById('fixed--right').classList.add('fixed--right--open');
        document.getElementById('fixed--right').classList.remove('fixed--right--close');
        document.getElementById('fixed--bottom').classList.remove('fixed--bottom--close');
        document.getElementById('fixed--bottom').classList.add('fixed--bottom--open');
        document.getElementById('header').classList.add('header__close');
    } else {
        document.getElementById('fixed--top').classList.remove('fixed--top--open');
        document.getElementById('fixed--top').classList.add('fixed--top--close');
        document.getElementById('fixed--right').classList.remove('fixed--right--open');
        document.getElementById('fixed--right').classList.add('fixed--right--close');
        document.getElementById('fixed--bottom').classList.add('fixed--bottom--close');
        document.getElementById('fixed--bottom').classList.remove('fixed--bottom--open');
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



// ブラウザ間の差異をカバーする
// ページ全体の高さを取得する

const page_bottom = document.getElementById('dropanim');
const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

// 一番下までスクロールした時の数値を取得(window.innerHeight分(画面表示領域分)はスクロールをしないため引く)
const pageMostBottom = scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // iosはバウンドするので、無難に `>=` にする
    if (scrollTop >= pageMostBottom) {
        page_bottom.classList.toggle('dropanim--bottom');
        page_bottom.classList.toggle('dropanim');
    }
});




/*function changeDisabled_category() {
    if ( document.Form["category"][3].checked ) { // 「その他」のラジオボタンをクリックしたとき
        document . Form["inputNumber_category"] . disabled = false; // 「その他」のラジオボタンの横のテキスト入力欄を有効化
        document.getElementById('other_textarea').style.display = "";
    } else { // 「その他」のラジオボタン以外をクリックしたとき
        document . Form["inputNumber_category"] . disabled = true; // 「その他」のラジオボタンの横のテキスト入力欄を無効化
        document.getElementById('other_textarea').style.display = "none";
    }
}
//window.onload = changeDisabled_category;

function changeDisabled_know() {
    if ( document.Form["know"][2].checked ) { // 「その他」のラジオボタンをクリックしたとき
        document . Form["inputNumber_know"] . disabled = false; // 「その他」のラジオボタンの横のテキスト入力欄を有効化
        document.getElementById('know_textarea').style.display = "";
    } else { // 「その他」のラジオボタン以外をクリックしたとき
        document . Form["inputNumber_know"] . disabled = true; // 「その他」のラジオボタンの横のテキスト入力欄を無効化
        document.getElementById('know_textarea').style.display = "none";
    }
}
//window.onload = changeDisabled_know;

function init(){
    changeDisabled_category();
    changeDisabled_know();
}
window.onload = init;
*/