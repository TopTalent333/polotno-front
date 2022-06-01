import React, { useState } from 'react'
import { exportImage, getTemplateOriginal, processTemplate } from './polotnoactions'
import './App.css'

const App = () => {
  const [jsonFile, setJsonFile] = useState();
  const [templateBlob, setTemplateBlob] = useState("");
  const [processedBlob, setProcessedBlob] = useState("");
  const [bedNumber, changeBedNumber] = useState("");
  const [bathNumber, changeBathNumber] = useState("");
  const [carNumber, changeCarNumber] = useState("");
  const [streetAddress, changeStreetAddress] = useState("");
  const [subburb, changeSubburb] = useState("");
  const [priceview, changePriceView] = useState("");

  const process = () => {
    processTemplate(jsonFile, bedNumber, bathNumber, carNumber, streetAddress, subburb, priceview)
      .then(res=>{
        setProcessedBlob(res.data.data);
      })
  }

  const showTemplate = () => {
    getTemplateOriginal(jsonFile)
      .then(res=>{
        setTemplateBlob(res.data.data);
      })
  }
  return (
    <main>
      <div className='container'>
        <h1 className='text-center mb-4'>Polotno Simulation</h1>
        <div className='row'>
          <div className='col-6'>
            <div className='d-flex'>
              <input onChange={(e)=>{setJsonFile(e.target.value)}} placeholder="Template Name"/>
              <button type="button" className="btn btn-primary" onClick={() => {showTemplate(jsonFile)}}>Show Template</button>
            </div>
            <div style={{marginTop: '20px'}}>
            {
              templateBlob != '' &&
              <img src={`data:image/jpeg;base64, ${templateBlob}`} alt="Template" style={{width:'100%'}}/>
            }
            {
              templateBlob == '' &&
              <p>Preview Template</p>
            }
            </div>
          </div>
          <div className='col-6'>
            <div className='row mb-4'>
              <input className='col-12' onChange={(e)=>{changeStreetAddress(e.target.value)}} placeholder="Street Address"/>
              <input className='col-12' onChange={(e)=>{changeSubburb(e.target.value)}} placeholder="Suburb"/>
              <input className='col-12' onChange={(e)=>{changePriceView(e.target.value)}} placeholder="PriceView"/>
              <input className='col-4' onChange={(e)=>{changeBedNumber(e.target.value)}} placeholder="Bedroom Number"/>
              <input className='col-4' onChange={(e)=>{changeBathNumber(e.target.value)}} placeholder="Bathroom Number"/>
              <input className='col-4' onChange={(e)=>{changeCarNumber(e.target.value)}} placeholder="Car Number"/>
            </div>
            <button type="button" className="btn btn-success" onClick={() => {process(jsonFile, bedNumber, bathNumber, carNumber)}}>Process</button>
            <div style={{marginTop: '20px'}}>
            {
              processedBlob != '' &&
              <img src={`data:image/jpeg;base64, ${processedBlob}`} alt="Processed Post" style={{width:'100%'}}/>
            }
            {
              processedBlob == '' &&
              <p>Preview Processing...</p>
            }
            </div>
          </div>
        </div>
        {/* <button type="button" className="btn btn-success" onClick={process}>Export to Image</button> */}

      </div>
      
    </main>
  )
}

export default App;