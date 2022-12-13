import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './styles.scss'
import routeMain from './routes' 

import getNews from 'services/getNews'
import DataView from 'components/DateView'

const NewsDetail = () => {
    const {id} = useParams()
    const [news, setNews] = useState(null)

    useEffect(()=> {
        getNews().then(response => {
            setNews(response.data.data.find(item => {
                console.log(item.id, id)
                return item.id == id
            }))
        })
    }, [id])
    // console.log(news);
    return(
        <section className='newsDetail'>
            {news ? (
                <div className='newsDetailWrapper'>
                    <div className='leftPart'>
                        <h2 className='title'>{news.title}</h2>
                        <p className='source'>{news.author}</p>
                        <DataView value={news.date}/>
                    </div>
                    <div className='rightPart'>
                        <img src={news.imageUrl} alt={news.imageUrl}/>
                        <p className='content'>{news.content}</p>
                    </div>
                </div>
            ): <></>}
        </section>
    )
}

export {routeMain}
export default NewsDetail