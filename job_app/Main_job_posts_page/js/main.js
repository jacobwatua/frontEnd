function slice_string (){
    var item  = document.querySelector(".responsibilities");
    item.textContent = item.textContent.slice(0, 101);
}

let expand_div = (item) => {
    document.getElementById(item).style.height = "auto";
}



const read_size = () => {
    let h = document.querySelector("#height");
    let w = document.querySelector("#width");
    function update_size () {
        h.textContent = window.innerHeight;
        w.textContent = window.innerWidth;
    }
    update_size();
}