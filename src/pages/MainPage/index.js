import './styles.scss'
import routeMain from './routes'
import PageTitle from 'components/PageTitle'

const MainPage = () => {
    return(
        <section className='MainPage'>
            <PageTitle 
                title={
                    <h2>
                        Всегда <br/> свежие <span>новости</span>
                    </h2>
                }
            />
        </section>
    )
}

export {routeMain}
export default MainPage