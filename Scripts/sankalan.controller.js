var plotTable = function(idTable, filterFunc) {
    setTimeout(() => {
        var width = $("img.HeaderDiv").width();
        
        $("div.container").width(width + "px");

        $('#' + idTable).DataTable( {
            data: dataSet.filter(filterFunc),

            scrollY:        '40vh',
            scrollCollapse: true,
            paging:         true,
            searching:      false,

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

                { title: "Occasion (Hindi)", width: "10%", className: "hideMobileView", visible: false },
                { title: "Occasion (English)", width: "10%", className: "hideMobileView", visible: false },
                { title: "Audio" },
                { title: "Video", width: "100px"}
            ]
        } );

        
        // $("input[type='search']").width("500px");
        $("div.dataTables_wrapper").css("margin-left", "1%");
        $("div.dataTables_wrapper").css("margin-right", "1%");
        $("div.dataTables_filter").css("float", "left");
    }, 500); 
}
 
$(document).ready(function() {
    
    $("table[shabdByCategory]").each(function(i, tableEl){
        var tableId = $(tableEl).attr("id");
        var filterStr = tableIdFilterMap[tableId];
        plotTable(tableId, function(el) {
            return el[7] === filterStr;
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

var tableIdFilterMap = {
"Morning" : "After waking up in morning, Niyamawali",
"RetiringToBed": "Before retiring to bed in evening, Niyamawali",
"BhandaraSM": "Bhandara of Soami Ji Maharaj",
"BhandaraHM": "Bhandara of Huzur Maharaj",
"BhandaraMS": "Bhandara of Maharaj Saheb",
"BhandaraBuajiM": "Bhandara of Buaji Maharaj",
"BhandaraBJM": "Bhandara of Babuji Maharaj",
"Basant": "Basant Panchmi Satsang",
"Holi": "Holi Satang",
"Padiwa": "Satsang on Asadh Badi Padiwa",
"GuruPurnima": "Guru Purnima Satsang, Niyamawali",
"Diwali": "Diwali Satsang",
"ThanksGiving": "Thanksgiving",
"Marriage": "Marriage",
"HouseWarming": "House warming",
"EndStage": "Illness and End Time or Death",
"Chetwani": "not found - TBC",
"Prem": "not found - TBC",
"PrayerForGraceAndMercy": "Prayer for Daya and Mehar",
"PrayerInFeetOfRadhasoamiDayal": "Prayer",
"ConsolationAndSolace": "Assurance and solace",
"SewaBani": "Hyms of Sewa",
"Artis": "Arti",
"GloryOfRadhasoamiNaam": "not found - TBC",
"GhazalMasnavi": "Ghazal and Masnavi",
"SaawanHindola": "Sawan, Hindola and Jhula (Swing)"
};