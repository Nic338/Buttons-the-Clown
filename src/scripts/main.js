import { Buttons } from "./Buttons.js";
import { fetchBookings, fetchClowns, fetchCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchBookings()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(() => {
        mainContainer.innerHTML = Buttons()
    }
    )
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})