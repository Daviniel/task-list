import React from 'react' 

const All = ({ all }) => {
    return (
        <div className="all">
          <div className="content">
            <p>{all.text}</p>
            <p className="category">
              ({all.category})
            </p>
          </div>
          <div>
            <button>Completar</button>
            <button>x</button>
          </div>
        </div>
    )
}

export default All