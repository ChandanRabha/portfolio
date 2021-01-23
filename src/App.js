import React,{Component} from 'react'
import 'animate.css';
import './App.css';
import {Heading} from './components/header/heading.component';
import {Landing} from './components/landing-page/landing-page';
import {Footer} from './components/footer/footer-component';
import {About}  from './components/about/about-component';
import {Projects} from './components/projects/projects.component';

//importing images
import Open_Conference from './res_external/img/1.png' ;
import Monster from './res_external/img/2.png' ;



export default class App extends Component {
  constructor(){
    super();
     this.state = {
      projects:[['Online Video Conferencing',Open_Conference],['Monsteroo',Monster]]
    }
  }
  render(props) {
    const {projects}=this.state;
    
     return(
     <div className="App">
         <Heading/>
         <Landing/>
         <About/>
         <h1 style={{textAlign:'center'}}>Projects</h1>
         <Projects data={projects}/>
         <Footer/>
     
    </div>
    )
  }
}

