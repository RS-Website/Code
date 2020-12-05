var getCardViewHTML = function(Maharaj) {
  switch (Maharaj) {
    case "Soamiji Maharaj":
      return getHTML(SoamijiMaharajPhotos, "files/images/SoamijiMaharaj/");
      break;
    case "Radhaji Maharaj":
      return getHTML(RadhajiMaharajPhotos, "files/images/RadhajiMaharaj/");
      break;
    case "Huzur Maharaj":
      return getHTML(HuzurMaharajPhotos, "files/images/HuzurMaharaj/");
      break;
    case "Maharaj Saheb":
      return getHTML(MaharajSahebPhotos, "files/images/MaharajSaheb/");
      break;
    case "Buaji Saheba":
      return getHTML(BuajiSahebaPhotos, "files/images/BuajiSaheba/");
      break;
    case "Babuji Maharaj":
      return getHTML(BabujiMaharajPhotos, "files/images/BabujiMaharaj/");
      break;
    case "Guru Gurumukh":
      return getHTML(GuruGurumukhPhotos, "files/images/GuruGurumukh/");
  }
};

var getHTML = function(json, parentFolder) {
  if (!json) {
    return;
  }

  var imageHTML = "";
  json.forEach(item => {
    imageHTML += "<div class='brick' align='center'>";
    imageHTML += "<img photogallery style='cursor:pointer;' ";
    if ($(window).width() < 700) {
      imageHTML +=
        "src='" +
        parentFolder +
        item.original +
        ".rendition.319.319.png" +
        "' ";
    } else {
      // TODO: check if a better rendition can be used (in terms of size)
      imageHTML +=
        "src='" +
        parentFolder +
        item.original +
        ".rendition.319.319.png" +
        "' ";
    }

    imageHTML += "alt='" + item.detail_english + "' ";
    imageHTML += "title='" + item.title_english + "' ";
    imageHTML += "original='" + parentFolder + item.original + "' ";
    imageHTML += "/>";
    imageHTML += "<div class='card-body' style='padding-top:6px;'>";
    if (item.title_english) {
      imageHTML +=
        "<h5 class='card-title'>" +
        item.title_english +
        // " " +
        // item.original +
        "</h5>";
    }

    if (item.detail_english) {
      imageHTML += "<p style='font-size:16px;' class='card-text'>" + item.detail_english + "</p>";
    }
    // imageHTML +=
    //   "<a download href='" +
    //   parentFolder +
    //   item.original +
    //   "' target='_blank' class='btn btn-primary'>View in new tab</a>";
    imageHTML += "</div>";
    imageHTML += "</div>";
  });
  return imageHTML;
};

function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }

      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }


      $(document).ready(function() {

        setTimeout(() => {
          $(".wrapper").css("position", "fixed");
          var marginTop = $("#pageBanner").height() + 25;
          $(".wrapper").css("top", marginTop + "px");
          var height = $(window).height() - marginTop;
          $(".wrapper").height(height + "px");
          $(".wrapper").css("overflow", "auto");

          $("#cardViewContainer").width($("#pageBanner").width());
        }, 5);

        $("select.ssgPhotoSelector").change(function(e) {
          var MaharajSelected = this.value;
          var html = getCardViewHTML(MaharajSelected);
          $("#cardViewContainer").html(html);
          attachePhotoClickHandler();
        });

        // landing
        $("#cardViewContainer").html(getCardViewHTML("Soamiji Maharaj"));

        attachePhotoClickHandler();

        $(document).keyup(function (e) {
          e = e || window.event;
          if (e.keyCode == 27) {
            closeNav();
          }
        });

      });

      var attachePhotoClickHandler = function() {
        $("img").click(function (e) {
          var originalPath = $(e.target).attr("original");
          var rendition = ".rendition.800.600.png";
          var imgTag = "<img src='" + originalPath + rendition + "'/>";
          $(".overlay-content").html(imgTag);
          openNav();
        });
      };
