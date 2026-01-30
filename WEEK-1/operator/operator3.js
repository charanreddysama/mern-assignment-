let hasPaid = true;
    let hasCompletedBasics = false;
//    1. If both conditions are true → "Enroll Now"
//    2. Otherwise → "Complete Requirements"
//    3. Use ternary operator
//    4. Store result in enrollMessage
//    5. Print message
    let enrollMessage = hasPaid && hasCompletedBasics ? "Enroll Now" : "Complete Requirements";
    console.log(enrollMessage);