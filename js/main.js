var placeholder = document.getElementById('placeholder');
var background = document.getElementById('background');
var selectedImage = document.getElementById('selectedImage');
var reader = new FileReader();

selectedImage.addEventListener('change', function() {
    var file = document.querySelector('#selectedImage').files[0];
    if(file) {
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            background.setAttribute('src', reader.result);
        }
    }
})

function changeBackground() {
    console.log(1);
    var file = document.querySelector('#selectedImage').files[0];
    //var file = selectedImage.files[0];
    if(file) {
        reader.readAsDataURL(file);
        console.log(reader.result);
    }
}

function toggle() {
    setTimeout(function(){ placeholder.style.display==''?placeholder.style.display='none':placeholder.style.display=''; }, 250);
}

function clearImage() {
    selectedImage.value = "";
    background.setAttribute('src', '');
}