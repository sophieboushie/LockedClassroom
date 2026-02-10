let step = 1;        
let path = "";       
let fear = 0;        

let storyText = document.getElementById("storyText");
let buttonsDiv = document.getElementById("buttons");
let statusText = document.getElementById("statusText");
let sceneImg = document.getElementById("sceneImg");

function render() {
  
  buttonsDiv.innerHTML = "";

  
  if (step === 1) {
    storyText.textContent =
      "It's late at school, and you stayed behind to finish your work. The building is quiet, and the outside hallway lights just shut off. " +
      "You realize you haven't heard anyone for a while. What do you do?";

    statusText.textContent = "Fear level: " + fear; 

   
    sceneImg.src = "images/classroom.jpg";

    addButton("Check the hallway", "hallway");
    addButton("Hide under a desk", "desk");
    addButton("Turn off your phone", "phone");
  }

  else if (step === 2) {
    statusText.textContent = "Fear level: " + fear;

    
    if (path === "hallway") {
      storyText.textContent =
        "You step into the hallway. The exit door is locked. The motion lights flicker, and you hear a slow scrape, " +
        "like something being dragged.";
      fear = fear + 1; 
      sceneImg.src = "images/darkhallway.jpg"; 
    }

    if (path === "desk") {
      storyText.textContent =
        "You slide under a desk and hold your breath. Footsteps pass the doorway... then stop. " +
        "A set of keys jingle right outside the room.";
      fear = fear + 1; 
      sceneImg.src = "images/classroomdesk.jpg"; 
    }

    if (path === "phone") {
      storyText.textContent =
        "You turn off your phone. The glow disappears and the room goes darker. " +
        "Then you hear a whisper from the corner: \"Finally.\"";
      fear = fear + 1; 
      sceneImg.src = "images/darkclassroom.jpg"; 
    }

    addButton("Continue", "continue");
  }

  else if (step === 3) {
    statusText.textContent = "Fear level: " + fear;

    if (path === "hallway") {
      storyText.textContent =
        "You turn back to run, but the classroom door is closed now. " +
        "A voice behind you calmly says your name.";
      sceneImg.src = "images/lockeddoor.jpg"; 
    }

    if (path === "desk") {
      storyText.textContent =
        "The desk above you creaks. Something sits atop it slowly... and whispers, " +
        "\"I found you.\"";
      sceneImg.src = "images/classroomlookup.jpg"; 
    }

    if (path === "phone") {
      storyText.textContent =
        "In the dark, you hear the door click shut. Your phone lights up by itself. " +
        "One new message: \"Don’t look up.\"";
      sceneImg.src = "images/phone.jpg"; 
    }

    addButton("Restart", "restart");
  }
}


function choose(option) {
  if (step === 1) {
    path = option;
    step = 2;
  } else if (step === 2) {
    step = 3;
  } else if (step === 3 && option === "restart") {
    step = 1;
    path = "";
    fear = 0;
  }

  render(); 
}


function addButton(text, value) {
  let btn = document.createElement("button");
  btn.textContent = text;

  btn.onclick = function () {
    choose(value);
  };

  buttonsDiv.appendChild(btn);
}


render();