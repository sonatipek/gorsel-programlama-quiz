// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('main'));
let button = document.getElementById('tableChange');
let banner = document.querySelector('main.banner');
button.addEventListener("click", e=> {
    banner.style.display = "none"
  });

// Specify the configuration items and data for the chart
var option = {
color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
title: {
 text: 'Grafik Alanı'
},
tooltip: {
 trigger: 'axis',
 axisPointer: {
   type: 'cross',
   label: {
     backgroundColor: '#6a7985'
   }
 }
},
legend: {
 data: ['Veri 1', 'Veri 2', 'Veri 3', 'Veri 4', 'Veri 5']
},
toolbox: {
 feature: {
   saveAsImage: {}
 }
},
grid: {
 left: '3%',
 right: '4%',
 bottom: '3%',
 containLabel: true
},
xAxis: [
 {
   type: 'category',
   boundaryGap: false,
   data: ['Pzt', 'Salı', 'Çrş', 'Pri', 'Cuma', 'Cmt', 'Pzt']
 }
],
yAxis: [
 {
   type: 'value'
 }
],
series: [
 {
   name: 'Veri 1',
   type: 'line',
   stack: 'Total',
   smooth: true,
   lineStyle: {
     width: 0
   },
   showSymbol: false,
   areaStyle: {
     opacity: 0.8,
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
       {
         offset: 0,
         color: 'rgb(128, 255, 165)'
       },
       {
         offset: 1,
         color: 'rgb(1, 191, 236)'
       }
     ])
   },
   emphasis: {
     focus: 'series'
   },
   data: [140, 232, 101, 264, 90, 340, 250]
 },
 {
   name: 'Veri 2',
   type: 'line',
   stack: 'Total',
   smooth: true,
   lineStyle: {
     width: 0
   },
   showSymbol: false,
   areaStyle: {
     opacity: 0.8,
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
       {
         offset: 0,
         color: 'rgb(0, 221, 255)'
       },
       {
         offset: 1,
         color: 'rgb(77, 119, 255)'
       }
     ])
   },
   emphasis: {
     focus: 'series'
   },
   data: [120, 282, 111, 234, 220, 340, 310]
 },
 {
   name: 'Veri 3',
   type: 'line',
   stack: 'Total',
   smooth: true,
   lineStyle: {
     width: 0
   },
   showSymbol: false,
   areaStyle: {
     opacity: 0.8,
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
       {
         offset: 0,
         color: 'rgb(55, 162, 255)'
       },
       {
         offset: 1,
         color: 'rgb(116, 21, 219)'
       }
     ])
   },
   emphasis: {
     focus: 'series'
   },
   data: [320, 132, 201, 334, 190, 130, 220]
 },
 {
   name: 'Veri 4',
   type: 'line',
   stack: 'Total',
   smooth: true,
   lineStyle: {
     width: 0
   },
   showSymbol: false,
   areaStyle: {
     opacity: 0.8,
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
       {
         offset: 0,
         color: 'rgb(255, 0, 135)'
       },
       {
         offset: 1,
         color: 'rgb(135, 0, 157)'
       }
     ])
   },
   emphasis: {
     focus: 'series'
   },
   data: [220, 402, 231, 134, 190, 230, 120]
 },
 {
   name: 'Veri 5',
   type: 'line',
   stack: 'Total',
   smooth: true,
   lineStyle: {
     width: 0
   },
   showSymbol: false,
   label: {
     show: true,
     position: 'top'
   },
   areaStyle: {
     opacity: 0.8,
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
       {
         offset: 0,
         color: 'rgb(255, 191, 0)'
       },
       {
         offset: 1,
         color: 'rgb(224, 62, 76)'
       }
     ])
   },
   emphasis: {
     focus: 'series'
   },
   data: [220, 302, 181, 234, 210, 290, 150]
 }
]
};

   // Display the chart using the configuration items and data just specified.
   myChart.setOption(option);