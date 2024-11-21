document.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
});
