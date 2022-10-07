const canvas =document.getElementById('canvas1')
const ctx=canvas.getContext('2d')
// console.log(canvas);
// console.log(ctx);

// canvas should cover the entire window so adjust its widht and height

// done for correct scaling of the coordinates
canvas.width=window.innerWidth
canvas.height=window.innerHeight

// since on screen resolutions, it changes our canvas drawings
// we write a trigger for resizing of the screen

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    // since the below canvas executes only once on page load, so we write in this
    // trigger so that, on resize then it will draw
    
    // for rect
    // ctx.fillStyle='blue'
    // ctx.fillRect(25,30,150,100)
})
// for rect
// ctx.fillStyle='blue'
// ctx.fillRect(25,30,150,100)

ctx.fillStyle='white'
// its also used to draw a curve or semi circle on canvas
// so basically lines can be activated by using ctx.beginPath
// its like paint brush access on canvas
ctx.beginPath()

ctx.arc(50,100,50,0,Math.PI*2)
// ctx.arc(100,100,100,1,Math.PI*2)
ctx.fill();

