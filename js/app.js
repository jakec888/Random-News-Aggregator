$(() => {
   // API KEY: 773d961a799d4cf9a09c2033e653e8b1
   // console.log("Hello World");

   $.ajax({
      url:
         "https://newsapi.org/v2/top-headlines?country=us&apiKey=773d961a799d4cf9a09c2033e653e8b1",
      success: data => {
         console.log(data);

         for (let i = 0; i <= 13; i++) {
            if (i === 0) {
               $(".trending-articles").append(
                  $("<div>")
                     .addClass("trending-feature")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                     )
                     .append($("<h3>").text(data.articles[i].title))
                     .append($("<h5>").text("source: " + data.articles[i].source.name))
                  // .append($("<p>").text(data.articles[i].description))
               );
            } else {
               $(".trending-articles").append(
                  $("<div>")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                     )
                     .append($("<h3>").text(data.articles[i].title))
                     .append($("<h5>").text("source: " + data.articles[i].source.name))
                  // .append($("<p>").text(data.articles[i].description))
               );
            }

            // $(".trending-articles").append();
            // Div Container: $("<div>").append() // .addClass()
            // Image: $("<img>").text(data.articles[i].urlToImage)
            // Title: $("<h3>").text(data.articles[i].title)
            // Source: $("<h5>").text("source: " + data.articles[i].source.name)
            // Description $("<p>").text(data.articles[i].description)
         }
      },
      error: e => {
         console.log("Error: " + e);
      }
   });
});
