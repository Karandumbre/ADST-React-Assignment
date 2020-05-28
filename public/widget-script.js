var ip = 'https://widget-31242.web.app/';
// var ip = 'http://localhost:8000/'
var head = document.head;

var meta = document.createElement('meta');
meta.name = 'viewport'
meta.httpEquiv = "X-UA-Compatible";
meta.content = "width=device-width, initial-scale=1";

head.appendChild(meta);

// Get HTML head element 


// Create new link Element 
let styleSheetArray = [{
    href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
}, {
    href: ip + 'static/css/main.chunk.css'
}]

styleSheetArray.forEach(element => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = element.href;
    head.appendChild(link);
});


var sheet = document.createElement('style')
sheet.innerHTML = ``
document.body.appendChild(sheet);


let root = document.createElement('div');
root.id = 'Ad-Triangle-Call-Widget-root';
document.body.appendChild(root);



! function (e) {
    function r(r) {
        for (var n, l, a = r[0], i = r[1], f = r[2], c = 0, s = []; c < a.length; c++) l = a[c], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (p && p(r); s.length;) s.shift()();
        return u.push.apply(u, f || []), t()
    }

    function t() {
        for (var e, r = 0; r < u.length; r++) {
            for (var t = u[r], n = !0, a = 1; a < t.length; a++) {
                var i = t[a];
                0 !== o[i] && (n = !1)
            }
            n && (u.splice(r--, 1), e = l(l.s = t[0]))
        }
        return e
    }
    var n = {},
        o = {
            1: 0
        },
        u = [];

    function l(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports
    }
    l.m = e, l.c = n, l.d = function (e, r, t) {
        l.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }, l.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.t = function (e, r) {
        if (1 & r && (e = l(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (l.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e)
            for (var n in e) l.d(t, n, function (r) {
                return e[r]
            }.bind(null, n));
        return t
    }, l.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return l.d(r, "a", r), r
    }, l.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, l.p = "/";
    var a = this["webpackJsonpad-triangle"] = this["webpackJsonpad-triangle"] || [],
        i = a.push.bind(a);
    a.push = r, a = a.slice();
    for (var f = 0; f < a.length; f++) r(a[f]);
    var p = i;
    t()
}([])

let javascriptArray = [{
    source: "static/js/2.chunk.js",
}, {
    source: "static/js/main.chunk.js"
}]

javascriptArray.forEach(element => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = ip + element.source;
    document.body.appendChild(script);
});

