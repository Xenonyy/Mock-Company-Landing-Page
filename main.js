window.onload = () => {
    $("#phone-nav").click(() => {
        $("#phone-menu").css("display", "flex");
        if ($("#hamburger").attr("src") === "./images/icon-hamburger.svg") {
            document.getElementById("hamburger").src = "./images/icon-close.svg";
            $("#phone-menu").toggleClass("hide");
            $("#page-content").toggleClass("hide");
        } else {
            document.getElementById("hamburger").src = "./images/icon-hamburger.svg";
            $("#phone-menu").toggleClass("hide");
            $("#page-content").toggleClass("hide");
        }
    });
    let arr = ["1", "2", "3"];
    for (const item of arr) {
        $(`#arrow${item}`).click(() => {
            for (const item of arr) {
                $(`#menu-items${item}`).removeClass("flex");
            }
            $(`#menu-items${item}`).toggleClass("flex");
        });
        $("#phone-nav").click(() => {
            $(`#menu-items${item}`).removeClass("flex");
        });
    }
}

