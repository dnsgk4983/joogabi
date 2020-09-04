// 메뉴 호버 애니메이션
$(function(){
    $('.menu li:not(:nth-child(6))').mouseover(function(){
        $(this).css('background','#3f5bc8');
        $(this).children().css("color","#fff");
    });
    $('.menu li:not(:nth-child(6))').mouseleave(function(){
        $(this).css('background','#ffffff');
        $(this).children().css("color",'#000');
    });
    var model=$(".condition-pagination > ul > li");
    model.click(function(){ 
    model.removeClass("on");
    $(this).addClass("on");
    });
    var board = $(".trend-board-tab > ul >li");
    board.click(function(){
      board.removeClass('active');
      $(this).addClass('active');
    });
    var boardCounter = $('.trend-board-count > ul > li');
    boardCounter.click(function(){
      boardCounter.removeClass('on');
      $(this).addClass('on');
    });
});

// 공지사항 롤링 애니메이션
jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('#ticker li:first').animate( {marginTop: '-61px'}, 500, function()
            {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 2000);         
      };
// 0번 이전 기능
      $(document).on('click','.prev',function(){
        $('#ticker li:last').hide().prependTo($('#ticker')).slideDown();
        clearTimeout(timer);
        ticker();
        if($('#pause').text() == 'Unpause'){
          $('#pause').text('Pause');
        };
      }); // 0번 기능 끝
  
// 1. 클릭하면 다음 요소 보여주기... 클릭할 경우 setTimeout 을 clearTimeout 해줘야 하는데 어떻게 하지..
      $(document).on('click','.next',function(){
            $('#ticker li:first').animate( {marginTop: '-61px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul#ticker').removeAttr('style');
                    });
            clearTimeout(timer);
            ticker();
            //3 함수와 연계 시작
            if($('#pause').text() == 'Unpause'){
              $('#pause').text('Pause');
            }; //3 함수와 연계
          }); // next 끝. timer 를 전연변수보다 지역변수 사용하는게 나을 것 같은데 방법을 모르겠네요.

  //2. 재생정지기능 시작, 아직 다음 기능과 연동은 안됨...그래서 3을 만듦
  var autoplay = true;
      $(document).on('click','.pause',function(){
            if(autoplay==true){
              clearTimeout(timer);
              $(this).text('재생');
              autoplay=false;
            }else{
              autoplay=true;
              $(this).text('정지');
              ticker();
            }
          }); // 재생정지기능 끝  
  // 3. 재생정지 함수 시작. 2와 기능 동일함.
    var tickerpause = function()
  {
    $('#pause').click(function(){
      $this = $(this);
      if($this.text() == 'Pause'){
        $this.text('Unpause');
        clearTimeout(timer);
      }
      else {
        ticker();
        $this.text('Pause');
      }
    });
   
  };
  tickerpause();
  //3 재생정지 함수 끝
  //4 마우스를 올렸을 때 기능 정지
  var tickerover = function()
  {
    $('#ticker').mouseover(function(){
      clearTimeout(timer);
    });
    $('#ticker').mouseout(function(){
      ticker();
    });  
  };
  tickerover();
  // 4 끝
    ticker();
    
});

    // 주요모델 슬라이드
    $('.condition-pagination li:nth-child(1)').click(function(){
        $('.condition-conts').fadeOut();
        $('.iphone-11pro-max').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.iphone-11pro-wrap').fadeIn();
    });
    $('.condition-pagination li:nth-child(2)').click(function(){
        $('.condition-conts').fadeOut();
        $('.iphone-XS').css("display",'flex');
        $('.iphone-XS').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.iphone-XS-wrap').fadeIn();
    });
    $('.condition-pagination li:nth-child(3)').click(function(){
        $('.condition-conts').fadeOut();
        $('.galaxy-note-s20').css("display",'flex');
        $('.galaxy-note-s20').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.galaxy-note-S20-wrap').fadeIn();
    });
    $('.condition-pagination li:nth-child(4)').click(function(){
        $('.condition-conts').fadeOut();
        $('.galaxy-s9').css('display','flex');
        $('.galaxy-s9').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.galaxy-S9-wrap').fadeIn();
    });
    $('.condition-pagination li:nth-child(5)').click(function(){
        $('.condition-conts').fadeOut();
        $('.galaxy-s10').css('display','flex');
        $('.galaxy-s10').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.galaxy-S10-wrap').fadeIn();
    });
    $('.condition-pagination li:nth-child(6)').click(function(){
        $('.condition-conts').fadeOut();
        $('.iphone-SE').css('display','flex');
        $('.iphone-SE').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.iphone-SE-wrap').fadeIn();
    });


    // 마이페이지 단가표 관리 영역
    $(function(){
      $('ul.tab li').on('click',function(){
        var activeTab = $(this).attr('data-tab');
        $('ul.tab li').removeClass('current');
        $('ul.tab-2 li').removeClass('current');
        $('ul.tab-3 li').removeClass('current');
        $('.tabcontent').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');

      });
      $('ul.tab-2 li').on('click',function(){
        var activeTab = $(this).attr('data-tab');
        $('ul.tab li').removeClass('current');
        $('ul.tab-2 li').removeClass('current');
        $('ul.tab-3 li').removeClass('current');
        $('.tabcontent').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');

      });
      $('ul.tab-3 li').on('click',function(){
        var activeTab = $(this).attr('data-tab');
        $('ul.tab li').removeClass('current');
        $('ul.tab-2 li').removeClass('current');
        $('ul.tab-3 li').removeClass('current');
        $('.tabcontent').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    });



    
  });
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
// 차트 영역
