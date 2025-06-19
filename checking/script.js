const searchbyarea = document.querySelector('#searchbyarea');
const byarea = document.querySelector('#byarea');
const byname = document.querySelector('#byname');

searchbyarea.addEventListener('click', function () {
    byarea.style.display = "block";
    byname.style.display = "none";
});