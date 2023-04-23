import { useState, useEffect } from 'react'

import './styles.scss'
import routeMain from './routes'
import PageTitle from 'components/PageTitle'

import NewsList from 'components/NewsList'
import getNews from 'services/getNews'


const NewsListPage = () => {
    const [newsList, setNewsList] = useState([]);
    
    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.data)
        })
    }, [])

    return(
        <section className='newsListPage'>
            <PageTitle 
                title={
                    <h2>
                       Быть <br/> в курсе <span>событий</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0,18)}/>}
  
        </section>    
    )
}

export {routeMain}
export default NewsListPage