// Sample certificate data with images
const certificates = [
    {
        title: "Full Stack Web Development",
        date: "December 2024",
        issuer: "Tech Academy",
        description: "Comprehensive certification in modern web development technologies including React, Node.js, and database management.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
        filename: "fullstack-certificate.pdf"
    },
    {
        title: "AWS Cloud Practitioner",
        date: "November 2024",
        issuer: "Amazon Web Services",
        description: "Amazon Web Services foundational certification covering cloud computing concepts and AWS services.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
        filename: "aws-certificate.pdf"
    },
    {
        title: "Google Analytics Certified",
        date: "October 2024",
        issuer: "Google",
        description: "Professional certification in Google Analytics 4, data analysis, and digital marketing insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
        filename: "google-analytics-certificate.pdf"
    },
    {
        title: "Project Management Professional",
        date: "September 2024",
        issuer: "PMI Institute",
        description: "PMP certification demonstrating expertise in project management methodologies and best practices.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
        filename: "pmp-certificate.pdf"
    },
    {
        title: "Cybersecurity Fundamentals",
        date: "August 2024",
        issuer: "CyberSec Institute",
        description: "Comprehensive training in cybersecurity principles, threat analysis, and security protocols.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&crop=center",
        filename: "cybersecurity-certificate.pdf"
    },
    {
        title: "Machine Learning Specialist",
        date: "July 2024",
        issuer: "AI Academy",
        description: "Advanced certification in machine learning algorithms, neural networks, and AI implementation.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center",
        filename: "ml-certificate.pdf"
    },
    {
        title: "Digital Marketing Expert",
        date: "June 2024",
        issuer: "Marketing Pro",
        description: "Professional certification covering SEO, social media marketing, and digital advertising strategies.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
        filename: "digital-marketing-certificate.pdf"
    },
    {
        title: "Agile Scrum Master",
        date: "May 2024",
        issuer: "Scrum Alliance",
        description: "Certification in Agile methodology and Scrum framework for effective team management.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
        filename: "scrum-master-certificate.pdf"
    }
];

let currentCertificate = null;

function loadCertificates() {
    const gallery = document.getElementById('certificateGallery');
    const totalCerts = document.getElementById('totalCerts');
    
    totalCerts.textContent = certificates.length;
    
    certificates.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        card.onclick = () => openModal(cert);
        
        card.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image" loading="lazy">
            <h3 class="certificate-title">${cert.title}</h3>
            <div class="certificate-issuer">${cert.issuer}</div>
            <div class="certificate-date">${cert.date}</div>
            <p class="certificate-description">${cert.description}</p>
            <button class="download-btn" onclick="event.stopPropagation(); downloadCertificate('${cert.filename}')">
                <span class="download-icon"></span>
                Download
            </button>
        `;
        
        gallery.appendChild(card);
    });
}

function openModal(certificate) {
    currentCertificate = certificate;
    document.getElementById('modalTitle').textContent = certificate.title;
    document.getElementById('modalDescription').textContent = certificate.description;
    document.getElementById('modalImage').style.backgroundImage = `url(${certificate.image})`;
    document.getElementById('certificateModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentCertificate = null;
}

function downloadCertificate(filename) {
    const file = filename || (currentCertificate ? currentCertificate.filename : 'certificate.pdf');
    
    // Create a temporary download link
    // Note: Replace this with actual file URLs in production
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,JVBERi0xLjQKJcfsj6IKNSAwIG9iago8PAovTGVuZ3RoIDYgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nDPQM1Qo5ypUKOEyVCjicqxUKEp1LUnMTK7kAgBXSQeGCmVuZHN0cmVhbQplbmRvYmoKNiAwIG9iagoxMzkKZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSAXIDACIG9iagogICABGAokYAowAAA=`;
    link.download = file;
    
    // Simulate download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    const button = event.target.closest('.download-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<span>✓</span> Downloaded!';
    button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }, 2000);
    
    if (currentCertificate) {
        closeModal();
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Load certificates when page loads
document.addEventListener('DOMContentLoaded', loadCertificates);