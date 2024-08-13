const $ = name => document.getElementById(name);
const $$ = name => document.querySelector(name);

let HeightScore = localStorage.getItem("height-score") || 0;
$$('.resu_Height').innerHTML = `${HeightScore} cm`;
let WeightScore = localStorage.getItem("weight-score") || 0;
$$('.resu_Weight').innerHTML = `${WeightScore} kg`;
let BmiScore = localStorage.getItem("bmi-score") || 0;
$$('.resu_Bmi').innerHTML = BmiScore;
let StatusScore = localStorage.getItem("status-score") || 0;
$$('.resu_Description').innerHTML = StatusScore;

$('calculate').addEventListener('click', function(){
    let height = parseFloat($$('#Height').value);
    let weight = parseFloat($$('#Weight').value);

    if(isNaN(height) || isNaN(weight)){
        alert('Please fill out the input fields!');
        return;
    }

    let BMI = (weight / ((height/100) * (height/100))).toFixed(2);
    $$('.BMI').innerHTML = BMI;

    let status = '';
    if(BMI < 18.5){
        status = "Underweight";
    } else if(BMI >= 18.5 && BMI < 25){
        status = 'Healthy :)';
    } else if(BMI >= 25 && BMI < 30){
        status = 'Overweight';
    } else if(BMI >= 30 && BMI < 35){
        status = 'Obese I';
    } else if(BMI >= 35 && BMI < 40){
        status = 'Obese II';
    } else {
        status = 'Obese III';
    }

    $$('.comment').innerHTML = status;

    localStorage.setItem("height-score", height);
    localStorage.setItem("weight-score", weight);
    localStorage.setItem("bmi-score", BMI);
    localStorage.setItem("status-score", status);

    $$('.resu_Height').innerHTML = `${height} cm`;
    $$('.resu_Weight').innerHTML = `${weight} kg`;
    $$('.resu_Bmi').innerHTML = BMI;
    $$('.resu_Description').innerHTML = status;
});