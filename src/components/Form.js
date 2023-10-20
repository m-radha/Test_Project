import React, { useState } from "react";
import { data } from "../asset/data";

const Form = () => {
    const[formData,setFormData] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(
            {
                ...formData,
                [name] : value
            }
        )
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data submitted!!!!');
        localStorage.setItem('formData',JSON.stringify(formData));
    }
  return (
    <div>
       {data.map((q)=>{
        console.log(q);
       })}
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <b>I.Choose the correct answer</b>
          </p>
          <p>
            1. Which country was expelled from the League of Nations for
            attacking Finland?
          </p>
          <input
            type="radio"
            id="germany"
            name="country"
            value="Germany"
            onChange={handleChange}
          />
          <label htmlFor="germany">Germany</label>
          <br></br>
          <input
            type="radio"
            id="russia"
            name="country"
            value="Russia"
            onChange={handleChange}
          />
           <label htmlFor="javascript">Russia</label>
          <br></br>
          <input
            type="radio"
            id="italy"
            name="country"
            value="Italy"
            onChange={handleChange}
          />  <label for="italy">Italy</label>
          <br></br>
          <input type="radio" id="france" name="country" value="France" onChange={handleChange}/> 
          <label htmlFor="france">France</label>
        </div>
        <br></br>
        <div>
          <p>
            <b>II.Fill in the Blank</b>
          </p>
          <p>1.Where was Sivasubramanianar executed?</p>
          <input type="text" name="place" onChange={handleChange} />
        </div>
        <div>
          <p>
            <b>III.Match the following</b>
          </p>
          <label>Ganga - Amarkantak</label> <br></br>
          <label>Son - Gaumukh</label>
          <br></br>
          <label>Godavari - Mahabaleshwar </label>
          <br></br>
          <label>Krishna - Trimbakeshwer</label>
          <br></br>
          <input type="radio" id="1234" name="option_value" value="1234" onChange={handleChange}/>
          <label htmlFor="1234">1234</label>
          <br></br>
          <input type="radio" id="3214" name="option_value" value="3214" onChange={handleChange}/> 
          <label htmlFor="3214">3214</label>
          <br></br>
          <input
            type="radio"
            id="4321"
            name="option_value"
            value="4321"
            onChange={handleChange}
          />  <label htmlFor="4321">4321</label>
          <br></br>
          <input type="radio" id="france" name="option_value" value="4312" onChange={handleChange}/> 
          <label htmlFor="4312">4312</label>
        </div>
        <div>
          <p>
            <b>IV.True or false</b>
          </p>
          <p>
            1.E-mail is still the most popular online communication technology.
          </p>
          <input type="radio" id="true" name="True_False" onChange={handleChange}/>
          <label htmlFor="true">True</label>
          <br></br>
          <input type="radio" id="false" name="True_False" onChange={handleChange}/> 
          <label htmlFor="false">False</label>
        </div>
        <div>
        <p><b>V.Answer any 5 question. (5x2=10)</b></p>
        <p>Name the tributaries of river Tharabarani</p>
        <p>What are the effects of Genevois?</p>
        <p>What of reach wafere? </p>
        </div>
        <div>
            <p><b>VI.Answer any 2 question. (2x5=10)</b></p>
            <p>State any types of soils in India and explain the charities and diation of sol?</p>
            <p>20the effects of the World War II?</p>
        </div>
        <div>
            <input type="file" name="question-Ans" accept=".pdf" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
