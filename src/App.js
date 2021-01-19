import React,{Component} from 'react'
import 'animate.css';
import './App.css';
import {Heading} from './components/header/heading.component';
import {Landing} from './components/landing-page/landing-page';
import {Footer} from './components/footer/footer-component';
import {About}  from './components/about/about-component';


class App extends Component {
  render(props) {
     return(
     <div className="App">
         <Heading/>
         <Landing/>
         <About/>
         <Footer/>
        
    </div>
    )
  }
}

export default App;