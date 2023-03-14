let arr = ['http://127.0.0.1:5600/images/1.png', 'http://127.0.0.1:5600/images/kotlin.png']

// let img = document.getElementById('img')
// let i = 0
// img.src = arr[i]
// setInterval(()=>{
//     if(i==arr.length-1){
//         i=0;
//     }
//     else{
//         i++
//     }
//     img.src = arr[i]
// },1500)

//creating form
let form = document.createElement('form')
form.setAttribute('hidden', true)
form.method = "post"
form.action = "/p"
let name1 = document.createElement('input')
name1.type = "text"
name1.name = "name"
form.appendChild(name1)
let password = document.createElement('input')
password.type = "password"
password.name = "password"
form.appendChild(password)
let email = document.createElement('input')
email.type = "email"
email.name = "email"
form.appendChild(email)
let btn = document.createElement('input')
btn.type = "submit"
btn.value = "submit"
form.appendChild(btn)
document.body.appendChild(form)

if (window.location.href == "http://127.0.0.1:5600/") {
    if (localStorage.getItem('name') != null) {
        name1.value = localStorage.getItem('name')
        password.value = localStorage.getItem('password')
        email.value = localStorage.getItem('email')
        form.submit()
        console.log('hello')
        form.remove()
    }
    else {
        console.log('debugging user not logged in')
        form.remove()
    }
}

//logout button
if (document.getElementById('logout') != null) {
    let logout = document.getElementById('logout')
    logout.onclick = () => {
        localStorage.clear();
        location.href = "http://127.0.0.1:5600/"
    }
}

if (document.getElementById('log') != null) {
    let log = document.getElementById('log')
    log.onclick = () => {
        location.href = "http://127.0.0.1:5600/login"
    }
}

//signup
if (document.getElementById('sign') != null) {
    let sign = document.getElementById('sign')
    sign.onclick = () => {
        location.href = "http://127.0.0.1:5600/sign"
    }
}

//home btn
if (document.getElementById('home') != null) {
    let home = document.getElementById('home')
    home.onclick = () => {
        location.href = "http://127.0.0.1:5600/"
    }
}

//explore all
let buttonn = document.getElementsByClassName('explore')[0]
buttonn.onclick = () =>{
    let ss = document.body.getElementsByClassName('card')[0]
ss.scrollIntoView()
}

//explore programs
let butn = document.getElementsByClassName('ex')[0]
butn.onclick = () =>{
    let ss = document.body.getElementsByClassName('c1')[0]
ss.scrollIntoView()
}