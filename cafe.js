function toDo() {

/* indx.htmlから[id]が[add-button]を呼び出し、その要素を変数[button]とする */
const button = document.getElementById('add-button');


/* 変数[button]が、クリックされた時 => */
button.addEventListener('click',() => {

    /* [p]要素を作り、それを変数[p]とする */
    const p = document.createElement('p');

    /* 全行で作った変数[p]に[add-cafe]というclassを加える */
    p.classList.add('add-cafe');

    /* 以下からはよくわかりませんが消すと動かなくなります */
    /* todoリストの名残りの[doneButton]です */
    const doneButton = document.createElement('button');
    doneButton.classList.add('add-cafe');

    p.appendChild(doneButton);
    doneButton.addEventListener('click',()=>{
        const p = doneButton.closest('p');
        //closest一番近い親要素
    });

    const cap = document.getElementById('cap');
    cap.appendChild(p);
});

    /* 変数[button2](カフェインレスボタン)*/
   const button2 = document.getElementById('add-button2');

  
   button2.addEventListener('click',() => {

    const p2 = document.createElement('p');

    p2.classList.add('add-cafe2');

    /* 以下からはよくわかりませんが消すと動かなくなります */
    /* todoリストの名残りの[doneButton]です */
    const doneButton2 = document.createElement('button');
    doneButton2.classList.add('add-cafe2');

    p2.appendChild(doneButton2);
    doneButton2.addEventListener('click',()=>{
        const p2= doneButton2.closest('p');
        
    });

    const cap = document.getElementById('cap');
    cap.appendChild(p2);
});


};
window.addEventListener('load',toDo);