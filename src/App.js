import { useEffect, useState, useCallback, useRef } from "react"

function App() {

  const [secondOperandValue, setSecondOperandValue] = useState(0)
  const [value, setValue] = useState([0])
  const [operator, setOperator] = useState('')
  const [operatorSymbol, setOperatorSymbol] = useState('')
  const [calc, setCalc] = useState(false)
  const [multiCalc, setMultiCalc] = useState(false)
  const [firstOperand, setFirstOperand] = useState(0)
  const [storedResult, setStoredResult] = useState(0)
  const [charLimit, setCharLimit] = useState(true)

  let result = useRef(0)
  let secondOperand = useRef(0)

  // Digits
  const handleDigitNine = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 9
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitEight = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 8
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitSeven = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 7
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitSix = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 6
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitFive = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 5
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitFour = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 4
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitThree = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 3
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitTwo = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 2
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitOne = useCallback(() => {
    try {    
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 1
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitZero = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = 0
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  const handleDigitPoint = useCallback(() => {
    try {
      if (value[0] === 0) {
        value.splice(0,1)
      }
      const digit = '.'
      if (value.length !== 12 && charLimit) {
        setValue([...value, digit])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[value, charLimit])

  // Operators
  const handleAdd = useCallback(() => {
    setOperator('add')
    setOperatorSymbol('+')
    setCalc(true)    
    setCharLimit(true)
    if (storedResult !== 0 && multiCalc === true) {
      setValue([0])
      setFirstOperand(value)
      setSecondOperandValue(0)
    }
    try {
      if (firstOperand === 0) {
        setFirstOperand(parseFloat(value.join('')))
        setValue([0])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[firstOperand, multiCalc, storedResult, value])

  const handleMinus = useCallback(() => {
    setOperator('minus')
    setOperatorSymbol('-')
    setCalc(true)
    setCharLimit(true)
    if (storedResult !== 0 && multiCalc === true) {
      setValue([0])
      setFirstOperand(value)
      setSecondOperandValue(0)
    }
    try {
      if (firstOperand === 0) {
        setFirstOperand(parseFloat(value.join('')))
        setValue([0])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[firstOperand, multiCalc, storedResult, value])

  const handleMultiply = useCallback(() => {
    setOperator('multiply')
    setOperatorSymbol('*')
    setCalc(true)
    setCharLimit(true)
    if (storedResult !== 0 && multiCalc === true) {
      setValue([0])
      setFirstOperand(value)
      setSecondOperandValue(0)
    }
    try {
      if (firstOperand === 0) {
        setFirstOperand(parseFloat(value.join('')))
        setValue([0])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[firstOperand, multiCalc, storedResult, value])

  const handleDivide = useCallback(() => {
    setOperator('divide')
    setOperatorSymbol('/')
    setCalc(true)
    setCharLimit(true)
    if (storedResult !== 0 && multiCalc === true) {
      setValue([0])
      setFirstOperand(value)
      setSecondOperandValue(0)
    }
    try {
      if (firstOperand === 0) {
        setFirstOperand(parseFloat(value.join('')))
        setValue([0])
      }
    }
    catch (error) {
      console.log(error.message)
    }
  },[firstOperand, multiCalc, storedResult, value])

  const handleEquals = useCallback(() => {
    try {
      if (calc) {
        secondOperand = parseFloat(value.join(''))
        setSecondOperandValue(secondOperand)
        if (operator === 'add') {
          result = firstOperand + secondOperand
        }
        if (operator === 'minus') {
          result = firstOperand - secondOperand
        }
        if (operator === 'multiply') {
          result = firstOperand * secondOperand
        }
        if (operator === 'divide') {
          result = firstOperand / secondOperand
        }    
        setValue(result)
        setCalc(false)
      }
      setStoredResult(result)
      if (storedResult !== 0 && multiCalc === false) {
        result.current = storedResult + parseFloat(value.join(''))
        setFirstOperand(storedResult)
        setSecondOperandValue(parseFloat(value))
        setValue(result)
      }
      setMultiCalc(true)
    }
    catch (error) {
      console.log(error.message)
    }
  },[calc, firstOperand, multiCalc, operator, storedResult, value])

  // Keyboard
  useEffect(() => {
    const keyDownCallBack = function (e) {
      switch (e.keyCode) {
        case 49:
          handleDigitOne()
          break
        case 50:
          handleDigitTwo()
          break
        case 51:
          handleDigitThree()
          break
        case 52:
          handleDigitFour()
          break
        case 53:
          handleDigitFive()
          break
        case 54:
          handleDigitSix()
          break
        case 55:
          handleDigitSeven()
          break
        case 56:
          handleDigitEight()
          break
        case 57:
          handleDigitNine()
          break
        case 48:
          handleDigitZero()
          break
        case 107:
          handleAdd()
          break
        case 109:
          handleMinus()
          break
        case 106:
          handleMultiply()
          break
        case 111:
          handleDivide()
          break
        case 13:
          handleEquals()
          break
        default:
      }
    }
    document.addEventListener('keydown', keyDownCallBack)
    return () => document.removeEventListener('keydown', keyDownCallBack)
  },[
    handleDigitOne, 
    handleDigitTwo, 
    handleDigitThree, 
    handleDigitFour, 
    handleDigitFive, 
    handleDigitSix, 
    handleDigitSeven, 
    handleDigitEight, 
    handleDigitNine, 
    handleDigitZero,
    handleAdd,
    handleMinus,
    handleMultiply,
    handleDivide,
    handleEquals
  ])

  return (
    <div className="App">
      <div className="main-container" tabIndex={0}>
        <div className="display">
          <h2 id="secondary-display">
            {firstOperand !== 0 && firstOperand + ' ' + operatorSymbol + ' ' + secondOperandValue}
          </h2>
          <h1>{value}</h1>
        </div>
        <div className="keys">
          <button className="danger-btn operators" onClick={() => {
            setValue([0])
            setFirstOperand(0)
            setSecondOperandValue(0)
            setStoredResult(0)
            setCalc(false)
            setMultiCalc(false)
          }}>CLR</button>
          <button className="danger-btn operators" onClick={() => {
            try {
              value.pop()
              setValue([...value])
              if (value.length === 0) {
                setValue([0])
              }
            }
            catch (error) {
              console.log(error.message)
            }
          }}>DEL</button>
          <button className="operators">%</button>
          <button className="operators" onClick={handleDivide}>/</button>
          <button onClick={handleDigitSeven}>7</button>
          <button onClick={handleDigitEight}>8</button>
          <button onClick={handleDigitNine}>9</button>
          <button className="operators" onClick={handleMultiply}>x</button>
          <button onClick={handleDigitFour}>4</button>
          <button onClick={handleDigitFive}>5</button>
          <button onClick={handleDigitSix}>6</button>
          <button className="operators" onClick={handleMinus}>-</button>
          <button onClick={handleDigitOne}>1</button>
          <button onClick={handleDigitTwo}>2</button>
          <button onClick={handleDigitThree}>3</button>
          <button className="operators" onClick={handleAdd}>+</button>
          <button id="zero" onClick={handleDigitZero}>0</button>
          <button onClick={handleDigitPoint}>.</button>
          <button className="operators" onClick={handleEquals}>=</button>
        </div>
      </div>
      <p className="info">an epic calculator by johnrey <br />built with some React, Javascript, and CSS</p>
    </div>
  );
}

export default App;