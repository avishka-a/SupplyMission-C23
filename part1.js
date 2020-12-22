class Center{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width=w
        this.height=h
    }
   display(){
       //rectMode(center)
      fill('red')
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
          }
}

