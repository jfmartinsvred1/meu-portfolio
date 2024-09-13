import { useEffect, useState } from 'react'
import './App.css'
import { searchRepos } from './services/apiService';
import { CertificationT, ReposGit } from './types';
import Repos from './components/repos';
import Techs from './components/techs';
import Certifications from './components/certifications';
import 'animate.css';
import Dropdown from 'react-bootstrap/Dropdown';

export type Infos = {
  about: string,
  knowledge: string[],
  faculty: string,
  period: number
}
export type TechO = {
  icon: string,
  name: string
}

function App() {

  const [gitHubRepos, setGitHubRepos] = useState<ReposGit[]>([]);

  const [theme, setTheme] = useState<string>('dark');

  const techs: TechO[] = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "REACT" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", name: "ANGULAR" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "DOCKER" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MYSQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", name: "SQLSERVER" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "FIREBASE" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
    {
      icon: "../src/assets/images/excel.png",
      name: "Excel"
    },
    {
      icon: "../src/assets/images/word.png",
      name: "Word"
    }
  ];
  const certifications: CertificationT[] = [
    { name: "C#: APRENDA A CRIAR TESTES LIMPOS COM BOAS PRÁTICAS", link: "https://cursos.alura.com.br/certificate/81c50c4b-3183-4c01-84f5-a161c83899e1?lang=pt_BR" },
    { name: "Testes em .NET: aplicando testes de integração em APIs", link: "https://cursos.alura.com.br/certificate/fd2ae54c-48ab-41d7-a6a5-c70a8db53347?lang=pt_BR" },
    { name: "Testes em .NET: testando integração com banco de dados", link: "https://cursos.alura.com.br/certificate/077a51dd-7033-4fef-93cc-6edb47d44c86?lang=pt_BR" },
    { name: "Microsserviços: padrões de projeto", link: "https://cursos.alura.com.br/certificate/0e8dcf09-8758-448d-9010-7a143f395d4e?lang=pt_BR" },
    { name: "TESTES EM .NET: CRIANDO TESTES DE UNIDADE COM XUNIT", link: "https://cursos.alura.com.br/certificate/35f1980f-70d4-495f-9541-925af0513241?lang=pt_BR" },
    { name: "Docker: criando e gerenciando containers", link: "https://cursos.alura.com.br/certificate/d31def31-2ebd-45e2-b358-25d402a48e33?lang=pt_BR" },
    { name: "REACT: COMO OS COMPONENTES FUNCIONAM", link: "https://cursos.alura.com.br/certificate/fe6ca3ee-e639-4e74-92c5-e31431bae580?lang=pt_BR" },
    { name: "REDES: DOS CONCEITOS INICIAIS À CRIAÇÃO DE UMA INTRANET", link: "https://cursos.alura.com.br/certificate/8f187814-31c2-4d10-bbd1-6abff6b542c3?lang=pt_BR" },
    { name: "C#: consumindo API, gravando arquivos e utilizando o LINQ", link: "https://cursos.alura.com.br/certificate/f17f9d70-9b12-40b1-8ff7-1d7a22c76c1a?lang=pt_BR" },
    { name: "C#: APLICANDO A ORIENTAÇÃO A OBJETOS", link: "https://cursos.alura.com.br/certificate/c4491b35-890d-4b89-b8bd-0ef50ac8fae1?lang=pt_BR" },
    { name: "TERMINAL: APRENDA COMANDOS PARA EXECUTAR TAREFAS", link: "https://cursos.alura.com.br/certificate/16e0c197-6bd0-4fa1-a922-cde00a76f55d?lang=pt_BR" },
    { name: "GIT E GITHUB: CONTROLE E COMPARTILHE SEU CÓDIGO", link: "https://cursos.alura.com.br/certificate/0a85e438-750a-45ad-b168-a07459f1b4b9?lang=pt_BR" },
    { name: "JavaScript: manipulando elementos no DOM", link: "https://cursos.alura.com.br/certificate/54caedde-e28b-45c0-b951-f3e3269aa33c?lang=pt_BR" },
    { name: "ANGULAR: CICLO DE VIDA", link: "https://cursos.alura.com.br/certificate/51ba48d6-9736-490b-8f12-b96960bf427a?lang=pt_BR" },
    { name: "ANGULAR: FORMULÁRIOS ORIENTADOS A TEMPLATES", link: "https://cursos.alura.com.br/certificate/0f54226c-5dd7-476c-8a9c-f9a3144a7a92?lang=pt_BR" },
    { name: "Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD", link: "https://cursos.alura.com.br/certificate/e2d1bfc5-20ac-4403-8bfe-77cf9959cc4c?lang=pt_BR" },
    { name: "SQL COM MYSQL: MANIPULE E CONSULTE DADOS", link: "https://cursos.alura.com.br/certificate/a1874874-670f-4c9c-a6c7-cd35735b78a3?lang=pt_BR" },
    { name: "Formação Melhore sua experiência de desenvolvimento com TypeScript", link: "https://cursos.alura.com.br/degree/certificate/4aeede97-416b-40fb-a1e4-9bfaf51f2c53" },
    { name: "TYPESCRIPT PARTE 1: EVOLUINDO SEU JAVASCRIPT", link: "https://cursos.alura.com.br/certificate/98e42485-d578-48f3-8051-e9091815c021?lang=pt_BR" },
    { name: "TYPESCRIPT PARTE 2: AVANÇANDO NA LINGUAGEM", link: "https://cursos.alura.com.br/certificate/8f0710e9-1890-412b-a366-828763f2586b?lang=pt_BR" },
    { name: ".NET 6 E IDENTITY: IMPLEMENTANDO CONTROLE DE USUÁRIO", link: "https://cursos.alura.com.br/certificate/35c65d85-7ec9-4e2e-bef9-f99312c9f518?lang=pt_BR" },
    { name: ".NET 6: RELACIONANDO ENTIDADES", link: "https://cursos.alura.com.br/certificate/809a9668-b2e2-477e-a786-095b921761a2?lang=pt_BR" },
    { name: ".NET 6: criando uma web API", link: "https://cursos.alura.com.br/certificate/12e5dec1-0218-4037-a63b-8278c869c55b?lang=pt_BR" },
    { name: "ASP.NET CORE: CRIE APLICAÇÕES COM C#, .NET, ENTITY FRAMEWORK E LINQ", link: "https://cursos.alura.com.br/degree/certificate/da3842a0-1c44-496f-ba38-3ac6d3b71763?lang=pt_BR" },
    { name: "C# REFATORAÇÃO PARTE 2: REFATORAÇÕES BASEADAS EM ORIENTAÇÃO A OBJETOS.", link: "https://cursos.alura.com.br/certificate/2c79922f-dfc6-402a-80ae-2233d34f7686?lang=pt_BR" },
    { name: "C# REFATORAÇÃO PARTE 3: HIERARQUIAS DE CLASSES", link: "https://cursos.alura.com.br/certificate/17195c37-6aee-4df3-b371-4d9a8fe4b6cd?lang=pt_BR" },
    { name: "C# Refatoração Parte 1: praticando refatoração de código", link: "https://cursos.alura.com.br/certificate/cb27fd6d-dae4-434b-975f-f123afd35f17" },
    { name: "Entity Framework Core: banco de dados de forma eficiente", link: "https://cursos.alura.com.br/certificate/000cefaf-a87d-4b45-b339-969cff896a98?lang=pt_BR" },
    { name: "HTTP: entendendo a web por baixo dos panos", link: "https://cursos.alura.com.br/certificate/6130f098-9465-4c88-a67c-a827e9793140?lang=pt_BR" },
    { name: "JAVASCRIPT PARA WEB: CRIE PÁGINAS DINÂMICAS", link: "https://cursos.alura.com.br/certificate/58689497-1393-4115-b007-33f8f57c8d82?lang=pt_BR" },
    { name: "JAVASCRIPT: EXPLORANDO A LINGUAGEM", link: "https://cursos.alura.com.br/certificate/55bce2ce-1896-4710-90ec-150bfc88fb2c?lang=pt_BR" },
    { name: "JAVASCRIPT: PROGRAMANDO A ORIENTAÇÃO A OBJETOS", link: "https://cursos.alura.com.br/certificate/1706c088-ed66-4425-b1f9-19341b1de457?lang=pt_BR" },
    { name: "C# COMPLETO Programação Orientada a Objetos + Projetos", link: "https://www.udemy.com/certificate/UC-5cfb587e-a6c8-40e8-b6cd-8d4789c771b7/" },
    { name: "HTML e CSS", link: "https://www.udemy.com/certificate/UC-f6f9cac3-9718-4a61-a540-b24999e9340a/" },
    { name: "APRENDA A PROGRAMAR EM C# COM ORIENTAÇÃO A OBJETOS", link: "https://cursos.alura.com.br/degree/certificate/1570289d-734f-4073-974d-64fb0446d503?lang=pt_BR" },
    { name: "REACT: DESENVOLVENDO COM JAVASCRIPT", link: "https://cursos.alura.com.br/certificate/6a41a218-6cd6-4a2f-8106-879c3f23dd5e?lang=pt_BR" },
    { name: "C#: dominando Orientação a Objetos", link: "https://cursos.alura.com.br/certificate/9d5b1631-8bdc-443f-98bb-edc1c3dc8076?lang=pt_BR" }
  ];



  function updateTheme() {
    if (theme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }
  useEffect(() => {
    searchRepos().then((data: ReposGit[]) => { setGitHubRepos(data) }).catch((err) => console.log(err))
  }, [])
  return (
    <div className='d-flex flex-column justify-content-between align-items-center p-2 secondary app '
      style={theme === 'dark' ? { backgroundColor: "#343a40" } : { backgroundColor: "white" }}
    >
      <div className='d-flex flex-column align-items-center justify-content-center w-100 gap-5 my-5 animate__animated animate__bounceInDown'>
        <div className='d-flex align-items-center justify-content-between w-100'>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <img src="../src/assets/images/menu.png" alt="Menu" width="32px" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#techs" >Tecnologias Conhecidas</Dropdown.Item>
              <Dropdown.Item href="#certifications" >Meus Cursos E Certificados</Dropdown.Item>
              <Dropdown.Item href="#repos" >Meus Repositórios</Dropdown.Item>
              <Dropdown.Item href="#obj" >Meus Objetivos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <img src="https://github.com/jfmartinsvred1.png" alt="FotoMinha" width="256px" className='rounded-5' />
          <div>
            <button onClick={() => updateTheme()} className='btn bg-transparent align-content-center'><img width="32px" src={theme === 'dark' ? '../src/assets/images/cloud.png' : '../src/assets/images/dark.png'} alt="Logo" /> </button>
          </div>
        </div>
        <h4 className='text-light'>Seja bem-vindo a minha página!</h4>
      </div>
      <div className='d-flex align-items-center flex-column justify-content-center w-100 text-center my-5 gap-5 animate__animated animate__bounceInDown'>
        <h3 className='text-light'>Sobre Mim</h3>
        <div className='d-flex flex-column text-start justify-content-center align-items-center gap-2'>
          <p className={theme === 'dark' ? "text-light user-select-none text-break text-sobre" : "text-dark user-select-none text-break text-sobre"}>
            Meu nome é João Victor Fernandes Martins sou um estudante de Sistemas de Informação, atualmente no 4º período da faculdade.
            Tenho paixão por
            tecnologia e programação, com foco em desenvolvimento de software , engenharia de sistemas e área de
            suporte de TI. Venho adquirindo atraves desses anos de estudo e treinamento contínuo, conhecimento e
            prática utilizando diversas tecnologias.
            Além do currículo acadêmico, completei vários cursos especializados que reforçaram minhas habilidades
            técnicas e práticas. Estou em busca de minha primeira oportunidade profissional para aplicar meus
            conhecimentos e aprender com projetos desafiadores. Tenho uma atitude proativa, não apenas realizo
            minhas tarefas com dedicação, mas também me empenho em entender o contexto e as necessidades da
            empresa para contribuir de maneira eficaz. Tenho vontade e estou muito interessado em conseguir minha
            primeira oportunidade e isso me impulsiona a superar obstáculos e a buscar soluções criativas e práticas.
          </p>
          <div className='d-flex gap-3'>
            <a target='_blank' href="https://www.linkedin.com/in/jfmartinss21/"><img src="../src/assets/images/linkedin.png" alt="Github" width="32px" className='icon1' /></a>
            <a target='_blank' href="https://github.com/jfmartinsvred1"><img src="../src/assets/images/github.png" alt="Github" width="32px" className='icon2' /></a>
          </div>

        </div>
      </div>
      <div id='techs' className='d-flex flex-column my-5 justify-content-center align-items-center gap-5'>
        <h4 className='text-light'>Tecnologias Conhecidas</h4>
        <Techs techsO={techs} />
      </div>
      <div id='certifications' className='d-flex flex-column my-5 justify-content-center align-items-center gap-5'>
        <h4 className='text-light'>Meus Cursos E Certificados</h4>
        <Certifications certifications={certifications} />
      </div>
      <div id='repos' className='d-flex flex-column my-5 justify-content-center align-items-center gap-5'>
        <h4 className='text-light'>Meus Repositórios</h4>
        <Repos theme={theme} repos={gitHubRepos} />
      </div>
      <div id='obj' className='d-flex flex-column my-5 justify-content-center align-items-center gap-5'>
        <h4 className='text-light'>Objetivos</h4>
        <p className={theme === 'dark' ? "text-light user-select-none text-break text-sobre" : "text-dark user-select-none text-break text-sobre"}> 
            Meu objetivo atualmente é ingressar em um estágio na area de desenvolvimento de sofware.
        </p>
      </div>
    </div>
  )
}

export default App
