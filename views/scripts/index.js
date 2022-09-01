setInterval(() => {
    console.log(`
Bu site theChain tarafından yapılmıştır! 
Eger bir sorun yasar iseniz github profilimden discord profilime ulaşabilirsiniz.
https://github.com/theChainxd
    `)
}, 10000);

let meArea = document.getElementById("meArea")
let projectsArea = document.getElementById("projectsArea")
let callArea = document.getElementById("callArea")

//  Me Area // 
function me() {
    document.getElementById('meArea').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}
function meAreaCikis() {
    document.getElementById('meArea').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile').style.animationName = "meAreaExitAnimation";
    document.getElementById('profile').style.animationDuration = "2s";
}

// Projects // 

function projects() {
    document.getElementById('projectsArea').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}
function projectsAreaCikis() {
    document.getElementById('projectsArea').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile').style.animationName = "meAreaExitAnimation";
    document.getElementById('profile').style.animationDuration = "2s";
}

// Phone //
function phone() {
    document.getElementById('callArea').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}
function CallAreaCikis() {
    document.getElementById('callArea').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile').style.animationName = "meAreaExitAnimation";
    document.getElementById('profile').style.animationDuration = "2s";

}

/* Bu altyapi theChain tarafından yapılmıştır! Eger bir sorun yasar iseniz github profilimden discord profilime ulaşabilirsiniz */
/* Emeğe saygı konusunda altyapıyı kendininiz çalmamanız her türlü daha hoş olur */