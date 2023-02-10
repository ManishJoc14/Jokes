import React from 'react'
import '../css/newsItem.css'

const NewsItem =(props)=> {
    let { title, description , joke } = props;
    return (
      <>
      <div className='my-3'>
        <div className="card"style={{
          backgroundColor: props.color==='light'?'white':'black',
          color:props.color==='light'?'black':'white',
          boxShadow: props.color!=='light'?'0 6px 10px rgb(238 234 234 / 8%), 0 0 6px rgb(255 244 244 / 5%)':'0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)'
          }}>

          <div className="card-body">
         
            {title &&  <> 
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description} </p>  </>}
         
            {joke &&  <> 
            <h5 className='card-title'>Single line joke</h5>
            <p className='card-text'>{joke} </p>  </>}
           
           
          </div>
        </div>
      </div> 
      </>
    )
}
export default NewsItem;