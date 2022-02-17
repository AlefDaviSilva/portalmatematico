function preload(){          //carregar arquivos
soundFormats('mp3') 
msc=loadSound('musicamenu.mp3')
img0=loadImage('fundo0.jpg')
img1=loadImage('fundo1.jpg')
img2=loadImage('fundo2.jpg') 
img3=loadImage('fundo3.jpg') 
img4=loadImage('foto1.jpg') 
img5=loadImage('foto2.jpeg')
img6=loadImage('nave.png') 
img7=loadImage('portal.png') 
img8=loadImage('gameover.jpg') 
img9=loadImage('win.jpg') 
img10=loadImage('inicio.jpeg')
}
opcao = 1
var tela = 0
var largura = 200
var altura = 50
var xmenu = 150
var ymenu1 = 100
var xnave = 250 
var ynave = 400
var pontos = 0 
var nivel = 0 
var vidas = 3


function setup() {
  createCanvas(500,500);

        msc.loop()
      
}

function draw() {
  //botão iniciar
  if(tela==0){
           
  image(img0,0,0,500,500)               //imagem de fundo
  textAlign(CENTER)           //alinhar o texto dos botões
  textSize(26)                 //tamanho do texto
  
  stroke(38,255,223)         //cor das linhas
  fill(8,166,150)            //cor interna das figuras
  rect(xmenu,ymenu1,largura,altura,22) //forma do botão
     
     fill(38,255,223)
     noStroke()
     textStyle(ITALIC)
     text('Portal Matemático',250,50)
      
     textStyle(NORMAL)
     fill(1,28,38)
     strokeWeight(3)             //tamanho das linhas
     stroke(38,255,223)
     text("Iniciar",250,135)       //escreve na tela
    
    //botão informações 
     fill(1,28,38)
     strokeWeight(3)
     stroke(38,255,223)
     text("Informações",250,195) 
    
     //botão creditos
     fill(1,28,38)
     strokeWeight(3)
     stroke(38,255,223)
     text("Creditos",250,255)   
    
    if(key=="Enter"){ 
     tela=opcao} 
     
  }
 
    else if(tela==100){
    image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("6+6",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20) 
    text("NIVEL 1",50,480)
    
    textSize(20)
    text("13",100,230)
    text("12",250,230)
    text("9",400,230)  
      
    
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
        vidas--
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400 
        pontos++ 
        tela=4 

      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
      

  if(vidas==0){ 
 tela=13 
 }
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
    } 
    
  
     else if(tela==2){

      textSize(22)
      image(img2,0,0,500,500)  
      fill(8,166,150)
      stroke(38,255,223)
      text("Informações do jogo",250,50) 
       
      textSize(15)
      fill(38,255,223)
      noStroke()
      
      text('serão fornecidas perguntas relacionadas operações '+"\n"+'matemáticas com números inteiros e o personagem '+"\n"+'precisa escolher o portal da resposta correta para'+"\n"+'subir de nivel.'+"\n"+'Habilidade: (EF07MA04) ',250,150)
       
       
      
     if(key=="Escape"){ 
     tela=0}
    
     } 
  
     else if(tela==3){
  
      fill(8,166,150)
      image(img3,0,0,500,500) 
      stroke(38,255,223)
      strokeWeight(8)
      rect(30,40,110,120);
      rect(30,230,110,120)
      image(img4,30,40); 
      image(img5,30,230,110,120);
       
      textSize(18)
      fill(38,255,223)
      strokeWeight(0)
      text("Alef Davi Silva",250,80)  
      text("Ana Angelica",250,280)
      
      textSize(30)
      text("Créditos",250,40) 
      
      textSize(22)
      
      fill(38,255,223)
      text("Programador",250,100) 
      text('Educador',250,300)
      
    
      
       if(key=="Escape"){ 
     tela=0}
     } 
  
    else if(tela==4){
      image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("6+5+2",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20)
    text("NIVEL 2",50,480)

      
    textSize(20)
    text("13",100,230)
    text("16",250,230)
    text("19",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         pontos++ 
         tela=5
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
    else if(tela==5){  
     image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("6+12",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20) 
    text("NIVEL 3",50,480)

      
    textSize(20)
    text("14",100,230)
    text("17",250,230)
    text("18",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         vidas--
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
         pontos++ 
        tela=6
        
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    } 
      else if(tela==6){ 
          image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("20-2+1+7",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20) 
    text("NIVEL 4",50,480)

      
    textSize(20)
    text("26",100,230)
    text("25",250,230)
    text("27",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         pontos++ 
         tela=7
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
   else if(tela==7){
              image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("5-5*12",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20)   
    text("NIVEL 5",50,480)

      
    textSize(20)
    text("60",100,230)
    text("56",250,230)
    text("55",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         vidas--
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
         pontos++ 
         tela=8
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
  
 else if(tela==8){
        image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("-2-90-7+2*2",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20) 
    text("NIVEL 6",50,480)

      
    textSize(20)
    text("-97",100,230)
    text("-95",250,230)
    text("-99",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         vidas-- 
         
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
         pontos++ 
         tela=9
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
  
  else if(tela==9){ 
           image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("36+84-2",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20) 
    text("NIVEL 7",50,480)

      
    textSize(20)
    text("118",100,230)
    text("111",250,230)
    text("119",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         pontos++ 
         tela=10
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
      
if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
  
    else if(tela==10){ 
          image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("60-47+98-2*6",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20)  
    text("NIVEL 8",50,480)

      
    textSize(20)
    text("89",100,230)
    text("104",250,230)
    text("99",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         vidas-- 
         
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        pontos++ 
        tela=11
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
  
    else if(tela==11){ 
           image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("789+12-12-788+4*4",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20) 
    text("NIVEL 9",50,480)

      
    textSize(20)
    text("19",100,230)
    text("17",250,230)
    text("14",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         vidas-- 
         
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
         pontos++
        tela=12
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
       
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
  
    else if(tela==12){ 
        image(img1,0,0,500,500) 
    image(img6,xnave,ynave,80,80)
    image(img7,20,70,160,160)
    image(img7,170,70,160,160) 
    image(img7,320,70,160,160)

    a = dist(xnave,ynave,20,70) 
    b = dist(xnave,ynave,170,70)
    c = dist(xnave,ynave,320,70)

          
    
    stroke(100) 
    fill(38,255,223)
    textSize(35)
    text("225*2-225+598*0+1",250,60) 
    textSize(20) 
    text("pontos: "+pontos,50,20)    
    text("vidas: "+vidas,450,20)  
    text("NIVEL 10",50,480)

      
    textSize(20)
    text("451",100,230)
    text("450",250,230)
    text("455",400,230)
    
    if(a>0 && a<80){
    
         xnave=250 
         ynave=400
         pontos++ 
         tela=14
         
         
       }  
      if(b>0 && b<80){ 
        xnave=250 
         ynave=400  
        vidas--
     
      }
      
      if(c>0 && c<80){ 
        xnave=250 
         ynave=400 
        vidas--
          
      } 
       
  
      
 if(vidas==0){ 
 tela=13 
 }
      
      
       
       
    if(keyIsPressed){ 
  if (keyCode === LEFT_ARROW) {
    xnave = xnave-10;
  } else if (keyCode === RIGHT_ARROW) {
    xnave = xnave+10;
  } else if (keyCode === UP_ARROW) { 
    ynave= ynave-10 
  } else if (keyCode === DOWN_ARROW) { 
    ynave= ynave+10
  }

 }      
    if(xnave>=0 && xnave<500 && ynave>=0 && ynave<500){
 xnave=xnave
 ynave=ynave 
   }else{
       xnave=250
       ynave=400 
     } 
      
      
      
    

      
      if(key=="Escape"){ 
     tela=0
     vidas=3 
     pontos=0
      }
    
      
    }
 
  
   else if(tela==13){ 
    image(img8,0,0,500,500) 
    textSize(70) 
    fill(38,255,223)
    stroke(38,255,223)
    text('GAME\nOVER',250,230)  
     
    textSize(30)
    text("Aperte 'ENTER'",120,480) 
     
    text("Pontos: "+pontos,80,35)
     
     if(key=="Enter"){ 
     tela=100
     vidas=3 
     pontos=0
      }
     
   
   }
  
  else if(tela==14){ 
    image(img9,0,0,500,500)
    textSize(70) 
    fill(38,255,223)
    stroke(38,255,223)
    text('PARABÉNS',250,230)  
     
    textSize(30)
    text("Aperte 'ENTER'",120,480) 
     
    text("Pontos: "+pontos,80,35)
     
     if(key=="Enter"){ 
     tela=100
     vidas=3 
     pontos=0
      }
  
  }
      else if(tela==1){ 
       image(img10,0,0,500,500)
       textSize(30) 
    fill(38,255,223)
    stroke(0)
    text('Intruções: Use as setas para mover.\nsinais: \n " - " = Subtração\n" + " = Soma\n" * " = Multiplicação  ',250,180)  
     
    textSize(30)
    text("Aperte 'P' Para iniciar",170,480) 
        
        if(key=="p"){ 
       tela=100
       }
       
      }
      
}

  
  function keyPressed(){
    if(key=="ArrowUp" && ymenu1>=150){ 
    ymenu1=ymenu1-60
    opcao=opcao-1
    console.log(opcao)
  } 
    
  if(key=="ArrowDown" && ymenu1<=200){
    ymenu1=ymenu1+60
     opcao=opcao+1 
    console.log(opcao) } 
    
  }