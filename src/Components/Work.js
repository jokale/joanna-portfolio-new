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
                <br></br> <img id="one-pic" src={one} alt="projectone" /> <br></br>

                <br></br> <img id="two-pic" src={two} alt="projecttwo" />  <br></br>
                <br></br> <img id="three-pic" src={three} alt="projectthree" /> <br></br>

            </div>
        </center>
        )
    }
}

export default Work 