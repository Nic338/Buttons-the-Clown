import { sendBooking } from "./dataAccess.js";

export const BookingForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parentName">Parent's Name</label>
    <input type="text" name="parentName" class="input" />
</div>
<div class="field">
    <label class="label" for="childName">Child's Name</label>
    <input type="text" name="childName" class="input" />
</div>
<div class="field">
    <label class="label" for="numOfChildren">Number of Children Attending</label>
    <input type="number" name="numOfChildren" class="input" />
</div>
<div class="field">
    <label class="label" for="address">Address</label>
    <input type="text" name="address" class="input" />
</div>
<div class="field">
            <label class="label" for="dateOfRes">Date of Reservation</label>
            <input type="date" name="dateOfRes" class="input" />
        </div>
<div class="field">
        <label class="label" for="lengthOfRes">How Many Hours Are You Wanting To Book?</label>
        <input type="number" name="lengthOfRes" class="input" />
    </div>        
<button class="button" id="submitRequest">Create Booking</button>
`
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const numOfChildren = document.querySelector("input[name='numOfChildren']").value
        const address = document.querySelector("input[name='address']").value
        const dateOfRes = document.querySelector("input[name='dateOfRes']").value
        const lengthOfRes = document.querySelector("input[name='lengthOfRes']").value

        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            numOfChildren: numOfChildren,
            address: address,
            dateOfRes: dateOfRes,
            lengthOfRes: lengthOfRes
        }

        sendBooking(dataToSendToAPI)
    }
})