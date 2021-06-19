var img = document.querySelectorAll("img");
var index = 0;
var t;

function fun() {
    if (index >= img.length) {
        img[index-1].setAttribute("src", "marble1.jpg");
        index = 0;
    }

    if (index == 0) {
        img[index].setAttribute("src", "marble2.jpg");
        index++;
    
    }
    else {
        img[--index].setAttribute("src", "marble1.jpg");
        img[++index].setAttribute("src", "marble2.jpg");
        index++;
    }
    
    t=setTimeout(fun, 1000);

}
fun();

function f2(){
    clearTimeout(t);
}



