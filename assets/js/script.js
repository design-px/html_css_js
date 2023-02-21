// about section
const startCar = document.querySelector('.startCar');
const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');
const car3 = document.querySelector('.car-3');
const cars = [car1, car2, car3];

startCar.addEventListener('click', () => {
    cars.forEach(car => car.classList.add('resume-animation'));
    startCar.classList.add('fade');
})




