$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn, button').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    })

    /* datepicker */
    $('.cal').datepicker({
        dateFormat: "yy-mm-dd",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        // yearSuffix: "년",
        changeYear: true,
        changeMonth:true,
        yearRange: "1960:2030"
    });


    // toc 열고 닫기
    // $(".toc .deps02 .toc_toggle_btn").on("click",function(){
    //     if($(this).parents(".deps02").hasClass("hide")){
    //         $(this).parents(".deps02").removeClass("hide")
    //         $(this).css("background","#F6F8FF url('../images/toc/toc_toggle_btn_01.png')no-repeat center")
    //     }else{
    //         ($(this).parents(".deps02").addClass("hide"))
    //         $(this).css("background","#F6F8FF url('../images/toc/toc_toggle_btn_02.png')no-repeat center")
    //     }
    // });


    $('.toc .deps01 a').on({
        'click': function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parents('.toc').children('.toc .deps02').eq($(this).index())
            .addClass('active').siblings().removeClass('active');
        }
    });

    $('.toc .toc_toggle_btn').on({
        'click': function(){
            $(this).parents('.toc .deps02').removeClass('active');
            $('.toc .deps01 a').removeClass('active');
        }
    });



    // popup 닫기
    $(".popup .popup_clo_btn").on("click",function(){
        $(this).parents().parents(".popup").hide();
    })


    // range bar
    $('input[type=range]').on('input', function(){
        var val = $(this).val();
        $(this).css('background', 'linear-gradient(to right, #4876EF 0%, #4876EF '+ val +'%, #eee ' + val + '%, #eee 100%)');
    });

    // toolbar deps02
    var tool_deps01 = $(".tool_bar .deps01 > a")
    tool_deps01.on("click",function(){
        $(this).parents('.deps01').toggleClass("on");
        tool_deps01.not($(this)).parents('.deps01').removeClass("on");
    });

    var tool_deps02_btn = $(".tool_bar .opaBtn")
    tool_deps02_btn.on("click",function(){
        $(this).parents('.deps02Popup').parents('.deps01').toggleClass("on");
    })


    // 팝업 드래그
    $('.popup').draggable({
        cancel: '.popup_cont',
        containment: "window"
    });

    // 행정구역 선택
    $('.location > ul > li > span').on({
        "click":function (){
            $(this).siblings('.dep2').toggleClass('active').closest('li').siblings('li').children('.dep2').removeClass('active')
        }
    });

    // 판별기준관리 기준구분 선택
    var radioBoxActive = $(".cont_radio_box > div");
    radioBoxActive.click(function(){ 
        radioBoxActive.removeClass("active");
        $(this).addClass("active");
        $(this).find('input').prop('checked', true);
        $(this).find('input').attr('checked', true);
    });

    // 관심지역 팝업 탭
    $('.areaRe > div').hide();
    $('.areaTab a').click(function () {
        $('.areaRe > div').hide().filter(this.hash).fadeIn();
        $('.areaTab a').removeClass('on');
        $(this).addClass('on');
        return false;
    }).filter(':eq(0)').click();

    // 관심지역 영역지정 active
    var contFigureBox = $(".contFigureBox > div")
    contFigureBox.on("click",function(){
        $(this).toggleClass("active");
        contFigureBox.not($(this)).removeClass("active");
    });

    // 관심지역 파일 업로드
    $("#uploadBtn").on('change',function(){
        var fileName = $("#uploadBtn").val();
        $(".uploadUrl").val(fileName);
    });

    // 기본레이어 아이콘 클릭 on
    $(".icoBox button").on("click",function(){
        $(this).toggleClass("on");
    });


    // 검색결과 팝업 닫기
    $(".addressBox .head button").on("click",function(){
        $(".addressBox").hide();
    });

    // alert, confirm 팝업 닫기
    $(".commonPopup .cloBtn").on("click",function(){
        $(this).parents(".commonPopup").hide();
        $(this).parents(".commonPopup").next(".dimmed").hide();
    });

    // 팝업 최소화
    $('.popup .miniBtn').on('click',function(){
        if($(this).parent().parent().parent().hasClass('active')){
            $(this).parent().parent().next('.popup_cont').stop().slideUp()
            $(this).css("background","url('../images/popup/ico_mini_btn02.png')no-repeat center")
            $(this).parent().parent().parent().removeClass('active')
            $(this).parent().parent().parent().addClass("mini")
        }else{
            $(this).parent().parent().next('.popup_cont').stop().slideDown()
            $(this).css("background","url('../images/popup/ico_mini_btn01.png')no-repeat center")
            $(this).parent().parent().parent().addClass('active')
            $(this).parent().parent().parent().removeClass("mini")
        }
    });

    // 기본레이어
	// $('.deLayer li').on('click', function(){
	// 	$(this).removeAttr('href');
	// 	var element = $(this).parent('ul');
	// 	if (element.find('ul').hasClass('open')) {
	// 		element.find('ul').removeClass('open');
	// 		element.find('li').removeClass('open');
	// 		element.children().find('li').slideUp(200);
	// 	}
	// 	else {
	// 		element.addClass('open');
	// 		element.children('li').slideDown(200);
	// 		// element.siblings('li').children('ul').slideUp(200);
	// 		// element.siblings('li').removeClass('open');
	// 		// element.siblings('li').find('li').removeClass('open');
	// 		// element.siblings('li').find('ul').slideUp(200);
	// 	}
	// });
    

    $('.deLayer > ul > li p').on('click',function(){
        var element = $(this).parent().parent().parent('ul');
        if(element.hasClass('open')){
            element.removeClass('open');
            element.find('ul').stop().slideUp(200);
        }else{
            element.addClass('open');
            element.find('ul').stop().slideDown(200);
        }
    });

    $('.listOpen').on('click',function(){
        $('.statusList').show();
    });
})
