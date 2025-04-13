const form = document.querySelector("form");
const promptInput = document.getElementById("prompt");
const outputDiv = document.getElementById("output");
const continueBtn = document.getElementById("continueBtn");

let lastPrompt = "";
let lastResponse = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  lastPrompt = promptInput.value.trim();

  if (!lastPrompt) {
    outputDiv.textContent = "Please enter a prompt.";
    return;
  }

  outputDiv.textContent = "Generating...";
  continueBtn.classList.add("hidden");

  try {
    const res = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: lastPrompt }),
    });

    const data = await res.json();
    lastResponse = data.output;
    outputDiv.textContent = lastResponse;
    continueBtn.classList.remove("hidden");
  } catch (err) {
    console.error(err);
    outputDiv.textContent = "Something went wrong.";
  }
});

continueBtn.addEventListener("click", async () => {
  outputDiv.textContent += "\n\n(Continuing...)";

  try {
    const res = await fetch("/continue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: lastPrompt, previous: lastResponse }),
    });

    const data = await res.json();
    lastResponse += " " + data.output;
    outputDiv.textContent = lastResponse;
  } catch (err) {
    console.error(err);
    outputDiv.textContent += "\n\nFailed to continue the story.";
  }
});
