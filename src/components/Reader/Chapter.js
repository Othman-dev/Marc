import React from 'react';
import './Reader.scss';
import classNames from 'classnames';

const Chapter = (props) => {


    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	function customDivCreator() {
		if (type === 'title') {
			return <a href={'#' + {content}}>
				{content}</a>
		}
		else if (type === 'chapter') {
			return <a href={'#' + {content}}>
				{content}</a>
		}
		else if (type === 'subchapter') {
			return <a href={'#' + {content}}>
				{content}</a>
		}
    }

    const customDiv = (
		customDivCreator()
	)

    return (
		<div>
			{customDiv}
		</div>
	)
};

export default Chapter;
