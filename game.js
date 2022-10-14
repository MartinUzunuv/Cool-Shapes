arrx = []
arry = []
r = 20

for(i=1; i < 10; i++){
    arrx.push({x:i*50+50, y:50, a: 0, speed: Math.PI/100*(i/5)})
    arry.push({x:50, y:i*50+50, a: 0, speed: Math.PI/100*(i/5)})
}

function draw(){
    for(i=0; i < arrx.length; i++){
        context.fillRect(arrx[i].x+Math.cos(arrx[i].a)*r, arrx[i].y+Math.sin(arrx[i].a)*r, 3,3)
    }
    for(i=0; i < arry.length; i++){
        context.fillRect(arry[i].x+Math.cos(arry[i].a)*r, arry[i].y+Math.sin(arry[i].a)*r, 3,3)
    }
    for(x=0; x < arrx.length; x++){
        for(y=0; y<arry.length; y++){
            context.fillRect(arrx[x].x+Math.cos(arrx[x].a)*r, arry[y].y+Math.sin(arry[y].a)*r, 3,3)
        }
    }
}
function update(){
    for(i=0; i < arrx.length; i++){
        arrx[i].a+=arrx[i].speed
    }
    for(i=0; i < arry.length; i++){
        arry[i].a+=arry[i].speed
    }
}