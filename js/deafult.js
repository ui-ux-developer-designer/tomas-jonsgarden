/*Website created by 8CTA Design Studio 
    Creative director: Adam Gäfvert
    Development team: Hamed Abolghasemi, Sherry Khomjani
    © 2013 by 8CTA Design Studio
    © 2013 by Tomas Jonsgarden
    Legal notice !!!
    This website is created by 8CTA, www.8CTA.com and is owned by Tomas Jonsgarden, www.tomasjonsgarden.com.
    -Web Design&Develpment matrials and codes contains HTML, CSS, JavaScript and PHP files are protected by copyright and they are copyrighted products, all rights reserved by 8CTA.
    -Materials, videos and photos are protected by copyright and they are copyrighted products, all rights reserved by Tomas Jonsgarden.*/

var j = 0; function onMenuClick(a, b) { document.getElementById("commercialMenuButton").style.color = '#707070'; document.getElementById("shortMenuButton").style.color = '#707070'; document.getElementById("photographyMenuButton").style.color = '#707070'; document.getElementById("infoMenuButton").style.color = '#707070'; document.getElementById("welcomeScreenContent1").style.display = 'none'; document.getElementById("welcomeScreenContent2").style.display = 'none'; document.getElementById("welcomeScreenContent3").style.display = 'none'; document.getElementById("welcomeScreenContent4").style.display = 'none'; document.getElementById("homeContent").style.display = 'none'; document.getElementById("commercialContent").style.display = 'none'; document.getElementById("shortContent").style.display = 'none'; document.getElementById("photographyContent").style.display = 'none'; document.getElementById("infoContent").style.display = 'none'; $('#welcomeScreenMenuButton1').click(); if (document.getElementById('videoCinemaScreen')) { videoCinemaClose() } if (document.getElementById('cinemaScreen')) { cinemaClose() } $("#" + b).fadeIn('slow'); document.getElementById(a).style.color = '#FFF'; var c = document.getElementById(b); var d; if (c.outerHTML) d = c.outerHTML; else if (XMLSerializer) d = new XMLSerializer().serializeToString(c); if (d.search("info") > -1) { var e = screen.availHeight - 350; document.body.style.backgroundImage = "url('images/tomasjonsgarden.jpg')"; $("#infoText").load("text/infoText.html", function () { }) } else { document.body.style.backgroundImage = "url(http://tomasjonsgarden.com/php/random.php)" } } function welcomeScreenMenuclick(a) { for (i = 1; i <= 4; i++) { document.getElementById(a.slice(0, -1) + i).className = a.slice(0, -1) } document.getElementById(a).className = a.slice(0, -1) + "AFTER"; j = a.split('Button')[1]; a = 'welcomeScreenContent' + a.split('Button')[1]; for (i = 1; i <= 4; i++) { document.getElementById(a.slice(0, -1) + i).style.display = "none" } $("#" + a).fadeIn('slow') } function event() { j++; if (j == 5) { j = 1 } $("#welcomeScreenMenuButton" + j).click() } function onMouseOver(a) { document.getElementById(a).style.color = '#FFF' } function onMouseOut(a, b) { if (document.getElementById(b).style.display == 'none') { document.getElementById(a).style.color = '#707070' } } function videoCinema(a) {
    if (!document.getElementById('cinemaDimScreen')) { var b = document.createElement('canvas'); b.setAttribute('id', "cinemaDimScreen"); document.body.appendChild(b); document.body.style.overflow = "hidden"; $("#cinemaDimScreen").fadeIn('slow') } if (!document.getElementById('cinemaScreen')) {
        var c = document.createElement('div'); c.setAttribute('id', "videoCinemaScreen"); document.body.appendChild(c); var d = screen.availHeight - 350; c.style.height = d + 'px'; c.style.marginTop = -d / 1.78 + 'px';
        var e = document.createElement('iframe'); e.setAttribute('id', "iframe"); c.appendChild(e); var f = screen.availWidth; var g = screen.availHeight; if (f < g) { e.style.marginTop = d * 2 / 17 + 'px' } 
    } document.getElementById('iframe').setAttribute('src', a); document.getElementById('iframe').setAttribute('frameborder', "0"); document.getElementById('cinemaDimScreen').setAttribute('onclick', "videoCinemaClose();"); a = ""
} function videoCinemaClose() { document.body.removeChild(document.getElementById('cinemaDimScreen')); document.body.removeChild(document.getElementById('videoCinemaScreen')); document.body.style.overflow = "auto" } 
function cinema(a) {
    if (!document.getElementById('cinemaDimScreen')) { 
    var b = document.createElement('canvas'); 
    b.setAttribute('id', "cinemaDimScreen"); 
    document.body.appendChild(b); 
    document.body.style.overflow = "hidden"; 
    $("#cinemaDimScreen").fadeIn('slow') 
    } 
    if (!document.getElementById('cinemaScreen')) {
        var c = document.createElement('div'); 
        c.setAttribute('id', "cinemaScreen"); 
        document.body.appendChild(c); 
        var d = screen.availHeight - 350; 
        c.style.height = d + 'px'; 
        c.style.marginTop = -d / 1.78 + 'px';
    } 
    a = parseInt(a); 
    var e = document.getElementById(a).getAttribute('src'); 
    document.getElementById('cinemaScreen').style.backgroundImage = "url(" + e + ")"; 
    document.getElementById('cinemaScreen').setAttribute('onclick', "cinema('" + (a + 1) + "');"); 
    document.getElementById('cinemaDimScreen').setAttribute('onclick', "cinemaClose();")
} 
function cinemaClose() { document.body.removeChild(document.getElementById('cinemaScreen')); document.body.removeChild(document.getElementById('cinemaDimScreen')); document.body.style.overflow = "auto" } function mouseOverVisible(a) { $("#" + a).fadeIn('slow') } function mouseOutHidden(a) { document.getElementById(a).style.display = 'none' } $(document).ready(function () { picasa(); init(); });