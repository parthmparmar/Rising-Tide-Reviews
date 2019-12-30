
$("#search-movie").on("click", function(){
    movieName = $("#movieName").val().trim().replace(" ","+"); 
    location.href = "http://localhost:3000/movie/search/"+movieName;
});

$(".add-movie").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url: "/api/movie/add/" + imdbID,
        method: "POST"
    }).then(function(response){
        location.reload();
        window.location.href = "/home";
    });
});

$(".up-boat").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url:"/api/movie/up-boat/"+imdbID,
        method: "PUT"
    }).then(function(response){
        location.reload();
    });
});

$(".down-boat").on("click", function(){
    imdbID = $(this).data("imdbid");
    console.log(imdbID);
    $.ajax({
        url:"/api/movie/down-boat/"+imdbID,
        method: "PUT"
    }).then(function(response){
        location.reload();
    });
});

$(".card").on("click", function(){
    imdbID = $(this).data("imdbid");
    
    $.ajax({
        url:"/api/movie/"+imdbID,
        method: "GET"
    }).then(function(response){
        console.log(response.Rated);
        $("[data-imdbid = "+ imdbID).find(".rating").text("Rating: " + response.Rated);
        $("[data-imdbid = "+ imdbID).find(".plot").text("Plot: " + response.Plot);
    });
});