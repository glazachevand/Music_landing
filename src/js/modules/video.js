export function playVideo() {
  const hero = document.querySelector('.hero');
  const content = document.querySelector('.hero__content');
  const timer = document.querySelector('.hero__timer');
  const close = document.querySelector('.close');
  const watch = document.querySelector('.watch-video');
  const video = document.querySelector('.video');
  const iframe = document.querySelector('.video iframe');

  watch.addEventListener('click', () => {
    hero.style.minHeight = 'unset';
    video.style.display = 'block';
    content.style.display = 'none';
    timer.style.display = 'none';
    iframe.src = `https://www.youtube.com/embed/RiIWDwnWSgc?autoplay=1`;
  });

  close.addEventListener('click', () => {
    video.style.display = 'none';
    content.style.display = 'flex';
    timer.style.display = 'grid';
    iframe.src = '';
  });
}
