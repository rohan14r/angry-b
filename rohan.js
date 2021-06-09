
class rohan{
constructor (x,y,width,length){
var options={
restitution:2,
    fiction:4,
    density:6
}
this.body=bodies.rectangle(x,y,width,height,options)

this.width=width
this.Image=loadImage ("sprites/wood.png")
this.height=height
World.add(world ,this.body)}
display(){
    var angle=this.body.angle
    push ()
    translate (this.body .angles,position .x.this.body.postion.y)
    rotation (angle)
    Imagemode(Center)
    strokeweight (4)
    fill(255)}
    


}