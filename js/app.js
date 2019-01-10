$(() => {
   // API KEY: 773d961a799d4cf9a09c2033e653e8b1

   const showModal = () => {
      console.log("Clicked Button!");
      $("#mainModal").css("display", "block");
   };
   $("#myBtn").on("click", showModal);

   const hideModal = () => {
      $("#mainModal").css("display", "none");
   };
   $(".closeModal").on("click", hideModal);

   $.ajax({
      url:
         "https://newsapi.org/v2/top-headlines?country=us&apiKey=773d961a799d4cf9a09c2033e653e8b1",
      success: data => {
         console.log(data);

         for (let i = 0; i < 13; i++) {
            if (i === 0) {
               $(".trending-articles").append(
                  $("<div>")
                     .css("width", "100%")
                     .css("height", "100%")
                     .addClass("trending-feature")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "75%")
                        // .css("border", "1px solid black")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "25%")
                           // .css("border", "1px solid black")
                           // .css("padding", "10px")
                           .append(
                              $("<h5>").text("source: " + data.articles[i].source.name)
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("top", "10%")
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                           .append($("<p>").text(data.articles[i].description))
                     )
               );
            } else {
               $(".trending-articles").append(
                  $("<div>")
                     .css("width", "100%")
                     // .css("height", "100%")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "50%")
                        // .css("border", "1px solid black")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "50%")
                           // .css("border", "1px solid black")
                           .append(
                              $("<h5>").text("SOURCE: " + data.articles[i].source.name)
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("height", "100%")
                                 .css("top", "15%")
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                        // .append($("<p>").text(data.articles[i].description))
                     )
               );
            }

            // $(".trending-articles").append();
            // Div Container: $("<div>").append() // .addClass()
            // Image: $("<img>").text(data.articles[i].urlToImage)
            // Title: $("<h4>").text(data.articles[i].title)
            // Source: $("<h5>").text("source: " + data.articles[i].source.name)
            // Description $("<p>").text(data.articles[i].description)
         }
      },
      error: e => {
         console.log("Error: " + e);
      }
   });
});

// .append(
//    $("<div>").append(
//       $("<h4>")
//          .text(data.articles[i].title)
//          .addClass("tooltip")
//          .append(
//             "<span>"
//                .text(data.articles[i].description)
//                .addClass("tooltiptext")
//          )
//    )
// )
