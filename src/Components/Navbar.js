import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '20px',
  padding: '9px',
  margin: '0 30px 5px',
  background: '#cec6c6',
  textDecoration: 'none',
  color: 'grey',
  fontFamily: 'Inconsolata',
  fontsize: '60',
  textAlign: 'right',
  position: 'right',
  display: 'flex',
  bottom: '10px',
  opacity: '0.3',

}
 
class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <h6><NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >.home()</NavLink></h6>
        <h6><NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >.about()</NavLink></h6>
       <h6><NavLink
          to="/work"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >.work()</NavLink></h6>
        <h6><NavLink
          to="/contact"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >.contact()</NavLink></h6>
          
      </div>
    )
  }
}
 
export default Navbar;