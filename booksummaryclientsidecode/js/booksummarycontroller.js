$(document).ready(function(){
    BookSummary.buildAutoComplete();
    BookSummary.buildSummarries();

    
});


var BookSummary = {
    filter: function(text) {
        if(!text || text.length === 0) {
            // ensure all are shown
            $("coral-accordion-item-label").each(function(i, e){
                $(e).closest("coral-accordion-item").show();
            });
            return;
        }

        $("coral-accordion-item-label").each(function(i, e){
            if ($(e).html().indexOf(text) === -1) {
                $(e).closest("coral-accordion-item").hide();
            } else {
                // handle previously hidden accordions
                $(e).closest("coral-accordion-item").show();
            }
        });

    },
    buildAutoComplete: function() {
        var autoComplete = new Coral.Autocomplete();
        autoComplete.id = "searchAutoCompleteControl";

        $(bookSummarries).each(function(i, book) {
            var autoCompleteItem = new Coral.Autocomplete.Item();
            autoCompleteItem.value = book.title;
            autoCompleteItem.textContent = book.title;
            autoComplete.append(autoCompleteItem);
        });

        
        $("#searchAutoCompleteContainer").append(autoComplete);
        var autocompletes = document.querySelectorAll('coral-autocomplete');
        autocompletes.forEach(function(el){
            Coral.commons.ready(el, function(el) {
                el.addEventListener('change', function(evt) {
                    BookSummary.filter($(evt.currentTarget).find("input[type='hidden']").attr("value"));
                });

                $("coral-accordion-item-label").each(function(i,e){
                    $(e).css("font-size", "16px");
                });

                // setTimeout(() => {
                //     var height = window.screen.width - $("#pageBanner").height() + "px";
                //     $("#WholeSummaryContainer").css("max-height", height);
                // }, 1);
                
            });
        });
    },
    buildSummarries: function() {
        if (!bookSummarries) {
            return "";
        }
        var summaryHTML = "<coral-accordion>";

        $(bookSummarries).each(function(index, element) {
            
            summaryHTML += "<coral-accordion-item>";
            summaryHTML += "<coral-accordion-item-label>";
            summaryHTML += element.title;
            summaryHTML += "</coral-accordion-item-label>";
            summaryHTML += "<br />"  + element.summary + "<br /><p /><a href=\"" + element.href + "\">Read Online</a><p /><a href=\"" + element.href + "\" download>Download</a><br />";

            summaryHTML += "</coral-accordion-item>";
        });
        summaryHTML += "</coral-accordion>";
        
        $("#summaryContainer").html(summaryHTML);

    }
}