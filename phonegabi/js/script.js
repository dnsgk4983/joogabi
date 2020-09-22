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
    // 단가표게시판
    var unitCount = $('.unit-area > ul > li');
    unitCount.click(function(){
      unitCount.removeClass('active');
      $(this).addClass('active');
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
// 실시간 인기 검색 슬라이드
jQuery(function($)
{
    var popticker = function()
    {
        timer = setTimeout(function(){
            $('#popticker li:first').animate( {marginTop: '-14px'}, 500, function()
            {
                $(this).detach().appendTo('ul#popticker').removeAttr('style');
            });
            popticker();
        }, 2000);         
      };
// 0번 이전 기능
  


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
              popticker();
            }
          }); // 재생정지기능 끝  
  // 3. 재생정지 함수 시작. 2와 기능 동일함.
    var poptickerpause = function()
  {
    $('#pause').click(function(){
      $this = $(this);
      if($this.text() == 'Pause'){
        $this.text('Unpause');
        clearTimeout(timer);
      }
      else {
        popticker();
        $this.text('Pause');
      }
    });
   
  };
  poptickerpause();
  //3 재생정지 함수 끝
  //4 마우스를 올렸을 때 기능 정지
  var poptickerover = function()
  {
    $('#popticker').mouseover(function(){
      clearTimeout(timer);
    });
    $('#popticker').mouseout(function(){
      popticker();
    });  
  };
  poptickerover();
  // 4 끝
    popticker();
    
});

    // 주요모델 슬라이드
    $('.iphone-11pro-max > .condition-left > img').click(function(){
        $('.condition-conts').fadeOut(0);
        $('.iphone-SE').fadeIn(0);
        $('.iphone-SE').css('display','flex');
        $('.chart-wrap').fadeOut(0);
        $('.iphone-SE-wrap').fadeIn(0);
    });
    $('.iphone-11pro-max > .condition-right > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.iphone-XS').fadeIn(0);
      $('.iphone-XS').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-XS-wrap').fadeIn(0);
    });
    // iphone-11pro-max

    $('.iphone-XS > .condition-left > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.iphone-11pro-max').fadeIn(0);
      $('.iphone-11pro-max').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-11pro-wrap').fadeIn(0);
    });
    $('.iphone-XS > .condition-right > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.galaxy-note-s20').fadeIn(0);
      $('.galaxy-note-s20').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-note-S20-wrap').fadeIn(0);
    });

    // iphone-XS

    $('.galaxy-note-s20 > .condition-left > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.iphone-XS').fadeIn(0);
      $('.iphone-XS').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-XS-wrap').fadeIn(0);
    });
    $('.galaxy-note-s20 > .condition-right > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.galaxy-s9').fadeIn(0);
      $('.galaxy-s9').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S9-wrap').fadeIn(0);
    });
    
    // galaxy-note-s20

    $('.galaxy-s9 > .condition-left > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.galaxy-note-s20').fadeIn(0);
      $('.galaxy-note-s20').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-note-S20-wrap').fadeIn(0);
    });
    $('.galaxy-s9 > .condition-right > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.galaxy-s10').fadeIn(0);
      $('.galaxy-s10').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S10-wrap').fadeIn(0);
    });

    // galaxy-s9

    $('.galaxy-s10 > .condition-left > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.galaxy-s9').fadeIn(0);
      $('.galaxy-s9').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S9-wrap').fadeIn(0);
    });
    $('.galaxy-s10 > .condition-right > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.iphone-SE').fadeIn(0);
      $('.iphone-SE').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-SE-wrap').fadeIn(0);
    });

    // galaxy-s10

    $('.iphone-SE > .condition-left > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.galaxy-s10').fadeIn(0);
      $('.galaxy-s10').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S10-wrap').fadeIn(0);
    });
    $('.iphone-SE > .condition-right > img').click(function(){
      $('.condition-conts').fadeOut(0);
      $('.iphone-11pro-max').fadeIn(0);
      $('.iphone-11pro-max').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-11pro-wrap').fadeIn(0);
    });

    // 가격비교 페이지 영역
    $('.compare-search-icon').click(function(){
      $('.compare-search-icon').toggleClass('compare-close');
      $('.compare-detail-search').slideToggle(0);
    });

    // 마이페이지 모달
    $('.modal-close').click(function(){
      $('.modal-wrapper').fadeOut(0);
    });
    // 회사관리자 모달
    $('.md-cp-open').click(function(){
      $('.modal-window').fadeOut(0);
      $('.modal-company').fadeIn(0);
    });
    // 회사이름 입력모달
    $('.modal-company > .md-cp-create button').click(function(){
      $('.modal-company').fadeOut(0);
      $('.md-suc').fadeIn(0);
    });
    $('.md-user-open').click(function(){
      $('.modal-window').fadeOut(0);
      $('.md-user').fadeIn(0);
    });
    // 합류완료 모달
    $('.md-user > .md-cp-create button').click(function(){
      $('.md-user').fadeOut(0);
      $('.md-join').fadeIn(0);
    })
    // 스태프 페이지 모달
    $('.stf-modal-wrapper .modal-close').click(function(){
      $(".stf-modal-bg").fadeOut(0);
      $(".stf-modal-wrapper").fadeOut(0);
    });
    $(".stf-del button").click(function(){
      $('.stf-modal-bg').fadeIn(0);
      $('.stf-modal-wrapper').fadeIn(0);
      $('.stf-md-del-wrap').fadeIn(0);
      $('.stf-md-code-wrap').fadeOut(0);
    });
    $('.stf-btn button:last-child').click(function(){
      $(".stf-modal-bg").fadeIn(0);
      $(".stf-modal-wrapper").fadeIn(0);
      $('.stf-md-code-wrap').fadeIn(0);
      $('.stf-md-del-wrap').fadeOut(0);
    });
// 차트 영역