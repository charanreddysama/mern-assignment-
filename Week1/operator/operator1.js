 let isLoggedIn = true;
let isProfileComplete = false;
//   1. If user is not logged in → show "Please login"
//    2. If logged in but profile incomplete → show "Complete your profile"
//    3. If logged in and profile complete → show "Welcome back!"
//    4. Store the result in message
//    5. Print the message
let message = !isLoggedIn ? "Please login" :
              isProfileComplete ? "Welcome back!" :
              "Complete your profile";
console.log(message);