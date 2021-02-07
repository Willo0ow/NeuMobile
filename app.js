
let switched = false
let switcher = document.getElementById('switcher');
let switchbox = document.getElementById('switchbox');
switcher.addEventListener('click', ()=>{
    switched = !switched
    if(switched){
        switcher.classList.remove('switcher-left')
        switcher.classList.add('switcher-right')
    } else {
        switcher.classList.remove('switcher-right')
        switcher.classList.add('switcher-left')
    }
    console.log(switched);
    console.log(switcher.classList.value);
})
