document.addEventListener("DOMContentLoaded", function() {
    console.log("Script.js berhasil dimuat!");

    // Sticky Navbar saat Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Smooth Scroll untuk Navigasi
    document.querySelectorAll('nav ul li a, .btn').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = "⬆";
    scrollTopBtn.classList.add("scroll-top");
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Efek Hover pada Gambar Produk
    const productImages = document.querySelectorAll(".product-image");
    productImages.forEach(img => {
        img.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });

        img.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Animasi Loading
    const loadingScreen = document.createElement("div");
    loadingScreen.innerHTML = "<h2>Loading...</h2>";
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.background = "rgba(0,0,0,0.8)";
    loadingScreen.style.color = "white";
    loadingScreen.style.display = "flex";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.fontSize = "2em";
    loadingScreen.style.zIndex = "10000";
    document.body.appendChild(loadingScreen);

    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);

    // Animasi Scroll Reveal
    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    scrollReveal.reveal('.animate__animated', { interval: 200 });
});