import './styles.scss'
import routeMain from './routes'

import PageTitle from 'components/PageTitle'

import NewsList from 'components/NewsList'
import newsListMocks from 'fixtures/newsListMocks'

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
            {newsListMocks.length > 0 && <NewsList list={newsListMocks.slice(0,6)}/>}
        </section>
    )
}

export {routeMain}
export default MainPage