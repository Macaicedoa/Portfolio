import styles from '../styles/Projects.module.css'
import Lists from './Lists'
import ProjectCard from './ProjectCard'
import zummosHome from '../assets/ZummosInicioPreview.png';
import zummosCarta from '../assets/ZummosConoceCartaPreview.png';
import zummosPedir from '../assets/ZummosInicioPedirPreview.png';
import MTGinicio from '../assets/MTGInicioPreview.png';
import MTGCart from '../assets/MTGCartPreview.png';
import MTGExplore from '../assets/MTGExplorePreview.png';
import HSHomePreview from '../assets/HSHomePreview.png';
import HSOverlayPreview from '../assets/HSOverlayPreview.png';
import HSsearchPreview from '../assets/HSsearchPreview.png';
import PancakeInicioPreview from '../assets/PancakeInicioPreview.png';
import PancakecakePreview from '../assets/PancakecakePreview.png';
import PancakesliderPreview from '../assets/PancakesliderPreview.png';
import NintendoInicioPreview from '../assets/NintendoInicioPreview.png';
import NintendonavbarPreview from '../assets/NintendonavbarPreview.png';
import NintendocharactersPreview from '../assets/NintendocharactersPreview.png';


function Projects() {

    const projectsData  = [
        {   
            id:1,
            img: [`${zummosHome}`,`${zummosCarta}`,`${zummosPedir}`],
            title: 'Zummos',
            description : 'Juice Bar Website',
            tools: 'Figma, HTML, CSS, SCSS, JavaScript, React',
            url: '',
            status: 'In process...',
            contributions: 'Frontend design and development',
            features: 'This website is created for a juice bar in Colombia. You will be able to see the products on the menu and order for delivery by calling directly or sending a whatsapp',
            figma: 'https://www.figma.com/file/TOZESzBuWC0b1UwY4EM6t2/Zummos?type=design&node-id=70%3A201&mode=design&t=dF5NYpZMJyPo8WOB-1'
        },
        {   
            id:2,
            img: [`${MTGinicio}`,`${MTGCart}`,`${MTGExplore}`],
            title: 'MTG Masters',
            description : 'Magic Cards Market',
            tools: 'HTML, CSS, JavaScript, React.js, npm',
            url: 'https://magic-web-seven.vercel.app/',
            status: 'Ready and Deployed!',
            contributions: 'Responsive and functional Navbar, notifications, cart, login and user sections. Explore page with infinite Scroll and API call. ',
            repository: 'https://github.com/RafaelCPC/MagicWeb',
            features: 'The importance of creating context and a visually attractive user interface are represented in this project. In MTG Masters you can explore all the products, add your favorite items to the cart, and open notifications.',
            figma: 'https://www.figma.com/proto/f4tCStUGb46TcdV6y4jCgj/Dise%C3%B1o-Website?page-id=2%3A2&type=design&node-id=56-6&viewport=372%2C284%2C0.07&t=QC2CovydYPBLSnwr-1&scaling=scale-down&starting-point-node-id=56%3A6&mode=design'
            
        },
        {   
            id:3,
            img: [`${HSHomePreview}`,`${HSOverlayPreview}`,`${HSsearchPreview}`],
            title: 'HEADSKETCH',
            description : '3D models browser',
            tools: 'HTML, CSS, JavaScript, JQuery, Ajax, PHP, mySQL',
            url: 'https://headsketch.xyz',
            status: 'Ready and Deployed!',
            contributions: 'Frontend design and development',
            features:'Are you looking for a specific model or product visible in 3D? In Headskecth you will found several platforms for your search and try instantly what you like in AR and VR.'
            
        },
        {   
            id:4,
            img: [`${PancakeInicioPreview}`,`${PancakecakePreview}`,`${PancakesliderPreview}`],
            title: 'Pancakeswap website replica',
            description : 'Functional landing page',
            tools: 'HTML, CSS, JavaScript',
            url: 'https://edividrascu.github.io/pancakeswapReplica/',
            status: 'Ready and Deployed!',
            contributions: 'Responsive and functional sections with animations, sliders and automatic banners ',
            repository: 'https://github.com/edividrascu/pancakeswapReplica',
            features:'A complete landing page replica of the company Pancakeswap with sliders, animations and responsiveness.'
        },
        {
            id:5,
            img: [`${NintendoInicioPreview}`,`${NintendonavbarPreview}`,`${NintendocharactersPreview}`],
            title: 'Nintendo website replica',
            description : 'Functional landing page',
            tools: 'HTML, CSS, JavaScript',
            url: 'https://macaicedoa.github.io/Replica_web/',
            status: 'Ready and Deployed!',
            contributions: 'Responsive and functional navbar and other sections with animations',
            repository: 'https://github.com/Macaicedoa/Replica_web',
            features:'A complete landing page replica of the well-known company Nintendo with sliders, animations and responsiveness.',
        }
    ]

    const projectComponentsArray = projectsData.map(project=><ProjectCard objectData={project}/>)

  return (
    <>
    <section className={styles.projectsSection} id='projects'>
        <h1 className={styles.projectsTitle}>My Projects</h1>
        <Lists array={projectComponentsArray}/>
    </section>
    </>
  )
}

export default Projects