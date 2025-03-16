const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

export default function handler(req, res) {
    res.status(200).send("Hello, this is a string response!"); // Harus string
}

// ===Show Menu===

ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

// ==Hide Menu==

CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});


AOS.init();

// logo 
gsap.from(".logo",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

// nav menu
gsap.from(".nav_menu_list .nav_menu_item",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
    stagger:0.3,
})

// toggle btn
gsap.from(".toggle_btn",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

// main heading 
gsap.from(".main-heading",{
    opacity:0,
    y:20,
    delay:2,
    duration:0.5,
})

// btn
gsap.from(".btn_wrapper",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

// btn
gsap.from(".team_img_wrapper img",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".info-text",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".fasilitas",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})