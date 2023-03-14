const index = (nav,timer,mid,round,interview,ar)=>{
    let str = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <title>SMARTECH</title>
</head>
<body>
    ${nav}
    ${timer}
    <div class="mid">
    ${mid}
    </div>
    <div class="rtop">
        <h1>Portfolio Building</h1>
    </div>
    <div class="round">
    ${round}
    </div>
    ${interview}
    ${ar}
    <script src="main.js"></script>
</body>
</html>
    `
    return str;
}

// console.log(index(null,null,null,null,"hello"))

 module.exports = index 