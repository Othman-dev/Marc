import React, { Component } from 'react';
import fire from '../../api/firebase-config';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import './Page.scss';




class Page extends Component {

    state = {
        board: {},
        key: ''
    };
         
    componentDidMount() {
        const ref = fire.firestore().collection('cards').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    board: doc.data(),
                    key: doc.id,
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    

     pageClasses = classNames({
        'page': true,
        'blue': this.props.blue,
        'orange': this.props.orange,
        'yellow': this.props.yellow
    })

    render() {
        const {board} = this.state
        return (

            <div className={this.pageClasses}>
                <Link to='/'> <i class="fas fa-times"></i> </Link>
        <h4> {board.title} </h4>
        <h4>{board.content} </h4>
            </div>
        );
    }
}

export default Page;