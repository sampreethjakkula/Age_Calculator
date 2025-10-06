function calculateAge(){
    let date=document.getElementById('dob').value;
    if(date === ""){
        document.getElementById('result').innerHTML="<p>Please enter a valid date</p>";
        return;
    }
        let dob = new Date(date);
        let today = new Date();
        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();
        if(months < 0 || (months === 0 && days < 0)){
            years--;
            months += 12;
        }
        if(days < 0){
            let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if(years < 0){
            document.getElementById('result').innerHTML="<p>Please enter a valid date</p>";
            return;
        }
        document.getElementById('result').innerHTML=`you are <b>${years}</b> years, <b>${months}</b> months and <b>${days}</b> days old`;
        

}