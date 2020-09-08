import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Page.scss';
import classNames from 'classnames';
import Reader from '../../components/Reader/Reader';
import Chapter from '../../components/Reader/Chapter';

const Page = props => {
    
    const [page, setPage] = useState(props.location.state.card)


    const pageClasses = classNames({
        'page': true,
        'blue': true
    })

    return (
        <div className={pageClasses}>
            <Link to='/'> <i className="fas fa-times"></i> </Link>
			<ul className='reader' >{page.course.map((string, i) => <Reader key={i} string={string}/>)}</ul>
			<ul className='chapter'>{page.course.map((string, i) => <Chapter key={i} string={string}/>)}</ul>
        </div>
    )
};

export default Page;


