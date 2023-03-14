const template = (name)=>{
    let str = ''
    // for(let i = 0; i<data.length; i++){
    //     str += `
    //     <div class="con">
    //     <img src="${data[i].name}" class="img2" alt="">
    //     <a href="${data[i].name}" class="btn">${data[i].name}</a>
    //     </div>
    //     `
    // }
    if(name == "skills"){
        str =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/format/style.css">
        <title>Skills</title>
    </head>
    <body>
        <div id="top">
            <h1>Skills</h1>
        </div>
        <div class="con">
            <div class="card">
                <img class="skill-imgs"src="http://127.0.0.1:5600/images/aws.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="skill-imgs"src="http://127.0.0.1:5600/images/ml.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="skill-imgs"src="http://127.0.0.1:5600/images/ai.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="skill-imgs"src="http://127.0.0.1:5600/images/data.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="skill-imgs"src="http://127.0.0.1:5600/images/cyber.png" alt="">
                <a href="">Enroll now</a>
            </div>
        </div>
        <script src="/format/main.js"></script>
    </body>
    </html>
    `
    }
    else if(name == "coding"){
        str = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/format/style.css">
        <title>Coding</title>
    </head>
    <body>
        <div id="top">
            <h1>Coding</h1>
        </div>
        <div class="con">
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/c.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/c++.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/java.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/python.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/csharp.png" alt="">
                <a href="">Enroll now</a>
            </div>
        </div>
        <script src="/format/main.js"></script>
    </body>
    </html>
    `
    }
    else if(name == "aptitude"){
        str = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/format/style.css">
        <title>Aptitude</title>
    </head>
    <body>
        <div id="top">
            <h1>Aptitude</h1>
        </div>
        <div class="con">
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/verbal.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/quantitative.png" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/logical.png" alt="">
                <a href="">Enroll now</a>
            </div>
        </div>
        <script src="/format/main.js"></script>
    </body>
    </html>
    `
    }
    else if(name == "projects"){
        str = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/format/style.css">
        <title>Projects</title>
    </head>
    <body>
        <div id="top">
            <h1>projects</h1>
        </div>
        <div class="con">
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/cricket.jpg" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/stock.jpg" alt="">
                <a href="">Enroll now</a>
            </div>
            <div class="card">
                <img class="coding-imgs"src="http://127.0.0.1:5600/images/face.jpg" alt="">
                <a href="">Enroll now</a>
            </div>
        </div>
        <script src="/format/main.js"></script>
    </body>
    </html>
    `
    }
    
    return str
}

module.exports = template