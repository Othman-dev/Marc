import React, { useState, useEffect } from 'react';
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Body from '../../components/Body/Body'
import Hashtag from '../../components/Hashtag/Hashtag'
import Title from '../../components/Title/Title'
import SearchBar from '../../components/SearchBar/SearchBar'
//api
import { useCards } from '../../api/useCards'

function App() {

    const cards = useCards();
    const [hashtagList, setHashtagList] = useState([]);
    const [data, setData] = useState(cards || []);
    const [active, setActive] = useState(false);

    const hashtags = ['histoire', 'geography', 'sixieme', 'troisieme'];

    useEffect(() => {
        setData(cards)
    }, [cards])

    useEffect(() => {
        
    })


    const removeItem = (arr, value) => {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
            setHashtagList(arr)
        }
        return arr;
    }

    const filterByHashtag = (arr, secondarray) => {
        let result = arr.filter(item => item.hashtag.some(string => secondarray.includes(string)))
        setData(result)
    }


    const hashtagClick = (tag) => {
        setActive(prevState => !prevState)
        console.log(active)
        if (active) {
            setHashtagList(oldTags => [...oldTags, tag])
        } else {
            removeItem(hashtagList, tag)
        };

        filterByHashtag(cards, hashtagList)
    }




    return (
        <div className="App">
            <Navbar logo='LOGO' links={<h4>About</h4>} />

            <div className='header'>
                <Title />
                <SearchBar placeholder='Recherchez des cours ici' />


                <div className='nav-hashtag'>

                {
                    hashtags.map(hashtag => (
                        <div key={hashtag}>
                        <Hashtag tag={hashtag} hashtagClick={hashtagClick} active={active}/>
                        </div>
                    ))
                }

                </div>

            </div>

            <Body data={data} />

        </div>
    );
}

export default App;
