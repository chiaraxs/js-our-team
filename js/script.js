// Viene fornito un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

// 1. collego l'html per stampa a video
const outputHtml = document.querySelector('.team-container');

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
  

// 3. creo ciclo for per camminare dentro l'array 'team'
// N.B. i=1 perché se fosse i=0 -> ripeterebbe la prima card (wayne barnett)
for (let i = 1; i < team.length; i++){
  
  const member = team[i]; // const fissa per individuare [i] specifico dentro array 'team'

  // PROVA STAMPA IN CONSOLE
  // for ( let key in member ) {
  //   console.log(key, member[key]) // prova stampa in console
  // }

  // PROVA PRIMA STAMPA A VIDEO
  // outputHtml.innerHTML += 'name: ' + member.name + '<br/>';
  // outputHtml.innerHTML += 'role: ' + member.role + '<br/>';
  // outputHtml.innerHTML += 'image: ' + member.image + '<br/>';


  // stampo i team-container per ogni membro del team
  outputHtml.innerHTML += 
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
  </div>`;
} 