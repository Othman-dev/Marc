import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Page.scss';
import classNames from 'classnames'
import Reader from '../../components/Reader/Reader';
import Chapter from '../../components/Reader/Chapter';


const PhoneBar = props => {

  const [open, setOpen] = useState(false)

  const pageBarClasses = classNames({
    'page-bar-close': open === false,
    'page-bar-open': open
  })
  return (
    <div className={pageBarClasses}>
      <div className='page-bar-header'>
        <button className='touch' onClick={() => setOpen(!open)}>
          Accéder aux Chapitres
            </button>
      </div>
      {
        open && <div className='page-bar-body'>
          <h1 style={{ textAlign: 'center' }}>Les Chapitres</h1>
          <ul className='chapter'>{props.page.course.map((string, i) => <Chapter key={i} string={string} />)}</ul>
        </div>
      }
    </div>
  )
}



const Page = props => {
  const page = props.location.state.card
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div className='page' >
      <Link to='/'> <i className="fas fa-times"></i> </Link>


      <ul className='reader' >{page.course.map((string, i) => <Reader key={i} string={string} />)}</ul>
   
    {/* <PhoneBar page={page} /> */}
    </div>
  )
};

export default Page;


