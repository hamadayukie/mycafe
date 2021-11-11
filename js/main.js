$(function(){
  /*=================================================
  繧ｹ繝槭�繝｡繝九Η繝ｼ
  ===================================================*/
  // 繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ縺ｮ繧ｯ繝ｪ繝�け繧､繝吶Φ繝�
  // 隗｣隱ｬ縺ｯ縲√御ｸｭ邏夂ｷｨ�壹せ繝医い繧ｵ繧､繝茨ｼ医う繝ｳ繝�Μ繧｢�峨榊盾辣ｧ
  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // #mask縺ｮ繧ｨ繝ｪ繧｢繧偵け繝ｪ繝�け縺励◆譎ゅ↓繝｡繝九Η繝ｼ繧帝哩縺倥ｋ
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // 繝ｪ繝ｳ繧ｯ繧偵け繝ｪ繝�け縺励◆譎ゅ↓繝｡繝九Η繝ｼ繧帝哩縺倥ｋ
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });

  /*=================================================
  繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
  ===================================================*/
  // 繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ縺ｮ繧､繝吶Φ繝�
  $('a[href^="#"]').click(function(){
    // 繝ｪ繝ｳ繧ｯ繧貞叙蠕�
    let href= $(this).attr("href");
    // 繧ｸ繝｣繝ｳ繝怜�縺ｮid蜷阪ｒ繧ｻ繝�ヨ
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 繝医ャ繝励°繧峨ず繝｣繝ｳ繝怜�縺ｮ隕∫ｴ�縺ｾ縺ｧ縺ｮ霍晞屬繧貞叙蠕�
    let position = target.offset().top;
    // animate縺ｧ繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧定｡後≧
    // 600縺ｯ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾溷ｺｦ縺ｧ蜊倅ｽ阪�繝溘Μ遘�
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  /*=================================================
  PICK UP 繧ｹ繝ｩ繧､繝繝ｼ
  ===================================================*/
  // 繧ｫ繝ｫ繝ｼ繧ｻ繝ｫ逕ｨ jQuery繝励Λ繧ｰ繧､繝ｳ縲茎lick縲阪�險ｭ螳�
  // 繝槭ル繝･繧｢繝ｫ�喇ttps://kenwheeler.github.io/slick/
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

  /*=================================================
  繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�逕ｻ蜒上ヵ繧ｧ繝ｼ繝芽｡ｨ遉ｺ
  ===================================================*/
  // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�繧､繝吶Φ繝�
  $(window).scroll(function() {
    // fadein繧ｯ繝ｩ繧ｹ縺ｫ蟇ｾ縺励※鬆�↓蜃ｦ逅�ｒ陦後≧
    $('.fadein').each(function() {
      // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆霍晞屬
      let scroll = $(window).scrollTop();
      // fadein繧ｯ繝ｩ繧ｹ縺ｮ隕∫ｴ�縺ｾ縺ｧ縺ｮ霍晞屬
      let target = $(this).offset().top;
      // 逕ｻ髱｢縺ｮ鬮倥＆
      let windowHeight = $(window).height();
      // fadein繧ｯ繝ｩ繧ｹ縺ｮ隕∫ｴ�縺檎判髱｢荳九↓縺阪※縺九ｉ200px騾夐℃縺励◆
      // 縺励◆繧ｿ繧､繝溘Φ繧ｰ縺ｧ隕∫ｴ�繧定｡ｨ遉ｺ
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});