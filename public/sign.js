const sign = (succ) => {
    let str

    if (succ != null) {
        str = `
        <!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/signup/signup.css">
    <title>Sign Up</title>
</head>

<body>
    <h1>Sign in Successfull Please Wait to login</h1>
    <div class="con">
        <form action="/sign" class="page" method="post">
            <h1>Sign Up</h1>
            <input type="text" class="in" placeholder="Enter Your name" name="name">
            <input type="email" class="in" placeholder="Enter Your Email" name="email">
            <input type="password" class="in" placeholder="Enter Password" name="password">
            <label><input type="checkbox" name="rm" id="">Remember me</label>
            <button id="btn">Sign up</button>
        </form>
    </div>
    <script src="/signup/signupMain.js"></script>
    <script>
        setTimeout(()=>{
            location.href = "http://127.0.0.1:5600/login"
        },1500)
    </script>
</body>

</html>
        `
    }
    else {
        str = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/signup/signup.css">
    <title>Sign Up</title>
</head>

<body>
    <div class="con">
        <form action="/sign" class="page" method="post">
            <h1>Sign Up</h1>
            <input type="text" class="in" placeholder="Enter Your name" name="name">
            <input type="email" class="in" placeholder="Enter Your Email" name="email">
            <input type="password" class="in" placeholder="Enter Password" name="password">
            <label><input type="checkbox" name="rm" id="">Remember me</label>
            <button id="btn">Sign up</button>
        </form>
    </div>
    <script src="/signup/signupMain.js"></script>
    <script>
    </script>
</body>

</html>
    `
    }
    return str
}

module.exports = sign