console.log('my name is sandeep');
let newsSection = document.getElementById('newsSection');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1531b5f93da746239ffd95e6d702034e', true);
xhr.onload = function () {
    let newsHtml="";
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        articles.forEach(function(element) {
        //     let newsArticles = `<p style="width: 100%;">
        //     <button class="btn btn-primary" style="width: 100%;" type="button" data-bs-toggle="collapse"
        //         data-bs-target="#collapseWidthExample" aria-expanded="false"
        //         aria-controls="collapseWidthExample">${element["title"]}
        //     </button>
        // </p>
        // <div style="min-height: 100%;">
        //     <div class="collapse collapse-horizontal" id="collapseWidthExample">
        //         <div class="card card-body" style="width: 100%;">${element["description"]}
        //         </div>
        //     </div>
        // </div>`
        let newsArticles = `<div class="card col-md-4">
        <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element["title"]}</h5>
          <p class="card-text">${element["description"]}</p>
          <a href="${element["url"]}" target = "_blank" class="btn btn-primary">Read More</a>
        </div>
      </div>`
        
        newsHtml += newsArticles;
    });
    newsSection.innerHTML = newsHtml;
}
else {
    console.log("some error accured");
}
}
xhr.send()
xhr.getResponseHeader('content-type', 'application/json');
