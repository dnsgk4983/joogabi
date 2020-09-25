// 메뉴 호버 애니메이션
$(function(){
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
    var unitCount = $('.unit-area > ul > li:not(:last-child)');
    unitCount.click(function(){
      unitCount.removeClass('active');
      $(this).addClass('active');
    });
    $('.m-tab > li').on('click',function(e){
      var mobiletab = $(this).attr('data-tab');
        $(this).toggleClass("current");
        $('ul.m-tab li').removeClass('current');
        $('.m-tc').removeClass('current');
        $(this).addClass('current');
        $('#' + mobiletab).addClass('current');
    })
  });


// 공지사항 롤링 애니메이션
jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('#mticker li:first').animate( {marginTop: '-61px'}, 500, function()
            {
                $(this).detach().appendTo('ul#mticker').removeAttr('style');
            });
            ticker();
        }, 2000);         
      };
// 0번 이전 기능
      $(document).on('click','.prev',function(){
        $('#mticker li:last').hide().prependTo($('#mticker')).slideDown();
        clearTimeout(timer);
        ticker();
        if($('#pause').text() == 'Unpause'){
          $('#pause').text('Pause');
        };
      }); // 0번 기능 끝
  
// 1. 클릭하면 다음 요소 보여주기... 클릭할 경우 setTimeout 을 clearTimeout 해줘야 하는데 어떻게 하지..
      $(document).on('click','.next',function(){
            $('#mticker li:first').animate( {marginTop: '-61px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul#mticker').removeAttr('style');
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
    $('#mticker').mouseover(function(){
      clearTimeout(timer);
    });
    $('#mticker').mouseout(function(){
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
    var mpticker = function()
    {
        timer = setTimeout(function(){
            $('#mpticker li:first').animate( {marginTop: '-14px'}, 500, function()
            {
                $(this).detach().appendTo('ul#mpticker').removeAttr('style');
            });
            mpticker();
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
    var mptickerpause = function()
  {
    $('#pause').click(function(){
      $this = $(this);
      if($this.text() == 'Pause'){
        $this.text('Unpause');
        clearTimeout(timer);
      }
      else {
        mpticker();
        $this.text('Pause');
      }
    });
   
  };
  mptickerpause();
  //3 재생정지 함수 끝
  //4 마우스를 올렸을 때 기능 정지
  var mptickerover = function()
  {
    $('#mpticker').mouseover(function(){
      clearTimeout(timer);
    });
    $('#mpticker').mouseout(function(){
      mpticker();
    });  
  };
  mptickerover();
  // 4 끝
    mpticker();
    
});

    // 주요모델 슬라이드
    $('.iphone-11pro-max > .cd-left > img').click(function(){
        $('.cd-conts').fadeOut(0);
        $('.iphone-SE').fadeIn(0);
        $('.iphone-SE').css('display','flex');
        $('.chart-wrap').fadeOut(0);
        $('.iphone-SE-wrap').fadeIn(0);
    });
    $('.iphone-11pro-max > .cd-right > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.iphone-XS').fadeIn(0);
      $('.iphone-XS').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-XS-wrap').fadeIn(0);
    });
    // iphone-11pro-max

    $('.iphone-XS > .cd-left > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.iphone-11pro-max').fadeIn(0);
      $('.iphone-11pro-max').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-11pro-wrap').fadeIn(0);
    });
    $('.iphone-XS > .cd-right > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.galaxy-note-s20').fadeIn(0);
      $('.galaxy-note-s20').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-note-S20-wrap').fadeIn(0);
    });

    // iphone-XS

    $('.galaxy-note-s20 > .cd-left > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.iphone-XS').fadeIn(0);
      $('.iphone-XS').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-XS-wrap').fadeIn(0);
    });
    $('.galaxy-note-s20 > .cd-right > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.galaxy-s9').fadeIn(0);
      $('.galaxy-s9').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S9-wrap').fadeIn(0);
    });
    
    // galaxy-note-s20

    $('.galaxy-s9 > .cd-left > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.galaxy-note-s20').fadeIn(0);
      $('.galaxy-note-s20').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-note-S20-wrap').fadeIn(0);
    });
    $('.galaxy-s9 > .cd-right > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.galaxy-s10').fadeIn(0);
      $('.galaxy-s10').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S10-wrap').fadeIn(0);
    });

    // galaxy-s9

    $('.galaxy-s10 > .cd-left > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.galaxy-s9').fadeIn(0);
      $('.galaxy-s9').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S9-wrap').fadeIn(0);
    });
    $('.galaxy-s10 > .cd-right > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.iphone-SE').fadeIn(0);
      $('.iphone-SE').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-SE-wrap').fadeIn(0);
    });

    // galaxy-s10

    $('.iphone-SE > .cd-left > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.galaxy-s10').fadeIn(0);
      $('.galaxy-s10').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.galaxy-S10-wrap').fadeIn(0);
    });
    $('.iphone-SE > .cd-right > img').click(function(){
      $('.cd-conts').fadeOut(0);
      $('.iphone-11pro-max').fadeIn(0);
      $('.iphone-11pro-max').css('display','flex');
      $('.chart-wrap').fadeOut(0);
      $('.iphone-11pro-wrap').fadeIn(0);
    });

    // 가격비교 페이지 영역
    $('.pc--slide').click(function(){
      $('.pc--slide').toggleClass('pc--slide-up');
      $('.comp-op').slideToggle(0);
    });

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.if-sub').not($next).slideUp().parent().removeClass('open');
        };
    }   

    var accordion = new Accordion($('#m-accordion'), false);
});
function numberMaxLength(e){
  if(e.value.length > e.maxLength){
    e.value = e.value.slice(0, e.maxLength);
  }
}
