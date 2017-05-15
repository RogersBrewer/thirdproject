
tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d = new Date();
var nday = d.getDay(),nmonth = d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear += 1900;
var nhour=d.getHours(),nmin = d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap =" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

var myDate = new Date(); 

 var greeting = document.getElementById("dayGreeting") 
/* hour is before noon */
if ( myDate.getHours() < 12 )  
{ 
   var para = document.createElement("p")
   var t = document.createTextNode("Good Morning!")
   para.appendChild(t)
   document.getElementById("dayGreeting").appendChild(para)

     
} 
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
   var para = document.createElement("p")
   var t = document.createTextNode("Good Afternoon!")
   para.appendChild(t)
   document.getElementById("dayGreeting").appendChild(para)

} 
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
   var para = document.createElement("p")
   var t = document.createTextNode("Good Evening!")
   para.appendChild(t)
   document.getElementById("dayGreeting").appendChild(para)
    
} 
else  /* the hour is not between 0 and 24, so something is wrong */
{ 
    document.write("I'm not sure what time it is!"); 
}

var yourName = prompt("What Your Name")
if (yourName != null) {
        document.getElementById("urName").innerHTML = yourName
        
    }

document.getElementById("") 
  

  