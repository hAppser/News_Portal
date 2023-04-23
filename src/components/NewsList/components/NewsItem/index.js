import { Link } from 'react-router-dom';
import DataView from 'components/DateView';

import './styles.scss';

const NewsItem = (props) => {
    return (
        <Link className='newsItem' to={`/newsDetail/${props.item.title}`}>
            <div className='title'>
                {props.item.title}
            </div>
            <div className='bottomWrapper'>
                <p className='source'>{props.item.author}</p>
                <DataView value={props.item.date}/>
            </div>
        </Link>
    )
}

export default NewsItem;