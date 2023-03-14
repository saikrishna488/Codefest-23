
const mid = (data)=>{
    let str=''
    for(let i = 0; i<data.length; i++){
        str += `
        <div class="card">
            <h1>${data[i].name}</h1>
            <div class="con">
                <img src="${data[i].img1}" alt="">
                <p id="line"> <p>
                <img src="${data[i].img2}" alt="">
            </div>
            <div class="bottom">
                <a href="${data[i].link}">Explore More</a>
            </div>
        </div>
        `
    }
    return str
}
// let data = [{
//         name: "Skills",
//         img1: "http://127.0.0.1:5600/images/Skill1.png",
//         img2: "http://127.0.0.1:5600/images/Skill2.png",
//         link: "http://127.0.0.1:5600/skills",
// }
// ]
// let g = mid(data)
// console.log(g)
module.exports = mid 