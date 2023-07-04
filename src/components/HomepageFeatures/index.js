import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HTML5',
    Svg: require('@site/static/img/HTML5.svg').default,
    description: (
      <>
        A Linguagem de Marcação de Hipertexto (HTML na sigla em inglês) é a linguagem de marcação mais utilizada 
        para criar aplicações e páginas na web. 
      </>
    ),
  },
  {
    title: 'CSS3',
    Svg: require('@site/static/img/CSS3.svg').default,
    description: (
      <>
        CSS3 define formatos e padrões estéticos dentro de uma página da web em um arquivo de 
        códigos separado do HTML e/ou do JavaScript, chamados folha de estilo.
      </>
    ),
  },
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/Javascript.svg').default,
    description: (
      <>
        JavaScript® (às vezes abreviado para JS) é uma linguagem leve, 
        interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <>
    <div className={clsx('col col--4')} style={{margin: '60px 0 60px 0'}}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export const Persons = () => {
  return(
    <>
      <div className="section_rC2D" style={{borderTop: "#ccc solid 0.1px"}}>
      <p className='title_experience'>Feedbacks sobre Docusaurus</p>
        <div className="container">
          <div className="row" style={{marginTop: "100px", marginBottom: "90px"}}>
            <div className="col">
              <div className="avatar avatar--vertical margin-bottom--sm">
                <div className="avatar__photo avatar__photo--xl" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative", overflow: "hidden"}}>
                  <img src="img/christopher.jpg" alt="Christopher &quot;vjeux&quot; Chedeau" width="200" height="200" style={{width: "100%", height: "auto", maxWidth: "100%", marginBottom: "-4px"}}/>
                </div>
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">Christopher "vjeux" Chedeau</div>
                  <small className="avatar__subtitle">Lead Prettier Developer</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">Eu ajudei muitos projetos de código aberto no Facebook e 
              todos precisavam de um site. Todos eles tinham restrições muito semelhantes: a documentação deveria ser escrita em 
              markdown e ser implantada por meio de páginas do GitHub. Estou tão feliz que o Docusaurus agora existe, para que eu 
              não precise passar uma semana criando um novo.</p>
            </div>
            <div className="col">
              <div className="avatar avatar--vertical margin-bottom--sm">
                <div className="avatar__photo avatar__photo--xl" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative", overflow: "hidden"}}>
                  <img src="img/hector.jpg" alt="Hector Ramos" width="200" height="200" style={{width: "100%", height: "auto", maxWidth: "100%", marginBottom: "-4px"}}/>
                </div>
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">Hector Ramos</div>
                  <small className="avatar__subtitle">Lead React Native Advocate</small>
                </div>
              </div>
                <p className="text--center text--italic padding-horiz--md">As contribuições de código aberto para os documentos do React Native dispararam 
                após nossa mudança para o Docusaurus. Os documentos agora estão hospedados em um pequeno repositório em remarcação simples, sem nenhuma 
                confusão que um gerador de site estático típico exigiria. Obrigado Slash!</p>
              </div>
              <div className="col">
                <div className="avatar avatar--vertical margin-bottom--sm">
                  <div className="avatar__photo avatar__photo--xl" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative", overflow: "hidden"}}>
                    <img src="img/ricky.jpg" alt="Ricky Vetter" width="200" height="200" style={{width: "100%", height: "auto", maxWidth: "100%", marginBottom: "-4px"}}/>
                  </div>
                  <div className="avatar__intro padding-top--sm">
                    <div className="avatar__name">Ricky Vetter</div>
                      <small className="avatar__subtitle">ReasonReact Developer</small>
                  </div>
                </div>
                  <p className="text--center text--italic padding-horiz--md">O Docusaurus tem sido uma ótima escolha para a família de projetos 
                  ReasonML. Isso torna nossa documentação consistente, compatível com i18n, fácil de manter e amigável para novos contribuidores.</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export const Teste = () => {
//   return(
//     <>
//       <div class="announcementBar_cTOO" role="banner">
//       <div class="announcementBarPlaceholder_Lqfg">
//       </div>
//       <div class="content_ttnW announcementBarContent_PjqA">
//       ⭐️ If you like Docusaurus, give it a star on 
//       <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> 
//       and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">
//       Twitter 
//       <svg style={{fill: "#1DA1F2", verticalAlign: "middle", marginLeft: "3px"}} width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//       <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
//       </svg>
//       </a>
//       </div>
//       <button type="button" aria-label="Close" class="clean-btn close closeButton_nmpN announcementBarClose_UFLi">
//       <svg viewBox="0 0 15 15" width="14" height="14"
//       ><g stroke="currentColor" stroke-width="3.1">
//       <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25">
//       </path>
//       </g>
//       </svg>
//       </button>
//       </div>
//     </>
//   )
// }