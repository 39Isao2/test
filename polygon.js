// シーン1,２用の変数
let pNUm;
let size;
let size2;
let size3;
let pNum2;


/* 多角形描画命令*/
// https://qiita.com/reona396/items/5fa4babc8243c4ed4914
function polygon(x, y, size, pointNum){
   const Radius = size;
   const angleStep = 2*PI/pointNum ;
   let angle = 0;
   beginShape();
   for(let i=0;i<=pointNum;i=i+1){
      let px = x + Radius*cos(angle);
      let py = y + Radius*sin(angle);
      vertex(px, py);
      angle = angle + angleStep;
   }
   endShape(CLOSE);
}

// 初期化
function setupPolygon(){
		pNUm = 3;
	pNum2 = 3;
		size = 0;
		size2 = 0;
	size3 = 0;
		angle = 0;
}


// シーン1
function drawTriangles(){
		rotateY(angle);
		rotateZ(angle);
		fill(330,74,85,80);
		size2 += (50 - size2) * 0.1;
		polygon(-100,0,size2,pNUm);
		fill(155,64,88,80);
		
		//    細いlineを描画
		//     stroke(0);
		//     strokeWeight(0.1);
		//     line(-100, -100,-100, 
		//     100,100,100);
		//     // line(-100, -100,-100, 
		//     // 100,100,100);
		// 		noStroke();
	
		push()
			rotateX(90);
			polygon(100,0,size2,pNUm);
		pop();
}


// シーン2
function drawPolygons(){
			rotateX(angle);
		  rotateY(angle);
		fill(155,64,88,80);
			size += (100 - size) * 0.1;
			polygon(-150,0,size,pNUm);
	
			//    細いlineを描画
		    stroke(0);
		    strokeWeight(0.5);
		    line(-100, -100,-100, 
		    100,100,100);
		    // line(-100, -100,-100, 
		    // 100,100,100);
				noStroke();
	
	
			push()
				rotateX(90);
	fill(330,74,85,80);
			
				polygon(150,0,size,pNum2);
			pop();
			pNUm+=0.1;
			if(pNUm> 	11){
				pNUm =3;
				size*=-1;
			}
	
				pNum2+=0.05;
			if(pNum2> 	11){
				pNum2 =3;
				size*=-1;
			}
	
	
}


// ロンリー
function lonlyTriangle(){
		rotateY(angle);
		rotateZ(angle);
		fill(330,74,85,80);
		size2 += (50 - size2) * 0.05;
		polygon(-100,0,size2,pNUm);
}

function resetPorigonSize(){
		size = 0;
		size2 = 0;
	 size3 = 0;
	}



