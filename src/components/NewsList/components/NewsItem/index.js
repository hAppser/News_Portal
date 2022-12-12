import './styles.scss';

const NewsItem = (props) => {
    return (
        <div className='newsItem'>
            <div className='title'>
                {props.item.title}
            </div>
            <div className='bottomWrapper'>
                <p className='source'>{props.item.source}</p>
                <p>{props.item.date}</p>
            </div>
        </div>
    )
}

export default NewsItem;