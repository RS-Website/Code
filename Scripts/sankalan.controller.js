var plotTable = function(idTable, filterFunc) {
    setTimeout(() => {
        var width = $("img.HeaderDiv").width();
        
        $("div.container").width(width + "px");

        $('#' + idTable).DataTable( {
            data: dataSet.filter(filterFunc),

            scrollY:        '60vh',
            scrollCollapse: true,
            paging:         true,
            searching:      false,
            //responsive:     true,
            pageLength:     6,
            info:           true, // show how manu entries exist, actually
            lengthChange:   false, // whether to show the dropdown to switch page size

                

            drawCallback: function() {
                $("table.audioColumnDataTable tr").css("background-color", "transparent");
                if($(document).width() < 1000) {
                    adaptForMobieleView();
                } else {
                    adaptForDesktopView();
                }
            },

            "aoColumnDefs": [{
                "sType": "bookname_english",
                "bSortable": true,
                "aTargets": [3]

            }],     

            order: [[3, "asc"]],

            columns: [
                { title: "Name (Hindi)", width: "12%", className: "leftalign" },
                { title: "Name (English)", width: "14%", className: "leftalign" },
                {title: "Book (Hindi)",  className: "hideMobileView leftalign", width: "10%" },
                { title: "Book (English)", width: "11%", className: "leftalign"  },
                { title: "Bachan", width:"4%", className: "hideMobileView centeralign" },
                { title: "Shabd", width: "4%", className: "hideMobileView centeralign"},

                { title: "Occasion (Hindi)", width:"10%", className: "hideMobileView", visible: false },
                { title: "Occasion (English)", width:"10%",  className: "hideMobileView", visible: false },
                { title: "Audio", width: "15%", className:" centeralign" },
                { title: "Video", width: "10%", className: "centeralign"}
            ]
        } );

        
        $("div.dataTables_wrapper").css("margin-left", "1%");
        $("div.dataTables_wrapper").css("margin-right", "1%");
        $("div.dataTables_filter").css("float", "left");
    }, 250); 
}

// Custom Sorting
jQuery.fn.dataTableExt.oSort["bookname_english-desc"] = function(x, y) {
    var px = x.trim().toLowerCase();
    var py = y.trim().toLowerCase();

    var xStart = px.split(' ')[0];
    var yStart = py.split(' ')[0];

    if(xStart !== yStart) {
        // x is from Sar Bachan and y Prem Bani
        // Sar Bachan < Prem Bani (by time)
        if(xStart === "sar") {
            return 1;
        } else {
            return -1;
        }
    } else {
        var xLast = px.charAt(px.length-1);
        var yLast = py.charAt(px.length-1);

        if(isNaN(xLast) || isNaN(yLast)) {
            return -1;
        }

        if(xLast === yLast) {
            return 0;
        }
        
        return xLast > yLast ? -1 : 1;
    }
};

// Custom Sorting
jQuery.fn.dataTableExt.oSort["bookname_english-asc"] = function(x, y) {
    var px = x.trim().toLowerCase();
    var py = y.trim().toLowerCase();

    var xStart = px.split(' ')[0];
    var yStart = py.split(' ')[0];

    if(xStart !== yStart) {
        // x is from Sar Bachan and y Prem Bani
        // Sar Bachan < Prem Bani (by time)
        if(xStart === "sar") {
            return -1;
        } else {
            return 1;
        }
    } else {
        var xLast = px.charAt(px.length-1);
        var yLast = py.charAt(px.length-1);

        if(isNaN(xLast) || isNaN(yLast)) {
            return 1;
        }
        if(xLast === yLast) {
            return 0;
        }
        
        return xLast < yLast ? -1 : 1;
    }
}

 
$(document).ready(function() {
    
    $("table[shabdByCategory]").each(function(i, tableEl){
        var tableId = $(tableEl).attr("id");
        var filterStr = tableIdFilterMap[tableId].trim().toLowerCase();
        plotTable(tableId, function(el) {
            var thisCategory = el[7].trim().toLowerCase();
            if(filterStr === "prayer") {
                return thisCategory.includes(filterStr)
                    && !thisCategory.includes("manglacharan and prayer")
                    && !thisCategory.includes("prayer for daya and mehar");
            }
            return thisCategory.includes(filterStr);
        });
    });

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
    if($(window).width() < 1000) {
        adaptForMobieleView();
    } else {
        adaptForDesktopView();
    }
});

var adaptForMobieleView = function() {
    $(".hideMobileView").hide();
    $(".clickMsg").hide();
}


var adaptForDesktopView = function() {
    $(".hideMobileView").show();
    $(".clickMsg").show();
}

var tableIdFilterMap = {
"Morning" : "After waking up in morning, Niyamawali",
"RetiringToBed": "Before retiring to bed in evening, Niyamawali",
"Bhog" : "Bhog",
"BhandaraSM": "Bhandara of Soami Ji Maharaj",
"BhandaraHM": "Bhandara of Huzur Maharaj",
"BhandaraMS": "Bhandara of Maharaj Saheb",
"BhandaraBuajiM": "Bhandara of Buaji Maharaj",
"BhandaraBJM": "Bhandara of Babuji Maharaj",
"Basant": "Basant Panchmi Satsang",
"Holi": "Holi Satang",
"Padiwa": "Asadh Badi Padiwa",
"GuruPurnima": "Guru Purnima Satsang",
"Diwali": "Diwali Satsang",
"ThanksGiving": "Thanksgiving",
"Marriage": "Marriage",
"HouseWarming": "House warming",
"EndStage": "Illness and End Time or Death",
"Chetwani": "Admonition",
"Prem": "Love and Yearning",
"Invocation": "Invocation",
"PrayerForGraceAndMercy": "Prayer for Daya and Mehar",
"PrayerInFeetOfRadhasoamiDayal": "Prayer",
"ConsolationAndSolace": "Assurance and solace",
"SewaBani": "Hyms of Sewa",
"Artis": "Arti Shabd",
"GloryOfRadhasoamiNaam": "Mahima of Radhasoami Naam",
"GhazalMasnavi": "Ghazal and Masnavi",
"SaawanHindola": "Sawan, Hindola and Jhula (Swing)"
};