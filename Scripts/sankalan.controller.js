
 
$(document).ready(function() {
    setTimeout(() => {
        var width = $("img.HeaderDiv").width();
        console.log(width);
        $("div.container").width(width + "px");

        $('#sankalanTable').DataTable( {
            data: dataSet,

            scrollY:        '60vh',
            scrollCollapse: true,
            paging:         false,


            columns: [
                { title: "Name (Hindi)", width:"12%" },
                { title: "Name (English)", width: "12%" },
                {title: "Book (Hindi)", width: "12%" },
                { title: "Book (English)", width: "12%" },
                { title: "Bachan", width: "50px" },
                { title: "Shabd", width: "50px"},

                { title: "Occasion (Hindi)", width: "10%" },
                { title: "Occasion (English)", width: "10%" },
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
