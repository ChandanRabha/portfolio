import React,{Component} from 'react'
import 'animate.css';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {Heading} from './components/header/heading.component';
import {Landing} from './components/landing-page/landing-page';
import {Footer} from './components/footer/footer-component';
import {About}  from './components/about/about-component';
import {Projects} from './components/projects/projects.component';
import {Contact} from './components/contact/contact'
import {Modal} from './components/contact/contact'
import splash_bg from './res_external/img/splash_bg.jpg';

//importing images
import Open_Conference from './res_external/img/1.png' ;
import Monster from './res_external/img/2.png' ;
import TODO from './res_external/img/3.png' ;


window.onload = ()=>{
  const boxes = document.querySelectorAll('.box');
// console.log(boxes)

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // shows initial box(es) 

function checkBoxes() {

  const triggerBottom = (window.innerHeight / 5 * 4);
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}
}


export default class App extends Component {
  constructor(){
    super();
     this.state = {
      projects:[
        ['Online Video Conferencing',Open_Conference,'https://github.com/ChandanRabha/VideoConference','https://login-ohhyea.herokuapp.com/'],
        ['Monsteroo',Monster,'https://github.com/ChandanRabha/monsteroo_ReactJS','https://chandanrabha.github.io/monsteroo_ReactJS/'],
        ['Todo React App',TODO,'https://github.com/ChandanRabha/Todo_React_App','https://chandanrabha.github.io/Todo_React_App/']
      ]
    }
  }
  render() {
    const {projects}=this.state;
    
     return(
     <div id="Home" className="App" style={{backgroundImage:`url(`+splash_bg+`)`,backgroundAttachment:'fixed'}}>
         <Heading/>
         <Landing/>
         <About/>
         <h1 className='titleProject' id="Pin_Project">Projects</h1>
         <Projects data={projects}/>
         <Contact/>
         <Modal/>
         <Footer/>

     
    </div>
    )
  }
}

