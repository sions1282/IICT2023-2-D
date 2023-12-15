let stateNow = 'start';
let customFont;

//start 전역변수
let clouds = [];
let buttonX = 1550;
let buttonY = 130;
let buttonWidth = 100;
let buttonHeight = 50;
let buttonColor;
let showResponse = false;

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
let student;
let security1;
let security2;
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

//mini2 전역변수
let flower0 = [];
let flower1 = [];
let bg2;
let rose;
let font;
let gainedCreativity = false;
let resetButton;

//mini3 전역변수
let loveImage1, loveImage2;
let wrongCount = 0;
let clickedLocations = [];
// let psyFather;
let differences = [
  { x: 1380, y: 630, width: 130, height: 130 }, // 딸 머리색
  { x: 1340, y: 350, width: 170, height: 170 }, // 엄마 머리색
  { x: 1560, y: 360, width: 60, height: 60 }, // 아빠이마주름
  { x: 1560, y: 420, width: 60, height: 60 }, // 아빠입가주름
  { x: 1680, y: 850, width: 30, height: 150 }, // 아빠 지팡이
  { x: 1550, y: 770, width: 60, height: 100 }, // 아들 넥타이
  { x: 1720, y: 460, width: 80, height: 80 }, // 하트
  { x: 1450, y: 900, width: 150, height: 150 }, // 강아지
];
let messages = [
  '20살이 됐을 때 탈색을 했었지!!',
  '우리 엄마 흰머리가 언제 이렇게 늘었어..!',
  '우리 아빠는 이마에 주름이 생겼네..!',
  '아빠가 우리 때문에 고생을 많이 헀구나..',
  '아빠 오래오래 건강해야해!',
  '어느새 커서 교복도 입고 말이야!',
  '우리의 사랑이 더 진해졌네!',
  '우리집 막내도 생겼지!'
];
let clickedDifferences = [];

//mini4 전역변수
let myStrength = 0;
let maxStrength = 150000; // 벽을 부수기 위한 최대 값
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

//mini7 전역변수
let swissSong;
let displayText = false;
let tiles = [];
let cols = 3; // 변경
let rows = 3; // 변경
let w, h;
let board = [];
let messages7 = [
  "너는 사진 찍으러 여행 왔니?",
  "배고픈데 이제 밥 먹으러 가면 안될까?",
  "여기 식당 예약했다고 하지 않았어?",
  "그거 사봤자 나중에 다 짐만 돼",
  "너가 가서 영어로 한번 물어봐바",
  "여기 기대했던 것보다는 별로네"
];
let currentMessage = 0;
let messageStartTime = 0;
let messageDuration = 5000

let solveMessages = [
  "남는건 사진 밖에 없는거야~",
  "알았어!! 내가 맛있는 곳 예약해뒀어!",
  "착오가 있었나봐.. 다른 곳 가보자!",
  "에이~ 이런게 다 추억이야~",
  "알았어! 내가 물어보고 올게!",
  "왜? 나는 여기 너무 좋은 것 같은데~"
];
let currentSolveMessage = 0;
let solveMessageStart = 0;
let solveMessageDuration = 5000
// let musicX;
// let musicY;
let originalOrder = [0, 3, 6, 1, 4, 7, 2, 5, 8];
let resetButton7;
let solveButton;


function preload() {
  customFont = loadFont('neodgm.ttf');
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
  bg2 = loadImage('asset/flowerbg.png');
  loveImage1 = loadImage("asset/familyPhotoOri.png");
  loveImage2 = loadImage("asset/familyPhotoChange.png");
  // psyFather = loadSound("asset/psyFather.mp3");
  wall = loadImage("asset/wall.jpg");
  endingcrack = loadImage('asset/crack.png');
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
  // swissSong = loadSound("asset/swissSong.mp3")
}

function setup() {
  createCanvas(1920, 1080);
  setupStart();
  setupMain1();
  setupMini1();
  setupMini2();
  // setupMini3();
  setupMini4();
  setupMini5();
  setupMini6();
  // setupMini7();
}

function draw() {
  cursor();
  if (stateNow !== "mini2" && resetButton) {
    hideResetButton();
  }
  switch (stateNow) {
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
  if (keyCode === 78) { // 'N' 키
    if (stateNow === "home") {
      stateNow = "main1";
    } else if (stateNow === "mini1") {
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

  if (keyCode === 72) { // 'h' 키
    if (stateNow === "start") {
      stateNow = "home";
    }
  }

  if (key === 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function mouseClicked() {
  switch (stateNow) {
    case 'start':
      if (
        mouseX > buttonX &&
        mouseX < buttonX + buttonWidth &&
        mouseY > buttonY &&
        mouseY < buttonY + buttonHeight
      ) {
        showResponse = !showResponse;
        setTimeout(() => {
          showResponse = false;
        }, 10000);
      }
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

      break;
    case 'main3':

      break;
    case 'mini3':
      let clickedInsideDifference = false; // 차이로 표시된 위치 내에 클릭되었는지 여부를 나타내는 변수

      for (let i = 0; i < differences.length; i++) {
        let diff = differences[i];

        // 클릭된 위치가 차이로 지정된 영역 내에 있는지 확인
        let clickedInsideDiff = (
          mouseX > diff.x && mouseX < diff.x + diff.width &&
          mouseY > diff.y && mouseY < diff.y + diff.height
        );

        if (clickedInsideDiff) {
          let clickedLocations = { x: mouseX, y: mouseY };

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
      if (!gameOver) {
        let bullet = new Bullet(playerX + 40, playerY - 100, apologize[int(random(3))]);
        bullets.push(bullet);
      }
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
      // Check if the mouse is pressed inside the flower
      for (let i = 0; i < flower0.length; i++) {
        let d = dist(mouseX, mouseY, flower0[i].position.x, flower0[i].position.y - 150);
        if (d <= 30) {
          flower0[i].rotateClockwise();

        }
        if (dist(mouseX, mouseY, flower0[i].position.x, flower0[i].position.y) <= 50) {
          flower0[i].startDragging();
        }
        // 꽃을 클릭하면 바로 회전
      }

      for (let i = 0; i < flower1.length; i++) {
        let d = dist(mouseX, mouseY, flower1[i].position.x - 150, flower1[i].position.y);
        if (d <= 30) {
          flower1[i].rotateClockwise();
        }
        if (dist(mouseX, mouseY, flower1[i].position.x, flower1[i].position.y) <= 50) {
          flower1[i].startDragging();
        }
        // 꽃을 클릭하면 바로 회전
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
      // Stop dragging when the mouse is released
      for (let i = 0; i < flower0.length; i++) {
        flower0[i].stopDragging();
      }

      for (let i = 0; i < flower1.length; i++) {
        flower1[i].stopDragging();
      }

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
      } else { gainedCreativity = false }
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

function setupStart() {
  noStroke();
  startCharacter = new startCharacter(0, 835, 5);

  //구름
  let numClouds = 7;
  for (let i = 0; i < numClouds; i++) {
    let cloud = {
      x: random(width),
      y: random(height / 2),
      size: random(80, 200),
    };
    clouds.push(cloud);
  }
  buttonColor = color(255);
}

function drawStart() {
  //기본 배경
  background('#B2D7FC');
  fill(0);
  rect(1280, 0, 640, 1080)
  cloud();

  //잔디
  fill(0, 150, 0);
  rect(0, 900, 1280, 280);

  //건물
  drawSchool();
  drawMovie();
  drawHouse(1100, 800, 250, 200);

  //카카오톡
  message();

  //안내멘트
  notice();

  fill(255)
  startCharacter.update();
  startCharacter.display();
}

function drawCloud(cloud) {
  fill(255); // 흰색으로 설정

  // 랜덤한 크기와 위치의 타원으로 구름 그리기
  cloud.x = (cloud.x + 1) % 1100; // x값을 1씩 증가시키고, 화면 너비를 벗어나면 다시 0으로 설정
  cloud.y = constrain(cloud.y + random(-1, 1), 0, 700); // y값을 무작위로 조정하되, 0과 height 사이에 유지

  ellipse(cloud.x, cloud.y, cloud.size);
  ellipse(cloud.x + cloud.size / 2, cloud.y + cloud.size / 8, cloud.size * 0.8);
  ellipse(cloud.x - cloud.size / 2, cloud.y + cloud.size / 8, cloud.size * 0.8);
  ellipse(cloud.x + cloud.size / 4, cloud.y + cloud.size / 4, cloud.size * 0.8);
  ellipse(cloud.x - cloud.size / 4, cloud.y + cloud.size / 4, cloud.size * 0.8);
}

function drawSchool() {
  //학교
  fill('#dcdcdc');
  triangle(220, 600, 50, 900, 390, 900)
  rect(355, 550, 30, 350)
  rect(340, 550, 30, 30)
  rect(380, 570, 30, 30)
  rect(380, 620, 30, 30)
  fill('#B2D7FC');
  triangle(220, 650, 90, 900, 350, 900)
}

function drawMovie() {
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
  fill('#FFF8EB'); // 갈색
  rect(x - width / 2, y - height / 2, width, height);

  // 지붕
  fill(200, 0, 0); // 회색
  triangle(x - width / 2, y - height / 2, x + width / 2, y - height / 2, x, y - height);

  // 문
  fill(255, 0, 100); // 빨간색
  rect(x - width / 6, 800, 80, 100);

  // 창문
  fill(0, 0, 255); // 파란색
  stroke(255);
  rect(x - width / 3, 740, 30, 30);
  rect(x - width / 5, 740, 30, 30);
  rect(x + 30, 740, 30, 30);
  rect(x + 64, 740, 30, 30);
}

function message() {
  if (
    startCharacter.x > 100 && startCharacter.x < 400 ||
    startCharacter.x > 550 && startCharacter.x < 850 ||
    startCharacter.x > 1000 && startCharacter.x < 1350
  ) {
    fill(255, 255, 0);
    rect(1400, 50, 400, 150);
    fill(0)
    textSize(30);
    textFont(customFont);
    text('메시지가 도착했습니다!', 1430, 105);

    //보기 버튼
    fill(buttonColor);
    rect(buttonX, buttonY, buttonWidth, buttonHeight);
    fill(0);
    textSize(35);
    text('보기', 1565, 165);

    // 원을 그릴 위치
    if (showResponse && startCharacter.x > 100 && startCharacter.x < 400) {
      fill(255)
      ellipse(1350, 250, 50, 50);
      text("BFF", 1320, 310, 300)
      rect(1390, 250, 500, 180);
      fill(0);
      textSize(28)
      text(
        "그럼 내일 저녁에 다같이 보는거다?    이거 몇 년 만의 모임이야.         무조건 전원 참석해.                  특히 연애한다고 못 오기만 해봐라!!",
        1410, 290, 510, 200,)
    }
  }

  if (showResponse && startCharacter.x > 550 && startCharacter.x < 850) {
    fill(255)
    ellipse(1350, 250, 50, 50);
    textSize(25)
    text("자기", 1320, 310, 300)
    rect(1390, 250, 500, 150);
    fill(0);
    textSize(30)
    text(
      "내일 저녁에 데이트 하자!       우리 저번부터 보기로 했던 영화 예매해뒀어!",
      1410, 290, 510, 200,)

    fill(0, 0, 100)
    ellipse(1860, 450, 50, 50);
    rect(1320, 450, 500, 100);
    fill(255);
    textSize(30)
    text(
      "혹시 점심은 안될까..?          내가 저녁엔 동창회가 있는데…!",
      1350, 490, 510, 200,)

    fill(255)
    ellipse(1350, 600, 50, 50);
    textSize(25)
    text("자기", 1320, 660, 300)
    rect(1390, 600, 500, 100);
    fill(0);
    textSize(30)
    text(
      "내가 지난주에 점심엔 일이 있어서 안 된다고 했잖아.ㅜㅜ",
      1400, 640, 510, 200,)
  }

  if (showResponse && startCharacter.x > 1000 && startCharacter.x < 1350) {
    fill(255)
    ellipse(1350, 250, 50, 50);
    textSize(25)
    text("엄마", 1320, 300, 300)
    rect(1390, 250, 500, 200);
    fill(0);
    textSize(30)
    text(
      "내일은 시간 괜찮니? 요즘 우리 가족 다 같이 모여서 밥 한 번 먹을 시간이 없었던 것 같아서… 아빠 퇴근하시고 저녁에 외식하러 가자.",
      1410, 290, 500, 200,)

    fill(0, 0, 100)
    ellipse(1860, 520, 50, 50);
    rect(1320, 510, 500, 60);
    fill(255);
    textSize(30)
    text(
      "나 내일 선약이 있는데…",
      1350, 550, 510, 200,)

    fill(255)
    ellipse(1350, 640, 50, 50);
    textSize(25)
    text("엄마", 1320, 700, 300)
    rect(1390, 640, 500, 150);
    fill(0);
    textSize(30)
    text(
      "또? 너는 그렇게 친구나 애인 보러 갈 시간은 있으면서 우리랑 밥 먹을 시간은 없는거야?",
      1400, 680, 500, 200,)
  }
}

function notice() {
  //안내멘트
  if (startCharacter.x < 1050) {
    textFont(customFont);
    fill(0);
    textSize(40);
    text("좌우 화살표 키를 눌러 이동하세요!", 270, 200)
  }

  if (startCharacter.x > 1050) {
    textFont(customFont);
    fill(0);
    textSize(40);
    text("H 버튼을 눌러 집으로 들어가세요!", 270, 200)
  }
}

function cloud() {

  //구름과 해
  noStroke();
  fill('red');
  ellipse(0, 0, 400, 400)
  for (let i = 0; i < clouds.length; i++) {
    drawCloud(clouds[i]);
  }
}

function drawHome() {
  background(0);
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text(
    "'공강도 없어서 주말이 유일한 휴일인데... \n 이렇게 내 시간과 노력을 써서 관계를 이어가려고 하면 뭐해? \n 부모님도, 애인도, 친구들도... 누구 하나 마음 편한 관계가 없는걸. \n 세상에 날 지지해주고 사랑해주는 관계가 있긴 한걸까?'\n \n 지이잉 \n \n'어, 내 태블릿. 갑자기 앱이 하나 설치되었는데? 바이러스인가... \n 앱 이름이.. Find your love...? 세상 혼자 사는 것 같고 사랑이 없다고 느끼는 당신을 위해... \n 과거를 돌아볼 수 있는 게임들을 준비했다고? \n 뭐야 이건... 누가 내 생각을 읽었나? \n 이상하긴 하지만.. 기분 전환이나 할 겸 한 번 플레이해볼까.' \n \n (N키를 눌러 게임을 시작해주세요!)",
    width / 2,
    height / 2
  );
}

function setupMain1() {
  player = new Player(1020, 395, 5);
}

function drawMain1() {
  background(main1BG); // Display the background image
  player.update();
  player.display();
  checkInteraction1();
}

function checkInteraction1() {
  // Check if player is within the ellipse
  let ellipseX = 431, ellipseY = 246, ellipseW = 57, ellipseH = 35;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
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

  security1.preload()
  security2.preload()
  for (let i = 0; i < teacher.length; i++) {
    teacher[i].preload()
  }
}

function drawMini1() {
  background(255);
  image(bg, 0, 0, width, height);
  // 수위1,2 좌우이동
  if (goRight) {
    security1.x += 10
  } else {
    security1.x -= 10
  }
  if (goRight && security1.x > width || !goRight && security1.x < 0) {
    goRight = !goRight;
  }

  if (goLeft) {
    security2.x -= 10
  } else {
    security2.x += 10
  }
  if (goLeft && security2.x < 0 || !goLeft && security2.x > width) {
    goLeft = !goLeft;
  }


  // 충돌감지
  if (checkCollision(student, security1, security2) || checkCollisionWithLight(student, teacher)) {
    resetGame();
  }

  // 클리어조건
  textFont(customFont)
  if (getPC) {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text('무사히 야자를 째고 PC방에 도착! \n PC방을 클릭해보자.', width / 2, 100);
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
    text('선생님과 수위 아저씨를 피해\n친구와 야자를 째 봅시다! \n(선생님들은 우리의 루트를 다 알고 있습니다.)', width / 2, 100);
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
        // 대각선 그리기
        stroke(220)
        line(x, y, x + 30, y + 30);
        line(x + 30, y, x, y + 30);
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

  // desk 
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      fill(220);
      rect(300 * (i + 1), 720 + 100 * (j + 1), 70)
    }
  }
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
  textSize(100);
  fill(255);
  text("P C", 200, 150);



  // 캐릭터들
  fill(0, 0, 255)
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
    if (gameState === "playing" && mouseIsPressed) {
      // 첫 번째 마우스 클릭 시
      gameState = "messageShown"; // 게임 상태를 "messageShown"으로 변경
      // noLoop(); // draw 함수 반복 중지
    } else if (gameState === "messageShown") {
      // 두 번째 마우스 클릭 시
      // 원하는 동작 수행
      background(0);
      textSize(40);
      textAlign(CENTER, CENTER);
      fill(255);
      text('그래, 우리 이때 참 재미있었지! \n 생각해보면 지금도 변한 게 없는 친구들인데... \n 매일 보다가 점점 모이는 날이 적어지니까 괜히 서운한 마음이 들었나봐.\n \n(n키를 누르세요!)', width / 2, height / 2);
    }
  }
}

function checkCollision(student, security1, security2) {
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

function checkCollisionWithLight(student, teacher) {
  // Check if the student is within the light cone of any teacher
  for (let i = 0; i < teacher.length; i++) {
    let dx1 = student.x - teacher[i].x;
    let dy1 = student.y - teacher[i].y;
    let angle1 = atan2(dy1, dx1);

    let dx2 = (student.x + 70) - teacher[i].x;
    let dy2 = student.y - teacher[i].y;
    let angle2 = atan2(dy2, dx2);

    // Assume that lightAngle is the current angle of the teacher's light
    let lightConeAngle = PI / 4; // Adjust this value based on your light cone angle

    // Calculate the distance between student and teacher
    let distance1 = dist(student.x, student.y, teacher[i].x, teacher[i].y);
    let distance2 = dist(student.x + 70, student.y, teacher[i].x, teacher[i].y);

    // Check if either student or student2 is within the light cone
    if (
      (abs(atan2(sin(angle1 - teacher[i].lightAngle), cos(angle1 - teacher[i].lightAngle))) <
        lightConeAngle / 2 &&
        distance1 < teacher[i].lightRadius) ||
      (abs(atan2(sin(angle2 - teacher[i].lightAngle), cos(angle2 - teacher[i].lightAngle))) <
        lightConeAngle / 2 &&
        distance2 < teacher[i].lightRadius)
    ) {
      return true; // If any teacher's light cone is intersected, return true
    }
  }
}

function resetGame() {
  // Game reset logic
  student = new FirstPlayer(1000, 1000, 5);
  security1 = new Security(0, height / 2 + 90, 10)
  security2 = new Security(width, height / 2 - 70, 10)
}

function drawMain2() {
  fill(255);
  background(main2BG); // Display the background image
  player.update();
  player.display();
  checkInteraction2();
}

function checkInteraction2() {
  // Check if player is within the ellipse
  let ellipseX = 560, ellipseY = 498, ellipseW = 56, ellipseH = 33;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
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

  for (let i = 0; i < flower0.length; i++) {
    flower0[i].preload();
  }

  for (let i = 0; i < flower1.length; i++) {
    flower1[i].preload();
  }

  resetButton = createButton('Reset');

  resetButton.position(10, 10);
  resetButton.mousePressed(resetGame2);

  // 버튼의 크기 조정
  resetButton.style('font-size', '50px'); // 원하는 크기로 변경
  resetButton.style('font-family', 'customFont'); // 원하는 크기로 변경
  resetButton.style('width', '200px'); // 원하는 크기로 변경
  resetButton.style('height', '100px'); // 원하는 크기로 변경

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
    background(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text('그녀에게 내 마음을 전했다! \n\n 이 사람... 이런 타입이었구나?\n \n (n키를 누르세요!)', width / 2, height / 2 - 100);
  } else {
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    let question = '오늘은 그녀에게 고백하는 날! \n 긴장한 나머지 LOVE가 거꾸로 보인다는 사실을 생각 못했네...  \n 빠르게 두 송이만 움직이면 발칙한 표현으로 바꿀 수 있을 것 같은데...'
    let condition = '(줄기 중앙을 누르면 위치를 이동할 수 있으며, 맨 처음 꽃잎이 놓여있던 부근을 계속 누르면 회전한다.\n 꽃봉오리는 왼쪽 or 위쪽으로 와야 한다.)'
    text(question, width / 2, 110);
    textSize(30);
    text(condition, width / 2, 250);
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

function hideResetButton() {
  if (resetButton) {
    resetButton.hide();
    resetButton.remove();
    resetButton = null;
  }
}

function drawMain3() {
  fill(255);
  background(main3BG); // Display the background image
  player.update();
  player.display();
  checkInteraction3();
}

function checkInteraction3() {
  // Check if player is within the ellipse
  let ellipseX = 538, ellipseY = 939, ellipseW = 55, ellipseH = 35;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
      stateNow = "mini3"; // Change the game state to the mini-game
    }
  }
}

// function setupMini3(){
//   // createCanvas(1920, 1080);
//   background('#FFD1E6');
//   textSize(50);
//   textFont(customFont);
//   fill(255, 100, 150, 250);
//   text("What", 50, 200);
//   text("Is", 50, 250);
//   text("Different?", 50, 300);
//   image(loveImage1, 320, 30);
//   image(loveImage2, 1120, 30);
// }

function drawMini3() {
  background('#FFD1E6');
  textSize(50);
  textFont(customFont);
  fill(255, 100, 150, 250);
  text("What", 50, 200);
  text("Is", 50, 250);
  text("Different?", 50, 300);
  image(loveImage1, 320, 30);
  image(loveImage2, 1120, 30);
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
  text(`Found: ${wrongCount}/8`, 60, 900);

  if (wrongCount === 8) {
    fill(255, 100, 150, 100);
    noStroke();
    rect(0, 0, 1920, 1080);
    fill(0)
    textSize(45)
    text("우리 가족 오래오래 건강하고 행복하자!", 800, 560);
    !clickedDifferences
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

// function playMusic() {
//   if (psyFather.isPlaying()) {
//     psyFather.stop(); // 현재 재생 중인 경우 멈춤
//   } else {
//     psyFather.play(); // 재생
//   }
// }

function drawMain4() {
  fill(255);
  background(main4BG); // Display the background image
  player.update();
  player.display();
  checkInteraction4();
}

function checkInteraction4() {
  // Check if player is within the ellipse
  let ellipseX = 726, ellipseY = 335, ellipseW = 53, ellipseH = 34;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
      stateNow = "mini4"; // Change the game state to the mini-game
    }
  }
}

function setupMini4() {
  for (let i = 0; i < 18; i++) {
    let zone = {
      x: random(20, width - 50),
      y: random(20, height - 300),
      w: 150,
      h: 90,
      t: 255,
      r: int(random(5))
    };
    zones.push(zone);
  }
  for (let i = 0; i < 30; i++) {
    let goodzones = {
      x: random(20, width - 50),
      y: random(20, height - 300),
      w: 150,
      h: 90,
      t: 255,
      r: int(random(5))
    };
    goodzone.push(goodzones);
  }
}

function drawMini4() {
  noCursor();
  image(wall, 0, 0);
  fill(0);
  textFont(customFont);
  textSize(40);
  textAlign(CENTER);
  text("이곳은 내 마음의 벽...", width / 2, height / 1.2);
  text("부정적인 마음을 떨쳐 벽을 깨고... 나아가야 할 때!", width / 2, height / 1.2 + 50);
  textSize(27);
  text(">부정적인 마음이 적힌 벽 부분은 어딘지 약해보인다...<", width / 2, height / 1.2 + 110);
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
  } else {  // 벽이 부서졌을 때
    background(130, 199, 299);
    image(endingcrack, 0, 0, width, height);
    // 엔딩 후 메시지박스
    fill(255);
    textFont(customFont);
    textSize(80);
    textAlign(CENTER);
    text("마음의 벽이 깨졌다!", width / 2, height / 2 - 105);
    textSize(60);
    text("그동안은 내가 나를", width / 2, height / 2 + 10);
    text("사랑해주지 못했던 것 같아..", width / 2, height / 2 + 80);
    text("이제는 나를 더", width / 2, height / 2 + 160);
    text("사랑해줘야지.\n \n (n키를 눌러주세요!)", width / 2, height / 2 + 230);
  }

  // 벽 부수기 시도
  if (mouseIsPressed && !broken) {
    // let x = mouseX;
    // let y = mouseY;

    // 클릭한 위치가 특정 구역 내에 있는지 확인
    for (let i = 0; i < zones.length; i++) {
      let zone = zones[i];
      if (mouseX > zone.x && mouseX < zone.x + zone.w && mouseY > zone.y && mouseY < zone.y + zone.h) {
        let distance = dist(mouseX, mouseY, zone.x + zone.w / 2, zone.y + zone.h / 2); // 벽 중심으로부터의 거리 계산
        let transparency = map(distance, 0, 100, 255, 0); // 투명도 계산

        // 벽을 부수는 흔적 그리기
        fill(255, 0, 0, transparency);
        ellipse(mouseX, mouseY, 50, 50);
        zone.t -= 5;
        //tran -= 1;

        // 부순 효과
        myStrength += transparency;
        if (myStrength >= maxStrength / 2) {
          fill(255, 0, 0);
          textFont(customFont);
          textSize(70);
          textAlign(CENTER);
          text("벽이 거의 부서졌습니다!", width / 2, 20);
        }
        if (myStrength >= maxStrength) {
          broken = true;
        }
      }
    }
  }
  image(hammer, mouseX - 90, mouseY - 50);
}

function drawMain5() {
  fill(255);
  background(main5BG); // Display the background image
  player.update();
  player.display();
  checkInteraction5();
}

function checkInteraction5() {
  // Check if player is within the ellipse
  let ellipseX = 1175, ellipseY = 221, ellipseW = 52, ellipseH = 34;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
      stateNow = "mini5"; // Change the game state to the mini-game
    }
  }
}

function setupMini5() {
  catcher = new Catcher();
  noCursor();
  noStroke();
  hangeul = ["친", "구", "야", "고", "마", "워", "사", "랑", "해", "든", "오", "래", "보", "자",];
}

function drawMini5() {
  image(love, 0, 0);
  catcher.setLocation(mouseX, height - 70);
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
      text("앞으로도 우리 우정 영원하자 (n키를 누르세요!)", width / 2, height / 2 + 60);
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
        "어떻게 하면 친구에게 고마운 마음을 전할 수 있을까? (마우스 이동)",
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
}

function drawMain6() {
  fill(255);
  background(main6BG); // Display the background image
  player.update();
  player.display();
  checkInteraction6();
}

function checkInteraction6() {
  // Check if player is within the ellipse
  let ellipseX = 1052, ellipseY = 542, ellipseW = 51, ellipseH = 35;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
      stateNow = "mini6"; // Change the game state to the mini-game
    }
  }
}

function setupMini6() {
  playerX = width / 2;
  playerY = height - 20;
  textFont(customFont);

  // 처음에 목표물을 생성합니다.
  for (let i = 0; i < 13; i++) {
    let target = new Target(random(width), random(0, 20), bad[int(random(3))]);
    targets.push(target);
  }
}

function drawMini6() {
  image(bg6, 0, 0);
  // 플레이어 그리기
  textAlign(CENTER);
  fill(0);
  textSize(40);
  text("Mission: 삐진 애인을 달래자!", width / 2, 100);
  textSize(30)
  fill(0, 120);
  text("(얼마나 달래야 할까...? 일단 마구 달래보자!)", width / 2, 150);
  textSize(25);
  fill(0);
  text("> 화살표 버튼으로 양옆 이동 가능 & 마우스 클릭으로 화해 총알 발사 가능 <", width / 2, 200);
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

  if (score == 7) {
    gameOver = true; // 스코어가 7이면 게임 종료
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
    text('애인(이)가 삐짐 상태를 해지했습니다!\n(n키를 누르세요!)', width / 2, height / 2);
    noStroke();
  }

  // 플레이어 양옆으로 이동
  if (keyIsDown(LEFT_ARROW) && playerX > 10) {
    playerX -= 3;
  } else if (keyIsDown(RIGHT_ARROW) && playerX < width - 50) {
    playerX += 3;
  }

  // 점수 표시
  textSize(30);
  fill(0);
  textAlign(LEFT, TOP);
  text('Score: ' + score, 10, 10);
}

function drawMain7() {
  fill(255);
  background(main7BG); // Display the background image
  player.update();
  player.display();
  checkInteraction7();
}

function checkInteraction7() {
  // Check if player is within the ellipse
  let ellipseX = 1392, ellipseY = 309, ellipseW = 56, ellipseH = 33;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
      stateNow = "mini7"; // Change the game state to the mini-game
    }
  }
}

// function setupMini7() {
//   createCanvas(1920, 1080); // 변경
//   // pixel dimensions of each tile
//   w = 1080 / cols;
//   h = 1080 / rows;

//   //음악 버튼
//   // let playButton = createButton('Music Start');
//   // playButton.style('font-size', '30px');
//   // playButton.style('font-family', 'neodgm')
//   // playButton.style('width', '200px'); // 버튼의 너비 설정
//   // playButton.style('height', '80px');
//   // playButton.position(1400, 770);
//   // playButton.mousePressed(playMusic);

//   // Chop up source image into tiles
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * w;
//       let y = j * h;
//       let img = createImage(w, h);
//       img.copy(travelPuzzle, x, y, w, h, 0, 0, w, h);
//       let index = i + j * cols;
//       board.push(index);
//       let tile = new Tile(index, img);
//       tiles.push(tile);
//     }

//     //조작키
//     resetButton7 = createButton('Reset');
//     resetButton7.position(1250, 900);
//     resetButton7.size(200, 100)
//     resetButton7.style('font-size', '40px');
//     resetButton7.style('background-color', '#FF69B4'); // 핑크색 배경
//     resetButton7.style('color', '#FFFFFF');
//     resetButton7.style('font-family', 'neodgm')
//     resetButton7.mousePressed(resetPuzzle);

//     solveButton = createButton('Solve');
//     solveButton.position(1550, 900);
//     solveButton.size(200, 100)
//     solveButton.style('font-size', '40px');
//     solveButton.style('background-color', '#FF69B4'); // 핑크색 배경
//     solveButton.style('color', '#FFFFFF');
//     solveButton.style('font-family', 'neodgm')
//     solveButton.mousePressed(solvePuzzle);

//     setTimeout(() => {
//       solveButton.mousePressed(solvePuzzle);
//       solveButton.removeAttribute('disabled');
//     }, 10000);
//     solveButton.attribute('disabled', 'true'); // 초기에 비활성화

//     // musicX = 1200
//     // musicY = 750
//   }

//   // Remove the last tile
//   tiles.pop();
//   board.pop();
//   // -1 means an empty spot
//   board.push(-1);

//   // Shuffle the board
//   simpleShuffle(board);

//   setTimeout(showMessage, 60000);
// }

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
  cursor();
  background('#B3E0FF');

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
      displayMessage1(messages[currentMessage]);
      displayMessage2(solveMessages[currentSolveMessage]);
    }
  }

  // If it is solved
  if (isSolved()) {
    fill(255, 100, 150, 150);
    rect(0, 0, 1080, 1080);
    image(finishTravel, 1550, 400)

    // Display "완성했습니다!" message
    textFont(customFont)
    textSize(40);
    fill(255);
    text('가족들과 행복한 스위스여행을 마쳤습니다! (n키를 누르세요!)', 1000, height / 2);
  }


  //싸움메시지 
  if (millis() - messageStartTime > messageDuration) {
    if (currentMessage < messages.length - 1) {
      currentMessage++;
    } else {
      currentMessage = 0;
    }
    messageStartTime = millis();
  }

  // 화해 메시지 전환
  if (millis() - solveMessageStart > solveMessageDuration) {
    if (currentSolveMessage < solveMessages.length - 1) {
      currentSolveMessage++;
    } else {
      currentSolveMessage = 0;
    }
    solveMessageStart = millis();
  }
  //음악재생바
  // fill(255);
  // rect(1200, 750, 600, 5);
  // for (let x = 1200; x < min(musicX, 1800); x++) {
  //   circle(x, musicY, 20);
  // }
  // musicX += 0.1;


  if (displayText) {
    fill(0);
    textSize(24);
    text("정말 해결하기 어려울 때 solve 버튼을 눌러주세요!", 1800, 100);
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
  // (1300, 200) 위치에 이미지 그리기
  fill(255);
  rect(1150, 160, 700, 60)
  fill(0);
  textSize(30);
  push();
  textFont(customFont)
  textAlign(CENTER);
  text("가족들과의 즐거운 여행을 완성해보세요! ", 1520, 200);
  pop();
}

// function playMusic() {
//   if (swissSong.isPlaying()) {
//     swissSong.stop(); // 현재 재생 중인 경우 멈춤
//   } else {
//     swissSong.play(); // 재생
//   }
// }

function showMessage() {
  displayText = true; // showMessage 함수가 호출되면 displayText를 true로 설정하여 텍스트를 표시
}

function displayMessage1(message) {
  fill(255);
  rect(1230, 310, 600, 70)
  fill(0)
  textAlign(LEFT);
  textFont(customFont)
  ellipse(1180, 330, 50, 50)
  rect(1155, 355, 50, 50)
  fill(0)
  text(message, 1250, 330, 1000, 200); // 메시지 위치 및 내용
}

function displayMessage2(message) {
  textAlign(RIGHT);
  textFont(customFont)
  fill(255)
  rect(1200, 480, 560, 70)
  ellipse(1810, 490, 50, 50)
  rect(1785, 515, 50, 50)
  fill(0);
  text(message, 750, 500, 1000, 200); // 메시지 위치 및 내용
}

function drawMain8() {
  imageMode(CORNER);
  fill(255);
  background(main8BG); // Display the background image
  player.update();
  player.display();
  checkInteraction8();
}

function checkInteraction8() {
  // Check if player is within the ellipse
  let ellipseX = 1631, ellipseY = 319, ellipseW = 201, ellipseH = 251;
  if (abs(player.x - ellipseX) < ellipseW / 2 && abs(player.y - ellipseY) < ellipseH / 2) {
    fill(255); // White color for the text
    noStroke();
    textFont(customFont);
    textSize(30);
    text('Press X', ellipseX, ellipseY - (ellipseH / 2) - 15); // Displaying below the ellipse
    if (keyIsPressed && key === 'x') {
      stateNow = "main9"; // Change the game state to the mini-game
    }
  }
}

function drawMain9() {
  fill(255);
  background(main9BG); // Display the background image
  rectMode(CENTER);
  fill(255, 150);
  rect(959,586,1920,400);
  fill(0);
  textFont(customFont);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(
    "\n \n \n 음... 이제 좀 알겠어..! 내가 잊고 있었네. \n 지금까지 걸어온 길을 돌아보니, 나는 충분히 사랑받고 사랑하며 살았구나! \n \n -The End-",
    width / 2,
    height / 2
  );
  player.update();
  player.display();
}