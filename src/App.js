import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()
  const [input3, setInput3] = useState()
  const [input4, setInput4] = useState()
  const [input5, setInput5] = useState()
  const [input6, setInput6] = useState()

  const predict = (e) => {
    e.preventDefault();
    console.log(input1)
    console.log(input2)
    console.log(input3)
    console.log(input4)
    console.log(input5)
    console.log(input6)
  }
  return (
    <div className="">
      <div id="pageContent">
        <div class="d-flex align-items-center h-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="bg-white rounded shadow-lg">
                <h1 class="text-center h5 pt-5 pb-3"><strong>HR Analytics Prediction</strong></h1>
                <form class="py-2" onSubmit={predict}>

                  <div class="row g-3 m-2">
                    <div class="col-md">
                      <div class="form-floating">
                        <input type="number" class="form-control" id="input1" value={input1} onChange={(e) => { setInput1(e.target.value) }} required />
                        <label for="input1">Satisfaction level</label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-floating">
                        <input type="number" class="form-control" id="input2" value={input2} onChange={(e) => { setInput2(e.target.value) }} required />
                        <label for="input2">Avg Monthly Hrs. Spend</label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-floating">
                        <input type="number" class="form-control" id="input4" value={input3} onChange={(e) => { setInput3(e.target.value) }} required />
                        <label for="input4">Time Spend in yrs.</label>
                      </div>
                    </div>


                  </div>
                  <div className="row g-3 m-2">
                    <div class="col-md">
                      <div class="form-floating">
                        <select class="form-select" id="input4" aria-label="Floating label select example" value={input4} onChange={(e) => { setInput4(e.target.value) }} required>
                          <option value="1">True</option>
                          <option value="0">False</option>
                        </select>
                        <label for="input4">Work Accident</label>
                      </div>
                    </div>

                    <div class="col-md">
                      <div class="form-floating">
                        <select class="form-select" id="input5" aria-label="Floating label select example" value={input5} onChange={(e) => { setInput5(e.target.value) }} required>
                          <option value="1">True</option>
                          <option value="0">False</option>
                        </select>
                        <label for="input5">Promotion in last 5 yrs.</label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-floating ">
                        <select class="form-select" id="input6" aria-label="Floating label select example" value={input6} onChange={(e) => { setInput6(e.target.value) }} required>
                          {/* <option selected>Select Range</option> */}
                          <option value="1">Low</option>
                          <option value="2">Mid</option>
                          <option value="3">High</option>
                        </select>
                        <label for="input6">Salary</label>
                      </div>
                    </div>
                  </div>
                  <div id="submitBtn" class="text-center">
                    <button class="btn w-50 btn-lg shadow-sm rounded-pill">Predict</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
