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
                <br></br> <a href="https://thefitnessoverload.netlify.app/" target="blank" ><button><img id="one-pic" src={one} alt="projectone" /> <br></br>
                    </button></a>

                <br></br> <a href="https://annaojatleir.netlify.app/" target="blank"><button><img id="two-pic" src={two} alt="projecttwo" /></button></a>  <br></br>
                <br></br> <a href="https://github.com/jokale/TodoAppRN" target="blank"><button><img id="three-pic" src={three} alt="projectthree" /> </button></a><br></br>

            </div>
        </center>
        )
    }
}

export default Work 