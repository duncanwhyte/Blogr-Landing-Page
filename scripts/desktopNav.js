// SELECTORS
const navBar = document.querySelector("#mobile-menu");
// Desktop Navigation Elements
const desktopNavigationHeaders = document.querySelectorAll(".desktop-header")
//Desktop DropDown Links
const desktopDropdownProduct = document.querySelector(".desktop-product-dropdown__links")
const desktopDropdownCompany = document.querySelector(".desktop-company-dropdown__links")
const desktopDropdownConnect = document.querySelector(".desktop-connect-dropdown__links")
//Desktop Arrows
const desktopProductArrow = document.querySelector(".desktop-arrow__product")
const desktopCompanyArrow = document.querySelector(".desktop-arrow__company")
const desktopConnectArrow = document.querySelector(".desktop-arrow__connect")


for (i = 0; i < desktopNavigationHeaders.length; i++) {
    addEventListener("click", openDesktopMenus)
}
function openDesktopMenus(e) {
    const item = e.target;
    if (item === desktopNavigationHeaders[0]) {
        desktopDropdownProduct.classList.add("visible")
        desktopProductArrow.classList.add("flip")
        
    } else {
        desktopDropdownProduct.classList.remove("visible")
        desktopProductArrow.classList.remove("flip")
    }
    if (item === desktopNavigationHeaders[1]) {
        desktopDropdownCompany.classList.add("visible")
        desktopCompanyArrow.classList.add("flip")
    } else {
        desktopDropdownCompany.classList.remove("visible")
        desktopCompanyArrow.classList.remove("flip")
    }
    if (item === desktopNavigationHeaders[2]) {
        desktopDropdownConnect.classList.add("visible")
        desktopConnectArrow.classList.add("flip")
    } else {
        desktopDropdownConnect.classList.remove("visible")
        desktopConnectArrow.classList.remove("flip")
    }

}

