$(document).ready(function(){
    $('.dropdown-submenu a').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

function mudaLink($link) {
    if($link.length > 0){
        window.open('map-'+$link+'.html', '_self');
    }
};