import './styles.scss'
import routeMain from './routes'

import DanilImg from 'assets/img/images2.jpg'

const Contacts = () => {
    return(
        <section className='contactsPage'>
            <div className='contacts-info'>
                <div className='contacts-phone'>
                    <a href='tel:+380507554777'>+38 (050) 755 47 77</a>
                </div>
                <div className='name'>
                    Данил <br/> Листопад
                </div>
                <div className='mail'>
                    <a href='mailto:mail@example.com'>mail@example.com</a>
                </div>
                <div className='position'>
                    Front-end developer
                </div>
                <div className='technologies'>
                    HTML | CSS | JS
                </div>
            </div>
            <div className='contacts-image'>
                <img src={DanilImg} alt={DanilImg}/>
            </div>
        </section>
    )
}

export {routeMain}
export default Contacts