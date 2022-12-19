// 各種要素取得
const infoDisp = document.querySelector('.info h2');
const exeImage = document.querySelector('.exeImage img');

const playYear = document.querySelector('.year');
const playMonth = document.querySelector('.month');
const playWeek = document.querySelector('.week');

const nextButton = document.querySelector('.next');
const eatButton = document.querySelector('.eat');
const trainingButton = document.querySelector('.training');
const practiceButton = document.querySelector('.practice');
const buttons = [nextButton, eatButton, trainingButton, practiceButton];

// 力士クラス
class PracticeWrestler {
  constructor(name) {
    // コンストラクタ（インスタンス時に実行）
    if (name.length === 0) {
      this.name = 'トシ';
    } else {
      this.name = name;
    }

    this.height = 180;
    this.weight = 70;
    this.satiety = 5;
    if (Math.round(Math.random() * 20) === 0) {
      this.age = Math.round(Math.random() * 2) + 12;
    } else {
      this.age = Math.round(Math.random() * 3) + 16;
    }
    this.muscle = 20;
    this.info = '';
  }
  eat() {
    // 食事
    this.satiety += 2;
    this.weight = orgRound(this.weight + 0.5, 10);
    this.info = `ご飯を食べた!体重が0.5㎏増え、満腹度が2増えた`;
  }
  training() {
    if (this.satiety > 2) {
      this.satiety -= 2;
      this.weight = orgRound(this.weight + 0.2, 10);
      this.muscle = orgRound(this.muscle + 0.2, 10);
      this.info = `トレーニングをした!筋肉量と体重が0.2㎏増え、満腹度が2減った`;
    } else {
      this.info = `おなかが減って力がでない、、、トレーニングできなかった。`;
      exeImage.src = './images/kodomosyokudou_hungry_boy.png';
      this.protein();
    }
  }
  practice() {
    // 稽古
    this.satiety -= 4;
    this.weight = orgRound(this.weight + 0.5, 10);
    this.muscle = orgRound(this.muscle + 0.5, 10);
    this.info = `稽古をした筋肉量と体重が0.5kg増え、満腹度が4減った`;
  }
  protein() {
    // 満腹度が少ない状況で筋トレや稽古を行うと代わりに発動
    this.info += `プロテインを摂取した。満腹度が1増えた`;
    this.satiety += 1;
  }
}

// インスタンス化
p = new PracticeWrestler('トシ');

// ページがロードされたら実行
window.addEventListener('onload', statusDisp(p));

// 各種ボタンイベント
nextButton.addEventListener('click', () => {
  exeImage.src = 'images/sumo_rikishi_white2.png';
  infoDisp.textContent = '今週の行動を選択してください';
  toggleButton(buttons);
  playWeek.textContent++;
  if (playWeek.textContent > 4) {
    playWeek.textContent = 1;
    playMonth.textContent++;
    if (playMonth.textContent > 12) {
      playMonth.textContent = 1;
    }
  }
  if (playWeek.textContent == 1 && playMonth.textContent == 4) {
    playYear.textContent++;
  }
});

eatButton.addEventListener('click', () => {
  exeImage.src = 'images/food_sumo_chanko_nabe.png';
  p.eat();
  infoDisp.textContent = p.info;
  statusDisp(p);
  toggleButton(buttons);
});

trainingButton.addEventListener('click', () => {
  exeImage.src = 'images/undou_bench_press_man.png';
  p.training();
  infoDisp.textContent = p.info;
  statusDisp(p);
  toggleButton(buttons);
});

practiceButton.addEventListener('click', () => {
  exeImage.src = 'images/sumo_torikumi.png';
  p.practice();
  infoDisp.textContent = p.info;
  statusDisp(p);
  toggleButton(buttons);
});

// 各種関数
function statusDisp(p) {
  const statusArr = [p.name, p.age, p.height, p.weight, p.muscle, p.satiety];
  const wrestlerStatus = document.querySelectorAll('.disp ul li');
  for (i = 0; i < wrestlerStatus.length; i++) {
    wrestlerStatus[i].querySelector('span').textContent = statusArr[i];
  }
}

function toggleButton(buttons) {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].toggleAttribute('disabled');
  }
}

function orgRound(value, base) {
  return Math.round(value * base) / base;
}
