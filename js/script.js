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
});

// 공지사항 롤링 애니메이션
$(document).ready(function(){
    var height = $(".notice").height();
    var num = $('.rolling li').length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $('.rolling').animate({"top":-move},600,function(){
            if ( move > 1 ){
                $(this).css("top",-244);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling,5000);
    $('.rolling').append($('.rolling li').first().clone());

    // $(".rolling_stop").click(function(){
    //     clearInterval(noticeRollingOff);
    // }); // 롤링 멈추는 소스
    // $(".rolling_start").click(function(){
    //     noticeRollingOff = setInterval(noticeRolling, 1000);
    // }); // 롤링 재시작 소스

    $('.prev').click(function(){
        move += height ;
        $('.rolling').animate({"top":-move},function(){
            if (move >= max){
                $(this).css("top",0);
                move = 0;
            }
        });
    });
    $('.next').click(function(){
        move -= height;
        $('.rolling').animate({"top":-move},function(){
            if (move == 61){
                $('.rolling').append($('.rolling li').last().clone());
            }
        });

    });

    // 주요모델 슬라이드
    $('.condition-pagination li:nth-child(1)').click(function(){
        $('.condition-conts').fadeOut();
        $('.iphone-11pro-max').fadeIn();
        $('.chart-wrap').fadeOut();
        $('.ipone-11pro-wrap').fadeIn();
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
    
    
});


// 차트 영역
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("iphone-11pro-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// --------------------------------------------
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("iphone-XS-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// ------------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("galaxy-note-S20-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// -------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("galaxy-S9-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// ---------------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("galaxy-S10-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// --------------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("iphone-SE-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()