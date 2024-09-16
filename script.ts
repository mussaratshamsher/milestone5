


// script.ts  

document.getElementById('download')!.addEventListener('click', () => {  
    const { jsPDF } = (window as any).jspdf;  

    const doc = new jsPDF();  
    const name = (document.getElementById('name') as HTMLDivElement).innerText;    
    const email = (document.getElementById('email') as HTMLDivElement).innerText;  
    const phone = (document.getElementById('phone') as HTMLDivElement).innerText;  

    
    const education = (document.getElementById('education') as HTMLDivElement).innerText; 
    const experience = (document.getElementById('experience') as HTMLDivElement).innerText;   
    const skills = (document.getElementById('skills') as HTMLDivElement).innerText;  

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

document.getElementById('share')!.addEventListener('click', () => {  
    const uniqueUserName = prompt("Enter your unique username to share your resume:");  
    if (uniqueUserName) {  
        const url = `https://resume-sharing-site.com/${uniqueUserName}`; // Replace with your actual sharing URL.  
        alert(`Share your resume at: ${url}`);  
    }  
});