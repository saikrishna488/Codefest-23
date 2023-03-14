const login = (name,email,password) => {
let str
if (name != null) {
str = `
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/login/login.css">
    <title>Login</title>
</head>

<body>
    <h1>Login Successfull Please Wait</h1>
    <div class="con">
        <form action="/login" class="page" method="post">
            <h1>Login</h1>
            <input type="text" class="in" placeholder="Enter Your name" name="name">
            <input type="password" class="in" placeholder="Enter Password" name="password">
            <label><input type="checkbox" name="rm" id="">Remember me</label>
            <button id="btn">Login</button>
        </form>
    </div>
    <div hidden>
        <p id="pname">${name}</p>
        <p id="pemail">${email}</p>
        <p id="ppassword">${password}</p>
    </div>
    <script src="/login/loginMain.js"></script>
    <script>
        let n = document.getElementById('pname').innerHTML
        let e = document.getElementById('pemail').innerHTML
        let p = document.getElementById('ppassword').innerHTML
        localStorage.setItem('name',n)
        localStorage.setItem('email',e)
        localStorage.setItem('password',p)
        setTimeout(()=>{
            location.href = "http://127.0.0.1:5600/"
            console.log('hello')
        },1500)
    </script>
</body>

</html>
`
}
else{
str = `
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/login/login.css">
    <title>Login</title>
</head>

<body>
    <div class="con">
        <form action="/login" class="page" method="post">
            <h1>Login</h1>
            <input type="text" class="in" placeholder="Enter Your name" name="name">
            <input type="password" class="in" placeholder="Enter Password" name="password">
            <label><input type="checkbox" name="rm" id="">Remember me</label>
            <button id="btn">Login</button>
        </form>
    </div>
    <script src="/login/loginMain.js"></script>
</body>

</html>
`
}

if(name == null && email != null){
    str = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/login/login.css">
    <title>Login</title>
</head>

<body>
    <h1>Login Failed Incorrect Details</h1>
    <div class="con">
        <form action="/login" class="page" method="post">
            <h1>Login</h1>
            <input type="text" class="in" placeholder="Enter Your name" name="name">
            <input type="password" class="in" placeholder="Enter Password" name="password">
            <label><input type="checkbox" name="rm" id="">Remember me</label>
            <button id="btn">Login</button>
        </form>
    </div>
    <script src="/login/loginMain.js"></script>
    <script>
    </script>
</body>

</html>
    `
}

return str
}

module.exports = login