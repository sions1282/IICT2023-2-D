let snowflakes = [];
let moonSize = 300; // 달의 크기
let moonX = 30; // 달의 x 좌표
let moonY = 50; // 달의 y 좌표
let customFont;

let enterPressed = false;

function preload() {
  customFont = loadFont('neodgm.ttf');
}
function setup() {
  createCanvas(1920, 1080);
  noStroke();
  startCharacter = new startCharacter(0, 835, 5); 
    for (let i = 0; i < 100; i++) {
      snowflakes.push(new Snowflake(random(6, 10))); 
    }

  }

function draw() {
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
}


function messageNotice(){
  if (startCharacter.x> 100 && startCharacter.x < 400||startCharacter.x> 550 && startCharacter.x< 850||startCharacter.x > 1000 && startCharacter.x< 1350){
    fill(255, 200, 0)
    rect(1400, 80, 400, 100);
    fill(0)
    textSize(30);  
    textFont(customFont);
    text('메시지가 도착했습니다!', 1435, 140);
  }
}

function schoolMessage(){
      fill(255)
      textSize(26)
      ellipse(1360, 270, 50, 50); 
      text("친구", 1330, 330 )
      rect(1400,260, 470, 160 );
      fill(0);
      text(
        "그럼 내일 저녁에 다같이 보는거다? \n이거 몇 년 만의 모임이야.\n무조건 전원 참석해. \n특히 연애한다고 못 오기만 해봐라!!",
        1415, 300)
    }
function boyfriendMessage(){
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
function familyMessage(){
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

  triangle(x, y , x + size / 2, y +size / 2, x - size / 2, y +size / 2);
  triangle(x, y + size/4 , x + size / 2, y + size , x - size / 2, y + size );
  triangle(x, y + size / 2, x + size / 2, y + size * 1.5, x - size / 2, y + size * 1.5);

  // 트리 기둥 그리기
  fill(139, 69, 19);
  rect(x - size / 10, y + size * 1.5, size / 5, size/2); // 직사각형으로 트리 기둥 그리기
}
function snowFlakesAll(){
  //눈 그리는 부분
  for (let i = 0; i < 2; i++) { // 눈송이를 매 프레임마다 5개씩 생성
    let snowflake = new Snowflake(random(2, ));
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

function drawSchool(){
    //학교
    fill('#dcdcdc');
    triangle(220, 600, 50, 900, 390, 900)
    rect(355, 550, 30, 350)
    rect(340, 550, 30, 30)
    rect(380, 570, 30, 30)
    rect(380, 620, 30, 30)
    fill(0, 0, 30);
    triangle(220, 650, 90, 900, 350, 900 )
}

function drawCinema(){
  //영화관
  //팝콘
  fill(255, 255,0);
  arc(695, 640, 130, 60, PI, TWO_PI)
  fill(255)
  rect(630, 640, 130, 40)
  fill(200, 0,0)
  fill(200, 0, 0);
  for (let popcorn = 0; popcorn < 100; popcorn += 40) {
    rect(645 + popcorn, 640, 20, 40);
  }
  fill(200, 0,0)
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
  fill(255, 255,0);
for(let cinema =0; cinema<270; cinema+=20){
  ellipse(570+cinema, 770, 10, 10);
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
  rect(x - width/6, 800, 80, 100);

  // 창문
  fill(0, 0, 250); // 파란색
  stroke(255);
  rect(x - width / 3, 740, 30, 30);
  rect(x - width / 5, 740, 30, 30);
  rect(x +30, 740, 30, 30);
  rect(x +64, 740, 30, 30);
}


function notice(){
  //안내멘트
  noStroke();
    textFont(customFont);
    fill(255);
    textSize(40);
    text("좌우 화살표 키를 눌러 이동하세요!", 300, 130)
    textSize(30);
    text("메시지가 도착하면 'ENTER' 버튼을 눌러 읽어주세요!", 280, 200)

  if(startCharacter.x>1050){
    noStroke();
    textFont(customFont);
    fill(0);
    textSize(40);
    text("스페이스바를 눌러 집으로 들어가세요!", 300, 1000)
  }

  fill(255);
  text("Merry Christmas", 1500, 870)
}

