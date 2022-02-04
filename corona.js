const tbval = document.getElementById('tbval');

const data = async()=>{
    const api =  await fetch('https://api.covid19api.com/summary')
    const apis = await api.json();

////dynamic table create and add content as well
  for(i =1; i<apis['Countries'].length;i++){
      var x = tbval.insertRow();
      x.insertCell(0);
      tbval.rows[i].cells[0].innerHTML = apis['Countries'][i-1]['Country'];
      tbval.rows[i].cells[0].style.background = 'red';
      tbval.rows[i].cells[0].style.color = 'white';

      x.insertCell(1);
      tbval.rows[i].cells[1].innerHTML = apis['Countries'][i-1]['TotalConfirmed'];
      tbval.rows[i].cells[1].style.background = '#008080';
      tbval.rows[i].cells[1].style.color = 'white';

      x.insertCell(2);
      tbval.rows[i].cells[2].innerHTML = apis['Countries'][i-1]['TotalRecovered'];
      tbval.rows[i].cells[2].style.background = '#000080';
      tbval.rows[i].cells[2].style.color = 'white';


      x.insertCell(3);
      tbval.rows[i].cells[3].innerHTML = apis['Countries'][i-1]['TotalDeaths'];
      tbval.rows[i].cells[3].style.background = '#FF00FF';
      tbval.rows[i].cells[3].style.color = 'white';


      x.insertCell(4);
      tbval.rows[i].cells[4].innerHTML = apis['Countries'][i-1]['NewConfirmed'];
      tbval.rows[i].cells[4].style.background = '#800080';
      tbval.rows[i].cells[4].style.color = 'white ';



      x.insertCell(5);
      tbval.rows[i].cells[5].innerHTML = apis['Countries'][i-1]['NewDeaths'];
      tbval.rows[i].cells[5].style.background = '#F08080';
      tbval.rows[i].cells[5].style.color = 'white ';

}
  document.getElementById("newdeath").innerHTML = apis.Global.NewDeaths;
  document.getElementById("date").innerHTML = apis.Global.Date;
  document.getElementById("newconfirmed").innerHTML = apis.Global.NewConfirmed;
  document.getElementById("totalconfirmed").innerHTML = apis.Global.TotalConfirmed;
  document.getElementById("totaldeaths").innerHTML = apis.Global.TotalDeaths;
  document.getElementById("totalrecovered").innerHTML = apis.Global.TotalRecovered;
 }
data();

