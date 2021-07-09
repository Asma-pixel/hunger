export function formValidation () {
    let form = document.querySelector('.book-block');
    let fields = document.querySelectorAll('.book-input');
    let numberFields = document.querySelectorAll('.numbers');
    let emailField = document.querySelector('#email');
    let phoneField = document.querySelector('#phone');
    let nameField = document.querySelector('#name');
    let dateField = document.querySelector('#date');
    let timeField = document.querySelector('#time');
    let bLet, bNum, bEmail, bDate;
    function isEmpty(){
        fields.forEach(field => {

            if(field.value === ''){
                field.classList.add('error-line');
            } else field.classList.remove('error-line');

        });
    }
    function isLetter () {
        bLet = nameField.value;
        bLet = bLet.match("^[A-Za-zА-Яа-я]+$");
        if (bLet == null) {
            nameField.value = '';
        }
       
    }
    function isNumber() {
        numberFields.forEach(field =>{
            bNum = field.value;
            bNum = bNum.match("^[0-9]+$");
            if (bNum == null) {
                field.value = '';
            }
        })
       
    }
    function dateValidation () {
        let dateFieldArr;
        bDate= dateField.value;
        bDate.match("^[0-9\-]+$");
        dateFieldArr = dateField.value.split('');

        if(dateFieldArr.length > 5 || bDate === null || dateFieldArr.length < 5) {
            return false
        }

        for(let i = 0; i< dateFieldArr.length; i++){

            if(dateFieldArr[i] === '-' && i !== 2) {
                return false  
            }
            else if (dateFieldArr[i] !== '-' && i === 2){
               return false
            }

        }

        return true;

    }
    function isDate() {
        if(!dateValidation ()){
            dateField.value = '';
        }
    }
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        isLetter();
        isNumber();
        isDate()
        isEmpty();
        
    })

}