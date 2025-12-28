package com.example.sosapp;

import android.annotation.SuppressLint;
import android.content.Context;
import android.location.Location;
import android.telephony.SmsManager;
import android.webkit.JavascriptInterface;
import android.widget.Toast;
import com.google.android.gms.location.CurrentLocationRequest;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.Priority;
import com.google.android.gms.tasks.CancellationTokenSource;

import java.util.ArrayList;

public class WebAppInterface {
    Context mContext;
    private FusedLocationProviderClient fusedLocationClient;

    // --- EMERGENCY NUMBERS ---
    private static final String[] EMERGENCY_NUMBERS = {
            "+91XXXXXXXXXX", // Number1
            "+91XXXXXXXXXX", // Number2
            "+91XXXXXXXXXX"  // Number 3
    };

    WebAppInterface(Context c) {
        mContext = c;
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(mContext);
    }

    @SuppressLint("MissingPermission")
    @JavascriptInterface
    public void triggerSOS(String severity, String source) {
        Toast.makeText(mContext, "Sending SMS via SIM...", Toast.LENGTH_SHORT).show();

        // 1. Location fetch
        CancellationTokenSource cts = new CancellationTokenSource();
        fusedLocationClient.getCurrentLocation(Priority.PRIORITY_HIGH_ACCURACY, cts.getToken())
                .addOnSuccessListener(location -> {
                    String mapLink = "https://maps.google.com/?q=0,0"; // Default

                    if (location != null) {
                        mapLink = "https://maps.google.com/?q=" + location.getLatitude() + "," + location.getLongitude();
                    }

                    // 2. Message layout
                    String msg = "🚨 SOS ALERT 🚨\n" +
                            source + "\n" +
                            "Severity: " + severity + "\n" +
                            "Loc: " + mapLink;

                    // 3. SEND SMS
                    sendDirectSMS(msg);

                }).addOnFailureListener(e -> {

                    sendDirectSMS("🚨 SOS ALERT 🚨\nHelp! " + source + "\n(GPS Error)");
                });
    }

    private void sendDirectSMS(String message) {
        try {
            SmsManager smsManager = SmsManager.getDefault();

            // Loop for multiple numbers
            for (String number : EMERGENCY_NUMBERS) {

                ArrayList<String> parts = smsManager.divideMessage(message);
                smsManager.sendMultipartTextMessage(number, null, parts, null, null);
            }

            // Success Message on Screen
            ((MainActivity) mContext).runOnUiThread(() ->
                    Toast.makeText(mContext, "SMS Sent to All Contacts!", Toast.LENGTH_LONG).show()
            );

        } catch (Exception e) {
            e.printStackTrace();
            ((MainActivity) mContext).runOnUiThread(() ->
                    Toast.makeText(mContext, "SMS Failed: " + e.getMessage(), Toast.LENGTH_LONG).show()
            );
        }
    }
}