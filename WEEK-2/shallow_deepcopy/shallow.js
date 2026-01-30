const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
//  1. Create a shallow copy of user
const usercopy ={...user}
// 2. Change:
// i. name in the copied object
usercopy.name="Charan Reddy"
// ii. preferences.theme in the copied object
usercopy.preferences.theme="light"
// iii .Log both original and copied objects
console.log(user,usercopy)
// iv. Observed what changes and what doesn’t
// The name property in the copied object changed, but the preferences
// .theme change also affected the original object because preferences is a nested object and was not deeply copied.