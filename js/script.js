document.addEventListener("DOMContentLoaded", () => {

  // ---------------- Typing Effect ----------------
  const text = "My name is Kushal KC";
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    let index = 0;
    let forward = true;

    function typeEffect() {
      if (forward) {
        typingElement.textContent = text.substring(0, index + 1) + ".";
        index++;
        if (index === text.length) forward = false;
      } else {
        typingElement.textContent = text.substring(0, index - 1) + ".";
        index--;
        if (index === 0) forward = true;
      }
      setTimeout(typeEffect, 200);
    }

    typeEffect();
  }

  // ---------------- Education Timeline ----------------
  const educationData = [
    {
      year: "2025 – 2029",
      institution: "Kathmandu University (KU)",
      location: "Dhulikhel, Kavrepalanchok, Nepal",
      degree: "Bachelor of Engineering in Geomatics Engineering (B.E.)",
      link: "https://geom.ku.edu.np/",
      note: "Key Modules: Programming (C)"
    },
    {
      year: "2019 – 2023",
      institution: "Nepal Banepa Polytechnic Institute (NBPI) | CTEVT",
      location: "Banepa, Kavrepalanchok, Nepal",
      degree: "Diploma in Geomatics Engineering (DGE) | Aggregate Score: 77.86%",
      link: "https://nbpi.edu.np/",
      note: "Key Modules: Surveying, Remote Sensing, GIS, Photogrammetry, Programming (Python)"
    },
    {
      year: "2006 – 2019",
      institution: "Arunodaya English Secondary School",
      location: "Panauti, Kavrepalanchok, Nepal",
      degree: "Secondary Education Examination (SEE) | Aggregate Grade: 3.85"
    },
  ];

  educationData.sort((a, b) => {
    const endA = new Date(a.year.split("–")[1].trim());
    const endB = new Date(b.year.split("–")[1].trim());
    return endB - endA; // latest first
  });

  const education = document.getElementById("education");
  if (education) {
    educationData.forEach(edu => {
      const item = document.createElement("div");
      item.className = "timeline-item d-flex align-items-center";
      item.innerHTML = `
        <div class="timeline-date">${edu.year}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${edu.institution}</h3>
          <h4>${edu.location}</h4>
          <p class="fw-bold">${edu.degree}</p>
          ${edu.note ? `<p class="fst-italic">${edu.note}</p>` : ""}
          ${edu.link ? `<p><a href="${edu.link}"target="_blank">${new URL(edu.link).hostname}</a></p>` : ""}
        </div>
      `;
      education.appendChild(item);
    });
  }

  // ---------------- Experience Timeline ----------------
  const experiencesdata = [
    {
      date: "March 2024 – Present",
      organization: "Freelancer | Remote",
      location: "Remote",
      role: "Remote Sensing & GIS Specialist",
    },
    {
      date: "August 2023 – September 2025",
      organization: "Antarikchya Pratisthan Nepal",
      location: "Lazimpath, Kathmandu, Nepal",
      role: "Satellite Data Analyst | GIS Specialist",
      description: "Collaborative projects with Kathmandu Metropolitan City (KMC).",
      link: "https://antarikchya.org.np/"
    },
    {
      date: "June 2023 – July 2023",
      organization: "NAXA",
      location: "Shantinagar, Kathmandu, Nepal",
      role: "GIS Analyst",
      description: "Collaborative projects with Changunarayan Municipality and NDRRMA.",
      link: "https://naxa.com.np/"
    },

  ];
  experiencesdata.sort((a, b) => {
    const endA = new Date(a.date.split("–")[1].trim());
    const endB = new Date(b.date.split("–")[1].trim());
    return endB - endA; // latest first
  });
  const experience = document.getElementById("experience");
  if (experience) {
    experiencesdata.forEach(exp => {
      const item = document.createElement("div");
      item.className = "timeline-item d-flex align-items-center";
      item.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${exp.organization}</h3>
          <h4>${exp.location}</h4>
          <p class="fw-bold">${exp.role}</p>
          ${exp.description ? `<p class="fst-italic">${exp.description}</p>` : ""}
          ${exp.link ? `<p><a href="${exp.link}" target="_blank">${new URL(exp.link).hostname}</a></p>` : ""}
        </div>
      `;
      experience.appendChild(item);
    });
  }

  // ---------------- Projects Section ----------------
  const projects = [
    {
      id: "project1",
      title: "Satellite Data Analytics Project (SDAP)",
      duration: "August 2023 – September 2025",
      organization: "Antarikchya Pratisthan Nepal (APN)",
      description: "Leveraged satellite data and GIS mapping for flood damage assessment in Sapta Koshi, KMC Flood 2024 1D Simulation, environmental monitoring in Chure region, earthquake and forest fire visualization and dynamic population density mapping.",
      tools: "ArcGIS Pro, QGIS, HEC-HMS, Google Earth Engine, WebGIS, PHP",
      link: "https://antarikchya.org.np/visualization",
      image: "image/sdap.png"
    },
    {
      id: "project2",
      title: "Space-enabled Urban Solutions in Nepal (SUSN)",
      duration: "August 2023 – July 2024",
      organization: "Kathmandu Metropolitan City (KMC)",
      description: "Collaborated with KMC departments for land use classification and GIS mapping to support urban development and disaster risk management.",
      tools: "ArcGIS Pro, QGIS, AutoCAD, Google Earth Engine, Python",
      link: "https://www.antarikchya.org.np/data/space-enabled-urban-solutions | https://www.kmc.antarikchya.org.np/",
      image: "image/susn.png"
    },
    {
      id: "project3",
      title: "Land Use/Land Cover Classification and Future Prediction",
      duration: "March 2024 – August 2024",
      organization: "Dr. Ranadheer Mandadi (AIT)",
      description: "Utilized Google Earth Engine for LULC mapping and TerrSet 2020 for predicting future LULC changes.",
      tools: "ArcGIS Pro, Google Earth Engine, TerrSet 2020",
      // link: "https://antarikchya.org.np/visualization",
      image: "image/lulc.png"
    },
    {
      id: "project4",
      title: "National Building Exposure",
      duration: " June 2023 – July 2023 ",
      organization: "NAXA",
      description: "Contributed to the National Building Exposure project by working as a building digitizer. Implemented manual digitization techniques to accurately capture building footprints, contributing tothe creation of a comprehensive building exposure database.",
      tools: "ArcGIS",
      link: "https://exposure.ndrrma.gov.np/",
      image: "image/ndrrma.png"
    },
    {
      id: "project5",
      title: "Topographical and Cadastral Surveying | Jiri, Nepal",
      duration: "November 2022 – March 2023",
      organization: "Nepal Banepa Polytechnic Institute (NBPI)",
      description: "Participated in topographical and cadastral surveying in Jiri, Nepal. Utilized DGPS to establish control points and employed total stations and prisms for various surveying tasks, including projects related to hydropower, routes, transmission lines, bridges, and canals. Processed the collected data and visualized itusing ArcGIS.",
      tools: "ArcGIS, Total Station (TS), Differential Global Positioning Systems (DGPSs), Prism, Measuring Tape",
      // link: "https://antarikchya.org.np/visualization",
      image: "image/ts.jpg"
    },
    {
      id: "project6",
      title: "Impact on COR Station due to Gorkha Earthquake 2015",
      duration: "November 2022 – March 2023",
      organization: "Nepal Banepa Polytechnic Institute (NBPI)",
      description: "This is the final year project for my Diploma degree, I utilized UNAVCO to gather control point data, which was then processed. The processed data was visualized using ArcGIS. The project focused on investigating the impact of the Gorkha Earthquake in 2015 on COR Station, specifically identifying the shift of control points caused by the Gorkha Earthquake 2015.",
      tools: "ArcGIS, UNAVCO",
      // link: "https://antarikchya.org.np/visualization",
      image: "image/cors.jpg"
    }
  ];

  projects.sort((a, b) => {
    const endA = new Date(a.duration.split("–")[1].trim());
    const endB = new Date(b.duration.split("–")[1].trim());
    return endB - endA || a.title.localeCompare(b.title);
  });

  const projectContainer = document.getElementById("projects-container");
  const modalContainer = document.getElementById("modals-container");

  if (projectContainer && modalContainer) {
    projects.forEach(p => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      const imgTag = p.image
        ? `<img src="${p.image}" alt="${p.title}" class="project-img mb-2">`
        : "";

      col.innerHTML = `
        <div class="project-card h-100 p-0 shadow-sm border rounded-4">
          ${imgTag}
          <div class="p-3">
            <h5 class="fw-bold">${p.title}</h5>
            <p class="text-muted small mb-0">${p.duration}</p>
            <p class="fw-bold small mb-2">${p.organization}</p>
            <p class="clamp-3">${p.description}</p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#${p.id}Modal" class="text-resetfw-semibold ieee-link  text-decoration-underline">See More ...</a>
          </div>
        </div>
      `;
      projectContainer.appendChild(col);

      // Create Modal
      modalContainer.innerHTML += `
        <div class="modal fade" id="${p.id}Modal" tabindex="-1" aria-labelledby="${p.id}Label" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-center fw-bold w-100" id="${p.id}Label">${p.title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body pt-2">
                <img src="${p.image}" alt="${p.title}" class="img-fluid rounded mb-4" style="max-height: 300px; object-fit: cover; width: 100%;">
                <p><strong>Duration:</strong> ${p.duration}</p>
                <p><strong>Description:</strong> ${p.description}</p>
                <p><strong>Tools:</strong> ${p.tools || "Not specified"}</p>
                <p><strong>Links:</strong>
                ${p.link ? p.link.split("|").map(l => {
        const url = l.trim();
        const u = new URL(url);
        const displayText = (u.hostname + u.pathname).replace(/^www\./, '');
        return `
                    <a href="${url}" target="_blank" rel="noopener noreferrer"
                      class="d-block mb-1 text-primary">
                      ${displayText}
                    </a>`;
      }).join("") : "<em>No link available</em>"}
              </p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  // ---------------- Publications Section  ----------------
  // Publications Data
  const publicationsData = [
    {
      title: "Leveraging Remote Sensing for Lineament Extraction from Landsat-8, Sentinel-2 and Sentinel-1 at Bagmati Province of Nepal",
      publisher: "IEEE",
      date: "25 November 2025",
      link: "https://ieeexplore.ieee.org/document/11242632"
    },
    {
      title: "The Cubesat Case Study: Resource- Efficient Deep Learning for Space Application",
      publisher: "IEEE",
      date: "25 November 2025",
      link: "https://ieeexplore.ieee.org/document/11314016"
    }
  ];

  // Target container
  const publicationsBox = document.getElementById("Publications-box");

  // Clear default text
  if (publicationsBox) {
    publicationsBox.innerHTML = "";

    const row = document.createElement("div");
    row.className = "row g-4";

    publicationsData.forEach(pub => {
      const col = document.createElement("div");

      // 3 per row on desktop, 1 per row on mobile
      col.className = "col-12 col-md-4";

      col.innerHTML = `
      <div class="project-card h-100 p-3 shadow-sm border rounded-4">
        <h5 class="fw-bold">${pub.title}</h5>
        <p class="text-muted small mb-1">
        <strong>Publisher:</strong> 
        <a href="https://www.ieee.org/" target="_blank" class="text-decoration-none">
          ${pub.publisher}
        </a></p>
        <p class="small mb-2"><strong>Published on:</strong> ${pub.date}</p>
        <p class="small mb-2">
          <strong>Link :</strong>
          <a href="${pub.link}" target="_blank" class="text-resetfw-semibold ieee-link text-decoration-underline">${pub.link.replace(/^https?:\/\//, "")}</a>
        </p>

          <!-- <a href="${pub.link}" target="_blank" class="text-resetfw-semibold ieee-link text-decoration-underline">Read paper on IEEE ...</a>--!>
      </div>
    `;

      row.appendChild(col);
    });

    publicationsBox.appendChild(row);
  }

  // ---------------- Skills Section ----------------
  const skillsData = [
    { name: "ArcGIS / ArcGIS Pro", percentage: 90, color: "#04d415" },
    { name: "AutoCAD", percentage: 45, color: "#71d16e" },
    { name: "Differential GPS", percentage: 65, color: "#dbce11" },
    { name: "WebGIS", percentage: 65, color: "#e98007" },
    { name: "Django", percentage: 50, color: "#e98007" },
    { name: "ENVI", percentage: 35, color: "#e91a13" },
    { name: "ERDAS Imagine", percentage: 40, color: "#04d415" },
    { name: "PHP", percentage: 60, color: "#71d16e" },
    { name: "Python", percentage: 70, color: "#dbce11" },
    { name: "QGIS", percentage: 85, color: "#e98007" },
    { name: "SNAP Desktop", percentage: 70, color: "#e91a13" },
    { name: "Leaflet", percentage: 70, color: "#71d16e" },
    { name: "Google Earth Engine", percentage: 90, color: "#71d16e" },
    { name: "Microsoft 365", percentage: 80, color: "#e91a13" },
    { name: "Plane Table", percentage: 75, color: "#04d415" },
    { name: "TerrSet 2020", percentage: 55, color: "#dbce11" },
    { name: "Theodolite", percentage: 70, color: "#71d16e" },
    { name: "HEC-HMS / HEC-RAS", percentage: 65, color: "#dbce11" },
    { name: "HTML/CSS/JS", percentage: 80, color: "#e98007" },
    { name: "Total Station", percentage: 75, color: "#dbce11" },
    { name: "Vite Press", percentage: 90, color: "#04d415" },
    { name: "C", percentage: 30, color: "#e91a13" },

  ];
  skillsData.sort((a, b) => a.name.localeCompare(b.name));
  const skillsBox = document.getElementById("skills-box");
  if (skillsBox) {
    skillsData.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.innerHTML = `
        <h6>${skill.name}</h6>
        <div class="progress-bar">
          <div style="background: ${skill.color}; width:0%;">
            <span></span>
          </div>
        </div>
      `;
      skillsBox.appendChild(skillDiv);
    });

    // Animate on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const progressBars = skillsBox.querySelectorAll('.progress-bar div');
        if (entry.isIntersecting) {
          progressBars.forEach((bar, index) => {
            bar.style.width = skillsData[index].percentage + '%';
          });
        } else {
          progressBars.forEach(bar => bar.style.width = '0%');
        }
      });
    }, { threshold: 0.3 });

    // Observe the skills container once
    observer.observe(skillsBox);

    // Add draggable/touch support for each skill
    skillsBox.querySelectorAll('.skill').forEach((skillDiv, index) => {
      const bar = skillDiv.querySelector('.progress-bar div');
      const circle = bar.querySelector('span');
      const container = skillDiv.querySelector('.progress-bar');
      let dragging = false;

      // Mouse events
      circle.addEventListener("mousedown", e => { dragging = true; e.preventDefault(); });
      document.addEventListener("mouseup", () => dragging = false);
      document.addEventListener("mousemove", e => {
        if (!dragging) return;
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(rect.width, x));
        bar.style.width = (x / rect.width * 100) + "%";
      });

      // Touch events for mobile
      circle.addEventListener("touchstart", e => { dragging = true; e.preventDefault(); });
      document.addEventListener("touchend", () => dragging = false);
      document.addEventListener("touchmove", e => {
        if (!dragging) return;
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        x = Math.max(0, Math.min(rect.width, x));
        bar.style.width = (x / rect.width * 100) + "%";
      }, { passive: false });
    });

    observer.observe(skillsBox);
  }


  // ---------------- Gallery Section ----------------
  const galleryData = [
    { src: "../image/gallery/spacecon2024.JPG", title: "SpaceCon 2024", dates: "April 2024" },
    { src: "../image/gallery/spacecon2025.JPG", title: "SpaceCon 2025", dates: "April 2025" },
    { src: "../image/gallery/mitrakunj2024.jpg", title: "6th Asia Meet and International Conference", dates: "May 2024" },
    { src: "../image/gallery/pkr.jpg", title: "E Cube Training, Pokhara", dates: "January 2024" },
    { src: "../image/gallery/mhm.jpg", title: "Multi Hazard Mapping Training", dates: "November 2024" },
    { src: "../image/gallery/nyc2024.jpg", title: "NYC Conference 2024", dates: "June 2024" },
    { src: "../image/gallery/marsyangdi_survey.jpeg", title: "Lower Marsyangdi Hydropower Survey", dates: "February 2026" },
  ];
  galleryData.sort((a, b) => new Date(b.dates) - new Date(a.dates));
  const galleryRow = document.getElementById("gallery-row");
  if (galleryRow) {
    galleryData.forEach(item => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-sm-6 col-md-4 col-lg-3 gallery-item";
      colDiv.innerHTML = `
        <img src="${item.src}" alt="${item.title}" class="gallery-img">
        <div class="gallery-title">${item.title}</div>
        <div class="gallery-dates">Date: ${item.dates}</div>
      `;
      galleryRow.appendChild(colDiv);
    });
  }

});



//  contact form submission
// Supabase credentials
const SUPABASE_URL = "https://dykgtaxikoexmgnrkgtq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5a2d0YXhpa29leG1nbnJrZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MDQwMzksImV4cCI6MjA3ODI4MDAzOX0.2wjTsUi4FYfkcjgkCMILQhEKEOrFZpiOthrz2t-iAEM";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comment = document.getElementById("comment").value.trim();

  status.textContent = "Submitting...";

  const { data, error } = await supabaseClient
    .from("Kushal Portfolio Contact")
    .insert([{ name, email, comment }]);

  if (error) {
    console.error("Insert Error:", error);
    status.textContent = "❌ Failed to submit. Please try again.";
  } else {
    status.textContent = "✅ Submitted successfully!";
    form.reset();

    // Hide the message after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      status.textContent = "";
    }, 5000);
  }

});


const honoursData = [
  {
    image: "image/NASA_Competition.jpg",
    title: "Pale Blue Dot: Visualization Challenge",
    organizer: "NASA and UNVIE",
    description: "\"<strong>The Honorable Mention</strong>\" in DrivenData's Pale Blue Dot: Visualization Challenge, for submission of LULC classification and damage assessment of the 2008 Sapta Koshi Flood using multi-temporal Landsat data",
    link: "https://drivendata-public-assets.s3.amazonaws.com/nasa-open-science-gallery/nayan.bakhadyo/visual.png",
    date: "March-14, 2024"
  },
  {
    image: "image/Map_Design_Competition.png",
    title: "Map Design Competition",
    organizer: "Geomatics Engineering Students' Association of Nepal",
    description: "Secured the <strong>1<sup>st</sup> position</strong> in the Map Design Competition for the submission on the Fire Susceptibility Map of Kathmandu Metropolitan City",
    link: "https://www.facebook.com/share/p/1GKWoL6aWL",
    date: "June-27, 2024"
  },
];

honoursData.sort((a, b) => new Date(b.date) - new Date(a.date));
const honoursContainer = document.getElementById("honours-container");

honoursData.forEach(award => {
  const item = document.createElement("div");
  item.className = "col-12";
  item.innerHTML = `
    <div class="honour-card d-flex gap-2 align-items-start mx-auto shadow-sm border rounded-4">
      <div class="d-flex flex-column flex-md-row ">
        <!-- Left: Fixed 300px Image -->
        <div class="flex-shrink-0 text-center">
          <img src="${award.image}" alt="${award.title}" class="honour-img shadow">
        </div>

        <!-- Right: Content -->
        <div class="flex-grow-1 p-3 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h5 class="fw-bold">${award.title}</h5>
          <span">
              <i class="fas fa-calendar-alt me-2"></i>${award.date}
            </span>
            </div>
          <h5>Organizer: ${award.organizer}</h5>
          <p>${award.description}</p>
          ${award.link ? `
          <p class="mb-0 pb-0">
            <a href="${award.link}" target="_blank">
              ${award.link.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          </p>
        ` : ""}
          </div>
      </div>
    </div>
  `;
  honoursContainer.appendChild(item);
});

// ---------------- Reveal Section ----------------
// Add 'reveal' class to all divs inside <main>
document.querySelectorAll('main div').forEach(div => div.classList.add('reveal'));

// Select all elements with class 'reveal'
const reveals = document.querySelectorAll('.reveal');

// Intersection Observer for scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');  // show when visible
    } else {
      entry.target.classList.remove('active'); // hide when not visible
    }
  });
}, { threshold: 0.13 });

// Observe all reveal elements
reveals.forEach(el => revealObserver.observe(el));
