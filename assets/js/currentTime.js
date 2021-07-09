export function currentTime () {
    let arrow = document.querySelector('.arrow');
    let timeInput = document.querySelector('#time');
    let time = document.querySelector('.book-time');
    let date = document.querySelector('#date');
    let currentYear = new Date().getFullYear();
    let gsDayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
    document.body.addEventListener('click', (event)=> {
        let d = new Date(`${currentYear}-${date.value}`);
        let dayName = gsDayNames[d.getDay()];

        if (event.target == arrow ){

            if(date.value !== ''){

                if (dayName === 'Saturday' || dayName === 'Sunday' ){
                        time.innerHTML = " <li>8PM</li><li>9PM</li><li>10PM</li><li>11PM</li><li>12PM</li><li>1AM</li><li>2AM</li><li>3AM</li>";
                } else time.innerHTML = "<li>8PM</li><li>9PM</li><li>10PM</li>";

            }
            time.classList.toggle('active-time');

        } else time.classList.remove('active-time');

        let timeItem = time.querySelectorAll('li');

        timeItem.forEach(item=> {

            item.addEventListener('click', (e)=>{
                timeInput.value = item.innerHTML; 
            });

        });
    })

}