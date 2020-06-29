// todo: $ => jQuery function -> used to excess jQuery
console.log($);

console.log($("div")); // * points to all the div(s) in the html

console.log($("div").html("<b> Hello, here is some content </b>")); // * adds the content in form of html

console.log($("div").text(" SOME MORE CONTENT")); // * only updates the content not html

console.log($("#one")); // * we can just excess the object but not excess the element

console.log($("#one")[0]); // * we can excess element

let o = $("#one");

console.log(o.text());

console.log(o.text(`Piyush Anand`));

console.log(o.text());

console.log(o.html());

console.log(o.html(`<b>Piyush Anand</b>`));

console.log(o.attr('style',"font-size")); // * shows the default height

console.log(o.attr("style", "font-size: 200px"));

console.log(o.attr("height"));
