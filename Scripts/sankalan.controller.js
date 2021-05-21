
 
$(document).ready(function() {
    setTimeout(() => {
        var width = $("img.HeaderDiv").width();
        console.log(width);
        $("div.container").width(width + "px");

        $('#example').DataTable( {
            data: dataSet,
            columns: [
                
                { title: "Name (English)" },
                
                { title: "Book (English)" },
                { title: "Bachan" },
                { title: "Shabd" },

                
                { title: "Occasion (English)" },
                { title: "Audio" },
                { title: "Video" }
            ]
        } );

        
        $("input[type='search']").width("500px");
    }, 500);
} );
