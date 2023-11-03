document.addEventListener('DOMContentLoaded', () => {
  let stroke = document.getElementById('plus')



  const pencil = {
    active: false,
    moving: false,
    pos: { x: 0, y: 0 },
    posPrev: null,
  };



  const displaDraw = document.querySelector('#Canvas');
  let ctx = displaDraw.getContext('2d');




  displaDraw.width = 700;
  displaDraw.height = 500;

  const getMousePos = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  const drawingLines = (line) => {
    ctx.beginPath();
    ctx.moveTo(line.posPrev.x, line.posPrev.y);
    ctx.lineTo(line.pos.x, line.pos.y);
    ctx.stroke();
  };

  displaDraw.addEventListener('mousedown', (event) => {
    pencil.active = true;
    pencil.pos = getMousePos(displaDraw, event);
  });

  document.addEventListener('mouseup', () => {
    pencil.active = false;
    pencil.posPrev = null;
  });

  document.addEventListener('mousemove', (event) => {
    if (!pencil.active) return;

    pencil.posPrev = pencil.pos;
    pencil.pos = getMousePos(displaDraw, event);
    pencil.moving = true;
  });

  // Ciclo para verificar quando o lápis estiver ativo e criar o desenho.
  const cycle = () => {
    if (pencil.active && pencil.moving && pencil.posPrev) {
      drawingLines({ pos: pencil.pos, posPrev: pencil.posPrev });
      pencil.moving = false;
    }
    requestAnimationFrame(cycle);
  };

  cycle();
});
