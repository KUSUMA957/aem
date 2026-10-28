document.addEventListener("DOMContentLoaded", function () {

    const aboutBtn =
        document.querySelector(".article-layout__mobile-about-btn");

    const tocBtn =
        document.querySelector(".article-layout__mobile-toc-btn");

    const aboutDrawer =
        document.querySelector(".article-layout__drawer--about");

    const tocDrawer =
        document.querySelector(".article-layout__drawer--toc");

    const closeButtons =
        document.querySelectorAll(".article-layout__drawer-close");

    const tocLinks =
        document.querySelectorAll(".article-layout__drawer--toc a");
        
    const sections =
    document.querySelectorAll(
        ".article-layout__section"
    );
    
    const tocLink =
    document.querySelectorAll(
        ".article-layout__toc-link"
    );
    
	const progressBar =
    document.querySelector(
        ".article-layout__progress-bar"
    );
    const faqItems = document.querySelectorAll(
        ".article-layout__faq-item"
    );

    faqItems.forEach(item => {

        const button = item.querySelector(
            ".article-layout__faq-question"
        );

        button.addEventListener("click", () => {

            item.classList.toggle("active");

        });
    });
    function lockBodyScroll() {

        const scrollY = window.scrollY;

        document.body.dataset.scrollPosition = scrollY;

        document.body.classList.add("body-drawer-open");

        document.body.style.position = "fixed";

        document.body.style.top = `-${scrollY}px`;

        document.body.style.width = "100%";
    }

    function unlockBodyScroll() {

        const scrollY =
            parseInt(
                document.body.dataset.scrollPosition || "0",
                10
            );

        document.body.classList.remove("body-drawer-open");

        document.body.style.position = "";

        document.body.style.top = "";

        document.body.style.width = "";

        window.scrollTo(0, scrollY);
    }

    if (aboutBtn) {

        aboutBtn.addEventListener("click", function () {

            lockBodyScroll();

            tocDrawer.classList.remove("active");

            aboutDrawer.classList.add("active");

            aboutDrawer.scrollTop = 0;
        });
    }

    if (tocBtn) {

        tocBtn.addEventListener("click", function () {

            lockBodyScroll();

            aboutDrawer.classList.remove("active");

            tocDrawer.classList.add("active");

            tocDrawer.scrollTop = 0;
        });
    }

    closeButtons.forEach(button => {

        button.addEventListener("click", function () {

            aboutDrawer.classList.remove("active");

            tocDrawer.classList.remove("active");

            unlockBodyScroll();
        });
    });

    tocLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            aboutDrawer.classList.remove("active");

            tocDrawer.classList.remove("active");

            unlockBodyScroll();

            if (target) {

                setTimeout(() => {

                    const offset = 180;

                    const top =
                        target.getBoundingClientRect().top
                        + window.scrollY
                        - offset;

                    window.scrollTo({
                        top,
                        behavior: "smooth"
                    });

                }, 100);
            }
        });
    });
    function updateActiveLink() {

        if (!sections.length) {
            return;
        }

        let currentSection = sections[0];

        sections.forEach(section => {

            const rect =
                section.getBoundingClientRect();

            if (rect.top <= 220) {

                currentSection = section;
            }
        });

        tocLink.forEach(link => {

            link.classList.remove(
                "article-layout__toc-link--active"
            );

            if (
                link.getAttribute("href") ===
                "#" + currentSection.id
            ) {

                link.classList.add(
                    "article-layout__toc-link--active"
                );
            }
        });
    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();

    function updateProgressBar() {

        if (!progressBar) {
            return;
        }

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight;

        const viewportHeight =
            window.innerHeight;

        const scrollableHeight =
            documentHeight - viewportHeight;

        const progress =
            (scrollTop / scrollableHeight) * 100;

        progressBar.style.width =
            progress + "%";
    }window.addEventListener(
    "scroll",
    updateProgressBar
);
updateProgressBar();

});