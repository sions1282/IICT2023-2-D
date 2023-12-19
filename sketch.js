let stateNow = 'title';
let customFont;
let titleBG;
let titlesnowflakes = [];

//end 전역변수
let fadeAmount = 0; // 페이드 효과의 초기 투명도 값
let fading = false; // 페이드아웃 효과의 활성화 여부
let fadeAmount1 = 255; // 페이드 효과의 초기 투명도 값을 최대로 설정
let fadingIn = false; // 페이드인 효과의 활성화 여부

//start 전역변수
let snowflakes = [];
let moonSize = 300; // 달의 크기
let moonX = 30; // 달의 x 좌표
let moonY = 50; // 달의 y 좌표
let enterPressed = false;

//home 전역변수
let thumbNail;
let homePlayer;
let homeCount = 0;

//main 전역변수
let player;
let main1BG;
let main2BG;
let main3BG;
let main4BG;
let main5BG;
let main6BG;
let main7BG;
let main8BG;
let main9BG;

//mini1 전역변수
let student
let security;
let bg;
let teacher = [];
let goRight = true;
let goLeft = false;
let getPC = false;
let rearDoor = false;
let playGround = false;
let outside = false;
let gameState = "playing";
let enemy = [];
let securityImage;
let teacherImage;
let mini1Ending;

//mini2 전역변수
let flower0 = [];
let flower1 = [];
let bg2;
let rose;
let font;
let gainedCreativity = false;
let resetButton;
let roseImage0;
let roseImage1;
let selectedFlower;
let mini2Ending;

//mini3 전역변수
let playButton3;
let loveImage1, loveImage2;
let wrongCount = 0;
let clickedLocations = [];
let psyFather
let clickedInsideDifference = false;

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

//mini4 전역변수
let myStrength = 0;
let maxStrength = 150000; // 벽을 부수기 위한 최대 값
let badwordtran = 0;
let broken = false;
let wall;
let hammer;
let endingcrack;
let crackX = 100;
let crackY = 100;
let crackSize = 200;
let zones = [];
let goodzone = [];
let goodword = ['할 수 있어', '신난다', '즐겁다', '가보자고'];
let badword = ['힘들어', '못하겠어', '열받아', '짜증나'];

//mini5 전역변수
let love;
let hangeul = [];
let drops = [];
let catcher;
let instruction = true;
let pen;
let chin = false;
let gu = false;
let ya = false;
let go = false;
let ma = false;
let wo = false;
let plus = false;
let minus = false;
let finalMessage = false;

//mini6 전역변수
let mini;
let playerX, playerY; // 플레이어 위치
let bullets = []; // 총알 배열
let targets = []; // 목표물 배열
let score = 0;
let gameOver = false;
let bg6;
let bullet;
let monster;
let gun;
let bang;
let apologize = ['미안해', '화해하자', '사랑해'];
let bad = ['너무해', '나빠', '질투나'];
let end;
let endtran = 255;

//mini7 전역변수
let playButton7;
let swissSong;
let tiles = [];
let cols = 3; // 변경
let rows = 3; // 변경
let w, h;

let clickCount = 0;
let currentMessage = 0;
let currentSolveMessage = 0;
let originalOrder = [0, 3, 6, 1, 4, 7, 2, 5, 8];

// Order of tiles
let board = [];
//싸움 메시지
let fightMessages = [
  "너는 사진 찍으러 여행 왔니?",
  "배고픈데 이제 밥 먹으러 가면 안될까?",
  "여기 식당 예약했다고 하지 않았어?",
  "그거 사봤자 나중에 다 짐만 돼",
  "너가 가서 영어로 한번 물어봐바",
  "여기 기대했던 것보다는 별로네"
];

let solveMessages = [
  "남는건 사진 밖에 없는거야~",
  "알았어!! 내가 맛있는 곳 예약해뒀어!",
  "착오가 있었나봐.. 다른 곳 가보자!",
  "에이~ 이런게 다 추억이야~",
  "알았어! 내가 물어보고 올게!",
  "왜? 나는 여기 너무 좋은 것 같은데~"
];


function preload() {
  customFont = loadFont('neodgm.ttf');
  titleBG = loadImage('asset/title.png');
  thumbNail = loadImage("asset/thumbnail.png");
  main1BG = loadImage('asset/main1.png');
  main2BG = loadImage('asset/main2.png');
  main3BG = loadImage('asset/main3.png');
  main4BG = loadImage('asset/main4.png');
  main5BG = loadImage('asset/main5.png');
  main6BG = loadImage('asset/main6.png');
  main7BG = loadImage('asset/main7.png');
  main8BG = loadImage('asset/main8.png');
  main9BG = loadImage('asset/main9.png');
  bg = loadImage('asset/classbg.png');
  securityImage = loadImage('asset/security.png');
  teacherImage = loadImage('asset/teacher.png');
  mini1Ending = loadImage('asset/mini1Ending.jpg');
  bg2 = loadImage('asset/flowerbg.png');
  roseImage0 = loadImage('asset/rose0.png');
  roseImage1 = loadImage('asset/rose1.png');
  kiss = loadImage('asset/kiss.png');
  mini2Ending = loadImage('asset/mini2Ending.jpg');
  loveImage1 = loadImage("asset/familyPhotoOri.png");
  loveImage2 = loadImage("asset/familyPhotoChange.png");
  psyFather = loadSound("asset/psyFather.mp3");
  wall = loadImage("asset/wall.jpg");
  endingcrack = loadImage('asset/crack.jpg');
  hammer = loadImage('asset/hammer.png');
  love = loadImage("asset/letter.jpg");
  pen = loadImage("asset/pen.png");
  bullet = loadImage("asset/bullet.png");
  gun = loadImage("asset/gun.png");
  monster = loadImage("asset/monster.png");
  bg6 = loadImage("asset/background.jpg");
  end = loadImage("asset/ending.jpg");
  travelPuzzle = loadImage("asset/travelPuzzle.png");
  finishTravel = loadImage("asset/finishTravel.png")
  swissSong = loadSound("asset/swissSong.mp3")
}

function setup() {
  createCanvas(1920, 1080);
  setupTitle();
  setupStart();
  setupHome();
  setupMain1();
  setupMini1();
  setupMini2();
  setupMini3();
  setupMini4();
  setupMini5();
  setupMini6();
  setupMini7();
}

function draw() {
  if (stateNow === "mini2") {
    resetButton.show();
  } else {
    resetButton.hide();
  }
  if (stateNow === 'mini3') {
    playButton3.show();
  } else {
    playButton3.hide();
  }
  if (stateNow === 'mini7') {
    playButton7.show();
  } else {
    playButton7.hide();
  }
  switch (stateNow) {
    case 'title':
      drawTitle();
      break;
    case 'start':
      drawStart();
      break;
    case 'home':
      drawHome();
      break;
    case 'main1':
      drawMain1();
      break;
    case 'mini1':
      drawMini1();
      break;
    case 'main2':
      drawMain2();
      break;
    case 'mini2':
      drawMini2();
      break;
    case 'main3':
      drawMain3();
      break;
    case 'mini3':
      drawMini3();
      break;
    case 'main4':
      drawMain4();
      break;
    case 'mini4':
      drawMini4();
      break;
    case 'main5':
      drawMain5();
      break;
    case 'mini5':
      drawMini5();
      break;
    case 'main6':
      drawMain6();
      break;
    case 'mini6':
      drawMini6();
      break;
    case 'main7':
      drawMain7();
      break;
    case 'mini7':
      drawMini7();
      break;
    case 'main8':
      drawMain8();
      break;
    case 'main9':
      drawMain9();
      break;
  }
}

function keyPressed() {
  if (keyCode === 80) { // 'p' 키 skip
    if (stateNow === "mini1") {
      stateNow = "main2";
    } else if (stateNow === "mini2") {
      stateNow = "main3";
    } else if (stateNow === "mini3") {
      stateNow = "main4";
    } else if (stateNow === "mini4") {
      stateNow = "main5";
    } else if (stateNow === "mini5") {
      stateNow = "main6";
    } else if (stateNow === "mini6") {
      stateNow = "main7";
    } else if (stateNow === "mini7") {
      stateNow = "main8";
    }
  }

  if (keyCode === 32) { // 스페이스바
    switch (stateNow) {
      case 'title':
        stateNow = "start";
        break;
      case 'mini6':
        if (!gameOver) {
          let bullet = new Bullet(playerX + 40, playerY - 100, apologize[int(random(3))]);
          bullets.push(bullet);
        }
        break;
    }
  }

  if (key === 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  switch (stateNow) {
    case 'home':
      if (homeCount == 0 && keyCode === ENTER) {
        homeCount += 1;
      }
      if (
        homeCount == 1 && 760 < homePlayer.x &&
        homePlayer.x < 940 &&
        200 < homePlayer.y &&
        homePlayer.y < 250
      ) {
        homeCount += 1;
      }
      if (homeCount != 1 && keyCode === ENTER) {
        homeCount += 1;
      }
      if (homeCount >= 5 && keyCode === 32) {
        stateNow = "main1";
      }
      break;
    case 'mini5':
      if (keyCode === LEFT_ARROW) {
        catcher.moveLeft(); // catcher를 왼쪽으로 이동하는 함수 호출
      } else if (keyCode === RIGHT_ARROW) {
        catcher.moveRight(); // catcher를 오른쪽으로 이동하는 함수 호출
      }
      break;
  }
}

function mouseClicked() {
  switch (stateNow) {
    case 'start':
      break;
    case 'home':

      break;
    case 'main1':

      break;
    case 'mini1':

      break;
    case 'main2':

      break;
    case 'mini2':
      for (let flower of flower0) {
        if (flower.isMouseOver()) {
          flower.mouseClicked();
        }
      }
      for (let flower of flower1) {
        if (flower.isMouseOver()) {
          flower.mouseClicked();
        }
      }
      break;
    case 'main3':
      break;
    case 'mini3':
      // 차이로 표시된 위치 내에 클릭되었는지 여부를 나타내는 변수
      clickedInsideDifference = false;
      for (let i = 0; i < differences.length; i++) {
        let diff = differences[i];

        // 클릭된 위치가 차이로 지정된 영역 내에 있는지 확인
        let clickedInsideDiff = (
          mouseX > diff.x && mouseX < diff.x + diff.width &&
          mouseY > diff.y && mouseY < diff.y + diff.height
        );

        if (clickedInsideDiff) {
          //let clickedLocation = { x: mouseX, y: mouseY };

          // 이미 클릭된 위치인지 확인
          let isAlreadyClicked = clickedLocations.some(loc =>
            loc.x === diff.x && loc.y === diff.y
          );

          // 이미 클릭되지 않은 차이로 표시된 위치라면 처리
          if (!isAlreadyClicked) {
            clickedInsideDifference = true; // 클릭된 위치가 차이 내부에 있다고 표시
            clickedLocations.push(diff);
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
      break;
    case 'main4':

      break;
    case 'mini4':

      break;
    case 'main5':

      break;
    case 'mini5':

      break;
    case 'main6':

      break;
    case 'mini6':
      break;
    case 'main7':

      break;
    case 'mini7':
      clickCount++;
      displayMessages();
      break;
    case 'main8':

      break;
    case 'main9':

      break;
  }
}
function mousePressed() {
  switch (stateNow) {
    case 'start':
      break;
    case 'home':

      break;
    case 'main1':

      break;
    case 'mini1':

      break;
    case 'main2':

      break;
    case 'mini2':
      for (let flower of flower0) {
        flower.mousePressed();
        for (let flower of flower1) {
          flower.mousePressed();
        }
      }
      break;
    case 'main3':

      break;
    case 'mini3':

      break;
    case 'main4':

      break;
    case 'mini4':

      break;
    case 'main5':

      break;
    case 'mini5':

      break;
    case 'main6':

      break;
    case 'mini6':

      break;
    case 'main7':

      break;
    case 'mini7':
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      move(i, j, board);
      break;
    case 'main8':

      break;
    case 'main9':

      break;
  }
}
function mouseReleased() {
  switch (stateNow) {
    case 'start':
      break;
    case 'home':

      break;
    case 'main1':

      break;
    case 'mini1':

      break;
    case 'main2':

      break;
    case 'mini2':
      selectedFlower = false;
      if (
        (flower1[5].position.x >= 650 &&
          flower1[5].position.x <= 740 &&
          flower1[5].position.y >= 740 &&
          flower1[0].position.x >= 410 &&
          flower1[0].position.x <= 550 &&
          flower1[0].position.y >= 500 &&
          flower1[0].position.y <= 600 &&
          flower1[0].angle == HALF_PI) ||
        (flower1[0].position.x >= 650 &&
          flower1[0].position.x <= 740 &&
          flower1[0].position.y >= 740 &&
          flower1[5].position.x >= 410 &&
          flower1[5].position.x <= 550 &&
          flower1[5].position.y >= 500 &&
          flower1[5].position.y <= 600 &&
          flower1[5].angle == HALF_PI)
      ) {
        gainedCreativity = true;
      } else {
        gainedCreativity = false;
      }
      break;
    case 'main3':

      break;
    case 'mini3':

      break;
    case 'main4':

      break;
    case 'mini4':

      break;
    case 'main5':

      break;
    case 'mini5':

      break;
    case 'main6':

      break;
    case 'mini6':

      break;
    case 'main7':

      break;
    case 'mini7':

      break;
    case 'main8':

      break;
    case 'main9':

      break;
  }
}
function mouseDragged() {
  if (stateNow === "mini2") {
    for (let flower of flower0) {
      if (flower.isMouseOver()) {
        if (!selectedFlower) {
          selectedFlower = flower;
        } else if (flower == selectedFlower) {
          flower.mouseDragged();
        }
      }
    }
    for (let flower of flower1) {
      if (flower.isMouseOver()) {
        if (!selectedFlower) {
          selectedFlower = flower;
        } else if (flower == selectedFlower) {
          flower.mouseDragged();
        }
      }
    }
  }
}
function setupTitle() {
  noStroke();
  for (let i = 0; i < 100; i++) {
    titlesnowflakes.push(new Snowflake(random(6, 10)));
  }
}
function drawTitle() {
  background(titleBG);
  if (frameCount % 60 < 30) {
    fill(0, 0, 0, 0);
  } else {
    fill(255);
    rectMode(CENTER);
    stroke(8, 79, 106);
    strokeWeight(3);
    rect(635, 850, 240, 60);
    rectMode(CORNER);
    noStroke();
    fill(8, 79, 106);
    textSize(50);
    textFont(customFont);
    text("Spacebar  를 눌러 게임을 시작하세요!", 540, height * 4 / 5);
  }
  titlesnowFlakes();
}
function titlesnowFlakes() {
  //눈 그리는 부분
  for (let i = 0; i < 2; i++) { // 눈송이를 매 프레임마다 5개씩 생성
    let snowflake = new Snowflake(random(2,));
    titlesnowflakes.push(snowflake); // 생성된 눈송이를 배열에 추가
  }

  for (let i = titlesnowflakes.length - 1; i >= 0; i--) {
    titlesnowflakes[i].update(); // 눈송이들을 업데이트
    titlesnowflakes[i].display(); // 눈송이들을 화면에 표시

    if (titlesnowflakes[i].posY > height) {
      titlesnowflakes.splice(i, 1); // 화면 아래로 벗어난 눈송이 제거
    }
  }
}
function setupStart() {
  noStroke();
  startCharacter = new startCharacter(0, 835, 5);
  for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake(random(6, 10)));
  }
}
function drawStart() {
  //기본 배경
  background(0, 0, 30);
  fill(0);
  rect(1280, 0, 640, 1080);
  fill(170, 18, 29);
  rect(1310, 30, 580, 900)
  //눈 내린 바닥
  fill(255, 230);
  rect(0, 900, 1280, 280);
  drawMoon(moonX, moonY, moonSize);
  notice();

  //건물
  drawSchool();
  drawCinema();
  drawHouse(1100, 800, 250, 200);
  snowFlakesAll();

  fill(255)
  startCharacter.update();
  startCharacter.display();

  //카톡메시지
  messageNotice();
  if (keyIsPressed && key === 'Enter') {
    enterPressed = true; // enter 키가 눌렸음을 표시
    if (startCharacter.x > 100 && startCharacter.x < 400) {
      schoolMessage();
    } else if (startCharacter.x > 550 && startCharacter.x < 850) {
      boyfriendMessage();
    } else if (startCharacter.x > 1000 && startCharacter.x < 1350) {
      familyMessage();
    }
  }

  drawChristmasTree(1400, 730, 100);
  drawChristmasTree(1800, 790, 70);

  //다음으로 넘어가기
  if (keyIsPressed && keyCode === 32) {
    if (startCharacter.x > 1050) {
      stateNow = "home"
    }
  }
}
function messageNotice() {
  if (startCharacter.x > 100 && startCharacter.x < 400) {
    fill(255, 200, 0)
    rect(1400, 80, 400, 100);
    fill(0);
    textSize(25);
    textFont(customFont);
    text("  '친구'님으로부터\n메시지가 도착했습니다!", 1475, 120);
  }

  if (startCharacter.x > 550 && startCharacter.x < 850) {
    fill(255, 200, 0)
    rect(1400, 80, 400, 100);
    fill(0)
    textSize(25);
    textFont(customFont);
    text("  '자기'님으로부터\n메시지가 도착했습니다!", 1475, 120);
  }

  if (startCharacter.x > 1000 && startCharacter.x < 1350) {
    fill(255, 200, 0)
    rect(1400, 80, 400, 100);
    fill(0)
    textSize(25);
    textFont(customFont);
    text("  '엄마'님으로부터\n메시지가 도착했습니다!", 1475, 120);
  }
}
function schoolMessage() {
  fill(255)
  textSize(26)
  ellipse(1360, 270, 50, 50);
  text("친구", 1330, 330)
  rect(1400, 260, 470, 160);
  fill(0);
  text(
    "그럼 내일 저녁에 다같이 보는거다? \n이거 몇 년 만의 모임이야.\n무조건 전원 참석해. \n특히 연애한다고 못 오기만 해봐라!!",
    1415, 300)
}
function boyfriendMessage() {
  noStroke();
  fill(255);
  ellipse(1360, 290 - 25, 50, 50);
  textSize(25);
  text("자기", 1330, 350 - 15);
  rect(1410, 270 - 25, 430, 150);
  fill(0);
  textSize(28);
  text(
    "내일 저녁에 데이트 하자!\n우리 저번부터 보기로 했던\n영화 예매해뒀어!",
    1430, 310 - 15
  );

  fill(0, 0, 100);
  ellipse(1840, 490 - 15, 50, 50);
  rect(1340, 470 - 15, 450, 100);
  fill(255);
  textSize(26);
  text(
    "혹시 점심은 안될까..?\n내가 저녁엔 동창회가 있는데…!",
    1370, 510 - 15
  );

  fill(255);
  ellipse(1360, 640 - 25, 50, 50);
  textSize(25);
  text("자기", 1340, 700 - 25);
  rect(1410, 620 - 15, 450, 100);
  fill(0);
  textSize(26);
  text(
    "내가 지난주에 점심엔 일이 있어서\n안 된다고 했잖아ㅜㅜ",
    1420, 660 - 15
  );

}
function familyMessage() {
  noStroke();
  fill(255);
  ellipse(1350, 290 - 25, 50, 50);
  textSize(25);
  text("엄마", 1320, 350 - 25);
  rect(1390, 270 - 15, 480, 170);
  fill(0);
  textSize(25);
  text(
    "내일은 시간 괜찮니?\n요즘 우리 가족 다 같이 모여서 밥\n한 번 먹을 시간이 없었던 것 같아서…\n아빠 퇴근하시고 저녁에 외식하러 가자.",
    1400, 310 - 15
  );

  fill(0, 0, 100);
  ellipse(1850, 505, 50, 50);
  rect(1380, 485, 420, 60);
  fill(255);
  textSize(26);
  text("나 내일 선약이 있는데…", 1410, 525);

  fill(255);
  ellipse(1350, 605, 50, 50);
  textSize(25);
  text("엄마", 1320, 660);
  rect(1390, 595, 470, 130);
  fill(0);
  textSize(26);
  text(
    "또? 너는 그렇게 친구나 애인\n보러 갈 시간은 있으면서\n우리랑 밥 먹을 시간은 없는거야?",
    1410, 635
  );
}
function drawChristmasTree(x, y, size) {
  // 트리 그리기
  fill(34, 139, 34);
  noStroke();

  triangle(x, y, x + size / 2, y + size / 2, x - size / 2, y + size / 2);
  triangle(x, y + size / 4, x + size / 2, y + size, x - size / 2, y + size);
  triangle(x, y + size / 2, x + size / 2, y + size * 1.5, x - size / 2, y + size * 1.5);

  // 트리 기둥 그리기
  fill(139, 69, 19);
  rect(x - size / 10, y + size * 1.5, size / 5, size / 2); // 직사각형으로 트리 기둥 그리기
}
function snowFlakesAll() {
  //눈 그리는 부분
  for (let i = 0; i < 2; i++) { // 눈송이를 매 프레임마다 5개씩 생성
    let snowflake = new Snowflake(random(2,));
    snowflakes.push(snowflake); // 생성된 눈송이를 배열에 추가
  }

  for (let i = snowflakes.length - 1; i >= 0; i--) {
    snowflakes[i].update(); // 눈송이들을 업데이트
    snowflakes[i].display(); // 눈송이들을 화면에 표시

    if (snowflakes[i].posY > height) {
      snowflakes.splice(i, 1); // 화면 아래로 벗어난 눈송이 제거
    }
  }
}
function drawMoon(x, y, size) {
  // 달 그리기
  let colors = [
    color(255, 200, 0, 150), // 노란색 투명
    color(255, 200, 0, 100), // 노란색 투명
    color(255, 200, 0, 50),  // 노란색 투명
  ];

  let lightSize = size * 1.1; // 빛나는 부분의 크기

  // 그라데이션처럼 겹쳐진 원 그리기
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    ellipse(x, y, lightSize - i * 10); // 겹쳐진 원의 크기를 작게 해서 그라데이션 효과를 표현
  }

  // 달 중앙의 노란색 원
  fill(255, 200, 0);
  ellipse(x, y, size); // 중앙의 노란색 원 그리기
}
function drawSchool() {
  //학교
  fill('#dcdcdc');
  triangle(220, 600, 50, 900, 390, 900)
  rect(355, 550, 30, 350)
  rect(340, 550, 30, 30)
  rect(380, 570, 30, 30)
  rect(380, 620, 30, 30)
  fill(0, 0, 30);
  triangle(220, 650, 90, 900, 350, 900)
}
function drawCinema() {
  //영화관
  //팝콘
  fill(255, 255, 0);
  arc(695, 640, 130, 60, PI, TWO_PI)
  fill(255)
  rect(630, 640, 130, 40)
  fill(200, 0, 0)
  fill(200, 0, 0);
  for (let popcorn = 0; popcorn < 100; popcorn += 40) {
    rect(645 + popcorn, 640, 20, 40);
  }
  fill(200, 0, 0)
  rect(550, 750, 300, 150)
  rect(600, 680, 200, 70)
  fill(255, 255, 0)
  textSize(35)
  textFont(customFont);
  text("스누시네마", 613, 730)
  fill('#B2D7FC')
  rect(580, 800, 40, 40)
  rect(775, 800, 40, 40)
  rect(660, 800, 80, 100)
  fill(255, 255, 0);
  for (let cinema = 0; cinema < 270; cinema += 20) {
    ellipse(570 + cinema, 770, 10, 10);
  }
}
function drawHouse(x, y, width, height) {
  // 집의 본체
  fill('#FFE4B5');
  rect(x - width / 2, y - height / 2, width, height);

  // 지붕
  fill(200, 0, 0);
  triangle(x - width / 2, y - height / 2, x + width / 2, y - height / 2, x, y - height);

  // 문
  fill('brown');
  rect(x - width / 6, 800, 80, 100);

  // 창문
  fill(0, 0, 250); // 파란색
  stroke(255);
  rect(x - width / 3, 740, 30, 30);
  rect(x - width / 5, 740, 30, 30);
  rect(x + 30, 740, 30, 30);
  rect(x + 64, 740, 30, 30);
}
function notice() {
  //안내멘트
  rectMode(CENTER);
  stroke(255);
  strokeWeight(3);
  fill(50, 50, 150);
  rect(330, 120, 60, 45);
  rect(410, 120, 60, 45);
  rectMode(CORNER);
  noStroke();
  textFont(customFont);
  fill(255);
  textSize(40);
  text("<-  ->  키를 눌러 이동하세요!", 310, 130)
  rectMode(CENTER);
  stroke(255);
  strokeWeight(3);
  fill(50, 50, 150);
  rect(570, 192, 100, 45);
  noStroke();
  rectMode(CORNER);
  textFont(customFont);
  fill(255);
  textSize(30);
  text("메시지가 도착하면         키를 누른 채로 읽어주세요!", 250, 200);
  fill(255);
  text("ENTER", 533, 200);
  text("Merry Christmas", 1500, 870)

  if (startCharacter.x > 1050) {
    rectMode(CENTER);
    stroke(255);
    strokeWeight(3);
    fill(50, 50, 150);
    rect(385, 1005, 170, 45);
    rectMode(CORNER);
    noStroke();
    textFont(customFont);
    fill(0);
    textSize(35);
    text(
      "     3개의 메시지를 모두 읽었다면\n           를 눌러 집으로 들어가세요!",
      300,
      970
    );
    fill(255);
    text("spacebar", 317, 1012);
  }
}
function setupHome() {
  homePlayer = new HomePlayer(width / 2, height / 2, 5);
}
function drawHome() {
  background(0, 0, 30);

  //태블릿 화면
  rectMode(CORNER);
  fill(0);
  rect(1280, 0, 640, 1080);
  fill(80);
  rect(1310, 30, 580, 900);
  fill(240);
  rectMode(CENTER);
  rect(1420, 960, 85, 6);
  rect(1420, 1000, 85, 6);
  rect(1420, 1040, 85, 6);
  fill(240);
  push();
  translate(width / 2, height / 2 + 15);
  rotate(radians(28));
  rect(920, -10, 90, 6);
  pop();
  push();
  translate(width / 2, height / 2 + 15);
  rotate(radians(-28));
  rect(503, 793, 90, 6);
  pop();
  fill(0);
  stroke(240);
  strokeWeight(6);
  rect(1600, 1000, 100, 90, 20);
  noStroke();
  rectMode(CORNER);

  //안내멘트 창
  fill(255, 230);
  rect(0, 800, 1280, 380);

  //바닥
  fill(250, 240, 190);
  rect(0, 0, 1280, 800);

  stroke(0);
  strokeWeight(1);
  //침대
  fill(115, 59, 10);
  rect(0, 50, 400, 120);
  rect(0, 770, 400, 30);
  fill(210);
  rect(0, 170, 400, 100);
  fill(194, 100, 17);
  rect(0, 270, 400, 500);
  fill(255);
  rectMode(CENTER);
  rect(200, 180, 220, 100);
  rectMode(CORNER);

  //테이블
  fill(110, 85, 21);
  rect(480, 0, 540, 200);

  //테이블 위 태블릿
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(850, 100, 120, 160);
  fill(80);
  rect(850, 90, 95, 110);
  rectMode(CORNER);
  stroke(0);

  //싱크대
  fill(140);
  rect(1100, 250, 180, 300);
  rect(1100, 550, 180, 160);
  fill(255);
  rect(1100, 710, 180, 90);
  rectMode(CENTER);
  rect(1190, 400, 130, 220);
  rectMode(CORNER);
  fill(20);
  ellipse(1190, 400, 38, 38);
  fill(140);
  ellipse(1245, 500, 35, 35);
  push();
  translate(width / 2, height / 2);
  rotate(radians(45));
  rect(130, -235, 40, 10);
  pop();

  //화살표 키
  if (homeCount == 1 || homeCount == 2) {
    if (frameCount % 60 > 30) {
      push();
      translate(-width / 2 - 20, 600);
      rectMode(CENTER);
      stroke(255);
      strokeWeight(3);
      fill(50, 50, 150);
      rect(1672, 143, 60, 45);
      rect(1742, 143, 60, 45);
      rect(1812, 143, 60, 45);
      rect(1742, 88, 60, 45);
      rectMode(CORNER);
      noStroke();
      textFont(customFont);
      textSize(40);
      textAlign(CENTER, CENTER);
      fill(255);
      text("<-", width - 250, 140);
      text("->", width - 105, 140);
      push();
      translate(width / 2, height / 2);
      rotate(radians(90));
      text("<", -460, -785);
      text("-", -445, -785);
      text(">", -388, -785);
      text("-", -402, -785);
      pop();
      pop();
    } else {
      push();
      translate(-width / 2 - 20, 600);
      rectMode(CENTER);
      stroke(255);
      strokeWeight(3);
      fill(50, 50, 150, 50);
      rect(1672, 143, 60, 45);
      rect(1742, 143, 60, 45);
      rect(1812, 143, 60, 45);
      rect(1742, 88, 60, 45);
      rectMode(CORNER);
      noStroke();
      textFont(customFont);
      textSize(40);
      textAlign(CENTER, CENTER);
      fill(255);
      text("<-", width - 250, 140);
      text("->", width - 105, 140);
      push();
      translate(width / 2, height / 2);
      rotate(radians(90));
      text("<", -460, -785);
      text("-", -445, -785);
      text(">", -388, -785);
      text("-", -402, -785);
      pop();
      pop();
    }
  } else if (homeCount > 2) {
    push();
    translate(-width / 2 - 20, 600);
    rectMode(CENTER);
    stroke(255);
    strokeWeight(3);
    fill(50, 50, 150);
    rect(1672, 143, 60, 45);
    rect(1742, 143, 60, 45);
    rect(1812, 143, 60, 45);
    rect(1742, 88, 60, 45);
    rectMode(CORNER);
    noStroke();
    textFont(customFont);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text("<-", width - 250, 140);
    text("->", width - 105, 140);
    push();
    translate(width / 2, height / 2);
    rotate(radians(90));
    text("<", -460, -785);
    text("-", -445, -785);
    text(">", -388, -785);
    text("-", -402, -785);
    pop();
    pop();
  }

  //안내창 멘트 0
  if (homeCount == 0) {
    fill(0);
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(
      "공강도 없어서 주말이 유일한 휴일인데... \n 이렇게 내 시간과 노력을 써서 관계를 이어가려고 하면 뭐해? \n 부모님도, 애인도, 친구들도... \n 누구 하나 마음 편한 관계가 없는걸.",
      640,
      940
    );
    rectMode(CENTER);
    fill(50, 50, 150);
    stroke(0);
    rect(1170, 1022, 100, 40);
    noStroke();
    fill(255);
    text("ENTER", 1170, 1020);
    fill(0);
    if (frameCount % 60 < 30) {
      text("▶", 1095, 1018);
    }
  }

  // 안내창 멘트 1
  if (homeCount == 1) {
    fill(0);
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("세상에 날 지지해주고 사랑해주는 관계가 있기는 한 걸까?", 640, 940);
  }

  // 안내창 멘트 2
  if (homeCount == 2) {
    fill(0);
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("세상에 날 지지해주고 사랑해주는 관계가 있기는 한 걸까?", 640, 940);
    if (
      760 < homePlayer.x &&
      homePlayer.x < 940 &&
      200 < homePlayer.y &&
      homePlayer.y < 250
    ) {
      fill(255);
      text("Press  ENTER", 660, 100);
      fill(240);
      rect(1310, 30, 580, 900);
      rectMode(CENTER);
      rect(850, 90, 95, 110);
    }
  }

  //안내창 멘트 3
  if (homeCount == 3) {
    rectMode(CORNER);
    fill(240);
    rect(1310, 30, 580, 900);
    image(thumbNail, 1340, 60, 120, 120);
    fill(0);
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(
      "어, 이게 뭐지? 태블릿에 못 보던 앱이 있네. \n 뭐가 새로 업데이트됐나? 어디 보자... \n 어라? 내가 이런 걸 깔았었나? 무슨 앱인지 한번 볼까?",
      640,
      940
    );
    rectMode(CENTER);
    fill(50, 50, 150);
    stroke(0);
    rect(1170, 1022, 100, 40);
    noStroke();
    fill(255);
    text("ENTER", 1170, 1020);
    fill(0);
    if (frameCount % 60 < 30) {
      text("▶", 1095, 1018);
    }
  }

  //안내창 멘트 4
  if (homeCount == 4) {
    appOpen();
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(0);
    text("엥...?", 640, 940);
    rectMode(CENTER);
    fill(50, 50, 150);
    stroke(0);
    rect(1170, 1022, 100, 40);
    noStroke();
    fill(255);
    text("ENTER", 1170, 1020);
    fill(0);
    if (frameCount % 60 < 30) {
      text("▶", 1095, 1018);
    }
  }

  //안내창 멘트 5
  if (homeCount >= 5) {
    appOpen();
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(0);
    text(
      "뭐야, 누가 내 생각을 읽었나? \n 이상하기는 하지만, 뭐... \n 기분전환이나 할 겸 한번 플레이해봐야겠다!",
      640,
      940
    );
  }

  //플레이어 생성
  fill(255);
  homePlayer.update();
  homePlayer.display();
}
function appOpen() {
  image(thumbNail, 1310, 30, 580, 480);
  fill(245, 230, 230);
  rectMode(CORNER);
  rect(1310, 510, 580, 420);
  textAlign(CENTER, CENTER);
  textFont(customFont);
  textSize(25);
  fill(0);
  noStroke();
  text(
    "세상 혼자 사는 것 같으시다고요? \n 사랑이 없다고 느끼신다고요? \n \n 그런 당신을 위해 준비했습니다! \n \n 당신의 삶 속에서 확보한 \n 7가지 경험 데이터를 기반으로 \n 제작된 게임들을 만나보세요!",
    1600,
    670
  );
  if (homeCount == 4) {
    stroke(0);
    fill(242, 172, 186);
    rectMode(CENTER);
    rect(1600, 860, 200, 60, 10);
    noStroke();
    textSize(35);
    fill(255);
    text("spacebar", 1600, 855);
  } else if (homeCount > 4) {
    if (frameCount % 60 > 30) {
      stroke(0);
      fill(242, 172, 186);
      rectMode(CENTER);
      rect(1600, 860, 200, 60, 10);
      noStroke();
      textSize(35);
      fill(255);
      text("spacebar", 1600, 855);
    }
  }
}

function drawArrow() {
  push();
  translate(-1500, -30);
  rectMode(CENTER);
  stroke(255);
  strokeWeight(1);
  fill(50, 50, 150);
  rect(1672, 143, 60, 45);
  rect(1742, 143, 60, 45);
  rect(1812, 143, 60, 45);
  rect(1742, 88, 60, 45);
  rectMode(CORNER);
  noStroke();
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text("<-", width - 250, 140);
  text("->", width - 105, 140);
  push();
  translate(width / 2, height / 2);
  rotate(radians(90));
  text("<", -460, -785);
  text("-", -445, -785);
  text(">", -388, -785);
  text("-", -402, -785);
  pop();
  pop();
}
function gift() {
  fill(255);
  textFont(customFont);
  textSize(30);
  textAlign(RIGHT);
  text('미니게임 하다가 힘들면 SKIP 할래 : P, 게임을 처음부터 다시 할래 : F5', 1890, 1035);
}
function light(x, y, r, g, b) {
  if (frameCount % 60 < 30) {
    fill(r, g, b, 200);
  } else {
    noFill();
  }
  noStroke();
  ellipse(x, y, 58, 35);
}
function setupMain1() {
  player = new Player(1020, 395, 5);
}
function drawMain1() {
  background(main1BG); // Display the background image
  drawArrow();
  gift();
  light(431, 246, 255, 78, 78);
  fill(255);
  player.update();
  player.display();
  checkInteraction1();
  rectMode(CORNER);
}
function checkInteraction1() {
  // Check if player is within the ellipse
  let ellipseX = 431, ellipseY = 246, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); // 네모
    stroke(255);
    rectMode(CENTER);
    rect(431, 206, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textAlign(CENTER);
    textSize(30);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini1"; // Change the game state to the mini-game
    }
  }
}

function setupMini1() {
  student = new FirstPlayer(1000, 900, 5)
  security1 = new Security(0, height / 2 + 90, 10)
  security2 = new Security(width, height / 2 - 70, 10)

  // Create an instance of the Teacher class
  teacher[0] = new Teacher(800, 900, 5);
  teacher[1] = new Teacher(120, 710, 5);
  teacher[2] = new Teacher(1200, 240, 5);
}
function drawMini1() {
  background(255);
  image(bg, 0, 0, width, height);
  // 수위1,2 좌우이동
  if (goRight) {
    security1.x += 8
  } else {
    security1.x -= 8
  }
  if (goRight && security1.x > width || !goRight && security1.x < 0) {
    goRight = !goRight;
  }

  if (goLeft) {
    security2.x -= 8
  } else {
    security2.x += 8
  }
  if (goLeft && security2.x < 0 || !goLeft && security2.x > width) {
    goLeft = !goLeft;
  }


  // 충돌감지
  if (checkCollision(student, security) || checkCollisionWithLight(student, teacher)) {
    resetGame();
  }

  // 클리어조건
  textFont(customFont)

  rectMode(CENTER);
  stroke(255);
  strokeWeight(1);
  fill(50, 50, 150);
  rect(1672, 143, 60, 45);
  rect(1742, 143, 60, 45);
  rect(1812, 143, 60, 45);
  rect(1742, 88, 60, 45);
  rectMode(CORNER);
  noStroke();
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text("<-", width - 250, 140);
  text("->", width - 105, 140);
  push();
  translate(width / 2, height / 2);
  rotate(radians(90));
  text("<", -460, -785);
  text("-", -445, -785);
  text(">", -388, -785);
  text("-", -402, -785);
  pop();

  if (getPC) {
    fill(50, 50, 150);
    stroke(255);
    strokeWeight(1);
    rectMode(CENTER);
    rect(860, 123, 140, 40);
    rectMode(CORNER);

    noStroke();
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text(
      "무사히 야자를 째고 PC방에 도착! \n spacebar  를 눌러보자.",
      width / 2,
      100
    );
  } else if (rearDoor) {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text('뒷문은 잠겨있는 것 같다.', width / 2, 100);
  } else if (playGround) {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text('교실은 나왔는데.. 수위아저씨를 피해야겠군!', width / 2, 100);
  } else if (outside) {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text('여기까지 선생님이 있네..', width / 2, 100);
  } else {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text('선생님과 수위 아저씨를 피해\n친구와 야자를 째고 PC방에 가 봅시다!', width / 2, 100);
  }

  // 상황별 정의   
  // rearDoor
  if (
    student.x >= 1600 &&
    student.y >= 700 && student.y <= 730) {
    rearDoor = true;
  } else {
    rearDoor = false;
  }

  // playGround
  if (
    student.y <= 690 && student.y >= 370) {
    playGround = true;
  } else {
    playGround = false;
  }

  // outside
  if (
    student.x > 400 && student.y < 370) {
    outside = true;
  } else {
    outside = false;
  }

  // getPC
  if (
    student.x <= 400 &&
    student.y <= 400
  ) {
    getPC = true;
  } else {
    getPC = false; // Reset if not in the specified range
  }


  // Steel wall
  noStroke();
  fill(220);
  rect(0, height / 4, width, 20);
  rect(0, height / 4 + 150, width, 20);
  for (let i = 0; i <= width * 0.6 / 10 - 1; i++) {
    rect(i * width * 0.6 / 10, height / 4, 10, 170);
    for (let x = i * width * 0.6 / 10; x < (i + 1) * width * 0.6 / 10; x += 30) {
      for (let y = height / 4; y < height / 4 + 150; y += 30) {
        if (i < 10 || i > 12) {
          // 대각선 그리기
          stroke(220)
          line(x, y, x + 30, y + 30);
          line(x + 30, y, x, y + 30);
        }
      }
    }
  }

  // School  
  stroke(0)
  line(300, height * 2 / 3, 1600, height * 2 / 3)
  let brown = color(198, 138, 18)
  fill(brown)
  rect(0, height * 2 / 3, 300, 10);
  rect(1600, height * 2 / 3, 300, 10)

  // blackboard 
  fill(74, 101, 90)
  rect(20, height * 2 / 3 + 100, 150, 300)
  push();
  translate(50, height * 2 / 3 + 180); // 중심으로 이동
  rotate(radians(270));

  textSize(25);
  fill(255);
  text("떠든사람", 0, 0);

  pop();
  // PC방
  noStroke();
  fill(113, 199, 236)
  rect(100, 80, 200, 150);
  textSize(90);
  fill(255);
  text("PC방", 200, 150);

  // 캐릭터들
  fill(255)
  student.update();
  student.display1();
  student.display2();
  fill(100);
  stroke(0);
  security1.display1();
  security2.display1();
  fill(255, 0, 0)
  for (let i = 0; i < teacher.length; i++) {
    teacher[i].update();
    teacher[i].display();
  }

  if (getPC) {
    if (gameState === "playing" && keyIsPressed && keyCode === 32) {

      // 첫 번째 마우스 클릭 시
      gameState = "messageShown"; // 게임 상태를 "messageShown"으로 변경
      // noLoop(); // draw 함수 반복 중지
    } else if (gameState === "messageShown") {
      // 두 번째 마우스 클릭 시
      // 원하는 동작 수행
      image(mini1Ending, 0, 0, 1920, 1080);
      textSize(40);
      textAlign(CENTER, CENTER);
      fill(0);
      text("그래, 우리 이때 참 재미있었지! \n 생각해보면 지금도 변한 게 없는 친구들인데... \n 매일 보다가 점점 모이는 날이 적어지니까 괜히 서운한 마음이 들었나봐.", width / 2, 150);
      if (frameCount % 60 > 30) {
        fill(50, 50, 150);
        stroke(0);
        rect(1760, 25, 120, 55);
        fill(255);
        noStroke();
        text("ENTER", 1820, 50);
      }
      if (keyIsPressed && keyCode === 13) {
        stateNow = "main2"; // Change the game state to the mini-game
      }
    }
  }
}
function checkCollision(student, security) {
  // Check if the student is within a certain range of the security
  let distance1 = dist(student.x, student.y, security1.x, security1.y);
  let distance2 = dist(student.x + 70, student.y, security1.x, security1.y);
  let distance3 = dist(student.x, student.y, security2.x, security2.y);
  let distance4 = dist(student.x + 70, student.y, security2.x, security2.y);
  let collisionThreshold = 50; // Adjust this value as needed

  // Check collision with circular area of security
  if (distance1 < collisionThreshold || distance2 < collisionThreshold || distance3 < collisionThreshold || distance4 < collisionThreshold) {
    return true;
  }
}
function checkCollisionWithLight(student, teachers) {
  // Check if the student is within the light cone of any teacher
  for (let i = 0; i < teachers.length; i++) {
    let dx1 = student.x - teachers[i].x;
    let dy1 = student.y - teachers[i].y;
    let angle1 = atan2(dy1, dx1);

    let dx2 = (student.x + 70) - teachers[i].x;
    let dy2 = student.y - teachers[i].y;
    let angle2 = atan2(dy2, dx2);

    // Assume that lightAngle is the current angle of the teacher's light
    let lightConeAngle = PI / 4; // Adjust this value based on your light cone angle

    // Calculate the distance between student and teacher
    let distance1 = dist(student.x, student.y, teachers[i].x, teachers[i].y);
    let distance2 = dist(student.x + 70, student.y, teachers[i].x, teachers[i].y);

    // Check if either student or student2 is within the light cone
    if (
      (abs(atan2(sin(angle1 - teachers[i].lightAngle), cos(angle1 - teachers[i].lightAngle))) <
        lightConeAngle / 2 &&
        distance1 < teachers[i].lightRadius) ||
      (abs(atan2(sin(angle2 - teachers[i].lightAngle), cos(angle2 - teachers[i].lightAngle))) <
        lightConeAngle / 2 &&
        distance2 < teachers[i].lightRadius)
    ) {
      return true; // If any teacher's light cone is intersected, return true
    }
  }
}
function resetGame() {
  // Game reset logic
  student = new FirstPlayer(1000, 1000, 5);
  security = new Security(0, height / 2, 10);
}


function drawMain2() {
  fill(255);
  background(main2BG); // Display the background image
  drawArrow();
  gift();
  light(562, 499, 255, 142, 85);
  fill(255);
  player.update();
  player.display();
  checkInteraction2();
}
function checkInteraction2() {
  // Check if player is within the ellipse
  let ellipseX = 560, ellipseY = 498, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    rectMode(CENTER);
    rect(560, 458, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini2"; // Change the game state to the mini-game
    }
  }
}

function setupMini2() {
  // L
  flower1[0] = new Flower1(1610, 420, 0);
  flower0[0] = new Flower0(1800, 550, 0);

  // O
  flower0[1] = new Flower0(970, 550, 0);
  flower0[2] = new Flower0(1350, 550, 0);
  flower1[1] = new Flower1(1150, 380, 0);
  flower1[2] = new Flower1(1150, 770, 0);

  // V
  flower0[4] = new Flower0(800, 550, -QUARTER_PI * 0.5);
  flower0[5] = new Flower0(630, 550, QUARTER_PI * 4.6);

  // E
  flower0[3] = new Flower0(410, 550, 0);
  flower1[3] = new Flower1(220, 420, 0);
  flower1[4] = new Flower1(220, 580, 0);
  flower1[5] = new Flower1(220, 740, 0);

  resetButton = createButton("Reset");
  resetButton.parent('p5-doms');

  resetButton.position(10, height - 150);
  resetButton.mousePressed(resetGame2);
  // 버튼의 크기 조정
  resetButton.style("font-size", "50px"); // 원하는 크기로 변경
  resetButton.style("font-family", "customFont"); // 원하는 크기로 변경
  resetButton.style("width", "200px"); // 원하는 크기로 변경
  resetButton.style("height", "100px"); // 원하는 크기로 변경
  textFont(customFont);
}
function drawMini2() {
  background(255);
  image(bg2, 0, 0, width, height)

  for (let i = 0; i < flower0.length; i++) {
    flower0[i].draw();
    flower0[i].drag();
    flower0[i].update();
  }

  for (let i = 0; i < flower1.length; i++) {
    flower1[i].draw();
    flower1[i].drag();
    flower1[i].update();
  }

  // Display the message if creativity is gained
  if (gainedCreativity) {
    resetButton.hide();
    image(mini2Ending, 0, 0, 1920, 1080);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text("그 사람에게 내 마음을 전했다!", width / 2, 100);

    fill(255);
    stroke(0);
    strokeWeight(3);
    ellipse(650, 290, 320, 180);
    ellipse(750, 400, 30, 30);
    ellipse(780, 440, 20, 20);
    fill(0);
    noStroke();
    textSize(30);
    text("이 사람... \n 이런 타입이었구나?", 650, 280);
    textSize(40);
    fill(255);

    if (keyIsPressed && keyCode === 13) {
      stateNow = "main3";
    }

    if (frameCount % 60 > 30) {
      fill(50, 50, 150);
      stroke(255);
      rect(1760, 25, 120, 55);
      fill(255);
      noStroke();
      textSize(40);
      text("ENTER", 1820, 50);
    }
  } else {
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    let question =
      "오늘은 그 사람에게 고백하는 날! \n 긴장 탓인지 그 사람이 반대편에 앉아있다는 사실을 생각 못했네. 이러면 LOVE가 거꾸로 보일텐데... \n 빠르게 두 송이만 움직이면 발칙한 고백으로 바꿀 수 있지 않을까?";
    let hint =
      "힌트: 1) 영어를 한글로 읽은 결과 2) 세 글자 3) 그 사람의 시점을 기준으로 4)  "
    let condition =
      "<조작법> \n 장미 줄기의 중심을 클릭하면 회전하고, 드래그하면 이동한다. 꽃봉오리는 왼쪽 or 위쪽으로 와야 한다. \n (정답이라고 생각하는데 클리어되지 않을 시, 옮긴 꽃의 위치를 미세 조정해보자!)";
    text(question, width / 2, 110);
    textSize(35)
    text(hint, width / 2, 270)
    textSize(30);
    text(condition, width / 2, 980);

    image(kiss, width / 2 + 650, 200, 100, 100)
  }
}
function resetGame2() {
  // Reset the game state
  gainedCreativity = false;

  for (let i = 0; i < flower0.length; i++) {
    flower0[i].resetPosition();
  }

  for (let i = 0; i < flower1.length; i++) {
    flower1[i].resetPosition();
  }
}

function drawMain3() {
  textAlign(CORNER);
  fill(255);
  background(main3BG); // Display the background image
  drawArrow();
  gift();
  light(538, 939, 255, 217, 75);
  fill(255);
  player.update();
  player.display();
  checkInteraction3();
}
function checkInteraction3() {
  // Check if player is within the ellipse
  let ellipseX = 538, ellipseY = 939, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    rectMode(CENTER);
    rect(538, 899, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini3"; // Change the game state to the mini-game
    }
  }
}

function setupMini3() {
  //음악 버튼
  playButton3 = createButton('Music Start');
  playButton3.parent('p5-doms');
  playButton3.style('font-size', '30px');
  playButton3.style('font-family', 'neodgm')
  playButton3.style('width', '200px'); // 버튼의 너비 설정
  playButton3.style('height', '80px');
  playButton3.position(65, 700);
  playButton3.mousePressed(playMusic);
  playButton3.hide();
}
function drawMini3() {
  textAlign(CORNER);
  noStroke();
  background('#EDD5C7')
  fill('#964B00')
  rect(300, 0, 1620, 1080)

  textSize(50);
  textFont(customFont);
  fill('#964B00')
  textSize(40)
  text("우리 가족의\n  변화를\n 찾아보자!", 45, 200);
  fill(0);
  textSize(20);
  text("  2023 가족사진에서\n다른 부분을 클릭해주세요!", 30, 350)
  image(loveImage1, 320, 30);
  image(loveImage2, 1120, 30);
  fill(255)
  textSize(30);
  text('2010', 700, 1065)
  text('2023', 1500, 1065)

  // 미리 정의한 차이에 동그라미 그리기
  for (let i = 0; i < clickedLocations.length; i++) {
    let diff = clickedLocations[i];
    strokeWeight(10);
    stroke(255, 0, 0);
    noFill()
    ellipseMode(CORNER)
    ellipse(diff.x, diff.y, diff.width, diff.height);
    // ellipse(diff.x, diff.y, 100,100);
    strokeWeight(10);
    ellipseMode(CENTER);
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

    if (keyIsPressed && keyCode === 13) {
      stateNow = "main4";
    }

    if (frameCount % 60 > 30) {
      fill(50, 50, 150);
      stroke(255);
      strokeWeight(1);
      rect(1760, 25, 120, 55);
      fill(255);
      noStroke();
      textSize(40);
      textAlign(CENTER);
      text("ENTER", 1820, 50);
    }
    textAlign(LEFT);
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
function playMusic() {
  if (psyFather.isPlaying()) {
    psyFather.stop(); // 현재 재생 중인 경우 멈춤
  } else {
    psyFather.play(); // 재생
  }
}

function drawMain4() {
  psyFather.stop();
  fill(255);
  background(main4BG); // Display the background image
  drawArrow();
  gift();
  light(726, 335, 0, 150, 4);
  fill(255);
  player.update();
  player.display();
  checkInteraction4();
}
function checkInteraction4() {
  // Check if player is within the ellipse
  let ellipseX = 726, ellipseY = 335, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    rectMode(CENTER);
    rect(726, 295, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini4"; // Change the game state to the mini-game
    }
  }
}

function setupMini4() {
  for (let i = 0; i < 7; i++) {
    let zone = {
      x: random(500, width - 500),
      y: random(100, height - 300),
      w: 150,
      h: 90,
      t: 255,
      r: int(random(4))
    };
    zones.push(zone);
    //console.log(zones[i].t);
  }
  for (let i = 0; i < 15; i++) {
    let goodzones = {
      x: random(500, width - 550),
      y: random(100, height - 300),
      w: 150,
      h: 90,
      t: 255,
      r: int(random(4))
    };
    goodzone.push(goodzones);
  }
}
function drawMini4() {
  noCursor();
  image(wall, 0, 0);
  fill(0);
  textFont(customFont);
  textSize(50);
  textAlign(CENTER);
  text("이건 내 다이어리...", width / 2, 50);
  text("이제 보니 참 부정적이네... 다 문질러버리자!", width / 2, height / 1.2 + 50);
  textSize(27);
  text(">>마우스로 부정적인 마음을 모두 *깔끔하게* 지우고 나를 사랑해보자<<", width / 2, height / 1.2 + 110);

  // 벽이 부서지지 않았을 때, 크랙 그리기
  if (!broken) {
    noStroke();
    fill(100, 0);
    rect(crackX, crackY, crackSize);
    for (let i = 0; i < zones.length; i++) {
      let zone = zones[i];
      fill(255, 0);
      rect(zone.x, zone.y, zone.w, zone.h);
      textAlign(LEFT, TOP);
      fill(80 + 15 * zone.r, 100 - 5 * zone.r, 150 - 10 * zone.r, zone.t);
      textSize(40);
      text(badword[zone.r], zone.x + 15, zone.y + 25);
    }
    for (let i = 0; i < goodzone.length; i++) {
      let goodzones = goodzone[i];
      fill(0, 0);
      rect(goodzones.x, goodzones.y, goodzones.w, goodzones.h);
      textAlign(LEFT, TOP);
      fill(227 - 10 * goodzones.r, 100 + 10 * goodzones.r, 100 - 20 * goodzones.r, goodzones.t);
      textSize(40);
      text(goodword[goodzones.r], goodzones.x + 15, goodzones.y + 25);
    }

    if (badwordtran > 4) { // 절반 정도 도달하면 거의 부서졌다는 메시지 출력
      fill(255, 206, 232);
      rect(40, 70, 650, 50, 15);
      triangle(300, 120, 400, 120, 470, 150);
      fill(173, 7, 107);
      textFont(customFont);
      textSize(30);
      textAlign(CENTER);
      text("거의 다 지운 것 같다. 조금만 더 지워보자!", width / 6 + 40, 80);
    }
  } else {  // 벽이 부서졌을 때
    background(130, 199, 299);
    image(endingcrack, 0, 0, width, height);
    // 엔딩 후 메시지박스
    fill(111, 55, 0);
    textFont(customFont);
    textSize(80);
    textAlign(CENTER);
    text("다 지웠다!", width / 2, height / 2 - 105);
    textSize(40);
    text("내가 이렇게나 부정적이었구나.. \n 긍정적으로 살아야겠다. \n 그게 나를 더 사랑해주는 길이니까.", width / 2, height / 2 + 10);

    if (keyIsPressed && keyCode === 13) {
      stateNow = "main5";
    }

    if (frameCount % 60 > 30) {
      fill(50, 50, 150);
      stroke(255);
      strokeWeight(1);
      rect(1760, 25, 120, 55);
      fill(255);
      noStroke();
      textSize(40);
      textAlign(CENTER, CENTER);
      text("ENTER", 1820, 50);
    }
  }

  // 벽 부수기 시도
  if (mouseIsPressed && !broken) {
    // 클릭한 위치가 특정 구역 내에 있는지 확인
    for (let i = 0; i < zones.length; i++) {
      let zone = zones[i];
      if (mouseX > zone.x && mouseX < zone.x + zone.w && mouseY > zone.y && mouseY < zone.y + zone.h) {
        let distance = dist(mouseX, mouseY, zone.x + zone.w / 2, zone.y + zone.h / 2); // 벽 중심으로부터의 거리 계산
        let transparency = map(distance, 0, 100, 255, 0); // 투명도 계산

        // 벽을 부수는 흔적 그리기
        fill(255, 0, 0, transparency);
        stroke(252, 148, 149, transparency);
        strokeWeight(8);
        line(mouseX, mouseY, mouseX - 15, mouseY - 20);
        line(mouseX - 30, mouseY - 20, mouseX - 15, mouseY - 20);
        line(mouseX - 5, mouseY + 10, mouseX - 30, mouseY + 10);
        line(mouseX - 40, mouseY + 15, mouseX - 30, mouseY + 10);
        line(mouseX + 5, mouseY + 20, mouseX + 15, mouseY + 30);
        line(mouseX + 5, mouseY + 40, mouseX + 15, mouseY + 30);
        line(mouseX + 5, mouseY + 40, mouseX + 15, mouseY + 50);
        noStroke();
        zone.t -= 5;

        if (zones[i].t == 0) {
          badwordtran += 1;
        }

        // 부순 효과
        myStrength += transparency;

        if (badwordtran == 7) { // 벽이 깨지는 조건
          broken = true;
        }
      }
    }
  }
  // 마우스 커서 대신에 지우개 따라다니기
  image(hammer, mouseX + 10, mouseY - 100);
}

function drawMain5() {
  fill(255);
  background(main5BG); // Display the background image
  drawArrow();
  gift();
  light(1175, 221, 82, 71, 255);
  fill(255);
  player.update();
  player.display();
  checkInteraction5();
}
function checkInteraction5() {
  // Check if player is within the ellipse
  let ellipseX = 1175, ellipseY = 221, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    rectMode(CENTER);
    rect(1175, 181, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini5"; // Change the game state to the mini-game
    }
  }
}

function setupMini5() {
  catcher = new Catcher(70);
  catcher.setLocation(width / 2, height - 70);
  noCursor();
  noStroke();
  hangeul = ["친", "구", "야", "고", "마", "워", "사", "랑", "해", "든", "오", "래", "보", "자",];
}
function drawMini5() {
  image(love, 0, 0);
  catcher.display();

  if (frameCount % 50 == 0) {
    drops.push(new Hangeul(int(random(0, 13))));
  }

  for (i = drops.length - 1; i >= 0; i--) {
    drops[i].display();
    drops[i].fall();
    if (drops[i].offScreen()) {
      drops.splice(i, 1);
    }

    if (catcher.intersect(drops[i])) {
      drops[i].caught();
      if (drops[i].isThankYou()) {
        minus = false;
        plus = true;
      } else {
        plus = false;
        minus = true;
      }

      if (drops[i].index === 0) {
        chin = true;
      }

      if (drops[i].index === 1) {
        gu = true;
      }

      if (drops[i].index === 2) {
        ya = true;
      }

      if (drops[i].index === 3) {
        go = true;
      }

      if (drops[i].index === 4) {
        ma = true;
      }

      if (drops[i].index === 5) {
        wo = true;
      }
    }
  }

  if (chin && gu && ya && go && ma && wo) {
    finalMessage = true;

    if (finalMessage) {
      plus = false;
      minus = false;
      instruction = false;
      rectMode(CENTER);
      fill(0, 70);
      rect(width / 2, height / 2, 1920, 240);
      textSize(35);
      fill(0);
      text("늘 내 편을 들어주는 네가 있어서", width / 2, height / 2 - 60);
      text("늘 고맙고 든든해.", width / 2, height / 2);
      text("앞으로도 우리 우정 영원하자", width / 2, height / 2 + 60);

      if (keyIsPressed && keyCode === 13) {
        stateNow = "main6";
      }

      if (frameCount % 60 > 30) {
        rectMode(CORNER);
        fill(50, 50, 150);
        stroke(255);
        strokeWeight(1);
        rect(1760, 25, 120, 55);
        fill(255);
        noStroke();
        textSize(40);
        textAlign(CENTER);
        text("ENTER", 1820, 50);
        rectMode(CENTER);
      }
    }
  } else {
    if (instruction) {
      rectMode(CENTER);
      fill(255, 150);
      rect(width / 2, 120, 1920, 240);
      fill(0);
      textFont(customFont);
      textAlign(CENTER, CENTER);
      textSize(35);
      text("평소에 잘 하지 않던 말을 하려니", width / 2, 60);
      text("낯간지러워서 입이 잘 떨어지지 않는다.", width / 2, 120);
      text(
        "어떻게 하면 친구에게 고마운 마음을 전할 수 있을까?",
        width / 2,
        180
      );
    }

    if (plus) {
      textSize(80);
      textFont(customFont);
      textAlign(CENTER, CENTER);
      fill(30, 80, 100);
      text("조금만 더 용기를 내보자!", width / 2, height / 2);
    }

    if (minus) {
      textSize(80);
      textFont(customFont);
      textAlign(CENTER, CENTER);
      fill(30, 80, 100);
      text("내가 하고 싶은 말은 이게 아니야", width / 2, height / 2);
    }
  }

  textSize(60);
  fill(255, 100, 145);

  if (chin) {
    text("친", width - 415, 120);
  }

  if (gu) {
    text("구", width - 355, 120);
  }

  if (ya) {
    text("야", width - 295, 120);
  }

  if (go) {
    text("고", width - 205, 120);
  }

  if (ma) {
    text("마", width - 145, 120);
  }

  if (wo) {
    text("워", width - 85, 120);
  }

  text("ㅡ", width - 415, 140);
  text("ㅡ", width - 355, 140);
  text("ㅡ", width - 295, 140);
  text("ㅡ", width - 205, 140);
  text("ㅡ", width - 145, 140);
  text("ㅡ", width - 85, 140);
  textSize(25);
  text("(순서대로 쓰지 않아도 상관없어)", width - 250, 200);

  push();
  translate(-1500, 0);
  rectMode(CENTER);
  stroke(255);
  strokeWeight(3);
  fill(50, 50, 150);
  rect(1672, 143, 60, 45);
  rect(1742, 143, 60, 45);
  rect(1812, 143, 60, 45);
  rect(1742, 88, 60, 45);
  rectMode(CORNER);
  noStroke();
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text("<-", width - 250, 140);
  text("->", width - 105, 140);
  push();
  translate(width / 2, height / 2);
  rotate(radians(90));
  text("<", -460, -785);
  text("-", -445, -785);
  text(">", -388, -785);
  text("-", -402, -785);
  pop();
  pop();
}

function drawMain6() {
  fill(255);
  background(main6BG); // Display the background image
  drawArrow();
  gift();
  light(1052, 542, 60, 0, 179);
  fill(255);
  player.update();
  player.display();
  checkInteraction6();
}
function checkInteraction6() {
  // Check if player is within the ellipse
  let ellipseX = 1052, ellipseY = 542, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    rectMode(CENTER);
    rect(1052, 502, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textAlign(CENTER);
    textSize(30);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini6"; // Change the game state to the mini-game
    }
  }
}

function setupMini6() {
  playerX = width / 2;
  playerY = height - 20;
  textFont(customFont);

  // 처음에 목표물을 생성합니다.
  for (let i = 0; i < 10; i++) {
    let target = new Target(random(width), random(0, 20), bad[int(random(3))]);
    targets.push(target);
  }
}
function drawMini6() {
  image(bg6, 0, 0);
  // 플레이어 그리기
  rectMode(CENTER);
  fill(50, 50, 150);
  stroke(255);
  strokeWeight(1);
  rect(628, 250, 60, 40);
  rect(700, 250, 60, 40);
  rect(1008, 250, 140, 40);
  noStroke();
  textAlign(CENTER);
  fill(0);
  textSize(40);
  text("Mission: 삐진 애인을 달래자!", width / 2, 100);
  textSize(30);
  fill(0, 120);
  text("(얼마나 달래야 할까...? 일단 마구 달래보자!)", width / 2, 150);
  textSize(30);
  fill(0);
  text("<조작법> \n           : 좌우 이동,            : 화해 총알 발사!", width / 2, 200);
  fill(255);
  text("<-   ->", 665, 237);
  text("spacebar", 1010, 237);
  image(gun, playerX, playerY - 100);
  mini = new Player(playerX, playerY - 55, 10);
  mini.display();

  // 총알 이동 및 목표물과 충돌 확인
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].show();

    for (let j = targets.length - 1; j >= 0; j--) {
      if (bullets[i].hits(targets[j])) {
        targets.splice(j, 1); // 맞은 목표물 제거
        bullets.splice(i, 1); // 총알 제거
        score++; // 점수 증가
        break; // 내부 루프 종료
      }
    }
  }

  if (score == 10) {
    gameOver = true; // 스코어가 10이면 게임 종료
  }

  // 목표물 이동 및 그리기
  for (let target of targets) {
    target.move();
    target.show();
  }

  // 게임 오버 표시
  if (gameOver) {
    image(end, 0, 0);
    textSize(60);
    textFont(customFont);
    fill(0);
    textAlign(CENTER, CENTER);
    stroke(255);
    strokeWeight(10);
    text('애인(이)가 삐짐 상태를 해지했습니다!', width / 2, height / 2);
    noStroke();
    endtran = 0;

    if (keyIsPressed && keyCode === 13) {
      stateNow = "main7";
    }

    if (frameCount % 60 > 30) {
      rectMode(CORNER);
      fill(50, 50, 150);
      stroke(255);
      strokeWeight(1);
      rect(1760, 25, 120, 55);
      fill(255);
      noStroke();
      textSize(40);
      textAlign(CENTER);
      text("ENTER", 1820, 50);
    }
  }

  // 플레이어 양옆으로 이동
  if (keyIsDown(LEFT_ARROW) && playerX > 10) {
    playerX -= 3;
  } else if (keyIsDown(RIGHT_ARROW) && playerX < width - 50) {
    playerX += 3;
  }

  // 점수 표시
  textSize(30);
  fill(0, endtran);
  textAlign(LEFT, TOP);
  text('Score: ' + score, 10, 10);
}

function drawMain7() {
  fill(255);
  background(main7BG); // Display the background image
  drawArrow();
  gift();
  light(1392, 309, 166, 3, 255);
  fill(255);
  player.update();
  player.display();
  checkInteraction7();
}
function checkInteraction7() {
  // Check if player is within the ellipse
  let ellipseX = 1392, ellipseY = 309, ellipseW = 100, ellipseH = 100;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1392, 279, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER);
    text('spacebar', ellipseX, ellipseY - 45); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      stateNow = "mini7"; // Change the game state to the mini-game
    }
  }
}

function setupMini7() {
  createCanvas(1920, 1080); // 변경
  // pixel dimensions of each tile
  w = 1080 / cols;
  h = 1080 / rows;

  // 음악 버튼
  playButton7 = createButton('Music Start');
  playButton7.parent('p5-doms');
  playButton7.style('font-size', '30px');
  playButton7.style('font-family', 'neodgm')
  playButton7.style('width', '200px'); // 버튼의 너비 설정
  playButton7.style('height', '80px');
  playButton7.position(1400, 850);
  playButton7.mousePressed(playMusic2);
  playButton7.hide();

  // Chop up source image into tiles
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(travelPuzzle, x, y, w, h, 0, 0, w, h);
      let index = i + j * cols;
      board.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }

  // Remove the last tile
  tiles.pop();
  board.pop();
  // -1 means an empty spot
  board.push(-1);

  // Shuffle the board
  simpleShuffle(board);
}
// Swap two elements of an array
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// Pick a random spot to attempt a move
// This should be improved to select from only valid moves
function randomMove(arr) {
  let r1 = floor(random(cols));
  let r2 = floor(random(rows));
  move(r1, r2, arr);
}
// Shuffle the board
function simpleShuffle(arr) {
  for (let i = 0; i < 100000; i++) {
    randomMove(arr);
  }
}
function drawMini7() {
  textAlign(CORNER);
  rectMode(CORNER);
  background('#A4BDDA');
  fill(0)
  rect(1080, 0, 900, 1080)
  fill('#A4BDDA')
  rect(1100, 20, 790, 1040)
  // Draw the current board
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i + j * cols;
      let x = i * w;
      let y = j * h;
      let tileIndex = board[index];
      if (tileIndex > -1) {
        let img = tiles[tileIndex].img;
        let centerX = x + w / 2;
        let centerY = y + h / 2;
        noStroke(); // 테두리 없애기
        imageMode(CENTER); // 이미지 중앙 정렬
        image(img, centerX, centerY, w, h);
      }
    }

    //퍼즐 안내메시지
    if (!isSolved()) {
      travelTalk();
      const maxMessageIndex = solveMessages.length - 1;

      if (clickCount % 15 >= 5) {
        if (currentMessage <= maxMessageIndex) {
          displayMessage1(fightMessages[currentMessage]);
        }
      }

      if (clickCount % 15 >= 10) {
        if (currentSolveMessage <= maxMessageIndex) {
          displayMessage2(solveMessages[currentSolveMessage]);
        }
      }
    }
  }


  // If it is solved
  if (isSolved()) {
    playButton7.hide();
    fill(255, 100, 150, 150);
    rect(0, 0, 1080, 1080);
    image(travelPuzzle, 540, 540)

    // Display "완성했습니다!" message
    image(finishTravel, 1495, 540)
    textFont(customFont)
    textSize(40);
    fill(255);
    text('가족들과 행복한 스위스여행을 마쳤습니다!', 110, 50);

    if (keyIsPressed && keyCode === 13) {
      stateNow = "main8";
    }

    if (frameCount % 60 > 30) {
      rectMode(CORNER);
      fill(50, 50, 150);
      stroke(255);
      strokeWeight(1);
      rect(1760, 40, 120, 55);
      fill(255);
      noStroke();
      textSize(40);
      textAlign(CENTER);
      text("ENTER", 1820, 50);
    }
  }
}
// Check if solved
function isSolved() {
  for (let i = 0; i < board.length - 1; i++) {
    if (board[i] !== tiles[i].index) {
      return false;
    }
  }
  return true;
}
// Swap two pieces
function move(i, j, arr) {
  let blank = findBlank();
  let blankCol = blank % cols;
  let blankRow = floor(blank / rows);

  // Double-check valid move
  if (isNeighbor(i, j, blankCol, blankRow)) {
    swap(blank, i + j * cols, arr);
  }
}
// Check if neighbor
function isNeighbor(i, j, x, y) {
  if (i !== x && j !== y) {
    return false;
  }

  if (abs(i - x) == 1 || abs(j - y) == 1) {
    return true;
  }
  return false;
}
// to track blank spot
function findBlank() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == -1) return i;
  }
}
function resetPuzzle() {
  // Set up the puzzle in the solved state
  for (let i = 0; i < tiles.length; i++) {
    board[i] = i;
  }
  // The last tile is the empty spot
  board[board.length - 1] = -1;
  // Shuffle the puzzle
  simpleShuffle(board);
}
function solvePuzzle() {
  // Set up the puzzle in the original order
  for (let i = 0; i < originalOrder.length; i++) {
    board[i] = originalOrder[i];
  }
  // The last tile is the empty spot
  board[board.length - 1] = -1;
}
function travelTalk() {
  noStroke();
  fill('#4B89DC')
  rect(1120, 160, 750, 236);
  fill(255);
  textSize(27);
  push();
  textFont(customFont)
  textAlign(CENTER);
  text(
    "가족들과 여행하다보면\n종종 피곤하고 짜증나는 순간들이 있다.\n그럼에도 돌아보면 행복했던 기억들이 대부분인 것 같다!\n인내심을 갖고 갈등을 해결하며\n행복한 가족 여행을 완성해보자!\n(마우스로 퍼즐을 클릭해 사진을 완성해주세요!)", 1500, 185);
  pop();
}
function playMusic2() {
  if (swissSong.isPlaying()) {
    swissSong.stop(); // 현재 재생 중인 경우 멈춤
  } else {
    swissSong.play(); // 재생
  }
}
function showMessage() {
  displayText = true; // showMessage 함수가 호출되면 displayText를 true로 설정하여 텍스트를 표시
}
function displayMessage1(message) {
  fill(255);
  rect(1230, 480, 600, 70)
  fill(0)
  textAlign(CENTER);
  textFont(customFont)
  ellipse(1180, 470, 50, 50)
  rect(1155, 500, 50, 50)
  fill(0)
  text(message, 1490, 515); // 메시지 위치 및 내용
}
function displayMessage2(message) {
  textAlign(RIGHT);
  textFont(customFont)
  fill(255)
  rect(1200, 600, 560, 70)
  ellipse(1810, 590, 50, 50)
  rect(1785, 615, 50, 50)
  fill(0);
  text(message, 750, 635, 1000, 210); // 메시지 위치 및 내용
}
function displayMessages() {
  if (clickCount >= 15 && clickCount % 15 === 0 && currentMessage < fightMessages.length) {
    displayMessage1(fightMessages[currentMessage]);
    currentMessage++;
  }

  if (clickCount >= 15 && clickCount % 15 === 0 && currentSolveMessage < solveMessages.length) {
    displayMessage2(solveMessages[currentSolveMessage]);
    currentSolveMessage++;
  }
}

function drawMain8() {
  swissSong.stop();
  imageMode(CORNER);
  fill(255);
  background(main8BG); // Display the background image
  drawArrow();
  gift();
  rainbow();
  fill(255);
  player.update();
  player.display();
  checkInteraction8();
  if (fading) {
    fill(255, fadeAmount);
    rect(0, 0, width, height);
    fadeAmount += 5; // 투명도를 점차 증가시켜 페이드아웃 효과를 줌
    if (fadeAmount > 255) { // 투명도가 최대값을 초과하면 다음 상태로 전환
      fadeAmount = 0; // 투명도 초기화
      fading = false; // 페이드아웃 효과 비활성화
      stateNow = "main9";
    }
  }
}

function startFadeOut() {
  fading = true; // 페이드아웃 효과를 시작하도록 설정
}

function rainbow() {
  noStroke();
  if (frameCount % 60 < 30) {
    fill(255, 255, 255, 120);
  } else {
    noFill();
  }
  ellipse(1631, 319, 200, 245);
}
function checkInteraction8() {
  // Check if player is within the ellipse
  let ellipseX = 1631, ellipseY = 319, ellipseW = 201, ellipseH = 251;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(50, 50, 150); //네모
    stroke(255);
    rectMode(CENTER);
    rect(1631, 193, 140, 40);
    rectMode(CORNER);
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    textAlign(CENTER)
    text('spacebar', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && keyCode === 32) {
      startFadeOut()
    }
  }
}

function drawMain9() {
  startFadeIn();
  fill(255);
  background(main9BG);
  rectMode(CENTER);
  fill(255, 150);
  rect(959, 600, 1920, 400);
  fill(0);
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(
    "\n \n \n 음... 이제 좀 알겠어..! 내가 잊고 있었네. \n 지금까지 걸어온 길을 돌아보니, 나는 충분히 사랑받고 사랑하며 살았구나! \n 물론 관계에 지칠 때가 다시금 찾아올 때도 있겠지만, \n 그래도 나의 삶은 사랑이라는 것을 잊지 말아야지..! \n \n -The End-",
    width / 2,
    height / 2
  );

  fill(255);
  textFont(customFont);
  textSize(30);
  textAlign(RIGHT);
  text('게임을 처음부터 다시 할래 : F5', 1890, 1035);

  fill(255);
  player.update();
  player.display();

  if (fadingIn) {
    fill(255, fadeAmount1);
    rectMode(CORNER);
    rect(0, 0, width, height);
    fadeAmount1 -= 5; // 투명도를 점차 감소시켜 페이드인 효과를 줌
    if (fadeAmount1 < 0) { // 투명도가 0 미만이면 페이드인 효과 완료
      fadeAmount1 = 0; // 투명도를 정확히 0으로 설정
      fadingIn = false; // 페이드인 효과 비활성화
      // 페이드인 완료 후 필요한 추가 동작 (예: 게임 상태 변경 등)
    }
  }
}

function startFadeIn() {
  fadingIn = true; // 페이드인 효과를 시작하도록 설정
}
