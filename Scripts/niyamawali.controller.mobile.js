var plotSections = function(containerId) {
    var html = '';
    var sectionCounter = 0;
    Object.entries(sections).forEach(([key, value]) => {
        sectionCounter++;
        var filteredData = dataSet.filter(function (element) {
            return element[7] === value;
        });
        // section
        const className = (sectionCounter%2 == 0)? "even-section" : "odd-section";
        var sectionHtml = "<section id='" + key + "' class='" + className + "'>";
        sectionHtml += "<h1>" + value.replace(', Niyamawali', '') + "</h1>";
        $(filteredData).each(function(i,e){
            // section's elements
            let hindiName = e[0];
            let englishName = e[1];
            let hindiBookName = e[2];
            let englishBookName = e[3];
            let audio = '';
            let video = ''

            let regex = /href=['"](https:\/\/[^'"]+)['"]/i;
            let match = e[8].match(regex);
            if (match) {
                audio = match[1];
            }
            
            match = e[9].match(regex);
            if(match) {
                video = match[1];
            }

            let sectionDivHtml = "<div class='song'>";
            sectionDivHtml += "<table width='100%'>";
            sectionDivHtml += "<tr>";
            sectionDivHtml += "<td>";
            sectionDivHtml += "<h5 class='audio-title'>" + hindiName + "</h5>";
            sectionDivHtml += "</td>";
            sectionDivHtml += "<td style='text-align:right;width:50%;' rowspan=5>";
            sectionDivHtml += "<p><span class='glyphicon glyphicon-play-circle'></span>&nbsp;<a href='" + video + "'>Watch Video</a></p>"   
            // sectionDivHtml += "<video width='100%' height='30%' controls preload='none'><source src='" + video + "' type='video/mp4'>Your browser does not support video playing.</video>";
            sectionDivHtml += "</td>";
            sectionDivHtml += "</tr>";

            sectionDivHtml += "<tr>";
            sectionDivHtml += "<td>";
            sectionDivHtml += "<h5 class='audio-title'>" + englishName + "</h5>";
            sectionDivHtml += "</td>";
            sectionDivHtml += "</tr>";

            sectionDivHtml += "<tr>";
            sectionDivHtml += "<td>";
            sectionDivHtml += "&nbsp;";
            sectionDivHtml += "</td>";
            sectionDivHtml += "</tr>";

            sectionDivHtml += "<tr>";
            sectionDivHtml += "<td>";
            sectionDivHtml += "<h5 class='audio-title'>" + hindiBookName + "</h5>";
            sectionDivHtml += "</td>";
            sectionDivHtml += "</tr>";

            

            sectionDivHtml += "<tr>";
            sectionDivHtml += "<td>";
            sectionDivHtml += "<h5 class='audio-title'>" + englishBookName + "</h5>";
            sectionDivHtml += "</td>";
            sectionDivHtml += "</tr>";

            sectionDivHtml += "<tr>";
            sectionDivHtml += "<td colspan=3>";
            sectionDivHtml += "<audio controls>";
            sectionDivHtml += "<source src='" + audio + "' type='audio/mp3'> Your browser does not support the audio element.";
            sectionDivHtml += "</audio>";
            sectionDivHtml += "</td>";
            sectionDivHtml += "<tr>";

            
            
           
            sectionDivHtml += "</table>"
            
            sectionDivHtml += "</div>";

            sectionHtml += sectionDivHtml;
        });
        sectionHtml += "</section>";
        html += sectionHtml;
    });
    $(containerId).html(html);
}

var sections = {
    "Morning" : "After waking up in morning, Niyamawali",
    "RetiringToBed": "Before retiring to bed in evening, Niyamawali",
    "Bhog" : "Bhog",
    "Daily": "Daily",
    "Sunday": "Sunday",
    "Monday": "Monday",
    "Tuesday": "Tuesday",
    "Wednesday": "Wednesday",
    "Thursday": "Thursday",
    "Friday": "Friday",
    "Saturday": "Saturday"
};