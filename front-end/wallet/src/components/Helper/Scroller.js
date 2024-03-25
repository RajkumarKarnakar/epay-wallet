import React from 'react'
import  './Scroller.css'
function Scroller() {
  return (
    <div>
      <div className="scrolling-wrapper">
          <div className='card'><img src="images/scroll02.png" alt="Addvertisement-1" /></div>
          <div className='card'><img src="images/scroll3.png" alt="Addvertisement-2" /></div>
          <div className='card'><img src="images/scroll4.png" alt="Addvertisement-3" /></div>
          <div className='card'><img src="images/scroll02.png" alt="Addvertisement-4" /></div>
          {/* <div className="card"><h2>Card2</h2></div>
          <div className="card"><h2>Card3</h2></div>
          <div className="card"><h2>Card4</h2></div> */}
     </div>
    </div>
  )
}

export default Scroller
