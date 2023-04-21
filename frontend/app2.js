const list = document.getElementById("state");

let body = document.getElementById("body");



  let str = `<center><h1 class ="heading">Overall Country Analysis</h1></</center>`;

    str += `
        <div id="0"></div>
        <div id="1"></div>`;

  str += "</table>";

  str += `<br><br><center><button id="submit" onclick="generatepdf()">Generate Pdf</button></center>`;

//   var selectedArray = new Array();

//   var i;
//   var count = 0;
//   for (i = 0; i < list.length; i++) {
//     if (list[i].selected) {
//       selectedArray[count] = list[i].value;
//       count++;
//     }
//   }

  let StatesArray = [
    {
      name: "Gujarat",
      Doc: 7,
      Eng: 12,
      Stu: 21,
      Farmer: 20,
      Buss: 25,
      Unemp: 15,
      total: 100,
      Docinc: 84,
      Enginc: 76,
      Farmerinc: 12.6,
      Bussinc: 95,
    },
    {
      name: "Maharashtra",
      Doc: 10,
      Eng: 35,
      Stu: 70,
      Farmer: 18,
      Buss: 17,
      Unemp: 20,
      total: 170,
      Docinc: 59,
      Enginc: 84,
      Farmerinc: 11.5,
      Bussinc: 80,
    },
    {
      name: "Karnataka",
      Doc: 7,
      Eng: 25,
      Stu: 35,
      Farmer: 15,
      Buss: 19,
      Unemp: 13,
      total: 114,
      Docinc: 58,
      Enginc: 100,
      Farmerinc: 13.4,
      Bussinc: 75,
    },
    {
      name: "Kerela",
      Doc: 10,
      Eng: 8,
      Stu: 15,
      Farmer: 15,
      Buss: 12,
      Unemp: 10,
      total: 70,
      Docinc: 65,
      Enginc: 54,
      Farmerinc: 18,
      Bussinc: 60,
    },
    {
      name: "Haryana",
      Doc: 3,
      Eng: 7,
      Stu: 15,
      Farmer: 5,
      Buss: 6,
      Unemp: 24,
      total: 60,
      Docinc: 100,
      Enginc: 78,
      Farmerinc: 22.8,
      Bussinc: 80,
    },
    {
      name: "Punjab",
      Doc: 3,
      Eng: 10,
      Stu: 28,
      Farmer: 7,
      Buss: 6,
      Unemp: 11,
      total: 65,
      Docinc: 100,
      Enginc: 66,
      Farmerinc: 26.7,
      Bussinc: 78,
    },
    {
      name: "West Bengal",
      Doc: 8,
      Eng: 30,
      Stu: 32,
      Farmer: 25,
      Buss: 15,
      Unemp: 40,
      total: 150,
      Docinc: 53,
      Enginc: 50,
      Farmerinc: 6.7,
      Bussinc: 65,
    },
    {
      name: "Meghalaya",
      Doc: 3,
      Eng: 7,
      Stu: 14,
      Farmer: 1,
      Buss: 1,
      Unemp: 4,
      total: 30,
      Docinc: 30,
      Enginc: 30,
      Farmerinc: 29.3,
      Bussinc: 20,
    },
    {
      name: "Uttar Pradesh",
      Doc: 13,
      Eng: 40,
      Stu: 49,
      Farmer: 100,
      Buss: 18,
      Unemp: 30,
      total: 250,
      Docinc: 90,
      Enginc: 60,
      Farmerinc: 8,
      Bussinc: 87,
    },
    {
      name: "Himachal Pradesh",
      Doc: 2,
      Eng: 9,
      Stu: 14,
      Farmer: 8,
      Buss: 5,
      Unemp: 12,
      total: 50,
      Docinc: 57,
      Enginc: 40,
      Farmerinc: 12.1,
      Bussinc: 54,
    },
  ];

  body.innerHTML = str;
  
  var bardata = [
    ["Occupation"],
    ["Doctor"],
    ["Engineer"],
    ["Student"],
    ["Farmer"],
    ["Business"],
    ["Unemployed"],
  ];
  var barincdata = [
    ["Occupation"],
    ["Doctor"],
    ["Engineer"],
    ["Farmer"],
    ["Business"],
  ];
  for (i = 0; i < StatesArray.length; i++) {
    

        let d = StatesArray[i];
        
        bardata[0].push(`${d.name}`);
        bardata[1].push((d.Doc * 100) / d.total);
        bardata[2].push((d.Eng * 100) / d.total);
        bardata[3].push((d.Stu * 100) / d.total);
        bardata[4].push((d.Farmer * 100) / d.total);
        bardata[5].push((d.Buss * 100) / d.total);
        bardata[6].push((d.Unemp * 100) / d.total);

        barincdata[0].push(`${d.name}`);
        barincdata[1].push(d.Docinc);
        barincdata[2].push(d.Enginc);
        barincdata[3].push(d.Farmerinc);
        barincdata[4].push(d.Bussinc);
      
    
  }


  google.charts.load("current", { packages: ["corechart"] });
  google.charts.load("current", { packages: ["bar"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
      var data2 = google.visualization.arrayToDataTable(bardata);
      var data3 = google.visualization.arrayToDataTable(barincdata);

      var options2 = {
        chart: {
          title: "Population Comparison",
        },
        height: 600
      };

      var options3 = {
        chart: {
          title: "Average Income Comparison",
        },
        height: 600
      };

      var chart2 = new google.charts.Bar(document.getElementById(`0`));
      chart2.draw(data2, google.charts.Bar.convertOptions(options2));

      var chart3 = new google.charts.Bar(document.getElementById(`1`));
      chart3.draw(data3, google.charts.Bar.convertOptions(options3));
    }
  

    function generatepdf()
    {
        var makepdf = document.getElementById("body");
        var mywindow = window.open("", "PRINT", "height=400,width=600");

        mywindow.document.write(makepdf.innerHTML);

        mywindow.document.close();
        mywindow.focus();

        mywindow.print();
       // mywindow.close();

        return true;
    }

