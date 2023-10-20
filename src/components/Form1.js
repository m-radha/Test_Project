import React, { useState } from "react";
import { data } from "../asset/data";
import '../css/form1.css';
import 'bootstrap/dist/css/bootstrap.css';

const Form1 = () => {
  const [formData, setFormData] = useState({
      country:'',
      inputData:'',
      option_value:'',
      false:'',
      true:'',
      File:null
  });

  const data1 = data.slice(0,3);
  const data2 = data.slice(3,5);
  const data3 = data.slice(5,7);
  const data4 = data.slice(7,9);
  const data5 = data.slice(9,19);
  const data6 = data.slice(19,24);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data submitted!!!!");
    const existingData = JSON.parse(localStorage.getItem('TestData')) || [];
    existingData.push(formData);
    localStorage.setItem('TestData', JSON.stringify(existingData));
  };

  return (
    <div className="container" style={{width:700}}>
      <form onSubmit={handleSubmit}>
        <div>
          <ol>
            <div>
              <h4>I.Choose the best answer</h4>
              {data1.map((item1) => (
                <li key={item1.id}>
                  {item1.name}
                  <br />
                  <input
                    type="radio"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <label htmlFor="country">{item1.option1}</label>
                  <br></br>
                  <input
                    type="radio"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                   <label htmlFor="country">{item1.option2}</label>
                  <br></br>
                  <input
                    type="radio"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                   <label htmlFor="country">{item1.option3}</label>
                  <br></br>
                </li>
              ))}
            </div>

            <div>
              <h4>II.Fill in the blank</h4>
              {data2.map((item2) => (
                <li key={item2.id}>
                  {item2.name}
                  <br />
                  <input
                    type="text"
                    id="inputData"
                    name="inputData"
                    value={formData.inputData}
                    onChange={handleChange}
                  />
                  <br></br>
                </li>
              ))}
            </div>

            <div>
              <h4>III.Matche the following</h4>
              {data3.map((item3) => (
                <li key={item3.id}>
                  {item3.optionA1} - {item3.optionB1}
                  <br />
                  {item3.optionA2} - {item3.optionB2}
                  <br />
                  {item3.optionA3} - {item3.optionB3}
                  <br />
                  {item3.optionA4} - {item3.optionB4}
                  <br />
                  <input
                    type="radio"
                    id="1234"
                    name="option_value"
                    value={formData.option_value}
                    onChange={handleChange}
                  />
                  <label htmlFor="1234">1234</label>
                  <br></br>
                  <input
                    type="radio"
                    id="3214"
                    name="option_value"
                    value={formData.option_value}
                    onChange={handleChange}
                  />
                   <label htmlFor="3214">3214</label>
                  <br></br>
                  <input
                    type="radio"
                    id="4321"
                    name="option_value"
                    value={formData.option_value}
                    onChange={handleChange}
                  />
                   <label htmlFor="4321">4321</label>
                  <br></br>
                  <input
                    type="radio"
                    id="france"
                    name="option_value"
                    value={formData.option_value}
                    onChange={handleChange}
                  />
                   <label htmlFor="4312">4312</label>
                </li>
              ))}
            </div>

            <div>
              <h4>IV.True or False</h4>
              {data4.map((item4) => (
                <li>
                  <p>{item4.Question}</p>
                  <input
                    type="radio"
                    id="true"
                    name="true"
                    value={formData.true}
                    onChange={handleChange}
                  />
                  <label>{item4.Option1}</label>
                  <input
                    type="radio"
                    id="false"
                    name="false"
                    value={formData.false}
                    onChange={handleChange}
                  />
                  <label>{item4.Option2}</label>
                </li>
              ))}
            </div>

            <div>
              <h4>V.Write Any 5 question. (5X2=10)</h4>
              {data5.map((item5) => (
                <li key={item5.id}>
                  <p>{item5.Question}</p>
                </li>
              ))}
            </div>

            <div>
              <h4>VI.Write any 2 question. (2X5=10)</h4>
              {data6.map((item6) => (
                <li key={item6.id}>
                  <p>{item6.Question}</p>
                </li>
              ))}
            </div>
          </ol>
        </div>
        <div>
          <input
            type="file"
            name="File"
            accept=".pdf"
            value={formData.File}
            onChange={handleChange}
          /><br/>
          <p><b>Note:Upload file here for 2mark and 5mark in signle pdf</b></p>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
