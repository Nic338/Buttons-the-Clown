import { Completions } from "./Completions.js"
import { Bookings } from "./Bookings.js"
import { BookingForm } from "./BookingForm.js"

export const Buttons = () => {
    return `
    <h1>Buttons' Clown Services</h1>
    <section class="bookingForm">
        ${BookingForm()}
        </section>
        
    <section class="bookings">
    <h2>Bookings</h2>
    ${Bookings()}
    
    </section>
    `
}