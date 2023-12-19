import logoleft from '../assets/logo-left.png'
import logoRight from '../assets/logo-right.png'

export default function HeaderComponent() {
    return (
    <div className='header-container'>
      <img className="logo-left" src={logoleft} alt="" />
      <p className='header-text'>AI Pulse Check</p>
      <img className="logo-right" src={logoRight} alt="" />
    </div>
    )
}