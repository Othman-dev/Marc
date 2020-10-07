import React, { Component } from 'react';
import fire from '../../api/firebase-config';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import './Page.scss';
import Reader from '../../components/Reader/Reader'
import Chapter from '../../components/Reader/Chapter'



class Page extends Component {

    state = {
        board: [],
        key: '',
        discover: false,
    };

    componentDidMount() {
        fire.firestore().collection('cards').onSnapshot((snapshot) => {
            const newData = snapshot.docs.map((doc) => ({ ...doc.data() }))
            newData.map(item => {
                if(item.id === this.props.match.params.id) {
                    this.setState({board: item.course})
                }
            })
           
        })
    }






    render() {
        const courseClasses = classNames({
            'course': true,
            'discover': this.state.discover,
            'hide': this.state.discover === false,
        })

        const slideToRight = classNames({

            'transparent': this.state.discover === false,
            'show-chapter': this.state.discover
        })
        return (

            <div className='page'>
                <Link to='/' className='cross' > <i class="fas fa-times"></i> </Link>
                <button className='chapterBtn' onClick={() => this.setState({ discover: !this.state.discover })}><i class="fas fa-book"></i></button>
                <div className={slideToRight}>
                    <div className='chapter'>{this.state.board.map((string, i) => <Chapter key={i} string={string} id={this.props.match.params.id} />)}</div>
                </div>

                <div className={courseClasses}>
                    <div className='reader'>
                        {this.state.board.map((string, i) => <Reader key={i} string={string} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;