var footlogo =
    '<span style="vertical-align: top;display: inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;鎶€鏈敮鎸�</span> <a id="flogo" target="_blank" href="http://www.uemo.net"><img src="http://resources.jsmo.xin/templates/upload/2/logo/logo.png" width="50" height="20"></a>';

if (window.location.origin.indexOf("uemo.net") != -1 && !$("#flogo")[0]) {
    $(footlogo).appendTo("#footer>p");

    $("#assistBtn ._fa-qq").attr("href", "tel:010-69557550");

    $("#assistBtn ._fa-qq").attr(
        "href",
        "tencent://message/?uin=2852263145&Site=uemo&Menu=yes"
    );

    $("#contactinfo .name").text("榄旇壓(UEmo)鏋侀€熷缓绔欑郴缁�");

    $("#contactinfo .add").text("鍦板潃锛氬寳浜競寤哄SOHO涓滃尯2鍙锋ゼ");

    $("#contactinfo .zip").text("閭紪锛�100000");

    $("#contactinfo .tel").text("鐢佃瘽锛�010-69557550");

    $("#contactinfo .mobile").text("鎵嬫満锛�13521043455  /  13811334772");

    $("#contactinfo .eml").text("閭锛歵ouch@uelike.com");

    $("#online_lx #olx_qq a")
        .attr("href", "tencent://message/?uin=2852263145&Site=uemo&Menu=yes")

    .text("2852263145");

    $("#online_lx #olx_tel p").text("010-69557550");

    var add =
        '<li class="navitem"> <a href="javascript:;" target="_blank"> <span data-title="杩斿洖UEmo">杩斿洖UEmo</span> </a></li>';

    $(add).insertAfter($("#header .content #nav>.navitem:last"));

    $(add).insertAfter($("#navMini .content #nav>.navitem:last"));

    $("#copyright").remove();
}

if (window.location.origin.indexOf("jsmo.xin") != -1) {
    $("#flogo,.flogo_name").remove();
}