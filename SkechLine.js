class SketchLine{
  constructor() {
    this.memoryPoints = [];
		this.mainCol1 = color(330,74,85,80);
	  this.mainCol2 = color(155,64,88,80);
	  this.mainCol3 = color(176,32,97,80);
  	this.mainCol4 = color(50,26,99,80);
    this.colors = [this.mainCol1,this.mainCol2,this.mainCol3,this.mainCol4];
		this.col = [];
  }
  
  update(){
    // 600カウントしたら一度クリアする
    if(frameCount % 600 == 0){
      //this.memoryPoints.clear();
      this.memoryPoints.length = 0;
    }
    
    
    // ランダムで描画ポイント決定
    let x = random(-300, 300);
    let y = random(-300, 300);
    let z = random(-300, 300);
    this.memoryPoints.push(new p5.Vector(x, y, z));
    //this.col.push(color(random(255), random(255),random(255),200));
		//this.col.push(color(random(360), 100,100,100));
		let r = int(random(this.colors.length));
		this.col.push(this.colors[r]);
		//this.col.push(this.mainCol4);
  }
  
  // 描画
  display(){
    
    // 色や線幅の設定
    stroke(0);
    strokeWeight(0.1);
    
    // 図形を自走でスケッチしてくれるlineを描画
    line(0, 0, 0, 
    this.memoryPoints[this.memoryPoints.length - 1].x,
    this.memoryPoints[this.memoryPoints.length - 1].y, 
    this.memoryPoints[this.memoryPoints.length - 1].z);
    
    // 線なしに
    noStroke();
    
    // 前回の分をfor文で回す
    for(let i = 0; i < this.memoryPoints.length; i++){
			
			// 色
			fill(this.col[i]);
      
      // 近くのポイントを取得するためのArrayListを用意
      let nearPoint = [];
      
      // 一つ先のポイントとの距離を図る為の2重目のループ
      for(let j = 0; j < this.memoryPoints.length; j++){
        // 距離図って取得
        let distance = p5.Vector.dist(this.memoryPoints[i], this.memoryPoints[j]);
        // 75以下だったらnearPointに追加
        if(distance < 75){
          nearPoint.push(this.memoryPoints[j]);
        }
      }
      
      // vertexで図形を描画
      beginShape();
      for(let i=0; i<nearPoint.length; i++){
        vertex(nearPoint[i].x, nearPoint[i].y, nearPoint[i].z);
      }
      endShape(CLOSE);
    }
  }
}