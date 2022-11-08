class PracticeWrestler {
  constructor(name) {
    if (name.length === 0) {
      this.name = 'トシ';
    } else {
      this.name = name;
    }

    this.height = 0;
    this.weight = 0;
    this.satiety = 0;
    if (Math.round(Math.random() * 20) === 0) {
      this.age = Math.round(Math.random() * 2) + 12;
    } else {
      this.age = Math.round(Math.random() * 3) + 16;
    }
    this.muscle = 20;
    this.info = '';
  }
  eat() {
    this.satiety += 2;
    this.weight += 0.5;
    this.info = `ご飯を食べた!体重が0.5㎏増え、満腹度が2増えた`;
  }
  training() {
    this.satiety -= 2;
    this.weight += 0.2;
    this.muscle += 0.2;
    this.info = `トレーニングをした!筋肉量と体重が0.2㎏増え、満腹度が2減った`;
  }
  practice() {
    console.log('稽古をした');
  }
  protein() {
    console.log('栄養補給した');
  }
}

p = new PracticeWrestler('トシ');

const infoDisp = document.querySelector('.info h2');
const exeImage = document.querySelector('.exeImage img');
window.addEventListener('onload', statusDisp(p));

const nextButton = document.querySelector('.next');
const eatButton = document.querySelector('.eat');
const trainingButton = document.querySelector('.training');
const practiceButton = document.querySelector('.practice');
const buttons = [nextButton, eatButton, trainingButton, practiceButton];

nextButton.addEventListener('click', () => {
  exeImage.src = 'images/sumo_rikishi_white2.png';
  infoDisp.textContent = '今週の行動を選択してください';
  toggleButton(buttons);
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
