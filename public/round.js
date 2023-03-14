const round = ()=>{
    let str = ''
    str = `
    <div class="c1">
        <img  class="port"src="http://127.0.0.1:5600/images/github.png" alt="">
        <a href="http://127.0.0.1:5600/github">Github</a>
    </div>
    <div class="c1">
        <img  class="port" src="http://127.0.0.1:5600/images/linkedin.png" alt="">
        <a href="http://127.0.0.1:5600/linkedin">LinkedIn</a>
    </div>
    <div class="c1">
        <img  class="port" src="http://127.0.0.1:5600/images/open source.png" alt="">
        <a href="http://127.0.0.1:5600/os">Open-Source</a>
    </div>
    <div class="c1">
        <img class="port" src="http://127.0.0.1:5600/images/resume.png" alt="">
        <a href="http://127.0.0.1:5600/resume">Resume</a>
    </div>
    `
    return str
}

module.exports = round()