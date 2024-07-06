function addingEventListener() {
    const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});

}

document.addEventListener('DOMContentLoaded', function() {
    addingEventListener();
});
