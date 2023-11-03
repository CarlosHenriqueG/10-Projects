let displayPwEl = document.getElementById("pw-display");
let chars =
  'abcdefghijkmlnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+="';

function genPassword() {
  let lengthPwEl = document.getElementById("length").value;
  let password = "30";

  for (let i = 0; i < lengthPwEl; i++) {
    let randomGen = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomGen, randomGen + 1);
  }

  displayPwEl.innerText = password;
}

displayPwEl.addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(displayPwEl.textContent);
    alert('Seu texto foi copiado: ' + displayPwEl.textContent)
    console.log('texto copiado');
  } catch (err) {
    console.error('Falha ao copiar texto: ', err);
  }
})

const btnGen = document.getElementById("btnGen");
btnGen.addEventListener("click", genPassword);
