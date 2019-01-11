$(() => {
   // API KEY: 773d961a799d4cf9a09c2033e653e8b1

   const showModal = () => {
      $("#mainModal").css("display", "block");
   };
   // $("#myBtn").on("click", showModal);

   const hideModal = () => {
      $("#mainModal").css("display", "none");
   };
   $(".closeModal").on("click", hideModal);

   $.ajax({
      url:
         "https://newsapi.org/v2/top-headlines?country=us&apiKey=773d961a799d4cf9a09c2033e653e8b1",
      success: data => {
         // console.log(data);

         for (let i = 0; i < 13; i++) {
            console.log(data.articles[i]);

            if (i === 0) {
               $(".trending-articles").append(
                  $("<div>")
                     .data("article-data", data.articles[i])
                     .css("width", "100%")
                     .css("height", "100%")
                     .addClass("trending-feature")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "75%")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "25%")
                           .append(
                              $("<h5>")
                                 .text("source: " + data.articles[i].source.name)
                                 .css("padding-bottom", "5px")
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                           .append($("<p>").text(data.articles[i].description))
                     )
               );
            } else {
               $(".trending-articles").append(
                  $("<div>")
                     .data("article-data", data.articles[i])
                     .css("width", "100%")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "50%")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "50%")
                           .append(
                              $("<h5>").text("SOURCE: " + data.articles[i].source.name)
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("top", "15%")
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
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

         const readArticle = event => {
            event.preventDefault();
            // console.log("Article Clicked!");

            console.log($(event.currentTarget).data("article-data"));

            const articleImg = $(event.currentTarget).data("article-data").urlToImage;
            const articleSrc = $(event.currentTarget).data("article-data").source.name;
            const articleTitle = $(event.currentTarget).data("article-data").title;
            const articleContent = $(event.currentTarget).data("article-data").content;
            const articleLink = $(event.currentTarget).data("article-data").url;
            // Img
            $(".content-img").attr("src", articleImg);

            // source
            $(".content-src").text(articleSrc);

            // title
            $(".content-title").text(articleTitle);

            // article
            $(".content-article").text(articleContent);

            // link

            $(".content-link")
               .attr("href", articleLink)
               .attr("target", "_blank");
            showModal();
         };
         $(".article").on("click", readArticle);
      },
      error: e => {
         console.log("Error: " + e);
      }
   });

   $.ajax({
      url:
         "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=773d961a799d4cf9a09c2033e653e8b1",
      success: data => {
         // console.log(data);

         for (let i = 0; i < 13; i++) {
            console.log(data.articles[i]);

            if (i === 0) {
               $(".business-articles").append(
                  $("<div>")
                     .data("article-data", data.articles[i])
                     .css("width", "100%")
                     .css("height", "100%")
                     .addClass("business-feature")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "75%")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "25%")
                           .append(
                              $("<h5>")
                                 .text("source: " + data.articles[i].source.name)
                                 .css("padding-bottom", "5px")
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                           .append($("<p>").text(data.articles[i].description))
                     )
               );
            } else {
               $(".business-articles").append(
                  $("<div>")
                     .data("article-data", data.articles[i])
                     .css("width", "100%")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "50%")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "50%")
                           .append(
                              $("<h5>").text("SOURCE: " + data.articles[i].source.name)
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("top", "15%")
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                     )
               );
            }
            // $(".business-articles").append();
            // Div Container: $("<div>").append() // .addClass()
            // Image: $("<img>").text(data.articles[i].urlToImage)
            // Title: $("<h4>").text(data.articles[i].title)
            // Source: $("<h5>").text("source: " + data.articles[i].source.name)
            // Description $("<p>").text(data.articles[i].description)
         }

         const readArticle = event => {
            event.preventDefault();
            // console.log("Article Clicked!");

            console.log($(event.currentTarget).data("article-data"));

            const articleImg = $(event.currentTarget).data("article-data").urlToImage;
            const articleSrc = $(event.currentTarget).data("article-data").source.name;
            const articleTitle = $(event.currentTarget).data("article-data").title;
            const articleContent = $(event.currentTarget).data("article-data").content;
            const articleLink = $(event.currentTarget).data("article-data").url;
            // Img
            $(".content-img").attr("src", articleImg);

            // source
            $(".content-src").text(articleSrc);

            // title
            $(".content-title").text(articleTitle);

            // article
            $(".content-article").text(articleContent);

            // link

            $(".content-link")
               .attr("href", articleLink)
               .attr("target", "_blank");
            showModal();
         };
         $(".article").on("click", readArticle);
      },
      error: e => {
         console.log("Error: " + e);
      }
   });
});
