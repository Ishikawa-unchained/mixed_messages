const sayings  = ["The Way of the Programmer is a long and winding road.", 
    "He who walks the Way of the Programmer must be patient and perseverant.", 
    "The Way of the Programmer is full of challenges and surprises.",
    "He who walks the Way of the Programmer must constantly reinvent himself.",
    "The Way of the Programmer is a path of knowledge and progress.", 
    "The Way of the Programmer is a long and winding road, but it is also a road of opportunity.", 
    "He who walks the Way of the Programmer must be patient and perseverant, but also open to change.", 
    "The Way of the Programmer is full of challenges and surprises, but also rewards.", 
    "He who walks the Way of the Programmer must constantly reinvent himself, or risk being left behind.", 
    "The Way of the Programmer is a path of knowledge and progress, but also a path of humility.", 
    "Code is the reflection of the Programmer's soul.", 
    "A good program is simple, but not easy to write.", 
    "The best software is the software that is not needed.", 
    "A Programmer who makes no mistakes has not programmed enough.", 
    "The future of programming is uncertain, but one thing is certain: there will always be challenges.", 
    "Code is the language of the universe.", 
    "A good program is a work of art.", 
    "The best software is the software that makes people's lives better.", 
    "A Programmer who makes no mistakes is a liar.", 
    "The future of programming is bright, but it will be challenging.", 
    "The Art of Programming is the Art of Problem Solving.", 
    "The Art of Programming is the Art of Beauty.", 
    "The Art of Programming is the Art of Simplicity.", 
    "The Art of Programming is the Art of Efficiency.", 
    "The Art of Programming is the Art of Creativity.", 
    "The Art of Programming is the Art of Life.", 
    "Problem solving is the essence of programming.", 
    "Beauty is in the eye of the beholder, but a good program is always beautiful.", 
    "Simplicity is the key to elegance.", 
    "Efficiency is essential, but it should not come at the expense of beauty.", 
    "Creativity is the spark that ignites innovation."]

function getRandomSaying() {
    const randomIndex = Math.floor(Math.random() * sayings.length);
    return sayings[randomIndex];
}


const keks = document.getElementById("keks");

keks.addEventListener("click", function() {
    // Remove the existing saying div
    const existingSaying = document.querySelector("div");
    if (existingSaying) {
        existingSaying.remove();
    }

    // Create a new div to display the saying
    const newSaying = document.createElement("div");
    const sayingText = getRandomSaying();
    newSaying.innerHTML = "<span>" + sayingText + "</span>";
    document.body.appendChild(newSaying);

    // Move the button to the top
    keks.style.position = "fixed";
    keks.style.top = "10px";
    keks.style.left = "50%";
    keks.style.transform = "translateX(-50%)";
});


  keks.addEventListener("mousedown", function() {
    // Den Keks rot machen
    keks.style.backgroundColor = "red";
  });

  keks.addEventListener("mouseup", function() {
    // Den Keks rot machen
    keks.style.backgroundColor = "#ddb654";
  });
