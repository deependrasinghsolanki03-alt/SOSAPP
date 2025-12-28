# 🚨 Beacon: The Proximity SOS System

> **"Because in an emergency, 10 minutes is too long to wait."**

![WhatsApp Image 2025-12-24 at 5 08 53 PM](https://github.com/user-attachments/assets/cddc4771-0f29-4b9c-80a8-03e3e351fafd)

## ⚙️ Installation & Setup Guide

Since **Beacon** uses hardware sensors (GPS & SMS), we recommend testing it on a **Real Android Device** rather than an emulator.

### 1. Prerequisites
* Android Studio (Latest Version)
* Java Development Kit (JDK 11 or higher)
* An Android Device with a SIM card (for SMS testing)

### 2. Steps to Run
1.  **Download the Code:**
    * Click on the green **Code** button above and select **Download ZIP**.
    * Extract the folder on your laptop.
    * *(Or use Git: `git clone https://github.com/YourUsername/Beacon-SOS-App.git`)*

2.  **Open in Android Studio:**
    * Open Android Studio -> **File** -> **Open**.
    * Select the extracted folder (`Beacon-SOS-App`).
    * Wait for the **Gradle Build** to finish (it might take a few minutes).

3.  **Configure Emergency Contacts:**
    * Navigate to: `app/src/main/java/com/example/sosapp/WebAppInterface.java`
    * Look for the `EMERGENCY_NUMBERS` list.
    * Replace the placeholder numbers with your own phone number to test the alerts.
    ```java
    private static final String[] EMERGENCY_NUMBERS = {
        "+91XXXXXXXXXX", // Put your emergency number here
        "+91XXXXXXXXXX",
        "+91XXXXXXXXXX" 
    };
    ```

4.  **Run the App:**
    * Connect your phone via USB (Enable USB Debugging).
    * Click the green **Run (▶)** button in Android Studio.

### ⚠️ Important: Permissions
For the app to function correctly, you **must grant permissions** when the app launches for the first time:
* **Location:** "Allow while using the app" (Required for GPS coordinates).
* **SMS:** "Allow" (Required to send the alert message).

---


## 👋 Why We Built Beacon
We realized that in India, the biggest problem during an emergency isn't that people don't want to help—it's that they don't know help is needed. 

Most SOS apps rely on the Internet. But what if you are in a basement? Or a remote highway with no 4G? 
**Beacon** is our answer to that. We stripped away the dependency on data servers and built a system that uses the most basic, reliable technology: **SMS and GPS**.

If you have a phone signal, you have a lifeline.

## 🚀 What Makes It Special?

* **No Internet? No Problem:** Unlike WhatsApp or Uber, Beacon works purely on GSM. It sends coordinates directly via SMS.
* **The "Panic Slider":** Typing during a crisis is impossible. We created a unique **Threat Slider** UI. Just slide to "Medium" or "High" to tell responders if it's a medical issue or a physical threat.
* **One-Tap Accident Mode:** A dedicated button for instant medical alerts.
* **Real-Time Tracking:** We don't just send text; we send a direct **Google Maps Link** precise to your current location (using High-Accuracy GPS).

## 🛠️ How We Built It (Tech Stack)
We wanted the app to be lightweight but powerful, so we used a **Hybrid Approach**:

* **The Brain (Backend):** Written in **Java (Android Native)**. This handles the tough stuff—waking up the GPS sensor, managing permissions, and sending background SMS.
* **The Face (Frontend):** Built using **HTML5, CSS3, & JavaScript**. This allowed us to design a fluid, animated interface that feels modern and responsive.
* **The Bridge:** We used Android's `WebView` to let JavaScript talk to Java code securely.

## 📱 How to Test It
1.  Clone this repo.
2.  Open in Android Studio.
3.  **Important:** When you run the app, please grant **SMS** and **Location** permissions.
4.  Add your friend's number in the code (we hardcoded ours for the hackathon demo!).
5.  Slide the SOS button and watch the magic happen.

## 🔮 Future Roadmap
This is just **Version 1.0**. In the future, we plan to:
* Add a mesh network feature (using Bluetooth) for areas with NO signal.
* Integrate directly with local police dispatch APIs.
* Add "Safe Zones" geofencing.

  ---
### 👨‍💻 Built with ❤️ by Team Beacon
* **Deependra Singh Solanki** LinkedIn-https://www.linkedin.com/in/deependra-singh-solanki-4678a8372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
  
* **Divyandh Chaudhary** LinkedIn-https://www.linkedin.com/in/divyansh-chaudhary-667a2026a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
  
* **Gurutwa Singh Shakya** LinkedIn-https://www.linkedin.com/in/gurutwa-singh-s-784518389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
  
* **Somil Jain** LinkedIn-https://www.linkedin.com/in/somil-jain-78359330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

*Submitted for [DevSprint]*
