var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

var lessons = document.querySelectorAll(".lesson-main > li")

var a = ""
var b = ""
$(document).ready(function () {
    // $(".dark-light").click(function () {
    //     $("body").css("background-color", "black")
    //     $("body").toggleClass("dark-theme")
    // })
    var ab = ""
    $(".portcatbtn ul li a").click(function () {
        ab = $(this).attr("id")
        $(".ports .ports-box").hide()
        $(".ports .ports-box").each(function () {
            if ($(this).attr("cat") == ab) {
                $(this).show()
            }
        })
    })
    $(".fa-eye").click(function () {
        $("#sifre").attr("type", "text")
        $(".fa-eye").css("display", "none")
        $(".fa-eye-slash").css("display", "block")
    })
    $(".fa-eye-slash").click(function () {
        $("#sifre").attr("type", "password")
        $(".fa-eye").css("display", "block")
        $(".fa-eye-slash").css("display", "none")
    })
    $(".lesson-main > li").click(function () {
        a = $(this).attr("id")
        $(".lesson-into").each(function () {
            if($(this).attr("cat") == a){
                $(this).slideToggle()
            }
        })
    })
    $(".lesson-main li li").click(function () {
        b = $(this).attr("videosrc")
        $(".videlesson video").children().attr("src", b)
        $('.videolesson').html(
            `
    <video controls>
    <source type="video/mp4" src="${b}" >
    </video>
    `
        )
    })
})

var portimages = document.querySelector(".sec-1-boxs")

function portscroll() {
    scrollValue = window.scrollY
    if (scrollValue > 400) {
        portimages.classList.add("active1")
    }
    // else(
    //     portimages.classList.remove("active1")
    // )
}
window.addEventListener('scroll', portscroll)