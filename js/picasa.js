/*Website created by 8CTA Design Studio 
    Creative director: Adam Gäfvert
    Development team: Hamed Abolghasemi, Sherry Khomjani
    © 2013 by 8CTA Design Studio
    © 2013 by Tomas Jonsgarden
    Legal notice !!!
    This website is created by 8CTA, www.8CTA.com and is owned by Tomas Jonsgarden, www.tomasjonsgarden.com.
    -Web Design&Develpment matrials and codes contains HTML, CSS, JavaScript and PHP files are protected by copyright and they are copyrighted products, all rights reserved by 8CTA.
    -Materials, videos and photos are protected by copyright and they are copyrighted products, all rights reserved by Tomas Jonsgarden.*/

function picasa(){var u=0;var v="https://picasaweb.google.com/data/feed/base/"+"user/"+"tomas.jonsgarden"+"?alt="+"json"+"&kind="+"album"+"&hl="+"en_US";$.getJSON(v, function (t) {
    $.each(t.feed.entry, function (i, m) {
        var n = m.id.$t; n = n.split('/')[9].split('?')[0]; var o = "https://picasaweb.google.com/data/feed/base/" + "user/" + "tomas.jonsgarden" + "/albumid/" + n + "?alt=" + "json" + "&kind=" + "photo" + "&hl=" + "en_US" + "&fields=" + "entry(media:group)" + "&thumbsize=" + 200; var p; var q; var r; var s; $.ajax({ type: 'GET', url: o, success: function (l) {
            $.each(l.feed.entry, function (i, k) {
                r = k.media$group.media$title.$t; s = k.media$group.media$description.$t; $.each(k.media$group.media$content, function (i, a) { p = a.url }); $.each(k.media$group.media$thumbnail, function (i, a) {
                    q = a.url; var b = 18; var c = s; c = c.toLowerCase(); r = r.replace(".jpg", ""); r = r.replace(".png", ""); r = r.replace(".jpeg", ""); r = r.replace(".gif", ""); r = r.replace(".tiff", ""); r = r.replace(".bmp", ""); r = r.replace(".pdf", ""); if (c.search("photography") > -1) {
                        var d = document.createElement('div'); var e = document.createElement('div'); var f = document.createElement('div'); var g = document.createElement('div'); e.setAttribute('class', 'photoThumbnailsTitleDescription'); f.setAttribute('class', 'photoThumbnailsTitle'); g.setAttribute('class', 'photoThumbnailsDescription'); e.appendChild(f); e.appendChild(g); d.appendChild(e); d.style.backgroundImage = "url(" + q + ")"; d.setAttribute('class', 'photoThumbnails'); s = s.replace("photography", ""); s = s.replace("Photography", ""); 
                         if (c.search("top") > -1) {
                            s = s.replace("top", "");
                            d.style.backgroundPosition = "top";
                        }
                        if (c.search("center") > -1) {
                            s = s.replace("center", "");
                            d.style.backgroundPosition = "center";
                        }
                        if (c.search("bottom") > -1) {
                            s = s.replace("bottom", "");
                            d.style.backgroundPosition = "bottom";
                        }
                        d.setAttribute('alt', s); d.setAttribute('title', s);if (r.length > b) { var h = r.substring(0, b); h = h + "..."; f.innerHTML = h.toUpperCase() } else { f.innerHTML = r.toUpperCase() } if (s.length > b) { var j = s.substring(0, b); j = j + "..."; g.innerHTML = j } else { g.innerHTML = s } document.getElementById('photographyContent').appendChild(d); d.setAttribute('id', u); d.setAttribute('src', p); d.setAttribute('onclick', "cinema('" + u + "');"); u++
                    }
                })
            })
        }, dataType: 'json', async: false
        })
    })
})}