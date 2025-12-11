/* =========================================================
   MOBILE NAVIGATION
========================================================= */
function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
}


/* =========================================================
   HERO TYPING EFFECT
========================================================= */
const typing = document.querySelector('.typing');

if (typing) {
    let text = "Web Developer | Turning Ideas Into Interactive Websites";
    let idx = 0;

    function type() {
        typing.textContent = text.slice(0, idx);
        idx++;
        if (idx <= text.length) setTimeout(type, 40);
    }

    type();
}


/* =========================================================
   PROJECTS GENERATOR
========================================================= */
const projects = [
    {
        title: "Todo App",
        desc: "A clean and responsive task manager app.",
        img: "assets/img/project1.jpg"
    },
    {
        title: "Weather Dashboard",
        desc: "Fetches real-time weather data.",
        img: "assets/img/project2.jpg"
    },
    {
        title: "Script Marketplace UI",
        desc: "A marketplace-style UI mockup.",
        img: "assets/img/project3.jpg"
    },
    {
        title: "Portfolio Website",
        desc: "The website you're viewing now!",
        img: "assets/img/project4.jpg"
    }
];

const projectList = document.getElementById("projectList");

if (projectList) {
    projects.forEach(p => {
        projectList.innerHTML += `
            <div class='project-card'>
                <img src='${p.img}' style='width:100%;border-radius:10px;margin-bottom:10px;'>
                <h2>${p.title}</h2>
                <p>${p.desc}</p>
            </div>
        `;
    });
}
