window.onload = function() {
    document.getElementById('result').value = '';
};

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    false
);

function onScanSuccess(decodedText, decodedResult) {
    const resultField = document.getElementById('result');
    resultField.value = '';
    resultField.value = decodedText;
}

function onScanFailure(error) {
    console.warn(`Code scan error = ${error}`);
}

html5QrcodeScanner.render(onScanSuccess, onScanFailure);