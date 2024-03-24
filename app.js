#! usr/bin/env node
let guests = ["Ahmed Ebrahim", "Danish Anwer", "Fahim Saleem"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
let unableToAttend = "Ahmed Ebrahim";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Sufyan Liaquat";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
export {};
