import React, { useState } from 'react';
import NumberInput from './NumberInput';
import OperatorButton from './OperatorButton';
import Result from './Result';
import Error from './Error';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    if (!validateInputs()) {
      return;
    }

    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res);
    setError('');
  };

  const handleSubtraction = () => {
    if (!validateInputs()) {
      return;
    }

    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res);
    setError('');
  };

  const handleMultiplication = () => {
    if (!validateInputs()) {
      return;
    }

    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res);
    setError('');
  };

  const handleDivision = () => {
    if (!validateInputs() || num2 === '0') {
      setError('Error: Division by zero!');
      setResult('');
      return;
    }

    const res = parseFloat(num1) / parseFloat(num2);
    setResult(res);
    setError('');
  };

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setError('Error: Numbers cannot be empty!');
      setResult('');
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError('Error: Inputs must be numbers!');
      setResult('');
      return false;
    }

    return true;
  };

  return (
    <div>
      <NumberInput label="" value={num1} onChange={handleNum1Change} /><br></br>
      <NumberInput label="" value={num2} onChange={handleNum2Change} /><br></br>
      <OperatorButton operator="+" onClick={handleAddition} />&nbsp;&nbsp;&nbsp;&nbsp;
      <OperatorButton operator="-" onClick={handleSubtraction} />&nbsp;&nbsp;&nbsp;&nbsp;
      <OperatorButton operator="*" onClick={handleMultiplication} />&nbsp;&nbsp;&nbsp;&nbsp;
      <OperatorButton operator="/" onClick={handleDivision} /><br></br>
      {error && <Error error={error} />}<br></br>
      {result && <Result result={result} />}<br></br>
</div>
);
};
export default Calculator;

