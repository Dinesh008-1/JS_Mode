const user = {
    name: "Arun",
    address: {
        city: "Chennai"
    },
    // contact:{
    //     email:"ajaajaaja"
    // }
};

let city = user.address?.city;
let email = (user?.contact?.email ?? "Email unavailable");
user.greet?.();
console.log(`city: ${city} email: ${email}`);


const settings = {
    theme: "",
    notifications: false,
    fontSize: 0,
    language: null
};

let theme = settings.theme ?? "No theme";
let notifications = settings.notifications ?? "No notification";
let fontSize = settings.fontSize ?? "No fontSize";
let language = settings.language ?? "No language";

let theme2 = settings.theme || "No theme";
let notifications2 = settings.notifications || "No notification";
let fontSize2 = settings.fontSize || "No fontSize";
let language2 = settings.language || "No language";

console.log(
`theme: ${theme}
theme2: ${theme2}
notifications: ${notifications}
notifications2: ${notifications2}
fontSize: ${fontSize}
fontSize2: ${fontSize2}
language: ${language}
language2: ${language2}`
)



