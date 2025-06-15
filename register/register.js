let participantCount = 1;

function participantTemplate(count) {
  return `
  <section class="participant participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${count}" name="grade${count}">
        <option selected value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
  `;
}

// Add participant button logic
const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  participantCount++;
  console.log("Adding participant:", participantCount);
  const newHTML = participantTemplate(participantCount);
  addButton.insertAdjacentHTML("beforebegin", newHTML);
});

// Calculate total fee
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements]; // convert NodeList to Array
  console.log("Found fee inputs:", feeElements);

  const total = feeElements.reduce((sum, input) => {
    const value = parseFloat(input.value);
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  console.log("Total fees:", total);
  return total;
}

// Generate success message
function successTemplate(info) {
  return `
    <h2>Registration Complete</h2>
    <p>Thank you ${info.name} for registering.</p>
    <p>You have registered ${info.count} participants and owe $${info.fee} in fees.</p>
  `;
}

// Form submission logic
function submitForm(event) {
  event.preventDefault();
  console.log("Form submitted");

  const name = document.getElementById("adult_name").value || "Someone";
  const count = participantCount;
  const fee = totalFees();

  const summarySection = document.getElementById("summary");
  const form = document.querySelector("form");

  form.style.display = "none";
  summarySection.classList.remove("hide");
  summarySection.innerHTML = successTemplate({ name, count, fee });
}

// Hook up submit event listener
const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

console.log("register.js is loaded!");
