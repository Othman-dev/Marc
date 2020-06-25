import React from 'react';
import './Page.scss';
import classNames from 'classnames';

const Page = props => {

    const { content, blue, yellow, orange } = props;

    const pageClasses = classNames({
        'page': true,
        'blue': blue,
        'orange': orange,
        'yellow': yellow
    })

    return (
        <div className={pageClasses}>
            <i class="fas fa-times"></i>
            {content}
        </div>
    )
};

export default Page;


