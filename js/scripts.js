$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault();

        setTimeout(function(){
            window.location.replace("/bedroom-combo/salespage");
        }, 3000);
    });

    $("#logo").click(function(){
        window.location.replace("/bedroom-combo/");
    });

    $("#btn-whatsapp").click(function(){
        window.location.href = "https://wa.link/3lf0m0";
    });
});