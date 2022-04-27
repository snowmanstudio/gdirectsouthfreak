

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

    fetch("https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=" + id + "&authuser=0&export=download", requestOptions)
        .then(response => response.text())
        .then(response => processResponse(response))
        .catch(error => processError(error));


}
