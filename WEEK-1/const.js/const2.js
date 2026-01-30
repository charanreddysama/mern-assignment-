const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
    // 1.Toggle theme between "light" and "dark"
    // 2. Turn autoSave to true
    // 3. Remove the notifications setting
    // 4. Freeze the settings object so it cannot be modified
settings.theme = settings.theme === "light" ? "dark" : "light";
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);
console.log(settings);  
