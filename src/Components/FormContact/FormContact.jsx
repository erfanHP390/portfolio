import React from 'react'
import "./FormContact.css"

export default function FormContact() {
  return (
    <form id='my-form'>
      <div className="my-form fix-my-form">
        <input type="text"  name='name' className='my-form-input' />
        <label for='name'  className="my-form-label">
        نام *
        </label>
      </div>
      <div className="my-form">
        <input type="email"  name='name' className='my-form-input  input-blue' />
        <label for='email'  className="my-form-label  label-blue">
        ایمیل  *
        </label>
      </div>
      <div className="my-form">
        <input type="text"  name='name' className='my-form-input  purple-input' />
        <label for='message'  className="my-form-label  purple-label">
        پیام *
        </label>
      </div>
      <div className="form-btn">
        <input type="submit" value={`ارسال`} className='form-submit' />
      </div>
    </form>
  )
}
