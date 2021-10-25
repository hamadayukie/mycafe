'use strict';

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    p.addEventListener('click',() => {
      p.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}