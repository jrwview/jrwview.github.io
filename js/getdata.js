const api_flow_transducer = 'https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer';
const api_level_transducer = 'https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer';
const api_temperature_transducer = 'https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer';
const api_pressure_transducer = 'https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer';

// -------------------------------------------- GET API FLOW TRANSDUCER --------------------------------------------
fetch(api_flow_transducer)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < Object.keys(data).length; i++){
            const markup = `<div class="col">
                                <div class="card" style="width: 26rem;">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name : ${data[i]['name']}</li>
                                        <li class="list-group-item">Type : ${data[i]['type']}</li>
                                        <li class="list-group-item">Unit : ${data[i]['unit']}</li>
                                        <li class="list-group-item">Range : ${data[i]['range'][0]} - ${data[i]['range'][1]}</li>
                                        <li class="list-group-item">Plant-site : ${data[i]['plant-site']}</li>
                                        <li class="list-group-item">Value : <span id="value_flow${i}">${data[i]['value']}</span></li>
                                    </ul>
                                </div>
                            <div>`;
            document.querySelector('#flow-transducer').insertAdjacentHTML('beforeend',markup);
        }
        //console.log(data);
    })
    .catch(error => console.log(error));

// -------------------------------------------- GET API LEVEL TRANSDUCER --------------------------------------------
fetch(api_level_transducer)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < Object.keys(data).length; i++){
            const markup = `<div class="col">
                                <div class="card" style="width: 26rem;">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name : ${data[i]['name']}</li>
                                        <li class="list-group-item">Type : ${data[i]['type']}</li>
                                        <li class="list-group-item">Unit : ${data[i]['unit']}</li>
                                        <li class="list-group-item">Range : ${data[i]['range'][0]} - ${data[i]['range'][1]}</li>
                                        <li class="list-group-item">Plant-site : ${data[i]['plant-site']}</li>
                                        <li class="list-group-item">Value : <span id="value_level${i}">${data[i]['value']}</span></li>
                                    </ul>
                                </div>
                            <div>`;
            document.querySelector('#level-transducer').insertAdjacentHTML('beforeend',markup);
        }
        //console.log(data);
    })
    .catch(error => console.log(error));

// -------------------------------------------- GET API TEMPERATURE TRANSDUCER --------------------------------------------
fetch(api_temperature_transducer)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < Object.keys(data).length; i++){
            const markup = `<div class="col">
                                <div class="card" style="width: 26rem;">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name : ${data[i]['name']}</li>
                                        <li class="list-group-item">Type : ${data[i]['type']}</li>
                                        <li class="list-group-item">Unit : ${data[i]['unit']}</li>
                                        <li class="list-group-item">Range : ${data[i]['range'][0]} - ${data[i]['range'][1]}</li>
                                        <li class="list-group-item">Plant-site : ${data[i]['plant-site']}</li>
                                        <li class="list-group-item">Value : <span id="value_temperature${i}">${data[i]['value']}</span></li>
                                    </ul>
                                </div>
                            <div>`;
            document.querySelector('#temperature-transducer').insertAdjacentHTML('beforeend',markup);
        }
        //console.log(data);
    })
    .catch(error => console.log(error));

// -------------------------------------------- GET API PRESSURE TRANSDUCER --------------------------------------------
fetch(api_pressure_transducer)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < Object.keys(data).length; i++){
            const markup = `<div class="col">
                                <div class="card" style="width: 26rem;">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name : ${data[i]['name']}</li>
                                        <li class="list-group-item">Type : ${data[i]['type']}</li>
                                        <li class="list-group-item">Unit : ${data[i]['unit']}</li>
                                        <li class="list-group-item">Range : ${data[i]['range'][0]} - ${data[i]['range'][1]}</li>
                                        <li class="list-group-item">Plant-site : ${data[i]['plant-site']}</li>
                                        <li class="list-group-item">Value : <span id="value_pressure${i}">${data[i]['value']}</span></li>
                                    </ul>
                                </div>
                            <div>`;
            document.querySelector('#pressure-transducer').insertAdjacentHTML('beforeend',markup);
        }
        //console.log(data);
    })
    .catch(error => console.log(error));
