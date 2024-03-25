import React from 'react'
import { Link } from 'react-router-dom';
import '../Helper/Cards.css'
function CardLanding(props) 
{
  return (
    <>
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure className='cards__item__pic-wrap' data-category={props.title}>
          <img className='cards__item__img' alt='Image' src={props.img}/>
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.title}</h5>
        </div>
      </Link>
    </li>
  </>
  );
}

export default CardLanding
