const button = document.getElementById('btnSearch')

const apiKey = `b09fb51fcbbfb94797378c16ab5c5bfb`
const cityInput = document.getElementById('search')
const city = cityInput.value;

button.addEventListener('click', (e) => {
  e.preventDefault();

  const city = cityInput.value;

  if (city === '') {
    alert('Insira uma cidade!');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(resp => {
    if (!resp.ok) {
      throw new Error('Cidade não encontrada');
    }
    return resp.json();
  })
  .then(data => {
      try {
        if(data.main) {
          document.getElementById('temp').innerText = data.main.temp;
          document.getElementById('wind').innerText = data.wind.speed;
          document.getElementById('humidity').innerText = data.main.humidity;
        }else {
          console.error('Dados inválidos da API');
        }
      } catch (error) {
        console.log(error);
      }
    });

    cityInput.value = ''
});