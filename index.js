const bootLogs = document.querySelectorAll(".boot-logs p")
const bootInfo = document.querySelectorAll(".boot-info p")
const bootFooter = document.querySelectorAll(".boot-footer p")

let delay = 0;



function animateMessagesTerminal(messages) {

    for (const message of messages) {
        const randomDelay = Math.floor(Math.random() * 801) + 200;
        delay += randomDelay;

        setTimeout(() => {
            message.style.visibility = "visible";
        }, delay);
    }

}
animateMessagesTerminal(bootLogs)
animateMessagesTerminal(bootInfo)
animateMessagesTerminal(bootFooter)

setTimeout(() => {
    console.log("COMPLETE");
}, delay);