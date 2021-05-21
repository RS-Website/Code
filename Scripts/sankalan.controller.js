
 
$(document).ready(function() {
    setTimeout(() => {
        var width = $("img.HeaderDiv").width();
        console.log(width);
        $("div.container").width(width + "px");

        $('#example').DataTable( {
            data: dataSet,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]
        } );

        
        $("input[type='search']").width("500px");
    }, 500);
} );
