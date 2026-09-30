// Blocking, Synchronous

function loadGameProfileSync() {
  alert("Loading game profile... Click OK to continue."); 
  return { username: "PlayerOne", level: 42 };
}

console.log("Initializing game setup...");
const profile = loadGameProfileSync(); 
console.log("Profile loaded:", profile);
console.log("This message is blocked until the popup is cleared.");



// Non block Asynchronous


function loadGameProfileAsync(callback) {
  setTimeout(() => {
    const profileData = { username: "PlayerOne", level: 42 }; 
    callback(profileData); 
  }, 3000); 
}

console.log("Initializing game setup...");
loadGameProfileAsync(function(profile) {
  console.log("Profile loaded:", profile); 
});
console.log("This message shows up immediately while the game loads.");
