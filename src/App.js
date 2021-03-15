import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SortButton from './components/SortButton.js';
import DisplayArea from './components/DisplayArea.js';
import Reflections from './components/Reflections.js';
import { findAllByDisplayValue } from '@testing-library/react';


function App() {

  const defaultBarCount = {default: 100, min: 0, max: 250}
  const defaultDelay = {min: -11, max: -1}
  const aniSpeedConstants = {bubble: -5, quick: -8}


  const [input, setInput] = useState(defaultBarCount.default);
  const [delayInc, setDelayInc] = useState(defaultDelay.max);
  const [sortArray, setSortArray] = useState([]);
  const [displayAreaStyle, setDisplayAreaStyle] = useState ({visibility: "hidden"});
  const [reflectionsStyle, setReflectionsStyle] = useState ({visibility: "hidden"});
  const [animating, setAnimating] = useState(false);
  let tempArray = [];
  let swapped;

  let delay = 0;

  useEffect(() => {

    console.log(input);
    ReactDOM.render(<DisplayArea array={sortArray} total={input}/>, document.getElementById('displayArea'))
  }, [sortArray])

  function inputChange(e) {

    if(!animating) {
      switch(e.target.id) {
        case "barCountInput": setInput(e.target.value);
        break;
        case "delayInput": setDelayInc(e.target.value);
        break;
      }
    }

  }

  function defineArray() {

    if(!animating) {
      setDisplayAreaStyle({visibility: input == 0 ? "hidden" : "visible"})

      // if(input != 0) {
      //   setDisplayAreaStyle({visibility: "visible"})
      // } else {
      //   setDisplayAreaStyle({visibility: "hidden"})
      // }

      for(let i = 0; i < input; i++) {
        tempArray.push(Math.floor(Math.random() * window.innerHeight * 0.4))
      }

      console.log('initial array', tempArray);

      let loadArray = [...tempArray].map(num => {return {value: num, color: "white"}})
      
      setSortArray(loadArray);
    }
  }

//BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT 
//BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT 
//BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT 
//BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT 
//BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT BUBBLESORT 

  function bubbleSort() {

    setAnimating(true);

    let tempArray = [...sortArray].map(i => i.value)

    delay = 0;
    let pass = 1

    do {
      swapped = false
      
      for(let i = 0; i < tempArray.length; i++) {

        if(tempArray[i + 1] < tempArray[i]) {
          
          delay += (delayInc * aniSpeedConstants.bubble);
          bubbleAnimate(i, delay, [...tempArray], pass)

          let temp = tempArray[i];
          tempArray[i] = tempArray[i+1];
          tempArray[i+1] = temp

          swapped = true;          

        }
      }

      pass += 1

      if (swapped === false) {
        bubbleAnimate(0, delay, [...tempArray], "swapped")
      }

    } while (swapped === true)

    setTimeout(() => {
      console.log('delay bubble', delay);
      setAnimating(false);
    }, delay)

  }

  function bubbleAnimate(idx, delay, animateArray, pass) {   

    setTimeout(() => {

      if(pass === "swapped") {
        let loadArray = [...animateArray].map((num, index) => {return {value: num, color: "green"}});
        setSortArray(loadArray);
        return
      }


      let temp = animateArray[idx];
      animateArray[idx] = animateArray[idx+1];
      animateArray[idx+1] = temp;

      
      let loadArray = [...animateArray].map((num, index) => {return {value: num, color: (index > (animateArray.length - pass)) ? "green" : "white"}})

      // console.log('bubble pre display', loadArray, pass)

      setSortArray(loadArray);

      // ReactDOM.render(<DisplayArea array={sortArray} total={input}/>, document.getElementById('displayArea'))


    }, delay)

  }

//QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT 
//QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT 
//QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT 
//QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT 
//QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT QUICKSORT 

  function preQuickSort() {

    setAnimating(true);

    let arr = [...sortArray].map(i => i.value)
    let sorted = []
    // console.log('initial array', arr)
    delay = 0;
    quickSort(arr, 0, arr.length - 1, sorted);

    setTimeout(() => {
      console.log('delay bubble', delay);
      setAnimating(false);
    }, delay)

    // setSortArray(arr);
  }

  function quickSort(arr, leftIdx, rightIdx, sorted) {

    if(leftIdx < rightIdx) {
      let pivotIdx = quickSortPartition(arr, leftIdx, rightIdx, sorted) //determine a pivot and partition array into left and right sections

      console.log('array post partition', arr, 'new pivot', pivotIdx, 'left index', leftIdx, 'right index', rightIdx)
      quickSort(arr, leftIdx, pivotIdx - 1, sorted) //recursive left part
      quickSort(arr, pivotIdx + 1, rightIdx, sorted) //recursive right part
    } else {
      sorted.push(leftIdx, rightIdx);
      quickSortAnimate([...arr], 0, 0, 'swap', [...sorted])
      console.log(sorted)
    }

  }

  function quickSortPartition(arr, leftIdx, rightIdx, sorted) {

    // delay += 20

    console.log('arr', arr, 'leftidx', leftIdx, 'rightidx', rightIdx)


    let pivotVal = arr[rightIdx], //234, 142
    l = leftIdx,
    r = rightIdx

    console.log(pivotVal, l, r)


    while(l < r) { //0, 1  1, 63   l = 1
      while(arr[l] < pivotVal) {
        quickSortAnimate([...arr], l, rightIdx, 'compare', [...sorted]);
        l++ //set l to first item from left larger than pivot value
      }
      while(arr[r] >= pivotVal && r != leftIdx) {
        quickSortAnimate([...arr], r, rightIdx, 'compare', [...sorted]);
        r-- //set r to first item from right smaller than pivot value
      }
      if(l < r) {
        quickSortSwap(arr, l, r, sorted);
        l = leftIdx;
        r = rightIdx
      }
    }
    quickSortSwap(arr, l, rightIdx, sorted)

    sorted.push(l)
    console.log('sorted nums', sorted);

    return l
  }

  function quickSortSwap(arr, i, j, sorted) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    quickSortAnimate([...arr], 0, 0, 'swap', [...sorted])

  }
  
  function quickSortAnimate(arr, i, j, type, sorted) {

    setTimeout(() => {


      if(type === 'compare') {

        let tempArray = [...arr].map((num, index) => {return {value: num, color: index === i || index === j ? "red" : sorted.indexOf(index) >= 0 ? "green" : "white" }})
        setSortArray(tempArray)
      } else if(type === 'swap') {

        let tempArray = [...arr].map((num, index) => {return {value: num, color: sorted.indexOf(index) >= 0 ? "green" : "white"}})
        setSortArray(tempArray)
      }
    }, delay += (delayInc * aniSpeedConstants.quick))
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="section is-large sectionMain">

      <div className="reflections" style={reflectionsStyle}><Reflections click={setReflectionsStyle}/></div>

      <div className="columns columnContainer">
        <div className="column"></div>
        <div className="column is-four-fifths is-centered has-text-centered mainColumn">

          <button className="button is-info is-light reflectionsButton " onClick={()=>{setReflectionsStyle({visibility: "visible"})}}>
            Please <b>CLICK HERE</b> to view a log of my project learning updates and reflections :)
            <br/>
            This sorting visualiser project is still a work in progress AND IT PROBABLY DOESNT WORK ON MOBILE YET LUL xxxdddd!             
          </button>
          
          <span className="tag is-info is-light is-large margin1">Left slider = array size, right slider = visualise speed</span>
          <input className="input is-info is-rounded margin1 sliderInput" type="range" min={defaultBarCount.min} max={defaultBarCount.max} defaultValue={defaultBarCount.default} id="barCountInput" onChange={inputChange}/> {/*User defined array size*/}
          <input className="input sliderInput" type="range" min={defaultDelay.min} max={defaultDelay.max} defaultValue={defaultDelay.max} id="delayInput" onChange={inputChange}/> {/*User defined array size*/}
          <button className="margin1 button is-info is-light is-normal is-rounded" onClick={defineArray}>CREATE ARRAY</button>

          <div className="alignBottom">

            <div id="displayArea" style={displayAreaStyle}></div>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={preQuickSort}>Quick Sort</button>

          </div>

        </div>
        <div className="column"></div>
      </div>
    </div>
  )
}

export default App;
