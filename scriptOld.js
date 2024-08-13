const $ = name => document.getElementById(name)
const $$ = name => document.querySelector(name)

let HeightScore = localStorage.getItem("height-score") || 0;
$$('.resu_Height').innerHTML = `${HeightScore} cm`
let WeightScore = localStorage.getItem("weight-score") || 0;
$$('.resu_Weight').innerHTML = `${WeightScore} kg`
let BmiScore = localStorage.getItem("bmi-score") || 0;
$$('.resu_Bmi').innerHTML = BmiScore
let StatusScore = localStorage.getItem("status-score") || 0;
$$('.resu_Description').innerHTML = StatusScore


$('calculate').addEventListener('click', function(){
    let height = $$('#Height').value;
    let weight = $$('#Weight').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields!')
        return;
    }

    height = height / 100

    let BMI = (weight / (height * height));
    BMI = BMI.toFixed(2);

    $$('.BMI').innerHTML = `${BMI}`

    let status = '';

    if(BMI < 18.5){
        status = "Underweight"
    }
    else if(BMI >= 18.5 & BMI < 25){
        status = 'Healthy :)'
    }
    else if(BMI >= 25 & BMI < 30){
        status = 'Overweight'
    }
    else if(BMI >= 30 & BMI < 35){
        status = 'Obese I'
    }
    else if(BMI >= 35 & BMI < 40){
        status = 'Obese II'
    }
    else if(BMI >= 40){
        status = 'Obese III'
    }

    $$('.comment').innerHTML = status

    localStorage.setItem("height-score", HeightScore)
    localStorage.setItem("weight-score", WeightScore)
    localStorage.setItem("bmi-score", BmiScore)
    localStorage.setItem("tatus-score", StatusScore)

    $$('.resu_Height').innerHTML = HeightScore
    $$('.resu_Weight').innerHTML = WeightScore
    $$('.resu_Bmi').innerHTML = BmiScore
    $$('.resu_Description').innerHTML = StatusScore
});