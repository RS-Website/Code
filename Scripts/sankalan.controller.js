
 
$(document).ready(function() {
    setTimeout(() => {
        var width = $("img.HeaderDiv").width();
        
        $("div.container").width(width + "px");

        $('#sankalanTable').DataTable( {
            data: dataSet,

            scrollY:        '60vh',
            scrollCollapse: true,
            paging:         false,

            drawCallback: function() {
                if($(document).width() < 1000) {
                    removeColumnsForMobileView();
                } else {
                    addColumnsForDesktopView();
                }
            },


            columns: [
                { title: "Name (Hindi)", width:"12%" },
                { title: "Name (English)", width: "12%" },
                {title: "Book (Hindi)", width: "12%", className: "hideMobileView" },
                { title: "Book (English)", width: "12%" },
                { title: "Bachan", width: "50px", className: "hideMobileView" },
                { title: "Shabd", width: "50px", className: "hideMobileView"},

                { title: "Occasion (Hindi)", width: "10%", className: "hideMobileView" },
                { title: "Occasion (English)", width: "10%", className: "hideMobileView" },
                { title: "Audio" },
                { title: "Video"}
            ]
        } );

        
        $("input[type='search']").width("500px");
        $("div.dataTables_wrapper").css("margin-left", "1%");
        $("div.dataTables_wrapper").css("margin-right", "1%");
        $("div.dataTables_filter").css("float", "left");
    }, 500);   


    // pause all other audios when "this" is played.
    document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
    }, true); 
});


$(window).resize(function() {
    if($(document).width() < 1000) {
        removeColumnsForMobileView();
    } else {
        addColumnsForDesktopView();
    }
});

var removeColumnsForMobileView = function() {
    $(".hideMobileView").hide();
}


var addColumnsForDesktopView = function() {
    $(".hideMobileView").show();
}