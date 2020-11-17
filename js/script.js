document.addEventListener('mousemove', parallaxl);
function parallaxl(e) {
  this.querySelectorAll(".eye1").forEach(Eyel => {
    const speed = Eyel.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * -6) / 100
    const y = (window.innerWidth - e.pageY * -6) / 80
    Eyel.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}
document.addEventListener('mousemove', parallaxr);
function parallaxr(e) {
  this.querySelectorAll(".eye2").forEach(Eyer => {
    const speed = Eyer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * -6) / 100
    const y = (window.innerWidth - e.pageY * -6) / 80
    console.log()
    Eyer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}
