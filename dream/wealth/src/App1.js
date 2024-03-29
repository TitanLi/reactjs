import logo from './logo.svg';
import './App.css';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import data from './assets/test.json'
import moment from 'moment'

function App1() {
    data = data.data;
    var ohlc = [],
        volume = [],
        dataLength = data.length,
        // set the allowed units for data grouping
        groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]],
        i = 0;
    for (i; i < dataLength; i += 1) {
        ohlc.push([
            data[i][0], // the date
            data[i][1], // open
            data[i][2], // high
            data[i][3], // low
            data[i][4] // close
        ]);
        volume.push([
            data[i][0], // the date
            data[i][5] // the volume
        ]);
    }
    const configPrice = {
        rangeSelector: {
            selected: 1,
            inputDateFormat: '%Y-%m-%d'
        },
        title: {
            text: '平安银行历史股价'
        },
        xAxis: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
                week: '%m-%d',
                month: '%y-%m',
                year: '%Y'
            }
        },
        tooltip: {
            split: false,
            shared: true,
        },
        yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: '股价'
            },
            height: '65%',
            resize: {
                enabled: true
            },
            lineWidth: 2
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: '成交量'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],
        series: [{
            type: 'candlestick',
            name: '平安银行',
            color: 'green',
            lineColor: 'green',
            upColor: 'red',
            upLineColor: 'red',
            tooltip: {
            },
            navigatorOptions: {
                color: Highcharts.getOptions().colors[0]
            },
            data: ohlc,
            dataGrouping: {
                units: groupingUnits
            },
            id: 'sz'
        }, {
            type: 'column',
            data: volume,
            yAxis: 1,
            dataGrouping: {
                units: groupingUnits
            }
        }]
    };
    return (
        <div className="App1">
            <ReactHighcharts config={configPrice}></ReactHighcharts>
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    );
}

export default App1;
