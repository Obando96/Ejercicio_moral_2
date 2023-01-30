import React from 'react'

const Movies = (props) => {
    return (
      <div className='container-movies'>
          <img src={props?.Poster} alt="" />
          <h3 className='container-movies__title'>{props?.Title}</h3>
          <h3 className='container-movies__year'>{props?.Year}</h3>
      </div>
    )
}

export default Movies