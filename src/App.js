import React,{Component} from 'react'
import 'animate.css';
import './App.css';
import {Heading} from './components/header/heading.component';
import {Landing} from './components/landing-page/landing-page';
import {Footer} from './components/footer/footer-component';
import {About}  from './components/about/about-component';
import {Projects} from './components/projects/projects.component';


export default class App extends Component {
  constructor(){
    super();
     this.state = {
      projects:[['Online Video Conferencing'],['Monsteroo']]
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

