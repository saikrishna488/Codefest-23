const interview = ()=>{
let str = ''
str = `
<div class="inter-head">
    <h1>Interview Preparation</h1>
</div>
<div class="inter">
    <div class="inter-card">
        <div class="div1">
            <img src="http://127.0.0.1:5600/images/FAANGm.png" height="200px" alt="">
        </div>

        <div class="div2">
            <h3>FAANG companies</h3>
        </div>

    </div>
    <div class="inter-card">
        <div class="div1">
            <img src="http://127.0.0.1:5600/images/pbc.png" width="220px" alt="">
        </div>
        
        <div class="div2">
            <h3>Product Based companies</h3>
        </div>
    </div>
    <div class="inter-card">
        <div class="div1">
            <img src="http://127.0.0.1:5600/images/sbc.png" width="220px" alt="">
        </div>
        
        <div class="div2">
            <h3>Service Based companies</h3>
        </div>
    </div>
</div>
<div class="inter-head">
    <h1>Interview Experience</h1>
</div>
<div class="inter">
    <div class="exp-card">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fp3a2r7TOUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="exp-card">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lmCJyfYsBHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="exp-card">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XTlRQ9axjco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="exp-card">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SDDKmmQWKbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
</div>
`

return str
}

module.exports = interview()