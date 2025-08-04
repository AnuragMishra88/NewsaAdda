import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imageurl,newsurl,publishedAt,By,source}=this.props;
    return (
      <>
      <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" style={{zIndex:'1'}}>  
{source}
              </span>
                  
            <img src={!imageurl?"https://s.hdnux.com/photos/01/53/54/33/28231397/7/rawImage.jpg":imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}
                  </h5>
              <p className="card-text">{description}</p>
               <p class="card-text"><small class="text-body-secondary">{publishedAt}</small></p>
               <p class="card-text"><small class="text-body-secondary">{By}</small></p>
              <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Go somewhere</a>
          </div>
            </div>
          </div>
      </>
    )
  }
}
