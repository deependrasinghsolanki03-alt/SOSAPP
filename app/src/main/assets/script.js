/* ============================
   ELEMENT SELECTION
   ============================ */
const sosBtn = document.getElementById('btn1');
const armSlider = document.getElementById('armSlider');
const armWrapper = document.getElementById('armWrapper');
const armText = document.getElementById('armText');
const severitySlider = document.getElementById('severitySlider');
const severityWrapper = document.getElementById('severityWrapper');
const yellowBtn = document.getElementById('btn2');

/* ============================
   JAVA CONNECTION FUNCTION
   ============================ */
function sendToAndroid(severity, source) {

    if (typeof Android !== "undefined" && Android !== null) {

        Android.triggerSOS(severity, source);
    } else {
        console.log("Not in Android: " + source + " | Severity: " + severity);
        alert("SMS Triggered: " + source);
    }
}

/* ============================
   0. INITIAL ANIMATIONS
   ============================ */
window.onload = function() {
    sosBtn.classList.add('hint-shake');
    yellowBtn.classList.add('hint-shake');
};

/* ============================
   1. RED SOS BUTTON (Unlock + SMS)
   ============================ */
sosBtn.addEventListener('click', function(e) {
    createRipple(e, this);

    // 1. Unlock Slider
    armSlider.disabled = false;
    armWrapper.classList.remove('locked');
    armSlider.classList.add('thumb-active');

    // 2. SEND SMS IMMEDIATELY (Red Button Pressed)
    sendToAndroid("HIGH", "HELP! My life is in danger.");
});

/* ============================
   2. YELLOW ACCIDENT BUTTON
   ============================ */
yellowBtn.addEventListener('click', function(e) {
    createRipple(e, this);

    // SEND SMS (Yellow Button Pressed)
    sendToAndroid("ACCIDENT", "The user has been in an accident and their details have been fetched.");
});

/* ============================
   3. SEVERITY SLIDER (Low/Med Logic)
   ============================ */
severitySlider.addEventListener('change', function() {
    // Get Value (0=Low, 1=Med, 2=High)
    let val = this.value;
    let severityTxt = "UNKNOWN";
    if(val == 0) {severityTxt = "LOW";
    sendToAndroid(severityTxt, "I feel threatened and need HELP.");
};
    if(val == 1) severityTxt = "CRITICAL";
    if(val == 2) {severityTxt = "MEDIUM";
    sendToAndroid(severityTxt, "Assailant confirmed, life may be in danger, need urgent HELP.");
    };



    // Lock visuals
    this.disabled = true;
    severityWrapper.classList.add('locked');
    this.classList.remove('thumb-active');
});

/* ============================
   4. ARM SLIDER (Final Trigger)
   ============================ */
armSlider.addEventListener('input', function() {
    this.classList.remove('thumb-active');

    if (this.value == 1) {
        armText.classList.add('show');

        // Get current severity
        let currentSevVal = severitySlider.value;
        let severityTxt = (currentSevVal == 0) ? "LOW" : (currentSevVal == 1) ? "CRITICAL" : "CRITICAL";

        // SEND FINAL SMS
        sendToAndroid(severityTxt, "Firearms may be involved.");

        this.disabled = true;
    } else {
        armText.classList.remove('show');
    }
});

/* ============================
   HELPER: RIPPLE EFFECT
   ============================ */
function createRipple(event, button) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    const x = event.clientX - rect.left - (size / 2);
    const y = event.clientY - rect.top - (size / 2);
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    button.appendChild(ripple);
    setTimeout(() => { ripple.remove(); }, 600);
}