import './styles.scss'
import routeMain from './routes'
import PageTitle from 'components/PageTitle'

const NewsList = () => {
    return(
        <section className='NewsList'>
            <PageTitle 
                title={
                    <h2>
                       Быть <br/> в курсе <span>событий</span>
                    </h2>
                }
            />
        </section>    
    )
}

export {routeMain}
export default NewsList