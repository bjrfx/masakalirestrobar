const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5001;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Function to send email after reservation
async function sendEmail(reservationDetails) {
    console.log('Preparing to send email...');
    
    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: 'mail.masakalirestrobar.ca',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'admin@masakalirestrobar.ca',
            pass: 'K143iran'
        }
    });

    // Setup email data
    let mailOptions = {
        from: '"Masakali Restrobar" <kiran.bjrfx1@gmail.com>',
        to: 'kiran.bjrfx1@gmail.com',
        subject: 'New Reservation Alert (testing)',
        text: `New reservation details:
        Name: ${reservationDetails.name}
        Phone Number: ${reservationDetails.phoneNumber}
        Persons: ${reservationDetails.persons}
        Date: ${reservationDetails.startDate}
        Time: ${reservationDetails.startTime}
        // Active Reservations: ${reservationDetails.activeReservations}
        View all reservations: https://app.masakalirestrobar.ca/`
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Route to handle reservation submission
app.post('/api/reserve', express.json(), async (req, res) => {
    console.log('Received a POST request at /api/reserve');
    const { name, phoneNumber, startDate, startTime, persons } = req.body;

    console.log('Reservation data received:', { name, phoneNumber, startDate, startTime, persons });

    // Dynamically import node-fetch
    const fetch = (await import('node-fetch')).default;

    // Add the reservation to Airtable
    try {
        const response = await fetch('https://api.airtable.com/v0/appcRUV4NMy7IsDFI/tblqkjaFo2onOs9Tm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e`,
            },
            body: JSON.stringify({
                fields: {
                    Name: name,
                    "Phone Number": phoneNumber,
                    "Start Date": startDate,
                    "Start Time": startTime,
                    Persons: persons
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error adding reservation to Airtable:', errorData);
            return res.status(500).json({ success: false, message: 'Failed to add reservation to Airtable.' });
        }
    } catch (error) {
        console.error('Error adding reservation to Airtable:', error);
        return res.status(500).json({ success: false, message: 'Failed to add reservation to Airtable.' });
    }

    // Fetch the actual number of active reservations from Airtable
    let activeReservations = 0; // Default to 0

    try {
        const response = await fetch('https://api.airtable.com/v0/appcRUV4NMy7IsDFI/tblqkjaFo2onOs9Tm', {
            headers: {
                Authorization: `Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e`,
            },
        });

        const data = await response.json();

        // Assuming each record is an active reservation
        activeReservations = data.records.length;
    } catch (error) {
        console.error('Error fetching active reservations:', error);
    }

    const reservationDetails = {
        name,
        phoneNumber,
        startDate,
        startTime,
        persons,
        activeReservations,  // Use the actual count
    };

    console.log('Calling sendEmail with the following details:', reservationDetails);

    await sendEmail(reservationDetails);

    console.log('Email sending process completed.');

    res.status(200).json({ success: true, message: 'Reservation made successfully!' });
});

// Handle all other requests by serving the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});