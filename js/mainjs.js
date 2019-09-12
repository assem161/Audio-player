$(function(){

  $('.snowContainer').height($(window).height());


(function () {
 
  // Will it be a storm or peaceful?
  var COUNT = 300;
 
  // Get our cotaniner
  var snowContainer = document.querySelector('.snowContainer');
 
  // Create the canvas element
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
 
  // Get the size of the container, that's why we defined the height in the HTML
  var width = snowContainer.clientWidth;
  var height = snowContainer.clientHeight;
  var i = 0;
  var active = false;
 
  function onResize() {
    width = snowContainer.clientWidth;
    height = snowContainer.clientHeight;
	$('.snowContainer').height($(window).height());
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF';
  }
  $(window).load(function(){
  	update();
  })
  var Snowflake = function () {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
    this.r = 0;
 
    this.reset();
  }
  
  // You can set up the 
  var snowflakes = [], snowflake;
  Snowflake.prototype.reset = function() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    
    // More speed? Change this
    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();
 
    // Bigger snow?
    this.r = 1 + Math.random() * 2;
 
    this.o = 0.5 + Math.random() * 0.5;
  }
 
  canvas.style.position = 'absolute';
  canvas.style.left = canvas.style.top = '0';
 
  
  for (i = 0; i < COUNT; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }
 
  function update() {
 
    ctx.clearRect(0, 0, width, height);
 
    for (i = 0; i < COUNT; i++) {
      snowflake = snowflakes[i];
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;
 
      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
 
      if (snowflake.y > height) {
        snowflake.reset();
      }
    }
 
    requestAnimFrame(update);
  }
 
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
 
  onResize();
  window.addEventListener('resize', onResize, false);
 
  snowContainer.appendChild(canvas);
})();


// html Resize
$(window).resize(function(){
	$('html').height($(window).height());
})

// menu toggle class :::::::::::::::
$('.menu').click(function(){
	$('.nav').toggleClass('active');
	$('.menu2').find('li').toggleClass('activeM2');
	$('.projects').removeClass('proactive');
	$('.contact').removeClass('conactive');
	if($(window).width() <= 767){
		$('.projects').removeClass('edactive');
		$('.projects').css('transform','translate3d(0px, -800px, 0px)');
	}					
})

// menu 2 change background overlay::::
$('.menu2').find('li').eq(0).click(function(){
  $('html').css({
    'background' : 'url(images/take.jpg) repeat',
    'background-size': '100% 100%',
  })  
  $('.over').css({
    'background' : 'rgba(109 ,192 ,206 ,0.2)' 
  }) 
	$('.menu2').find('li').removeClass('activeM2');
	$('.nav').removeClass('active');

  $('.vider').load();
})

$('.menu2').find('li').eq(1).click(function(){
	$('html').css({
		'background' : 'linear-gradient(0deg,rgba(179, 164, 60, 0.7),rgba(60, 75, 179, 0.701961)) , url(images/take.jpg) repeat',
		'background-size': '100% 100%',
	})
  $('.over').css({
    'background' : 'linear-gradient(0deg,rgba(179, 164, 60, 0.4),rgba(60, 75, 179, 0.4))' 
  })   
	$('.menu2').find('li').removeClass('activeM2');
	$('.nav').removeClass('active');
	$('.projects').addClass('proactive');
	if($(window).width() <= 767){
		$('.projects').addClass('edactive');
		$('.projects').css('transform','translate3d(0px, 680px, 0px)');
	}
  $('.vider').load();  		
})


$('.menu2').find('li').eq(2).click(function(){
  $('html').css({
    'background' : 'linear-gradient(0deg,rgba(218,237,228, 0.7),rgba(218,237,228, 0.7)) , url(images/take.jpg) repeat',
    'background-size': '100% 100%',
  })  
  $('.over').css({
    'background' : 'linear-gradient(0deg,rgba(218,237,228, 0.4),rgba(218,237,228, 0.4))',
  })
	$('.menu2').find('li').removeClass('activeM2');	
	$('.nav').removeClass('active');
	$('.contact').addClass('conactive');
  $('.vider').load();  			
})

//center menu 2
	$('.menu2').each(function(){
		$(this).css('padding-top' ,($('.snowContainer').height() - $('.menu2').height()) / 3);
	})

// control video
 var stV = document.querySelector('.appear');
$('.appear').click(function(){
  if($('.appear').hasClass('pause')){
  $(this).removeClass('pause').addClass('play');
  $('.vider')[0].pause();
  stV.textContent = "play Vedio";
}else{
  $(this).removeClass('play').addClass('pause');
  $('.vider')[0].play();
  stV.textContent = "pause Vedio";
}
})	

// give class of swiper:::

if($(window).width() <= 767){
	$('.swiper-c').addClass('swiper-container');
	$('.projects').addClass('swiper-wrapper');
	$('.proj').addClass('swiper-slide');
}else{
	$('.swiper-c').removeClass('swiper-container');
	$('.projects').removeClass('swiper-wrapper');
	$('.proj').removeClass('swiper-slide');
}

// slider add swiper

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical'
    });




// javascript current song 

        var songs = ["audio/audio22.mp3","audio/Dusk Till Dawn「AMV」Kimi No Na Wa (Your Name).mp3"];
      
        var song = new Audio();

        var promise = song.play();

        var currentSong = 0;    // it point to the current song
        
        window.onload = playSong();   // it will call the function playSong when window is load
        
        function playSong(){
            
            song.src = songs[currentSong];  //set the source of 0th song 
            
            songTitle.textContent = songs[currentSong]; // set the title of song
            
            seconds.textContent = song.currentTime;

            //song.play();    // play the song

          if (promise !== undefined) {
              promise.then(() => {
                  song.play()
              }).catch(error => {
                
              });
            }
        }
      

        $('#play').on('click',function(){
            if(song.paused){
                song.play();
                $("#play img").attr("src","Pause.png");
                 //play.textContent = "play";
            }
            else{
                song.pause();
                $("#play img").attr("src","Play.png");
                //play.textContent = "pause";

            }
        })
        

        function pad(noremain){
          if(noremain < 10){
            return '0' + noremain;
          }else{
            return noremain;
          }
        }

        song.addEventListener('timeupdate',function(){ 
            
            var position = song.currentTime / song.duration;

            minutes.textContent  = pad(Math.floor(song.currentTime / 60));
            seconds.textContent =  pad(Math.floor(song.currentTime)%60);
            $('#handle').css({
              'width' :  position * 100 +'%',
              'background':'red'
            })            
        });


        $('#fill').on('click',function(e){
          var scrub = (e.offsetX / $(this).width() ) * song.duration ;
          song.currentTime = scrub;
          $('#handle').css({
              'width' :  scrub +'%',
              'background':'red'
          })    
        })



        $('#next').on('click',function(){
            currentSong++;
            if(currentSong > 1){
                currentSong = 0;
            }
            playSong();
            song.play();
            $("#play img").attr("src","Pause.png");
        })

        $('#pre').on('click',function(){
            currentSong--;
            if(currentSong < 0){
                currentSong = 1;
            }
            playSong();
            song.play();
            $("#play img").attr("src","Pause.png");
        })

      for (var i = 0 ; i < songs.length ; i++ ) {
        var songRe = songs[i].toString();
        songRe.replace('audio/',' '); 
        $('.list').append('<div data-id="'+ i +'" class="ele">' + songs[i] + '</div>');
      }


      $('.list .ele').each(function(){
        $(this).on('click',function(){
            song.src = songs[$(this).data().id];  //set the source of 0th song 

            songTitle.textContent = songs[$(this).textContent]; // set the title of song
            
            seconds.textContent = song.currentTime;
            songTitle.textContent = songs[$(this).data().id]; // set the title of song
            song.play();    // play the song
        })
      })

  




})
