// SELECTORS
const backdrop = document.querySelector("#backdrop")
const mobileNav = document.querySelector(".mobile-menu");
const mobileNavButton = document.querySelector(".hamburger-icon")
const mobileNavigationHeaders = document.querySelectorAll(".mobile-nav__header");
const mobileNavProductList = document.querySelector(".mobile-product-links__list")
const mobileNavCompanyList = document.querySelector(".mobile-company-links__list")
const mobileNavConnectList = document.querySelector(".mobile-connect-links__list")
const mobileNavArrows = document.querySelectorAll(".mobile-nav__arrows")

// EVENT LISTENERS
mobileNavButton.addEventListener("click", openMobileNav)
// LOOPS 
for (i = 0; i < mobileNavigationHeaders.length; i++) {
    addEventListener("click", openNavLinks)
}
// FUNCTIONS
function openMobileNav(e) {
    const item = e.target;
    if(item === mobileNavButton) {
        mobileNav.classList.toggle("open-mobile-nav")
    }
}
function closeMobileNav() {
    if (mobileNav.classList.contains("open-mobile-nav")) {
        mobileNav.classList.toggle("open-mobile-nav")
        mobileNav.classList.toggle("close-mobile-nav")
    }
}
function openNavLinks(e) {
    const item = e.target;
    if (item === mobileNavigationHeaders[0]) {
        mobileNavProductList.classList.toggle("open-mobile-list")
        mobileNavArrows[0].classList.toggle("flip")
    } 
    if (item === mobileNavigationHeaders[1]) {
        mobileNavCompanyList.classList.toggle("open-mobile-list")
        mobileNavArrows[1].classList.toggle("flip")
    } 
    if (item === mobileNavigationHeaders[2]) {
        mobileNavConnectList.classList.toggle("open-mobile-list")
        mobileNavArrows[2].classList.toggle("flip")
    } 
}
