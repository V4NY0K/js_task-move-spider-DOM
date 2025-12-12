'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();

  const relativeX = e.clientX - wall.clientLeft;
  const relativeY = e.clientY - wall.clientTop;

  const desiredLeft = relativeX - spiderRect.width / 2;
  const desiredTop = relativeY - spiderRect.height / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const newLeft = Math.max(0, Math.min(desiredLeft, maxLeft));
  const newTop = Math.max(0, Math.min(desiredTop, maxTop));

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
