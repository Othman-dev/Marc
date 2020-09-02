import React, {useContext} from 'react';
import './Hashtag.scss'
import classNames from 'classnames';
//hooks
import {HashtagContext} from '../../assets/context/HashtagContext';

const Hashtag = (props) => {


    const { index } = props;

    const { tags, dispatchTags, dispatchSelected } = useContext(HashtagContext)

    const hashtagClick = () => {

		dispatchTags({ type: 'tagSelected', index: index })
		if (!tags[index].active) {
		dispatchSelected({ type: 'active', tag: tags[index].name })
		}
		else {
		dispatchSelected({ type: 'noneactive', tag: tags[index].name })
		}
    }

    function handleAdd() {
		dispatchSelected({ type: 'noneactive' })
	}

    const hashtagClasses = classNames({
        'hashtag': true,
        'active-hashtag': tags[index].active,
    })

    return (
			tags[index].custom ? 
				<div className={hashtagClasses} onClick={hashtagClick} >
				    <h4>#{tags[index].name} </h4>
				    <button className='custom-bg' onClick={handleAdd}>
						<i className="fas fa-minus fa-lg search-minus"></i>
				    </button>	
			</div>
			:
				<div className={hashtagClasses} onClick={hashtagClick} >
				    <h4>#{tags[index].name} </h4>
				</div>
    )
};

export default Hashtag;

