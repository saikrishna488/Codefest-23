const nav = (name,email)=>{
    let str
    if(name == null){
        str = `
    <nav class="nav">
        <div class="left">
            <img src="../images/Logo.png" class="logo" alt="">
            <li class="explore">Explore All</li>
            <input type="search" name="search" id="" class="search" placeholder="search">
            <li id="home">Home</li>
        </div>
        <div class="right">
            <li id="log">Login</li>
            <li id="sign">Sign up</li>
        </div>
    </nav>
    `
    }
    else{
        str = `
    <nav class="nav">
        <img src="../images/Logo.png" class="logo" alt="">
        <div class="left">
            <li class="explore">Explore All</li>
            <input type="search" name="search" id="" class="search" placeholder="search">
            <li id="home">Home</li>
        </div>
        <div class="right">
            <li><img src="" alt="">${email}</li>
            <li id="logout">Logout</li>
        </div>
    </nav>
    `
    }
    
    return str;
}

module.exports = nav