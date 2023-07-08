export default function moveGoblin(el) {
  let oldPosition = null;
  const position = Math.floor(Math.random() * el ** 2);
  if (position === oldPosition && oldPosition !== null) {
    moveGoblin(el);
  }

  const cells = document.querySelectorAll('.cell');
  cells.forEach((elem) => {
    elem.classList.remove('active');
    if (Number(elem.getAttribute('data-id')) === position) {
      elem.classList.add('active');
    }
  });
  oldPosition = position;
}
