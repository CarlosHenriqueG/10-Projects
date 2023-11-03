let search = document.getElementById("search");
let content = document.getElementById("content");
let form = document.querySelector("form");
const apiUrl = "https://api.github.com/users/";

getUser("maykbrito"); // chamada inicial em tela

// exibir info do usuario
async function getUser(username) {
  try {
    const resp = await fetch(apiUrl + username);
    if (!resp.ok) {
      throw new Error(`Erro na solicitação: ${resp.status}`);
    }
    const respData = await resp.json();
    createCardUser(respData);
  } catch (error) {
    console.error(error);
  }
}


// Pesquisar o usuario por nome dado
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});

// Cria um card colocando as infos do usuario através da API
function createCardUser(user) {
  let card = `    
  <div class="card">
    <div>
      <img id="img-user" src="${user.avatar_url}" alt="${user.name}" width="135px" height="135px">
    </div>
  <div class="user-info">
      <h2 id="name-user">${user.name}</h2>
      <p id="bio">${user.bio}</p>
      <ul class="info">
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
  </div>
</div>`;

  content.innerHTML = card;
}
