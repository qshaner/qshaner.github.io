
$('body').scrollspy({ target: '#Navigation' });

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
