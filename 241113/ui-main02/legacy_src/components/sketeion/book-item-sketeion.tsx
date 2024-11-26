import React from 'react'
import style from "./book-item-sketeion.module.css"

const BookItemSketeion = () => {
  return (
    <div className={style.container}>
      <div className={style.cover_img}></div>
      <div className={style.info_container}></div>
      <div className={style.title}></div>
      <div className={style.subtitle}></div>
      <br/>
      <div className={style.author}></div>
    </div>
  )
}

export default BookItemSketeion
