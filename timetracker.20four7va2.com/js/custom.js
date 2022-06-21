
//wow animation start
$(document).ready(function () {
    new WOW().init();
    $(".showpwd").click(function () {
        if (this.previousElementSibling.type === 'password') {
            this.previousElementSibling.setAttribute('type', 'text');
        } else {
            this.previousElementSibling.setAttribute('type', 'password');
        }
        this.classList.toggle('bi-eye');
    });
});

////custome select option
//$('select').each(function () {
//    var $this = $(this), numberOfOptions = $(this).children('option').length;

//    $this.addClass('select-hidden');
//    $this.wrap('<div class="select"></div>');
//    $this.after('<div class="select-styled"></div>');

//    var $styledSelect = $this.next('div.select-styled');
//    $styledSelect.text($this.children('option').eq(0).text());

//    var $list = $('<ul />', {
//        'class': 'select-options'
//    }).insertAfter($styledSelect);

//    for (var i = 0; i < numberOfOptions; i++) {
//        $('<li />', {
//            text: $this.children('option').eq(i).text(),
//            rel: $this.children('option').eq(i).val()
//        }).appendTo($list);
//    }

//    var $listItems = $list.children('li');

//    $styledSelect.click(function (e) {
//        e.stopPropagation();
//        $('div.select-styled.active').not(this).each(function () {
//            $(this).removeClass('active').next('ul.select-options').hide();
//        });
//        $(this).toggleClass('active').next('ul.select-options').toggle();
//    });

//    $listItems.click(function (e) {
//        e.stopPropagation();
//        $styledSelect.text($(this).text()).removeClass('active');
//        $this.val($(this).attr('rel'));
//        $list.hide();
//        //console.log($this.val());
//    });

//    $(document).click(function () {
//        $styledSelect.removeClass('active');
//        $list.hide();
//    });

//});




//fileupload
$(document).ready(function () {
    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function (event, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }

    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
                $('#img-upload').addClass('user-pic');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
});

//fileupload
//document.querySelector('.custom-file-input').addEventListener('change', function (e) {
//    var fileName = document.getElementById("customFileLangHTML").files[0].name;
//    var nextSibling = e.target.nextElementSibling
//    nextSibling.innerText = fileName
//})

//Step Wizard
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function () {

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({ 'opacity': opacity });
        },
        duration: 600
    });
});

$(".previous").click(function () {

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({ 'opacity': opacity });
        },
        duration: 600
    });
});

$('.radio-group .radio').click(function () {
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
});

$(".submit").click(function () {
    return false;
})

//slick slider
$('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'linear',
    adaptiveHeight: true,
    //autoplay: true,
});

/*Multiple Row Selection*/
/*Dashboard table*/
$('.leavereporttbl tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

/*Manage Leave Application table*/
$('.manageleaveapptbl tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

/*Manage Manual Log Request*/
$('.mngmanuallogrqsttbl tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

/*Manage Overtime Log Request*/
$('.mngovertimelogrqsttbl tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

/*Speed Test All Report*/
$('.speedtestalltbl tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

/*Speed Test All Individual Report*/
$('.speedtestindividualtbl tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});