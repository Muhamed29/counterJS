var count = 0;
var btns = document.querySelectorAll('.btn');
var value = document.querySelector('#value');
btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
var styles = e.currentTarget.classList;
if(styles.contains('increase')){
    count++;
}else if(styles.contains('decrease')){
count--;
}else{
    count = 0;
}
if (count > 0){
    value.style.color = 'green';
}else if ( count < 0){
    value.style.color = 'red';
}else{
    value.style.color = 'black';
}
value.innerHTML = count;
  })  
})