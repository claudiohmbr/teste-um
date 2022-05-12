

import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'

function NavBar() {
    return (
        <header>
            <nav className='container'>
                <div className='chmfilmes-nav-content'>
                    <h1>CHM Filmes</h1>
                    <a href="https://github.com/claudiohmbr" target="_blank" rel="noreferrer">
                        <div className='chmfilmes-contatct-container'>
                            <GithubIcon />
                            <p className='chmfilmes-contact-link'>Claudio Machado</p>
                        </div>
                    </a>
        
                </div>
            </nav>
        </header>
    );
}
export default NavBar