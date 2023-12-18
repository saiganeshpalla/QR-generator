function generateQRCode() {
    var textInput = document.getElementById("text-input").value;
    var qrcodeDiv = document.getElementById("qrcode");

    // Clear previous QR code, if any
    qrcodeDiv.innerHTML = '';

    // Generate QR code
    var qrcode = new QRCode(qrcodeDiv, {
        text: textInput,
        width: 128,
        height: 128
    });
}
