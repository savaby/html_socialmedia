// MENU
const menuItems = document.querySelectorAll(".menu-item")

// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications")
const messages = document.querySelector(".messages")
const message = messages.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")

// THEME
const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")
var root = document.querySelector(":root")
const fontSizes = document.querySelectorAll(".choose-size span")
const colorPalette = document.querySelectorAll(".choose-color span")

const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active")
    })
}

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem()
        item.classList.add("active")
        if (item.id !== "notifications") {
            document.querySelector(".notifications-popup").style.display =
                "none"
        } else {
            document.querySelector(".notifications-popup").style.display =
                "block"
            document.querySelector(
                "#notifications .notifications-count"
            ).style.display = "none"
        }
    })
})

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    message.forEach((chat) => {
        let name = chat.querySelector("h5").textContent.toLowerCase()
        console.log(chat)
        if (name.indexOf(val) !== -1) {
            chat.style.display = "flex"
        } else {
            chat.style.display = "none"
        }
    })
}

messageSearch.addEventListener("keyup", searchMessage)

messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)"
    messagesNotification.querySelector(".notifications-count").style.display =
        "none"
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 2000)
})

const openThemeModal = () => {
    themeModal.style.display = "grid"
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none"
    }
}

themeModal.addEventListener("click", closeThemeModal)

theme.addEventListener("click", openThemeModal)

// FONT

const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active")
    })
}

fontSizes.forEach((size) => {
    let fontSize
    size.addEventListener("click", () => {
        removeSizeSelector()
        size.classList.add("active")
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px"
            root.style.setProperty("--sticky-top-left:", "5.4rem")
            root.style.setProperty("--sticky-top-right:", "5.4rem")
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px"
            root.style.setProperty("--sticky-top-left:", "5.4rem")
            root.style.setProperty("--sticky-top-right:", "-7rem")
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px"
            root.style.setProperty("--sticky-top-left:", "-2rem")
            root.style.setProperty("--sticky-top-right:", "-17rem")
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px"
            root.style.setProperty("--sticky-top-left:", "-12rem")
            root.style.setProperty("--sticky-top-right:", "-35rem")
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px"
            root.style.setProperty("--sticky-top-left:", "-12rem")
            root.style.setProperty("--sticky-top-right:", "-35rem")
        }
        document.querySelector("html").style.fontSize = fontSize
    })
})

const changeActiveColor = () => {
    colorPalette.forEach((color) => {
        color.classList.remove("active")
    })
}

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        let primaryHue

        if (color.classList.contains("color-1")) {
            primaryHue = 252
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202
        }
        changeActiveColor()
        color.classList.add("active")
        root.style.setProperty("--primary-color-hue", primaryHue)
    })
})
