
function calculateAge() {
   const dob = document.getElementById("enter-age").value;
   if (!dob) {
      alert("Please enter your date of birth.");
      return;
   }
   const bday = new Date(dob);
   const today = new Date();

   let years = today.getFullYear() - bday.getFullYear();
   let months = today.getMonth() - bday.getMonth();
   if (months < 0 || (months === 0 && today.getDate() < bday.getDate())) {
      years--;
      months += 12;
   }

   let days = today.getDate() - bday.getDate();
   if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
   }

   let hours = today.getHours() - bday.getHours();
   if (hours < 0) {
      days--;
      hours += 24;
   }

   let minutes = today.getMinutes() - bday.getMinutes();
   if (minutes < 0) {
      hours--;
      minutes += 60;
   }

   let seconds = today.getSeconds() - bday.getSeconds();
   if (seconds < 0) {
      minutes--;
      seconds += 60;
   }

   document.getElementById('years').innerText = years;
   document.getElementById('months').innerText = months;
   document.getElementById('days').innerText = days;
   document.getElementById('hours').innerText = hours;
   document.getElementById('minutes').innerText = minutes;
   document.getElementById('seconds').innerText = seconds;

   //difference in eack

   document.getElementById('dyears').innerText = years + '.' + months;
   document.getElementById('dmonths').innerText = (years * 12)+months;
   document.getElementById('ddays').innerText = ((years * 12)+months)*30+days;
   document.getElementById('dhours').innerText = (((years * 12)+months)*30)*24+hours;
   document.getElementById('dminutes').innerText = ((((years * 12)+months)*30)*24)*60+minutes;
   document.getElementById('dseconds').innerText = (((((years * 12)+months)*30)*24)*60)*60+seconds;

}



// age difference between two dates
function ageDifference() {
   const player1dob = document.getElementById("player1input").value;
   const player2dob = document.getElementById("player2input").value;

   if (!player1dob || !player2dob) {
      alert("Please enter both dates of birth.");
      return;
   }

   const date1 = new Date(player1dob);
   const date2 = new Date(player2dob);

   let younger, older;
   if (date1 < date2) {
      younger = date1;
      older = date2;
   } else {
      younger = date2;
      older = date1;
   }

   younger = new Date(younger);
   older = new Date(older);
   let diffyears = older.getFullYear() - younger.getFullYear();

   let diffmonths = older.getMonth() - younger.getMonth();
   if (diffmonths < 0 || (diffmonths === 0 && older.getDate() < younger.getDate())) {
      diffyears--;
      diffmonths += 12;
   }

   let diffdays = older.getDate() - younger.getDate();
   if (diffdays < 0) {
      diffmonths--;
      let previousMonth = new Date(older.getFullYear(), older.getMonth(), 0);
      diffdays += previousMonth.getDate();
   }

   let diffhours = older.getHours() - younger.getHours();
   if (diffhours < 0 || (diffhours === 0 && older.getHours() < younger.getHours())) {
      diffdays--;
      diffhours += 24;
   }

   let diffminutes = older.getMinutes() - younger.getMinutes();
   if (diffminutes < 0 || (diffminutes === 0 && older.getSeconds() < younger.getSeconds())) {
      diffhours--;
      diffminutes += 60;
   }

   let diffseconds = older.getSeconds() - younger.getSeconds();
   if (diffseconds < 0) {
      diffminutes--;
      diffseconds += 60;
   }

   // difference
   
   document.getElementById('years2').innerText = diffyears;
   document.getElementById('months2').innerText = diffmonths;
   document.getElementById('days2').innerText = diffdays;
   document.getElementById('hours2').innerText = diffhours;
   document.getElementById('minutes2').innerText = diffminutes;
   document.getElementById('seconds2').innerText = diffseconds;

   // difference in each

   document.getElementById('dyears2').innerText = diffyears + '.' + diffmonths;
   document.getElementById('dmonths2').innerText = diffmonths + (diffyears*12);
   document.getElementById('ddays2').innerText = diffdays + (diffmonths + (diffyears*12)*30) ;
   document.getElementById('dhours2').innerText = diffhours + (diffdays + (diffmonths + (diffyears*12)*30)*24);
   document.getElementById('dminutes2').innerText = diffminutes + (diffhours + (diffdays + (diffmonths + (diffyears*12)*30)*24)*60);
   document.getElementById('dseconds2').innerText = diffseconds + ( diffminutes + (diffhours + (diffdays + (diffmonths + (diffyears*12)*30)*24)*60)*60) ;
}
