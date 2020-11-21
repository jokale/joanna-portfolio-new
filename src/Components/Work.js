import React from 'react'
import one from './one.png'
import two from './two.png'
import three from './three.png'

class Work extends React.Component{
    render(){
        return(
         <center>
            <div>
        
                <h1>Work</h1>
                <h6>click the images to see live</h6>
                <br></br>
                <p>Fitness Overload</p>
                <br></br> <a href="https://thefitnessoverload.netlify.app/" target="blank" ><button><img id="one-pic" src={one} alt="projectone" /></button></a>  
                <h6>Web application to create different workouts for everyone to see. <br></br>UI created and designed with Javascript,HTML and CSS. Developed back-end and API built with Ruby on Rails.</h6>
                <br></br>

                <br></br><p>Annaoj Ateleirs</p>

                 <a href="https://annaojatleir.netlify.app/" target="blank"><button><img id="two-pic" src={two} alt="projecttwo" /></button></a>  <br></br>
                <h6>A mock UI for an artist/gallery <br></br>Built with a React.js frontend framework and CSS, utlising flexbox</h6>
                <br></br>  
                
                               <p>ToDo App</p>
                <a href="https://github.com/jokale/TodoAppRN" target="blank"><button><img id="three-pic" src={three} alt="projectthree" /> </button></a><br></br>
                <h6>A to do application mobile application <br></br>Built with a React.native, inlind CSS and utlising flexbox, not currently live</h6>

                <br></br>
                <h6>Check out my other projects and code on <a href="https://github.com/jokale" target="blank">Github</a></h6>

            </div>
        </center>
        )
    }
}

export default Work 