import React from 'react'

const student1 = {
  name: "manh pham",
  age: 28
}

const renderVirusInfo = () => {
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
export default function DataBindingRFC() {
    const name ="Pham Xuan Manh"
  return (
    <div>
        <h1> React functional data binding</h1>
        <hr />
        <h1 className='text-danger'>{name}</h1>

        <hr />
        <h1 className='text-secondary'>Fucntional databinding text: {student1.name} hello {student1.age}</h1>
        <hr />
        <h3>Information of corona virus</h3>
        {renderVirusInfo()}
    </div>
  ) 
}
