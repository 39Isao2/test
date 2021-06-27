/*
シーン1,2の内容  polygon.js
シーン3の内容     SkechLine.js
*/

// スケッチLIne
let sketchLine;

// シーン管理
let scene = 3;

//サウンド
// let se1;
// let se2;
// let se3;
//let bgm;

// 回転の角度
let angle = 0;


//再生前にメディアファイルを先読み
function preload(){
	// se1 = loadSound('bg1.mp3');
	// se2 = loadSound('bg2.mp3');
	// se3 = loadSound('bg3.mp3');
	// bgm = loadSound('bgm.mp3');
}

var canvas;

function setup(){
  //createCanvas(windowWidth, windowHeight, WEBGL);
  canvas = createCanvas(1400, 600,WEBGL);
  canvas.parent("P5Canvas");
  frameRate(30);  
	colorMode(HSB,360,100,100,100);
	background(100,0,100);
	noStroke();
	setupPolygon();
	sketchLine = new SketchLine();
	//bgm.play();
}


function draw(){
		// 白
		background(100,0,100);

		// scene1
		if(scene == 1){
			drawTriangles();
		}
		// scene2
		else if(scene == 2){
			drawPolygons();
		}
		// scene3
		else if(scene == 3){
				rotateY(angle);
				rotateX(angle);
				// sketchLine
				sketchLine.update();
				sketchLine.display();
		}
	else if(scene == 4){
		lonlyTriangle();
	}
		updateAmgle();
}



function keyPressed() {
	
	//resetPorigonSize();
	
	//Aキーを押したとき
	if (keyCode == 65) {
		scene = 1;
		pNUm = 3;
		// se1.play();
	} 
	//Sキーを押したとき
	else if (keyCode == 83) {
		scene = 2;
		pNUm = 3;
		// se2.play();
		size = 0;
	} 
	//Dキーを押したとき
	else if (keyCode == 68) {
		scene = 3;
		pNUm = 3;
		// se3.play();

	} 
	else if (keyCode == ENTER){
					 scene = 4;
					 pNUm = 3;
				}
	
}



// 角度更新
function updateAmgle(){
	angle+=0.01;
  if(angle > 360){
    angle = 0;
  }
}
