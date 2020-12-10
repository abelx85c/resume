$(document).ready(function(){

  new WOW().init();

	var doughnutData, myDoughnut;

	doughnutData = [
    {
      value: 50,
      color: '#ed1442'
    },
    {
      value: 50,
      color: '#ecf0f1'
    }
  ];
  // myDoughnut = new Chart(document.getElementById('photography').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 50,
      color: '#ed1442'
    },
    {
      value: 50,
      color: '#ecf0f1'
    }
  ];
  // myDoughnut = new Chart(document.getElementById('HTML').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 70,
      color: '#ed1442'
    },
    {
      value: 30,
      color: '#ecf0f1'
    }
  ];
  // myDoughnut = new Chart(document.getElementById('CSS').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 40,
      color: '#ed1442'
    },
    {
      value: 60,
      color: '#ecf0f1'
    }
  ];
  // myDoughnut = new Chart(document.getElementById('jquery').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 70,
      color: '#ed1442'
    },
    {
      value: 30,
      color: '#ecf0f1'
    }
  ];
  // myDoughnut = new Chart(document.getElementById('photoshop').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 70,
      color: '#ed1442'
    },
    {
      value: 30,
      color: '#ecf0f1'
    }
  ];
  // myDoughnut = new Chart(document.getElementById('illustrator').getContext('2d')).Doughnut(doughnutData);

  if($(window).width()>975){
    $('.nissan .work-all').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.nissan .prev'),
      nextArrow: $('.nissan .next')
    });
  }
  else{
    $('.nissan .work-all').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true
    });
  }

  if($(window).width()>975){
    $('.dingyue .work-all').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.dingyue .prev'),
      nextArrow: $('.dingyue .next')
    });
  }
  else{
    $('.dingyue .work-all').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
    });
  }
  $('.menu-about').click(function() {
    $('html,body').animate({scrollTop:$('#about').offset().top-60},800);
  });
  $('.menu-resume').click(function() {
    $('html,body').animate({scrollTop:$('#resume').offset().top-60},800);
  });
  $('.menu-work').click(function() {
    $('html,body').animate({scrollTop:$('#work').offset().top-60},800);
  });
  $('.menu-contact').click(function() {
    $('html,body').animate({scrollTop:$('#contact').offset().top-60},800);
  });
  $('.go-top').click(function() {
    $('html,body').animate({scrollTop:0},800);
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $('.go-top').fadeIn();
    } else {
      $('.go-top').fadeOut();
    }
  });

});