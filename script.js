// ========== LETRAS ==========
const lyricsData = [
    { time: 0, text: "Hola", artist: "intro" },
    { time: 1, text: "beba", artist: "intro" },
    { time: 2, text: "como tu", artist: "intro" },
    { time: 4, text: "te llamas?", artist: "intro" },
    { time: 7, text: "te llamas?", artist: "intro" },
    { time: 10, text: "Hola beba", artist: "leyva" },
    { time: 12, text: "Hace rato que yo, no se de ti", artist: "leyva" },
    { time: 15, text: "Te confieso no, te puedo olvidar", artist: "leyva" },
    { time: 17, text: "desde esa noche, te que conoci-i-i-", artist: "leyva" },
    { time: 20, text: "Hola beba", artist: "leyva" },
    { time: 22, text: "Hace rato que yo, no se de ti", artist: "leyva" },
    { time: 25, text: "Te confieso no, te puedo olvidar", artist: "leyva" },
    { time: 27, text: "desde esa noche, te que conoci-i-i-", artist: "leyva" },
    { time: 30, text: "...", artist: "leyva" },
    { time: 31, text: "quedaste", artist: "sayko" },
    { time: 32, text: "aqui marca mi pensamiento", artist: "sayko" },
    { time: 34, text: "no se que me hiciste", artist: "sayko" },
    { time: 35, text: "que no olvido ese momento", artist: "sayko" },
    { time: 37, text: "en el que yo toque tu piel", artist: "sayko" },
    { time: 38, text: "y tus ojos color miel", artist: "sayko" },
    { time: 40, text: "me tentaban hacertelo lento", artist: "sayko" },
    { time: 42, text: "ahora que te tengo alli de frente", artist: "sayko" },
    { time: 44, text: "me tienes impaciente", artist: "sayko" },
    { time: 46, text: "y muy loco de la mente", artist: "sayko" },
    { time: 47, text: "si supieras todo, lo que yo he pensado", artist: "sayko" },
    { time: 49, text: "rezo por un beso", artist: "sayko" },
    { time: 50, text: "y por que tu estes a mi lado, baby", artist: "sayko" },
    { time: 53, text: "hola", artist: "sayko" },
    { time: 54, text: "beba", artist: "sayko" },
    { time: 55, text: "dime?", artist: "sayko" },
    { time: 57, text: "como hago pa olvidarte?", artist: "sayko" },
    { time: 60, text: "de mi mente", artist: "sayko" },
    { time: 61, text: "no puedo, sacarte", artist: "sayko" },
    { time: 63, text: "Hola beba", artist: "sayko" },
    { time: 65, text: "Hace rato que yo, no se de ti", artist: "sayko" },
    { time: 68, text: "Te confieso no, te puedo olvidar", artist: "sayko" },
    { time: 70, text: "desde esa noche, te que conoci-i-i-", artist: "sayko" },
    { time: 73, text: "Hola beba", artist: "sayko" },
    { time: 75, text: "Hace rato que yo, no se de ti", artist: "sayko" },
    { time: 78, text: "Te confieso no, te puedo olvidar", artist: "sayko" },
    { time: 80, text: "desde esa noche, te que conoci-i-i-", artist: "sayko" },
    { time: 83, text: "...", artist: "sayko" },
    { time: 85, text: "dime donde estas, que la noche sigue fria", artist: "leyva" },
    { time: 87, text: "desde que te fuiste, mi cama quedo vacia", artist: "leyva" },
    { time: 90, text: "guardo el olor, de cuando tu eras mia", artist: "leyva" },
    { time: 92, text: "y todavia tengo fotos, guardadas en mi galeria", artist: "leyva" },
    { time: 95, text: "los recuerdos me persiguen todavia", artist: "leyva" },
    { time: 98, text: "revivo cada beso como si fuese ese dia", artist: "leyva" },
    { time: 100, text: "no sabia que te tenia", artist: "leyva" },
    { time: 101, text: "en mente...", artist: "leyva" },
    { time: 103, text: "desde esa noche", artist: "leyva" },
    { time: 104, text: "te deseo muy frecuentemente", artist: "leyva" },
    { time: 106, text: "hola", artist: "leyva" },
    { time: 107, text: "beba", artist: "leyva" },
    { time: 109, text: "dime?", artist: "leyva" },
    { time: 110, text: "como hago pa olvidarte?", artist: "leyva" },
    { time: 113, text: "de mi mente, no puedo sacarte", artist: "leyva" },
    { time: 116, text: "Hola beba", artist: "leyva" },
    { time: 118, text: "Hace rato que yo, no se de ti", artist: "leyva" },
    { time: 121, text: "Te confieso no te puedo olvidar", artist: "leyva" },
    { time: 124, text: "desde esa noche, te que conoci-i-i-", artist: "leyva" },
    { time: 127, text: "Hola beba", artist: "leyva" },
    { time: 129, text: "Hace rato que yo, no se de ti", artist: "leyva" },
    { time: 131, text: "Te confieso no, te puedo olvidar", artist: "leyva" },
    { time: 134, text: "desde esa noche, te que conoci-i-i-", artist: "leyva" },
    { time: 138, text: "EYYY", artist: "final", isFinal: true },
    { time: 140, text: "AQUI EN SEMINENCIAS", artist: "final", isFinal: true },
    { time: 143, text: "QUE NACIERON PA´ROMPER ", artist: "final", isFinal: true },
    { time: 145, text: "LEYVA", artist: "final", isFinal: true },
    { time: 147, text: "JOSSMAN", artist: "final", isFinal: true },
    { time: 149, text: "Hola beba ", artist: "final", isFinal: true },
    { time: 150, text: "♬", artist: "final", isFinal: true },
    { time: 153, text: "te confieso no te puedo olvidar", artist: "final", isFinal: true },
    { time: 156, text: "♬", artist: "final", isFinal: true },
    { time: 157, text: "ELLOS SABEN QUE NO ESTAN A NUESTRO NIVEL", artist: "final", isFinal: true }
];

// Generar el HTML de las letras
const lyricsContainer = document.getElementById("lyricsContainer");
lyricsData.forEach(item => {
    const p = document.createElement("p");
    p.setAttribute("data-time", item.time);
    p.setAttribute("data-artist", item.artist);

    let badgeHtml = '';
    if (item.artist === 'leyva') {
        badgeHtml = '<span class="artist-badge badge-leyva"><i class="fas fa-microphone-alt"></i> LEYVA</span>';
    } else if (item.artist === 'sayko') {
        badgeHtml = '<span class="artist-badge badge-sayko"><i class="fas fa-user-graduate"></i> SAYKO</span>';
    } else if (item.artist === 'final') {
        badgeHtml = '<span class="artist-badge" style="background: linear-gradient(135deg, #FFA500, #FFD700); color:#000; font-weight:bold;"><i class="fas fa-flag-checkered"></i> FINAL</span>';
    } else {
        badgeHtml = '<span class="artist-badge badge-leyva"><i class="fas fa-headphones"></i> INTRO</span>';
    }

    const lyricClass = item.isFinal ? 'lyric-text lyric-final' : `lyric-text ${item.artist === 'leyva' ? 'lyric-leyva' : (item.artist === 'sayko' ? 'lyric-sayko' : '')}`;
    
    const lyricSpan = document.createElement("span");
    lyricSpan.className = lyricClass;
    lyricSpan.textContent = item.text;

    p.innerHTML = badgeHtml;
    p.appendChild(lyricSpan);
    lyricsContainer.appendChild(p);
});

// ========== PLAYER LOGIC CON TIEMPOS ==========
const song = document.querySelector(".song");
const audio = song.querySelector("audio");
const btn = song.querySelector(".play");
const progressBar = song.querySelector(".progress div");
const progressContainer = song.querySelector(".progress");
const lyricsItems = document.querySelectorAll(".lyrics p");
const bars = document.querySelectorAll(".bar");
const currentTimeDisplay = document.getElementById("currentTimeDisplay");
const totalTimeDisplay = document.getElementById("totalTimeDisplay");
let animationId = null;

// Formatear tiempo (segundos a MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Actualizar display de tiempos
function updateTimeDisplay() {
    if (audio.duration && !isNaN(audio.duration)) {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        totalTimeDisplay.textContent = formatTime(audio.duration);
    }
}

// Cargar duración total cuando el audio esté listo
audio.addEventListener("loadedmetadata", () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

function updateVisuals() {
    if (!audio.paused && !audio.ended) {
        if (progressBar) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = percent + "%";
        }

        updateTimeDisplay();

        let current = audio.currentTime;
        let activeIndex = -1;
        for (let i = 0; i < lyricsItems.length; i++) {
            const time = parseFloat(lyricsItems[i].getAttribute("data-time"));
            if (current >= time) activeIndex = i;
        }

        lyricsItems.forEach(l => l.classList.remove("active"));
        if (activeIndex >= 0) lyricsItems[activeIndex].classList.add("active");

        if (bars.length) {
            for (let i = 0; i < bars.length; i++) {
                const intensity = (Math.sin(Date.now() * 0.01 + i) * 0.5 + 0.5) * 35 + 8;
                bars[i].style.height = Math.min(48, Math.max(8, intensity)) + "px";
            }
        }
        animationId = requestAnimationFrame(updateVisuals);
    } else {
        if (animationId) cancelAnimationFrame(animationId);
        updateTimeDisplay();
    }
}

function startUpdating() {
    if (animationId) cancelAnimationFrame(animationId);
    updateVisuals();
}

btn.onclick = () => {
    if (audio.paused) {
        audio.play().catch(e => console.log("Error:", e));
        btn.innerHTML = '<i class="fas fa-pause"></i>';
        song.classList.add("playing");
        startUpdating();
    } else {
        audio.pause();
        btn.innerHTML = '<i class="fas fa-play"></i>';
        song.classList.remove("playing");
        if (animationId) cancelAnimationFrame(animationId);
        updateTimeDisplay();
    }
};

audio.addEventListener("timeupdate", () => {
    if (!animationId && !audio.paused) startUpdating();
    if (progressBar && !animationId) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + "%";
    }
    updateTimeDisplay();
});

audio.addEventListener("ended", () => {
    btn.innerHTML = '<i class="fas fa-play"></i>';
    song.classList.remove("playing");
    if (animationId) cancelAnimationFrame(animationId);
    progressBar.style.width = "0%";
    lyricsItems.forEach(l => l.classList.remove("active"));
    currentTimeDisplay.textContent = formatTime(0);
});

if (progressContainer) {
    progressContainer.addEventListener("click", (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const widthPercent = clickX / rect.width;
        if (audio.duration) {
            audio.currentTime = widthPercent * audio.duration;
            if (!audio.paused) startUpdating();
            updateTimeDisplay();
        }
    });
}

setTimeout(() => {
    if (audio.duration) totalTimeDisplay.textContent = formatTime(audio.duration);
}, 100);

// ========== DROPDOWN PARA REDES SOCIALES ==========
function setupDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    const btn = dropdown.querySelector(".social-dropdown-btn");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        document.querySelectorAll(".social-dropdown").forEach(d => {
            if (d !== dropdown) d.classList.remove("active");
        });

        dropdown.classList.toggle("active");
    });
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".social-dropdown")) {
        document.querySelectorAll(".social-dropdown").forEach(d => {
            d.classList.remove("active");
        });
    }
});

setupDropdown("instagramDropdown");
setupDropdown("tiktokDropdown");

// ========== MODAL GALERÍA ==========
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});
modal.addEventListener("click", () => modal.classList.remove("active"));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) modal.classList.remove("active");
});

// ========== ANIMACIÓN DE ENTRADA ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
});