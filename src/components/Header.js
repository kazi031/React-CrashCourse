import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, showAdd}) => {
  {/*const onClick = () => {
    console.log('Click')
  }*/}
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color =  {showAdd ? 'red' : 'green'}
        text = {showAdd ? 'Close' : 'Add'}
        onClick = {onAdd}/>
        {/* These are reusable components 
        <Button color = 'red' text = 'Hello'/>
        <Button color = 'black' text = 'Hello'/> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
/* const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
} */

export default Header