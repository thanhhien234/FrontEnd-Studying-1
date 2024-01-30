//Progress chart data
const datas = document.querySelectorAll(".data");
const progressBars = document.querySelectorAll(".progress-bar-inner");
    datas.forEach((dataElement, index) => {
        dataElement.textContent = `${data[index]}%`;
        progressBars[index].style.width = `${data[index]}%`;
    }
);

//Toggle menu
document.querySelector(".toggle-menu-button").addEventListener("click", function() {
    document.getElementById("toggle-menu-content").classList.toggle("show");
});


let currentImg = 0;
const images = document.querySelectorAll(".image");
const contentInner = document.querySelector(".content-inner");
images[0].style.display = "block";

document.querySelector(".left-arrow").addEventListener("click", function () {
    if (currentImg >= 1 && currentImg <= 4) {
        currentImg -= 1;
        contentInner.style.transform = `translateX(${currentImg *(-400)}px)`
    }
});

document.querySelector(".right-arrow").addEventListener("click", function () {
    if (currentImg >= 0 && currentImg < 3) {
        currentImg += 1; 
        contentInner.style.transform = `translateX(${currentImg *(-400)}px)`
    }
});





//alert buttons
let alertTimeout = 0
document.querySelectorAll(".button-container button").forEach(button => {
    button.addEventListener("click", function() {
        let color, message;
        if (button.classList.contains("red-btn")) {
            color = "red";
            message = "빨간 버튼입니다.";
        } else if (button.classList.contains("green-btn")) {
            color = "green";
            message = "초록 버튼입니다.";
        } else if (button.classList.contains("blue-btn")) {
            color = "blue";
            message = "파랑 버튼입니다.";
        }
        showColorAlert(color, message);
    });
});

function showColorAlert(color, message) {
    const alertContent = document.querySelector(".alert-content");
    alertContent.style.backgroundColor = color;
    alertContent.textContent = message;

    // Fade in
    alertContent.parentElement.style.display = "flex"; 
    alertContent.style.opacity = "0.5"; 

    clearTimeout(alertTimeout);

    // Fade out 
    alertTimeout = setTimeout(function() {
        alertContent.style.opacity = "0";
        setTimeout(function() {
            alertContent.parentElement.style.display = "none";
        }, 500); 
    }, 2000);
}






