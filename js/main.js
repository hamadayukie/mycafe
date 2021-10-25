'use strict';

{
  const dts = document.querySelectorAll('dt');

  ps.forEach(p => {
    p.addEventListener('click',() => {
      p.parentNode.classList.toggle('appear');

      h4s.forEach(el => {
        if (p !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}