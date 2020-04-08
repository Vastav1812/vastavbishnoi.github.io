window.addEventListener('DOMContentLoaded', function () {

    //SCROLLTOP ON RELOAD
    setTimeout(() => {
        $(this).scrollTop(0);
    }, 0);

    //SMOOTHSCROLL ON LINKS
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('.checkbox-toggle').prop('checked', false);
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    //GRAPHEMESCOPE
    var images = [
        "https://images.pexels.com/photos/1936299/pexels-photo-1936299.jpeg?crop=entropy&cs=srgb&dl=screen-web-design-developing-codes-1936299.jpg&fit=crop&fm=jpg&h=853&w=1280",
        "https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg?crop=entropy&cs=srgb&dl=blue-and-red-plants-2505693.jpg&fit=crop&fm=jpg&h=1706&w=1280",
        "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?crop=entropy&cs=srgb&dl=blue-and-brown-milky-way-galaxy-2694037.jpg&fit=crop&fm=jpg&h=719&w=1280",
        "https://images.pexels.com/photos/2304895/pexels-photo-2304895.jpeg?crop=entropy&cs=srgb&dl=lighted-tower-beside-building-2304895.jpg&fit=crop&fm=jpg&h=1600&w=1280"
    ];
    var background = $("#background");
    var scope = new Graphemescope(background[0]);
    var index = 0;
    scope.ease = 0.05;
    scope.radiusFactor = 0.4;

    function changePicture() {
        scope.setImage(images[index]);
        index = (index + 1) % images.length;
    };

    setInterval(changePicture, 10000);
    changePicture();

    $(window).mousemove(function (event) {
        var factorx = event.pageX / $(window).width();
        var factory = event.pageY / $(window).height()

        scope.angleTarget = factorx * 0.25;
        scope.zoomTarget = 1.0 + 0.5 * factory;
    });

    var resizeHandler = function () {
        background.height(2 * window.innerHeight);
        background.width(2 * window.innerWidth);
    };

    $(window).resize(resizeHandler);
    $(window).resize();
    $(window).click(changePicture);

    // TYPED JS
    var typed = new Typed('.main-typed', {
        strings: ["I design and develop things.", "I design and develop web apps.", "I design and develop UI/UX.", "I design and develop motion."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 4000,
        loop: true,
    });

    //MOMENTUM SCROLL
    if ((typeof window.orientation === "undefined") && (navigator.userAgent.indexOf('IEMobile') === -1)) {
        luxy.init();
    }

    // SPLITTING AND SCROLLOUT ANIMS
    Splitting();
    ScrollOut({ targets: '.title1', offset: 400 });
    ScrollOut({ targets: '.title2', offset: 1100 });

    // SVG DOM HOVER ACTIONS
    var colorArray = ['#FFCA28', '#DE0031', '#F16529', '#29A9DF', '#FFB03A', '#F05033', 
    '#3395F0', '#FDD231', '#FF7C00', '#26C9FF', '#FF2A63', '#D34A47', '#3DF0F0', '#D291FF'];

    colorArray.forEach((color, index) => {
        document.getElementsByClassName('skill-svg')[index].addEventListener("mouseover", function () {
            var element = $('.skill-svg')[index].contentDocument.getElementsByClassName('fill');
            Array.from(element).forEach(path => {
                path.style.transition = '0.5s';
                path.style.fill = color;
                setTimeout(function () {
                    path.style.fill = "#ffffff";
                }, 500);
            });
        });
    });

});
