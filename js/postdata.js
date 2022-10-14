const api_post_data = 'https://midterm-exam-010723313-2022.herokuapp.com/student_post';

var form = document.getElementById('form')

form.addEventListener('submit', function(event){

    event.preventDefault()

    var st_id = document.getElementById('st_id').value
    var st_name = document.getElementById('st_name').value
    var sensor_name = document.getElementById('sensor_name').value
    var sensor_type = document.getElementById('sensor_type').value
    var sensor_unit = document.getElementById('sensor_unit').value
    var sensor_value_max = document.getElementById('sensor_value_max').value

    var sensor_value = Math.random() * sensor_value_max;

    if(st_id == '' || st_name == '' || sensor_name == '' || sensor_type == '' || sensor_unit == '' || sensor_value_max == '' || st_id == ''){
        Swal.fire({
            title: '<strong>FLIED EMPTY !</strong>',
            html: '<b>PLEASE FILL IN THE BLANKS</b>',
            icon: 'warning',
        })
    } else {
        Swal.fire({
            title: '<stong>CHECK YOUR DATA</stong>',
            html: ` <b><li align="left">STUDENT ID : ${st_id}</li>
                    <li align="left">STUDENT NAME : ${st_name}</li>
                    <li align="left">SENSOR NAME : ${sensor_name}</li>
                    <li align="left">SENSOR TYPE : ${sensor_type}</li>
                    <li align="left">SENSOR UNIT : ${sensor_unit}</li>
                    <li align="left">SENSOR VALUE MAX : ${sensor_value_max}</li>
                    <li align="left">SENSOR VALUE : ${sensor_value}</li></b>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'CONFIRM',
            cancelButtonText: 'CANCEL'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '<strong>SENT COMPLETE</strong>',
                    icon: 'success',
                    confirmButtonColor: '#198754',
                    confirmButtonText: '<a href="/"><b>OK</b></a>'
                })
                    fetch(api_post_data,{
                        method : 'POST',
                        body : JSON.stringify({
                            "st_id" : st_id,
                            "st_name" : st_name,
                            "sensor_name" : sensor_name,
                            "sensor_type" : sensor_type,
                            "sensor_unit" : sensor_unit,
                            "sensor_value" : sensor_value
                            }),
                        headers : {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
        })
    }
})