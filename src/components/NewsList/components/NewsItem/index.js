import { Link } from 'react-router-dom';
import './styles.scss';

import DataView from 'components/DateView';

const NewsItem = (props) => {
    return (
        <Link className='newsItem' to={`/newsDetail/${props.item.id}`}>
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