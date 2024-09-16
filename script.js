// script.ts  
document.getElementById('download').addEventListener('click', function () {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var name = document.getElementById('name').innerText;
    var email = document.getElementById('email').innerText;
    var phone = document.getElementById('phone').innerText;
    var education = document.getElementById('education').innerText;
    var experience = document.getElementById('experience').innerText;
    var skills = document.getElementById('skills').innerText;
    doc.setFontSize(22);
    doc.text(name, 10, 10);
    doc.setFontSize(12);
    doc.text(email, 10, 30);
    doc.text(phone, 10, 40);
    doc.text('Education', 10, 80);
    doc.text(education, 10, 90);
    doc.setFontSize(16);
    doc.text('Experience', 10, 50);
    doc.text(experience, 10, 60);
    doc.text('Skills', 10, 110);
    doc.text(skills, 10, 120);
    doc.save('resume.pdf');
});
document.getElementById('share').addEventListener('click', function () {
    var uniqueUserName = prompt("Enter your unique username to share your resume:");
    if (uniqueUserName) {
        var url = "https://resume-sharing-site.com/".concat(uniqueUserName); // Replace with your actual sharing URL.  
        alert("Share your resume at: ".concat(url));
    }
});
