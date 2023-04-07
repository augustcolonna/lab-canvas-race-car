  window.onload = () => {

  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  const startScreen = document.querySelector('.game-intro')
  const startBtn = document.querySelector('#start-button')
  const bgImg = new Image()
  bgImg.src = '/images/road.png';

  const playerCar = new Image()
  playerCar.src = '/images/car.png' 


  let isMovingLeft = false;
  let isMovingRight = false;
  
  let carX = 300;
  let carY = 500;
  let carWidth = 40;
  let carHeight = 90;
  let carSpeed = 2
  
  let obstaclesWidth = 150;
  let obstaclesHeight = 25;
  


  let gameOver = false;
  let animateId
  
  canvas.style.display = 'none'
  

  
  const drawObstacle = () => {
    ctx.beginPath()
    ctx.fillstyle = 'black';
    ctx.rect(20, 0, obstaclesWidth, obstaclesHeight)
    ctx.closePath()

  }

  const animate = () => {
    ctx.drawImage(bgImg, 0,0, canvas.width, canvas.height)
    ctx.drawImage(playerCar, carX, carY, carWidth, carHeight)


    //move the car leftr and right
    if(isMovingLeft && carX > 0){
      carX -= carSpeed
  }
    else if(isMovingRight && carX < canvas.width - carWidth){
      carX += carSpeed
    }

    if(gameOver){
      cancelAnimationFrame(animateId)
    }
    else{
      animateId = requestAnimationFrame(animate)
    }

    
  }

  function startGame() {
    console.log("start your engines!")
    startScreen.style.display = 'none'
    canvas.style.display = 'block'
    animate()
    drawObstacle()
  }

  startBtn.addEventListener('click', startGame)


  

  document.addEventListener('keydown', event => {
    console.log(event)
    if(event.key === 'a' || event.key === 'A'){
      isMovingLeft = true;
    }
    if(event.key === 'd' || event.key === 'D'){
      isMovingRight = true;
    }
  })

  document.addEventListener('keyup', event => {
    console.log(event)
    if(event.key === 'a' || event.key === 'A'){
      isMovingLeft = false;
    }
    if(event.key === 'd' || event.key === 'D'){
      isMovingRight = false;
    }
  })
};
