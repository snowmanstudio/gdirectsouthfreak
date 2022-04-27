
// call getFileInformation(id) to start porocess
// define callbacks in your js to handel response and error
// processResponse(data)
// processError( error)
function getFileInformation(id) {
    

    
    var myHeaders = new Headers();
    myHeaders.append("x-drive-first-party", "DriveWebUi");
    myHeaders.append("x-json-requested", "true");
    myHeaders.append("content-type", "application/x-www-form-urlencoded;charset=UTF-8");


    var requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://drive.google.com/uc?id=" + id + "&authuser=0&export=download", requestOptions)
    .then(response => {
        gotResponse()
        if (response.ok) {
          return response.text()
        } else if(response.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + response.status)
        }
      })
      .then(data => processResponse(data))
      .catch(error => processError( error));    


}