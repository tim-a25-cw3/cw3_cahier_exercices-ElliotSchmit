import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
    this.initSwiper();
  }

  init() {
    Icons.load();
  }

  initSwiper() {
    const target = document.querySelector('.js-swiper');

    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
