import React, { Component } from 'react'
import DataBindingRFC from './DataBindingRFC';

export default class DataBinding extends Component {
  //Thuoc tinh la bien toan cuc, su dung cho toan bo ham
  //Tao mot thuoc tinh
  name = 'Pham xuan manh';

  // Tao thuoc tinh object student
  student = {
    name: "manh pham",
    age: 28
  }

  // BINDING PHUONG THUC (HAM)
  // Tất cả các hàm đều phải trả về component (jsx)
  //Tao ham render ra hinh anh 
  renderImg = () => {
    return (<img src='https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg' alt='covid.jpg' />)
  }

  //RENDER MULTICOMPONENT
  renderMultiComponent = () => {
    return (
      <div>
        <DataBindingRFC />
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="google.com">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="google.com">Home</a>
          </div>
        </nav>
      </div>
    )
  }

  //Render more information
  renderVirusInfo = () => {
    const virus = {
      name: "corona",
      alias: "SARS-Cov-2",
      img: "https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg"
    }
    return <div className="card text-white bg-primary w-50 h-50">
      <img className="card-img-top" src={virus.img} alt="coronavirus" />
      <div className="card-body">
        <h4 className="card-title">{virus.name}</h4>
        <p className="card-text">{virus.alias}</p>
      </div>
    </div>

  }

  render() {
    //Tao bien cua ham Render() => Khong su dung duoc cho ham khac
    const school = "Cyberlearn";
    const student1 = {
      name: "manh pham",
      age: 28
    }
    return (
      <div>
        <h1>React class component data binding</h1>
        <hr />
        {/* Cach binding du lieu la cua du lieu vao curly bracket{} */}
        <h1 className='text-primary'> Hello {this.name}, School: {school} </h1>
        <h1>Binding Object</h1>
        <h1 className='text-primary'> Hello {this.student.name}, Age: {this.student.age} </h1>
        <h1>Binding variable</h1>
        <h1 className='text-success'> Hello {student1.name}, Age: {student1.age} </h1>

        <hr />
        <h3>BINDING FUNCTION</h3>
        {this.renderImg()}
        {this.renderMultiComponent()}
        {this.renderVirusInfo()}
      </div>
    )
  }
}
