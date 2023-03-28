const applicationState = {
    bookings:[],
    clowns:[],
    completions:[]
}

const mainContainer = document.querySelector('#container')

const API = "http://localhost:8088"

export const fetchBookings = () => {
    return fetch(`${API}/bookings`)
    .then(response => response.json())
    .then((bookingRequests) => {
        applicationState.bookings = bookingRequests
    })
}

export const getBookings = () => {
   return applicationState.bookings.map(booking => ({...booking}))
}

export const sendBooking = (userBookingRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userBookingRequest)
    }

    return fetch(`${API}/bookings`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then((data) => {
        applicationState.clowns = data
    })
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

export const deleteRequest = (id) => {
    return fetch(`${API}/bookings/${id}`, { method: "DELETE"})
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}       

export const saveCompletion = (bookingCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingCompletion)
    }
    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then((data) => {
        applicationState.completions = data
    })
}

export const getCompletions = () => {
       let jumbledBookings = applicationState.completions.map(booking => ({...booking}))
    let sortedBookings = jumbledBookings.sort((a , b) => 
        a.workComplete - b.workComplete
    )
    return sortedBookings
}