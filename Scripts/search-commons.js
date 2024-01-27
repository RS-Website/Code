function search() {
    performSearch();
}

function resetSearch() {
    // Get the input element by its ID
    var inputElement = document.getElementById("searchInput");
    // Set the value of the input element to an empty string
    inputElement.value = "";
    $("div[class='accordion']").children().each(function(i, e) {
        var btn = $(e).find("button.accordion-button");
        if (btn.length > 0 && !$(btn[0]).hasClass("collapsed")) {
            btn.click();
            setTimeout(() => {
                if (!$(btn[0]).hasClass("collapsed")) {
                    btn.click();
                }
            }, 10);
        }
        $(e).show();
    });
    // accordion-button
}

function performSearch() {
    $("#searchMsg").hide();
    // Check if the key pressed is 'Enter'
    var searchText = ($("#searchInput")[0]).value;
    var tdElem = $("td:contains('" + searchText + "')");
    if (tdElem.length > 0) {
        // element found
        var correspondingAccordionBtn = tdElem.closest("div[class='accordion-item']").find('button');
        correspondingAccordionBtn = $(correspondingAccordionBtn[0]);
        var found = false;
        if (correspondingAccordionBtn.length > 0) {
            found = true;
            var isExpanded = !correspondingAccordionBtn.hasClass("collapsed");
            if (isExpanded != undefined && isExpanded != null && isExpanded === false) {
                // expand
                $("div[class='accordion']").children().each(function(i, e) {
                    $(e).hide();
                });
                tdElem.each(function(i, e) {
                    $(e).closest('div[class=accordion-item]').show();
                })
                $(correspondingAccordionBtn[0]).click();
            } else { // 3 4
                if (isExpanded != undefined && isExpanded != null && isExpanded === true) {
                    // no-op
                }
            }
        }

        if (found === true) {
            // scroll to td
            $('html, body').animate({
                scrollTop: tdElem.offset().top
            }, 1000);
        } else {
            $("#searchMsg")[0].innerText = "No results found!!";
            $("#searchMsg").hide();
        }
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        var searchElem = ($("#searchInput")[0]);
        var searchText = searchElem.value;
        resetSearch();
        searchElem.value = searchText;
        setTimeout(() => {
            performSearch();
        }, 10);
    }
}