// Initialize font properties
const fontname = "Nunito";
const fontweights = [300, 400, 600];

// Color properties
const basecolor = "#777";
const accentcolor = "#007";
const highlightcolor = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";
const backgroundcolor = "#fff9f2";

// Link properties
const acolor = accentcolor;
const adecoration = "underline dotted";

// Menu properties
const menucolor = basecolor;
const menufontsize = "15pt";
const menudecoration = "none";

// Header properties
const headercolor = accentcolor;
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "23pt";

// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

// Apply styles
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css({
    "font-family": fontname.replace("+", " "),
    "color": basecolor,
    "font-weight": bodyfontweight,
    "font-size": bodyfontsize,
    "background-color": backgroundcolor
});

$("a").css({
    "color": acolor,
    "text-decoration": adecoration
});

$(".menulink").css({
    "color": menucolor,
    "font-size": menufontsize,
    "text-decoration": menudecoration
});

$(".header").css({
    "color": headercolor,
    "font-size": headerfontsize,
    "text-decoration": headerdecoration
});

$(".name").css({
    "color": namecolor,
    "font-size": namefontsize
});

$(".papertitle").css({
    "color": ptitlecolor,
    "font-size": ptitlefontsize,
    "font-weight": ptitleweight,
    "text-decoration": ptitledecoration,
    "font-style": ptitlestyle
});

$(".thisauthor").css({
    "color": selfcolor,
    "font-weight": selfweight,
    "text-decoration": selfdecoration,
    "font-style": selfstyle
});

$(".institution").css({
    "color": insttitlecolor,
    "font-size": insttitlesize
});

$(".years").css({
    "color": instyearcolor,
    "font-size": instyearsize
});