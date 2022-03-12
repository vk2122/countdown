import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Countdown() {
  <h1>Countdown</h1>
  var countDownDate = new Date("Nov 12,2022 23:59:59").getTime();
  var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/(1000));

    document.getElementById("root").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
    
    if(distance < 0) {
      clearInterval(x);
      document.getElementById("root").innerHTML = "Happy Birthday 🥳🥳🎉🎉";
    }
  },1000
  ); 
}
Countdown();
ReactDOM.render(
  <Countdown />,
  document.getElementById('root')
);
