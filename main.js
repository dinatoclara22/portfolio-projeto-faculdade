const sobre = document.querySelector(".sobre");
const tech = document.querySelector(".tech");
const obj = document.querySelector(".obj");
const project = document.querySelector(".project");
const text_content = document.querySelector(".text-content");

sobre.addEventListener("click", (e) => {
	e.preventDefault();
	text_content.innerHTML = `
    <p>
    Me chamo Clara Dinato, sou Desenvolvedora Front-End, sou apaixonada por tecnologia e por aprender coisas novas. No tempo livre passo jogando ou pesquisando sobre hardware.
    </p>
  `;
});

tech.addEventListener("click", (e) => {
	e.preventDefault();
	text_content.innerHTML = `
    <p>
      Atualmente estou me formando em Engenharia de Software na Uninter e estagiando na Globo dentro do time de BigData. Minhas principais atividades envolvem Python e SQL dentro da ferramentas do Google Cloud. 
    </p>
    <p>
      No ensino médio fiz técnico em informática, onde aprendi a programar em Javascript e construir jogos dentro da Unity.
    </p>
    <p>
      Sou fluente em ingles, fiz curso na Cultura Inglesa durante 7 anos.
    </p>
    
  `;
});

obj.addEventListener("click", (e) => {
	e.preventDefault();
	text_content.innerHTML = `
    <p>
    Meu objetivo é me tornar uma desenvolvedora Full-Stack, com foco em Front-End, e me especializar em React e React Native.
    </p>
  `;
});

project.addEventListener("click", (e) => {
	e.preventDefault();
	text_content.innerHTML = `
    <p>
    Meus principais projeos são: 
    <ul class="li-tech">
      <li>Fale Onibus</li>
      <li>Home You</li>
      <li>Portfolio</li>
    </ul>
    Encontre todos no meu <a href="https://github.com/dinatoclara22">Github</a>!
    </p>
  `;
});
