import React from 'react'
import './Card.css'

const Card = ({children}) => {
  return <>
  <div className="container">
    <div className="row">
        <div className="col-sm-8 offset-sm-2 ">
            <div class="card bg-transparent border-0 mt-5">
              <div class="card-body mt-5">{children}</div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Card