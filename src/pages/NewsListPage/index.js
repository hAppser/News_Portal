import './styles.scss'
import routeMain from './routes'
import PageTitle from 'components/PageTitle'

import NewsList from 'components/NewsList'
import newsListMocks from 'fixtures/newsListMocks'


const NewsListPage = () => {
    return(
        <section className='newsListPage'>
            <PageTitle 
                title={
                    <h2>
                       Быть <br/> в курсе <span>событий</span>
                    </h2>
                }
            />
            {newsListMocks.length > 0 && <NewsList list={newsListMocks.slice(0,9)}/>}
  
        </section>    
    )
}

export {routeMain}
export default NewsListPage