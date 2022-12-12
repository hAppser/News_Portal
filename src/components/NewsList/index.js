import './styles.scss';

import NewsItem from './components/NewsItem';


const NewsList = (props) => {
    return (
        <div className='newsList'>
            {props.list.map((news) =>(
                <NewsItem key={news.id} item={news} />
            ))}
        </div>
    )
}

export default NewsList;