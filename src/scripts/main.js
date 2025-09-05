'use strict';

// write code here

function moveSpiderToCenter() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const centerX = wall.clientHeight / 2;
  const centerY = wall.clientWidth / 2;

  const leftSpider = centerX - spider.offsetWidth / 2;
  const topSpider = centerY - spider.offsetWidth / 2;

  spider.style.left = `${leftSpider}px`;
  spider.style.top = `${topSpider}px`;
}

moveSpiderToCenter();
