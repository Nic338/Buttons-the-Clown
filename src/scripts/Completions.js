import { deleteRequest, saveCompletion, fetchCompletions, getClowns, getCompletions, getBookings } from "./dataAccess.js"
const bookings = getBookings()

export const Completions = () => {
    const completions = getCompletions()
    
    let html = `
    <ul> ${
        completions.map().join("")
        }
    </ul>
`

    return html
}
