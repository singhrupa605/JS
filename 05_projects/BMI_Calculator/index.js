const form = document.querySelector('form')
form.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result =  document.querySelector('#results')

    if(height<0 || height==''|| isNaN(height))
    {
      result.innerHTML= `<span>${height}! not a valid height </span>`
    }
    else if(weight<0 || weight==''|| isNaN(weight))
    {
       result.innerHTML= `<span>${weight}! not a valid weight </span>`
    }
    else
    {
        const bmi  = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `BMI = <span>${bmi}</span>`
    }
})

