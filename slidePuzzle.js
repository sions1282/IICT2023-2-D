// Source image to chop up
let customFont;
let swissSong;
// Tiles configuration
let tiles = [];
let cols = 3; // 변경
let rows = 3; // 변경
let w, h;

let clickCount = 0;
let currentMessage = 0;
let currentSolveMessage = 0;

// Order of tiles
let board = [];
//싸움 메시지
let messages = [
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



// Loading the image
function preload() {
  travelPuzzle = loadImage("travelPuzzle.png");
  finishTravel = loadImage("finishTravel.png")
  customFont = loadFont("neodgm.ttf");
  swissSong = loadSound("swissSong.mp3")

}

let originalOrder = [0, 3, 6, 1, 4, 7, 2, 5, 8];
let resetButton;
let solveButton;

function setup() {
  createCanvas(1920, 1080); // 변경
  // pixel dimensions of each tile
  w =1080 / cols;
  h = 1080 / rows;


  //음악 버튼
  let playButton = createButton('Music Start');
  playButton.style('font-size', '30px');
  playButton.style('font-family', 'neodgm')
  playButton.style('width', '200px'); // 버튼의 너비 설정
  playButton.style('height', '80px');
  playButton.position(1400, 850);
  playButton.mousePressed(playMusic);
  
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

// Move based on click
function mousePressed() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  move(i, j, board);
}

function draw() {
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
      displayMessage1(messages[currentMessage]);
      displayMessage2(solveMessages[currentSolveMessage]);
      }
    }

  
  // If it is solved
  if (isSolved()) {
    fill(255, 100, 150, 150);
    rect(0,0, 1080, 1080);
    image(travelPuzzle, 540, 540)

    // Display "완성했습니다!" message
    textFont(customFont)
    textSize(40);
    fill(255);
    text('가족들과 행복한 스위스여행을 마쳤습니다!', 950,50);
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


function travelTalk(){
  noStroke();
  fill('#4B89DC')
  rect(1120, 160, 750, 250)
    fill(255);
    textSize(27);
    push();
    textFont(customFont)
    textAlign(CENTER);
    text(
      "가족들과 여행하다보면\n종종 피곤하고 짜증나는 순간들이 있다.\n그럼에도 돌아보면 행복했던 기억들이 대부분인 것 같다!", 1500, 200);
    text("인내심을 갖고 갈등을 해결하며\n행복한 가족 여행을 완성해보자!", 1510, 305);
    text("(마우스로 퍼즐을 클릭해 사진을 완성해주세요!)", 1510, 380);
    pop();
}

function playMusic() {
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
  text(message, 1490, 520); // 메시지 위치 및 내용
}

function displayMessage2(message) {
  textAlign(RIGHT);
  textFont(customFont)
  fill(255)
  rect(1200, 600, 560, 70)
  ellipse(1810, 590, 50, 50)
  rect(1785,615, 50, 50)
  fill(0);
  text(message, 750, 620, 1000, 200); // 메시지 위치 및 내용
}


function mouseClicked() {
  clickCount++;
  displayMessages();
}

function displayMessages() {
  if (clickCount >= 10 && clickCount % 10 === 0 && currentMessage < messages.length) {
    displayMessage1(messages[currentMessage]);
    currentMessage++;
  }

  if (clickCount >= 10 && clickCount % 10 === 0 && currentSolveMessage < solveMessages.length) {
    displayMessage2(solveMessages[currentSolveMessage]);
    currentSolveMessage++;
  }
}
