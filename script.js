//モード切替
const inputBtn = document.querySelector('#inputTab');
const compareBtn = document.querySelector('#compareTab');
const inputSpace = document.querySelector('.input-space');
const compareSpace = document.querySelector('.compare-space');

inputBtn.addEventListener('click', () => {
  inputSpace.style.display = 'block'; 
  compareSpace.style.display = 'none'; 
});

compareBtn.addEventListener('click', () => {
  inputSpace.style.display = 'none';   
  compareSpace.style.display = 'block';  
});

//目標設定
const goalBtn = document.querySelector('#goal');
const goalInput = document.querySelector('#goalInput');

goalBtn.addEventListener('click', () => {
  if (goalInput.style.display === 'none') {
    goalInput.style.display = 'block';
  } else {
    goalInput.style.display = 'none';
  }
});

//文字数カウント＆目標までの残り文字数表示
const text = document.querySelector('#text');
const count = document.querySelector('#count');
const goalshow = document.querySelector('#goalNumber');
const goalRemaining = document.querySelector('#goalRemaining');

text.addEventListener('keyup', () => {
    count.textContent = text.value.length;
    if(goalshow.value - text.value.length <= 0 && goalshow.value != '') {
        count.style.color = '#ea580c';
        goalRemaining.style.color = '#ea580c';
    } else if(goalshow.value - text.value.length > 0) {
        count.style.color = '#0d9488';
        goalRemaining.style.color = '#0d9488';
    }
    goalRemaining.textContent = Math.max(0, goalshow.value - text.value.length);
    
});


//比較モードの文字数カウント
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const count1 = document.querySelector('#count1');
const count2 = document.querySelector('#count2');

text1.addEventListener('keyup', () => {
    count1.textContent = text1.value.length;
});

text2.addEventListener('keyup', () => {
    count2.textContent = text2.value.length;
});

//クリアボタン(テキスト入力モード)
const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', () => {
    text.value = '';
    count.textContent = '0';
});

//クリアボタン(比較モード)
const clearBtn2 = document.querySelector('#clearbtn2');
clearBtn.addEventListener('click', () => {
    text1.value = '';
    count.textContent = '0';
});
const clearBtn3 = document.querySelector('#clearbtn3');
clearBtn.addEventListener('click', () => {
    text2.value = '';
    count.textContent = '0';
});


// 2. コピー機能（テキスト入力ページ）
const copyBtn = document.querySelector('#copybtn');
const toast = document.getElementById('popup');

copyBtn.addEventListener('click', async () => {
  // textArea を textarea（すべて小文字）に修正しています
  if (text.value === '') {
    return; // テキストが空なら何もしない
  }

  try {
    // クリップボードにテキストエリアの文字を書き込む
    await navigator.clipboard.writeText(text.value);
    
    // alert() をやめて、トースト通知を表示する処理に変更
    toast.classList.add('show');
    
    // 1秒後（1000ミリ秒後）に非表示に戻す
    setTimeout(() => {
      toast.classList.remove('show');
    }, 1000);

  } catch (error) {
    alert('コピーに失敗しました。');
  }
});
   
//コピー機能(比較ページ)
const copyBtn2 = document.querySelector('#copybtn2');
const copyBtn3 = document.querySelector('#copybtn3');

copyBtn2.addEventListener('click', async () => {
  // textArea を textarea（すべて小文字）に修正しています
  if (text1.value === '') {
    return; // テキストが空なら何もしない
  }

  try {
    // クリップボードにテキストエリアの文字を書き込む
    await navigator.clipboard.writeText(text1.value);
    
    // alert() をやめて、トースト通知を表示する処理に変更
    toast.classList.add('show');
    
    // 1秒後（1000ミリ秒後）に非表示に戻す
    setTimeout(() => {
      toast.classList.remove('show');
    }, 1000);

  } catch (error) {
    alert('コピーに失敗しました。');
  }
});

copyBtn3.addEventListener('click', async () => {
  // textArea を textarea（すべて小文字）に修正しています
  if (text2.value === '') {
    return; // テキストが空なら何もしない
  }

  try {
    // クリップボードにテキストエリアの文字を書き込む
    await navigator.clipboard.writeText(text2.value);
    
    // alert() をやめて、トースト通知を表示する処理に変更
    toast.classList.add('show');
    
    // 1秒後（1000ミリ秒後）に非表示に戻す
    setTimeout(() => {
      toast.classList.remove('show');
    }, 1000);

  } catch (error) {
    alert('コピーに失敗しました。');
  }
});

// ダークモード切替
const darkModeBtn = document.querySelector('#dark-mode');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  console.log('ダークモード切替');

  if(darkModeBtn.textContent === 'ダークモード') {
    darkModeBtn.textContent = 'ライトモード';
  } else {
    darkModeBtn.textContent = 'ダークモード';
  }
});

