document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Here you can add code to process the appointment booking, such as sending the data to a server.
    console.log('Booking appointment:');
    console.log('Doctor:', doctor);
    console.log('Date:', date);
    console.log('Time:', time);
  });
//   const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             const data = new URLSearchParams(body);
//             const name = data.get('name');
//             const doctor = data.get('doctor');
//             const date = data.get('date');
            
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({
//                 status: 'success',
//                 message: 'Appointment booked successfully!',
//                 data: { name, doctor, date }
//             }));
//         });
//     }
// });

// const PORT = 3000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
