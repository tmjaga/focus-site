$(window).load(function() {
    $('#slider').nivoSlider({
        effect: "fade"
    });
});

$(function() {
    $(".fancybox").fancybox({
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                locked: false
            }
        },
        beforeLoad: function(){
            var prefix, title = "";

            title = "<b>" + $(this.element).siblings("p.product-title").text() + "</b><br />";
            var packageInfo = $(this.element).siblings("div.package-info").text();
            if ($.trim(packageInfo) != "")
            {
                title += packageInfo;
            }
            $(this.element).siblings("div.product-info-container-last").children("div.product-info").each(function(id)
            {
                prefix = $(this).parent("div.product-info-container").prev("div.product-info-container").children("div.product-info:eq("+id+")").text();
                prefix += ": ";
                if ($.trim(packageInfo) != "")
                {
                    title += ", " + prefix + $(this).text();
                }
                else
                {
                    title += "  " + prefix + $(this).text();
                }
            });
            this.title = title;
        }
    });
    $("#iso-image").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});
