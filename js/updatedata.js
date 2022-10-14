// -------------------------------------------- GET VALUE --------------------------------------------
function getValueFT() {
    fetch(api_flow_transducer)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#value_flow0').innerHTML = data[0]['value'];
            document.querySelector('#value_flow1').innerHTML = data[1]['value'];
            document.querySelector('#value_flow2').innerHTML = data[2]['value'];
            //console.log(data);
        })
}
    
function getValueLT() {
    fetch(api_level_transducer)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#value_level0').innerHTML = data[0]['value'];
            document.querySelector('#value_level1').innerHTML = data[1]['value'];
            document.querySelector('#value_level2').innerHTML = data[2]['value'];
            //console.log(data);
        })
}

function getValueTT() {
    fetch(api_temperature_transducer)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#value_temperature0').innerHTML = data[0]['value'];
            document.querySelector('#value_temperature1').innerHTML = data[1]['value'];
            document.querySelector('#value_temperature2').innerHTML = data[2]['value'];
            //console.log(data);
        })
}
    
function getValuePT() {
    fetch(api_pressure_transducer)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#value_pressure0').innerHTML = data[0]['value'];
            document.querySelector('#value_pressure1').innerHTML = data[1]['value'];
            document.querySelector('#value_pressure2').innerHTML = data[2]['value'];
            //console.log(data);
        })
}

// -------------------------------------------- SUCCESS ALERT GET VALUE --------------------------------------------
function successGetValueFT() {
    Swal.fire({
        icon: 'info',
        title: 'GET COMPLETE',
        html: '<b>GET VALUE FLOW TRANSDUCER</b>'
    })
}

function successGetValueLT() {
    Swal.fire({
        icon: 'info',
        title: 'GET COMPLETE',
        html: '<b>GET VALUE LEVEL TRANSDUCER</b>'
    })
}

function successGetValueTT() {
    Swal.fire({
        icon: 'info',
        title: 'GET COMPLETE',
        html: '<b>GET VALUE TEMPERATURE TRANSDUCER</b>'
    })
}

function successGetValuePT() {
    Swal.fire({
        icon: 'info',
        title: 'GET COMPLETE',
        html: '<b>GET VALUE PRESSURE TRANSDUCER</b>'
    })
}

var intervalFT = null;
var intervalLT = null;
var intervalTT = null;
var intervalPT = null;
// -------------------------------------------- START REAL TIME GET VALUE --------------------------------------------
function startGetValueFT() {
    if (intervalFT) {
        return;
    }
    intervalFT = setInterval(getValueFT,1000);
    Swal.fire({
        icon: 'success',
        title: '<strong>START COMPLETE</strong>',
        html: '<b>GET VALUE FLOW TRANSDUCER REAL TIME</b>'
    })
}

function startGetValueLT() {
    if (intervalLT) {
        return;
    }
    intervalLT = setInterval(getValueLT,1000);
    Swal.fire({
        icon: 'success',
        title: '<strong>START COMPLETE</strong>',
        html: '<b>GET VALUE LEVEL TRANSDUCER REAL TIME</b>'
    })
}

function startGetValueTT() {
    if (intervalTT) {
        return;
    }
    intervalTT = setInterval(getValueTT,1000);
    Swal.fire({
        icon: 'success',
        title: '<strong>START COMPLETE</strong>',
        html: '<b>GET VALUE TEMPERATURE TRANSDUCER REAL TIME</b>'
    })
}

function startGetValuePT() {
    if (intervalPT) {
        return;
    }
    intervalPT = setInterval(getValuePT,1000);
    Swal.fire({
        icon: 'success',
        title: '<strong>START COMPLETE</strong>',
        html: '<b>GET VALUE PRESURE TRANSDUCER REAL TIME</b>'
    })
}

// -------------------------------------------- START REAL TIME GET VALUE --------------------------------------------
function stopGetValueFT() {
    clearInterval(intervalFT);
    intervalFT = null;
    Swal.fire({
        icon: 'error',
        title: '<strong>STOP COMPLETE</strong>',
        html: '<b>GET VALUE FLOW TRANSDUCER REAL TIME</b>'
    })
}

function stopGetValueLT() {
    clearInterval(intervalLT);
    intervalLT = null;
    Swal.fire({
        icon: 'error',
        title: '<strong>STOP COMPLETE</strong>',
        html: '<b>GET VALUE LEVEL TRANSDUCER REAL TIME</b>'
    })
}

function stopGetValueTT() {
    clearInterval(intervalTT);
    intervalTT = null;
    Swal.fire({
        icon: 'error',
        title: '<strong>STOP COMPLETE</strong>',
        html: '<b>GET VALUE TEMPERATURE TRANSDUCER REAL TIME</b>'
    })
}

function stopGetValuePT() {
    clearInterval(intervalPT);
    intervalPT = null;
    Swal.fire({
        icon: 'error',
        title: '<strong>STOP COMPLETE</strong>',
        html: '<b>GET VALUE PRESURE TRANSDUCER REAL TIME</b>'
    })
}
