$('.page-scroll').on('click', function(event){  // event pada saat link di klik

  // ambil isi href
  var tujuan = $(this).attr('href'); // #about, #home
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan); // 400, 300

  $('html, body').animate({
    scrollTop: $(elemenTujuan).offset().top - 50
  }, 1250, 'easeInOutExpo');

  event.preventDefault();
});


// console.log('ok')  -> Menampilkan teks ke console
// offset()           -> Menampilkan jarak section ke atas
// top - 50           -> Dimana menampilkan paksa keatas -50px
// 1000               -> 1 detik
// easeInOutExpo      -> style gaya saat ada menekan dlu baru ke scrol
// animate            -> gaya animasi
// scrollTop          -> pososi scrol sekarang
// window             -> seluruh

// Paralax
// about
$(window).on('load', function() { // fungsi untuk pertama kali halaman di buka
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});

// jumbotron & portfolio
$(window).scroll(function(){ // fungsi untuk scroll
      var wScroll = $(this).scrollTop();

      // jumbotron
      $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
      });
      $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
      });
      $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.4 +'%)'
      });


      // portfolio
      if (wScroll > $('.portfolio').offset().top - 300) {
        $('.portfolio .thumbnail').each(function(i){
          setTimeout(function(){
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
          }, 300 * i);
          // }, 300 * (i+1));
        });
      }
});
