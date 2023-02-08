function weather_report()
{
    console.log("hi ");
let city=document.getElementById("city1").value
let at1=fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=98b9f1eff75313fda05fec71a48ad106");
at1.then((result)=>{
    result.json().then((data)=>{
    document.getElementById("para").innerHTML="Min temp is"+data.main.temp_max+" and Max temp is"+data.main.temp_min;
     
    
}) 
})
C(city)
}
function C(city)
{
let at=fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=98b9f1eff75313fda05fec71a48ad106");
at.then((result)=>{
    let a=[]
    let d=[]
    result.json().then((data)=>{
     let weatherarray=data.list
     let j=0
     for(let i=0;i<weatherarray.length;i=i+8)
     {
        // for(let i=0;i<weatherarray.length;i=i+8)
        // {
        //     console.log(weatherarray[i].main.temp)
        // }
        a[j]=weatherarray[i].main.temp
        let xyz=weatherarray[i].dt_txt.split(" ");
        d[j]=xyz[0]
        j++
     }
     z(a,d)
    })
})
console.log(a);
}
function z(arr,date)
{
    const ctx = document.getElementById('myChart');
      
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: date,
        datasets: [{
          label: '# of Votes',
          data: arr,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}