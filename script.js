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
