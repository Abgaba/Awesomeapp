import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: ""
  });

  const changeInput = (event) => {

    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`My fullname is ${data.fullname}`);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Full name</label>
                <input name="fullname" value={data.fullname} onChange={changeInput}
                  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Number</label>
                <input name="phone" value={data.phone} onChange={changeInput} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mobile number" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input name="email" value={data.email} onChange={changeInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Message</label>
                <textarea name="msg" value={data.msg} onChange={changeInput} className="form-control" rows="3" id="txtareaMsg">

                </textarea>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-outline-primary">Submit</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
