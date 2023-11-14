const form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weigth = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const heightformat = height / 100;
    console.log(heightformat);

    const bmi = weigth / (heightformat * heightformat).toFixed(2);

    console.log(bmi);


    const value = document.getElementById('description');
    let description = '';
    document.getElementById('infos').classList.remove('hidden');

    
    if (bmi < 18.5) {
        description = 'Magreza';
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Sobrepeso';
    } else if (bmi >= 30 && bmi < 35) {
        description = 'Obesidade I';
    } else if (bmi >= 35 && bmi < 40) {
        description = 'Obesidade II';
    } else if (bmi >= 40) {
        description = 'Obesidade III';
    }
    value.innerText = description;
});