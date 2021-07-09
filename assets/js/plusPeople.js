export function plusPeople () {
   let plus = document.querySelector('.plus');
   let inputPeople = document.querySelector('#people');

   plus.addEventListener('click', ()=> {
       if (inputPeople.value !== '' && !isNaN(inputPeople.value)) {
           inputPeople.value++;
       } else inputPeople.value = Number(1);    
   });

}