const sobre = document.querySelector(".sobre");
const tech = document.querySelector(".tech");
const obj = document.querySelector(".obj");
const project = document.querySelector(".project");
const text_content = document.querySelector(".text-content");

sobre.addEventListener("click", (e) => {
	e.preventDefault();
	text_content.innerHTML = `
    <p>
    Me chamo Clara Dinato, sou Desenvolvedora Front-End, estou me graduando em Engenharia de Software na Uninter e atualmente estou estagiando na Globo dentro do time de BigData. Minhas principais atividades envolvem Python e SQL dentro da ferramentas do Google Cloud.
    </p>
  `;
});

tech.addEventListener("click", (e) => {
	e.preventDefault();
	text_content.innerHTML = `
    <p>
    Minhas principais tecnologias são: 
    <ul class="li-tech">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Python</li>
      <li>SQL</li>
    </ul>
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
