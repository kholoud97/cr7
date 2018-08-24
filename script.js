function show() {
    var element = document.getElementById("form");
    element.removeProperty("display");
    
    document.getElementById('form').className='visiblediv';

    element.classList.add("form");
}


//testArea.addEventListener("click", start, false);