let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://upload-assets.vice.com/files/2016/11/22/1479838617hx01_1.gif') {
        myImage.setAttribute('src', 'https://upload-assets.vice.com/files/2016/11/22/1479838616hx01_2.gif');
    } else {
        myImage.setAttribute('src', 'https://upload-assets.vice.com/files/2016/11/22/1479838617hx01_1.gif');
    }
}