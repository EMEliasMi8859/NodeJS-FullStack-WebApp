
// mark blue the current active menu
var from_route = $("#from_route").text();
var menues = $("#navbar_nav > ul > li > a");
var user_acc = $("a#User_Profile");

if(from_route == "Account"){
    user_acc.classList.add('active');
}else{
    for(var i=0; i < menues.length; i++){
        if(from_route == menues[i].innerHTML){
            menues[i].classList.add('active');
        }
    }
}



function ProgressBar() {
    var winScroll = hwnd.scrollTop || hwnd.scrollTop;
    var height = hwnd.scrollHeight - hwnd.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("ProgressBar").style.width = scrolled + "%";
}
function popupChangeblure(popupID){
    var blure = document.getElementById("main-container");
    var popup = document.getElementById(popupID);
    if(blure.classList.contains('active') && popup.classList.contains('disable')){
        blure.classList.replace('active', 'disable');
        popup.classList.replace('disable', 'active');
    }else{
        blure.classList.replace('disable', 'active');
        popup.classList.replace('active', 'disable');
    }
    popup.onscroll = function() {ProgressBar()};
    function ProgressBar() {
        var winScroll = popup.scrollTop || popup.scrollTop;
        var height = popup.scrollHeight - popup.clientHeight;
        var scrolled = (winScroll / height) * 100-3;
        document.getElementById("ProgressBar").style.width = scrolled + "%";
    }
    
}
function ShowResourcesPopup(ID){
    document.getElementById('Links').value = ID;
    ID = ID + "_Collection_ID";
    document.getElementById(ID).submit();
    popupChangeblure("Collection_links");
}


function PostRequests(){
    var rplc = document.getElementById("Collection_links");
    var inst = document.getElementById("container");
    if(rplc.classList.contains("active") ){
        rplc.classList.remove("active");
        rplc.classList.add("disable");
    }else{
        rplc.classList.remove("disable");
        rplc.classList.add("active");
    }
    if(inst.classList.contains("active")){
        inst.classList.remove("active");
        inst.classList.add("disable");
    }else{
        inst.classList.remove("disable");
        inst.classList.add("active");
    }
}

// function CreateNewCollection(){

// }

// resources popup
var blured = document.getElementById('main-container');


// var hwnd = document.getElementById("ResourcesPopup");
// hwnd.onscroll = function() {ScrollFunction()};
// function ScrollFunction() {
//     var winScroll = hwnd.scrollTop || hwnd.scrollTop;
//     var height = hwnd.scrollHeight - hwnd.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("DefinedScrollBar").style.width = scrolled + "%";
// }
// function ShowResourcesPopup(id){
//     var popup = document.getElementById("main_popups");
//     var toBlur = document.getElementById("main-container");
//     popup.innerCONTENT = ;
//     toBlure.classLlist.add('blured')
//     var rplc = document.getElementById("ResourcesPopup");
//     var inst = document.getElementById("container");
//     if(rplc.classList.contains("active") ){
//         rplc.classList.remove("active");
//         rplc.classList.add("disable");
//     }else{
//         rplc.classList.remove("disable");
//         rplc.classList.add("active");
//     }
//     if(inst.classList.contains("active")){
//         inst.classList.remove("active");
//         inst.classList.add("disable");
//     }else{
//         inst.classList.remove("disable");
//         inst.classList.add("active");
//     }
// }
