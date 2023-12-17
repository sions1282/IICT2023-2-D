let loveImage1, loveImage2;
let wrongCount = 0;
let clickedLocations = [];
let psyFather

let differences = [
  { x: 1380, y: 630, width: 130, height: 130 }, // 딸 머리색
  { x: 1340, y: 350, width: 170, height: 170 }, // 엄마 머리색
  { x: 1560, y: 360, width: 60, height: 60 }, // 아빠이마주름
  { x: 1680, y: 850, width: 30, height: 150 }, // 아빠 지팡이
  { x: 1550, y: 770, width: 60, height: 100 }, // 아들 넥타이
  { x: 1720, y: 460, width: 80, height: 80 }, // 하트
  { x: 1450, y: 900, width: 150, height: 150 }, // 강아지
];

let messages = [
  '20살이 됐을 때 탈색을 했었지!!',
  '우리 엄마 흰머리가 언제 이렇게 늘었어..!',
  '우리 아빠는 이마에 주름이 생겼네..!',
  '아빠 오래오래 건강해야해!',
  '어느새 커서 교복도 입고 말이야!',
  '우리의 사랑이 더 진해졌네!',
  '우리집 막내도 생겼지!'
];

let clickedDifferences = [];


function preload() {
  loveImage1 = loadImage("familyPhotoOri.png");
  loveImage2 = loadImage("familyPhotoChange.png");
  gameFont = loadFont("neodgm.ttf");
  psyFather = loadSound("psyFather.mp3")
}

function setup() {
  noStroke();
  createCanvas(1920, 1080);
  background('#EDD5C7')
  fill('#964B00')
  rect(300, 0, 1620, 1080)



  textSize(50);
  textFont(gameFont)
  fill('#964B00')
  textSize(40)
  text("우리 가족의\n  변화를\n 찾아보자!", 45, 200);
  fill(0);
  textSize(20);
  text("  오른쪽 가족사진에서\n다른 부분을 클릭해주세요!", 30, 350)
  image(loveImage1, 320, 30);
  image(loveImage2, 1120, 30);
  fill(255)
  textSize(30);
  text('2010', 700, 1065)
  text('2023', 1500, 1065)

  //음악 버튼
  let playButton = createButton('Music Start');
  playButton.style('font-size', '30px');
  playButton.style('font-family', 'neodgm')
  playButton.style('width', '200px'); // 버튼의 너비 설정
  playButton.style('height', '80px');
  playButton.position(65, 700);
  playButton.mousePressed(playMusic);
}


function draw() {

  // 미리 정의한 차이에 동그라미 그리기
  for (let i = 0; i < differences.length; i++) {
    let diff = differences[i];
    fill(255, 0, 0);
    ellipse(diff.x, diff.y, diff.radius * 2, diff.radius * 2);
  }

  // 틀린 횟수 표시
  fill(0);
  stroke(255);
  textSize(40);
  text(`Found: ${wrongCount}/7`, 60, 900);

  if (wrongCount === 7) {
    fill(225, 191, 189, 150);
    noStroke();
    rect(0, 0, 1920, 1080);
    fill(0)
    textSize(45)
    text("우리 가족 오래오래 건강하고 행복하자!", 800, 560);
    !clickedInsideDifference
  }

  // 차이 메시지 표시
  for (let i = 0; i < clickedDifferences.length; i++) {
    let clickedDiff = clickedDifferences[i];
    fill(0);
    strokeWeight(5)
    textSize(20);

    // 각 메시지의 Y 위치를 메시지 인덱스에 따라 조정합니다.
    let messageY = clickedDiff.y + (i * 30); // 30은 간격 조절을 위한 값입니다.

    // 메시지가 화면 아래쪽을 벗어나지 않도록 처리합니다.
    if (messageY < height - 30) {
      text(clickedDiff.message, clickedDiff.x + 20, messageY);
    }

    // 메시지가 표시된 이후 일정 시간이 지나면 메시지 삭제
    if (frameCount - clickedDiff.displayFrame >= 60 * 3) { // 3초 동안 메시지 표시
      clickedDifferences.splice(i, 1);
    }
  }

}

function mouseClicked() {
  let clickedInsideDifference = false; // 차이로 표시된 위치 내에 클릭되었는지 여부를 나타내는 변수

  for (let i = 0; i < differences.length; i++) {
    let diff = differences[i];

    // 클릭된 위치가 차이로 지정된 영역 내에 있는지 확인
    let clickedInsideDiff = (
      mouseX > diff.x && mouseX < diff.x + diff.width &&
      mouseY > diff.y && mouseY < diff.y + diff.height
    );

    if (clickedInsideDiff) {
      let clickedLocation = { x: mouseX, y: mouseY };

      // 이미 클릭된 위치인지 확인
      let isAlreadyClicked = clickedLocations.some(loc =>
        loc.x === diff.x && loc.y === diff.y
      );

      // 이미 클릭되지 않은 차이로 표시된 위치라면 처리
      if (!isAlreadyClicked) {
        clickedInsideDifference = true; // 클릭된 위치가 차이 내부에 있다고 표시
        clickedLocations.push({ x: diff.x, y: diff.y });
        noFill();
        stroke(255, 0, 0);
        strokeWeight(10);
        ellipse(diff.x + diff.width / 2, diff.y + diff.height / 2, diff.width, diff.height);
        wrongCount++;

        // 메시지 추가
        clickedDifferences.push({
          x: diff.x - 150, // 텍스트를 차이 옆에 표시하기 위해 x 좌표 조정
          y: diff.y,
          message: messages[i] // 차이에 해당하는 메시지를 가져옴
        });

        break; // 차이를 찾았으므로 반복문 종료
      }
    }
  }

  if (clickedInsideDifference) {
    // 클릭된 차이에 해당하는 메시지 추가
    clickedDifferences.push({
      x: diff.x - 200, // 텍스트를 차이 옆에 표시하기 위해 x 좌표 조정
      y: diff.y,
      message: messages[i], // 클릭된 차이에 대응하는 메시지
      displayFrame: frameCount // 현재 프레임을 저장하여 나중에 삭제할 때 사용
    });
  }
}

function playMusic() {
  if (psyFather.isPlaying()) {
    psyFather.stop(); // 현재 재생 중인 경우 멈춤
  } else {
    psyFather.play(); // 재생
  }
}
