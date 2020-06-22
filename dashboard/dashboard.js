
var myChart = document.getElementById('myChart').getContext('2d');

//global options
Chart.defaults.global.defaultFontFamily = 'Lato'
Chart.defaults.global.defaultFontSize = 18

var abadiChart = new Chart(myChart,
                                {
                                    type:'line', //pie, line,doughnut,radar,polarArea
                                    data:{
                                        labels:['Jan','Feb','Mar','Apr' , 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                                        datasets:[{
                                                label:'Population',
                                                data:[2000,3000,1000,500,2340,5543,323,7688,3543,980,5480,9000],

                                                //styling
                                                backgroundColor:['grey','red','teal','orange','tomato'],
                                                borderWidth:1,
                                                color:'pink',
                                                hoverBorderWidth:3,
                                                hoverBorderColor:'black',

                                                }],
                                        

                                        },

                                    options:{
                                            title:{
                                                display:true,
                                                text:'DASHBOARD GRAPHS',
                                                fontSize: 25
                                                  },
                                            legend:{
                                                    // display:false,
                                                    position:'right',
                                                    label:{fontColor:'#000'}
                                                   },
                                            layout:{
                                                    padding:{left:50,top:0, right:0,bottom:0}
                                                   },
                                            tooltips:{
                                                    enabled:false
                                                    }
                                            }
                                })
