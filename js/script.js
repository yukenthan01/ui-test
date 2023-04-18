$(function(){
    $(document).on('click','.card',function() {
        $("#myModal").css("display","block");
        var price = $(this).find(".price").children() //select all the children
         //remove all the children
        .end()  //again go back to selected element
        .text();

        var title = $(this).find(".item-tittle").clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text();

        var location = $(this).find(".item-tittle span").text();
        var content = $(this).find(".content").text();
        var img = $(this).find(".img").attr("src");
        $(".pop-title h2").text(title);
        $(".pop-price").text(price.split("each")[0]);
        $(".pop-img img").attr('src',img);
        $(".pop-description .des-text").text(content);
        $(".pop-loc").text(location.split("from")[1]);
        console.log(location.split("from")[1]);
        
    });


    $(document).on('click','.close',function(e) {
        e.preventDefault();
        $("#myModal").css("display","none");
    });
});