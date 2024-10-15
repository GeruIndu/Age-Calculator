var btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    var val = document.getElementById('input').value;
    const dob = new Date(val);
    let dday = dob.getDate();
    let dmonth = dob.getMonth();
    let dyear = dob.getFullYear();
    
    const crt = new Date();
    let cday = crt.getDate();
    let cmonth = crt.getMonth();
    let cyear = crt.getFullYear();
    
    if(dob > crt || dyear == cyear && dmonth == cmonth && dday == cday){
        alert("Please enter correct date!!");
        return;
    }

    if(cday < dday){
        cday += 30;
        cmonth --;
    }

    if(cmonth < dmonth){
        cmonth += 12;
        cyear--;
    }

    const ayear = cyear - dyear;
    const amonth = cmonth - dmonth;
    const aday = cday - dday;

    const age = `${ayear} Years ${amonth} Months ${aday} Days`;

    document.getElementById('ans').innerText = `Your Age = ${age}`;
});