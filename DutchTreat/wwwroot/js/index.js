$(document).ready(function () {

    //alert("Hello Pluralsight");
    console.log("Hello Pluralsight");

    //var theForm = document.getElementById("theForm");
    //theForm.hidden = true;

    //var theForm = $("#theForm");
    //theForm.hide();

    //var buyButton = document.getElementById("buyButton");
    //buyButton.addEventListener("click", function () {
    //    //alter("Buying Item");
    //    console.log("Buying Item");
    //});

    var buyButton = $("#buyButton");
    buyButton.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You click on " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popupForm");

    $loginToggle.on("click", function () {
        console.log("login toggle clicked");
        //$popupForm.toggle(1000);
        //$popupForm.slideToggle(1000);
        $popupForm.fadeToggle(1000);
    });
});


