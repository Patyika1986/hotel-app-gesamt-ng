import { Booking } from "./booking";


// Mocka Daten: Array interface
export const Bookings: Booking[] = [
    {
        id : 1,
        name: 'Peter Lakatos',
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date('2022-05-20')
    },
    {
        id : 2,
        name: 'Helena Lakatosova',
        roomNumber: 105,
        startDate: new Date(),
        endDate: new Date('2022-05-20')
    },
    {
        id : 3,
        name: 'Krisztina Lakatosova',
        roomNumber: 107,
        startDate: new Date(),
        endDate: new Date('2022-05-20')
    },
    {
        id : 4,
        name: 'David Lakatos',
        roomNumber: 109,
        startDate: new Date(),
        endDate: new Date('2022-05-20')
    },
    {
        id : 5,
        name: 'Jason Lakatos',
        roomNumber: 111,
        startDate: new Date(),
        endDate: new Date('2022-05-20')
    }

];