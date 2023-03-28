import { getBookings, deleteRequest, saveCompletion, fetchCompletions, getClowns, getCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("booking--")) {
        const [,bookingId] = click.target.id.split("--")
        deleteRequest(parseInt(bookingId))
    }
})

mainContainer.addEventListener("change", (event) => {
    if(event.target.id === "clowns") {
        const [bookingId, clownId] = event.target.value.split("--")

        const completion = {
            bookingId: parseInt(bookingId),
            clownId: parseInt(clownId),
            workComplete: true,
            date_created: new Date().toISOString()
        }
        saveCompletion(completion)
    }
})

export const Bookings = () => {
    const clowns = getClowns()
    const bookings = getBookings()
    const completions = getCompletions()


    // console.log(bookings.sort())
    const convertBookingsToList = (booking) => {

        if(!completions.find(singleCompletion=> singleCompletion.bookingId === booking.id)){
        return `<li>
        ${booking.childName} ${booking.address}
       
        <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${clowns.map(clown => {
            return`<option value="${booking.id}--${clown.id}">${clown.name}</option>`
        }
        ).join("")
    }
    
    </select>
    <button class="request__delete" id="booking--${booking.id}">
    Deny
    </button>
    </li>`
    }
    else { return ` 
    <li class="booked"> ${booking.childName} ${booking.address} 
    <button class="request__delete" id="booking--${booking.id}">
    Deny
    </button>
    </li>

    `}
}
    let html = `
    <ul class="bookings_list">${bookings.map(convertBookingsToList).join("")}
    </ul>`

    return html
}