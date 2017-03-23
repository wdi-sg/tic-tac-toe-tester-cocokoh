 
  var button = document.querySelector('button')

  function result () {
    var firstNumb = document.getElementById('firstNum').value
    var secondNumb = document.getElementById('secondNum').value
    var operator = document.getElementById('operator').value
    var results = 0
    // alert(firstNumb)
    if (operator === '+') {
      results = parseFloat(firstNumb) + parseFloat(secondNumb)
    } else if (operator === '-') {
      results = firstNumb - secondNumb
    } else if (operator === '/') {
      results = firstNumb / secondNumb
    } else if (operator === '*') {
      results = firstNumb * secondNumb
    // } else if (results.match(NaN)) {
    //   results = 'try again'
    } else {
      results = 'it is not valid'
    }
    document.getElementById('result').textContent = results
  }
  button.addEventListener('click', result)
})
