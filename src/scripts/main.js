'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderSize = spider.getBoundingClientRect();
  const wallSize = wall.getBoundingClientRect();

  const relativeX = e.clientX - wallSize.left;
  const relativeY = e.clientY - wallSize.top;
  const desiredLeft = relativeX - spiderSize.width / 2;
  const desiredTop = relativeY - spiderSize.height / 2;
  const maxLeft = wall.clientWidth - spiderSize.width;
  const maxTop = wall.clientWidth - spiderSize.height;

  const newLeft = Math.max(0, Math.min(desiredLeft, maxLeft));
  const newTop = Math.max(0, Math.min(desiredTop, maxTop));

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
