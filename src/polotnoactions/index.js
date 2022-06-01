import axios from "axios";

const API_BASE = "http://localhost:3000/api"
const ASSET_BASE = "http://localhost:3000/api/assets"

/** Export Image From Json */
export const processTemplate = (jsonFile, bedNumber, bathNumber, carNumber, streetAddress, subburb, priceview) => {
  return  axios.post(`${API_BASE}/polotno/process-template`, 
            {
               jsonFile: jsonFile,
               bedNumber: bedNumber,
               bathNumber: bathNumber,
               carNumber: carNumber,
               streetAddress: streetAddress,
               subburb: subburb,
               priceview: priceview,
            }
          );
};


export const getTemplateOriginal = (jsonFile) => {
  return  axios.post(`${API_BASE}/polotno/template-view`, { jsonFile, jsonFile });
  // let data = new FormData();
  // data.append("jsonFile", jsonFile);

  // return fetch(`${API_BASE}/polotno/template-view`, {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //   },
  //   method: "POST",
  //   body: data,
  // });
}
