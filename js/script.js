// Viene fornito un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

// 1. collego l'html per stampa a video -> team-container & button x add member
const teamContainer = document.querySelector('.team-container');
const addMemberButton = document.getElementById('addMemberButton');

// 2. array di oggetti predefinito
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];
  

// 3. creo funzione per stampare cards (per ogni member) nel container
function printCards (container, member) {
  
  container.innerHTML += 
  `<div class="team-card">
        <div class="card-image">
        <img 
          src="img/${member.image}" 
          alt="${member.name}"
        />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
  </div>`
} 


// 4. creo ciclo for per camminare dentro l'array 'team'
for (let i = 0; i < team.length; i++){
  
  const member = team[i]; // const fissa per individuare [i] specifico dentro array 'team'
  printCards (teamContainer, member) // richiamo la funzione pr stampare le cards nel teamContainer in html

}

// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team:
// cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, 
// e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

// 5. creo evento al click -> aggiunta nuovo membro on click in 'add'
addMemberButton.addEventListener('click', function () {
  
  // fisso const per nuovi valori aggiunti tramite form
  const newName = document.getElementById('name').value;
  const newRole = document.getElementById('role').value;
  const newImage = document.getElementById('image').value;


  // creo nuovo oggetto per newMember
  let newMember = {
    name: newName,
    role: newRole,
    image: newImage
  }

  // pusho il nuovo membro (inserito con form) dentro l'array di oggetti 'team'
  team.push(newMember);

  // richiamo la funzione per stampare nuovamente con l'aggiuta del nuovo membro
  printCards(teamContainer, newMember)

});