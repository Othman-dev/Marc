import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Page.scss';
import classNames from 'classnames';
//api
import fire from '../../api/firebase-config';

// fire
// .firestore()
// .collection("cards")
// .onSnapshot(snapshot => {
//   const card = snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data(),
//   }))
//   setCards(card)
// })

const useItems = (props) => {
    const [items, setItems] = useState({});
    useEffect(() => {
        const ref = fire.firestore().collection('cards').doc(props.match.params.id);
        console.log(ref)

        ref.get().then(doc => {
            if (doc.exists) {
                setItems(doc.data())
            }
            return console.log('no such document!')
        })
        return items;

    }, [props.match.params.id, items])
}


const Page = props => {
    const items = useItems();

    console.log(items)
    const { blue, yellow, orange } = props;

    const pageClasses = classNames({
        'page': true,
        'blue': blue,
        'orange': orange,
        'yellow': yellow
    })

    return (
        <div className={pageClasses}>
            <Link to='/'> <i class="fas fa-times"></i> </Link>
            <h4> salut </h4>
          
        </div>
    )
};

export default Page;


