let btn = document.querySelector('button');
//btn.addEventListener('click',function (event) {
  //  console.log(event);
    //console.log('button clicked');})
btn.addEventListener('click',function (event) {
    console.log('key=',event.key);
    console.log('code=',event.code);
    console.log('button clicked');
})
let input= document.querySelector('input');
input.addEventListener('keydown', function(event){
        console.log('code=',event.code);
    if(event.code == 'keyU'){
        console.log('move forword');
    }else if(event.code == 'keyD'){
        console.log('move back word');
    }
})