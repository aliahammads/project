let form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.dir(form);
    // let user=document.querySelector('#user');
    // let pass=document.querySelector('#pass');
    let user=this.elements[0]
    let pass=this.elements[1]
    console.log(user.value);
    console.log(pass.value);
    alert(`hi ${user.value},your password is set ${pass.value}`);
})