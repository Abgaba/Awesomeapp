import React from 'react';
import Card from './Card.jsx';
import SData from './SData.jsx';

const Service = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          Our Services

        </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                SData.map((val, index) => {
                  console.log(val);
                  return <Card imgsrc={val.imgsrc} title={val.title} key={index} />
                })
              }

            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Service;
