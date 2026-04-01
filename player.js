// ─── PLAYER DE ÁUDIO ───
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const timeDisplay = document.getElementById("time");

playBtn.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    playBtn.classList.remove("play");
    playBtn.classList.add("pause");
  } else {
    audio.pause();
    playBtn.classList.remove("pause");
    playBtn.classList.add("play");
  }
});

audio.addEventListener("timeupdate", function(){
  if(audio.duration){
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    if(seconds < 10) seconds = "0" + seconds;
    timeDisplay.innerHTML = minutes + ":" + seconds;
  }
});

progressContainer.addEventListener("click", function(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  if(audio.duration){
    audio.currentTime = (clickX / width) * audio.duration;
  }
});


// ─── PLATFORM SELECTOR ───
let currentPlatform = 'android';

function setPlatform(platform) {
  currentPlatform = platform;

  // update button states
  document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + platform).classList.add('active');

  const isMob = platform === 'mobilador';
  const fieldCelular = document.getElementById('field-celular');
  const fieldNivel   = fieldCelular.nextElementSibling; // nivel field-wrap
  const btnGerar     = document.querySelector('.btn-primary[onclick="gerar()"]');
  const btnTiktok    = document.querySelector('.btn-secondary');
  const mobPanel     = document.getElementById('mobilador-panel');

  if (isMob) {
    fieldCelular.style.display = 'none';
    fieldNivel.style.display   = 'none';
    btnGerar.style.display     = 'none';
    mobPanel.style.display     = 'block';
  } else {
    fieldCelular.style.display = 'block';
    fieldNivel.style.display   = 'block';
    btnGerar.style.display     = 'block';
    mobPanel.style.display     = 'none';
  }

  // update placeholder
  const input = document.getElementById('celular');
  if (platform === 'ios') {
    input.placeholder = 'Ex: iPhone 14 Pro';
  } else {
    input.placeholder = 'Ex: Realme C75';
  }

  // clear errors and results
  document.getElementById('erro').innerHTML = '';
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('resultado-mob').style.display = 'none';
  input.value = '';
}


// ─── MOBILADOR ───
let comutadaAtiva = false;

function toggleComutada() {
  comutadaAtiva = !comutadaAtiva;
  const sw = document.getElementById('toggle-comutada');
  comutadaAtiva ? sw.classList.add('on') : sw.classList.remove('on');
}

function gerarMobilador() {
  const nivelMob   = document.getElementById('nivel-mob').value;
  const resultBox  = document.getElementById('resultado-mob');
  const resultBody = document.getElementById('resultado-mob-body');

  let aceleracao, dpiMouse, dpiCell, sensH, sensV;

  // Lógica: quanto maior o DPI do mouse, menor tudo mais (celular, sensib, aceleração)
  // DPIs fixos reais — máx 1600
  const dpisMouseAlta  = [1600];
  const dpisMouseMedia = [1200, 1600];
  const dpisMouseBaixa = [800, 1200];

  if (nivelMob === 'alta') {
    dpiMouse = dpisMouseAlta[Math.floor(Math.random() * dpisMouseAlta.length)];
  } else if (nivelMob === 'media') {
    dpiMouse = dpisMouseMedia[Math.floor(Math.random() * dpisMouseMedia.length)];
  } else {
    dpiMouse = dpisMouseBaixa[Math.floor(Math.random() * dpisMouseBaixa.length)];
  }

  // Fator inverso: 1600 DPI → fator 0.0 (tudo baixo) | 800 DPI → fator 1.0 (tudo alto)
  const fatorInv = (1600 - dpiMouse) / 800; // 0.0 a 1.0

  // Aceleração: DPI alto = aceleração baixa (2.0), DPI baixo = aceleração alta (12.0)
  const acBase = nivelMob === 'alta' ? [20,45] : nivelMob === 'media' ? [45,80] : [80,120];
  aceleracao = parseFloat((random(acBase[0], acBase[1]) / 10).toFixed(1));
  // Corrige aceleração pelo DPI: DPI 1600 sobe o valor (mais pesado), DPI 800 desce
  aceleracao = parseFloat(Math.min(12.0, Math.max(2.0,
    aceleracao + fatorInv * -3.0
  )).toFixed(1));

  // DPI do celular: inversamente proporcional ao DPI do mouse
  if (dpiMouse === 1600) {
    dpiCell = random(360, 380);       // mouse 1600 → celular bem baixo
  } else if (dpiMouse === 1200) {
    dpiCell = random(380, 430);       // mouse 1200 → celular médio
  } else {
    dpiCell = random(430, 500);       // mouse 800  → celular pode ser maior
  }

  // Sensibilidade: também inversamente proporcional ao DPI do mouse — mínimo 200
  if (nivelMob === 'alta') {
    sensH = dpiMouse === 1600 ? random(350, 550) : random(500, 750);
    sensV = dpiMouse === 1600 ? random(300, 500) : random(450, 700);
  } else if (nivelMob === 'media') {
    sensH = dpiMouse === 1600 ? random(250, 380) : random(320, 480);
    sensV = dpiMouse === 1600 ? random(220, 350) : random(280, 440);
  } else {
    sensH = dpiMouse === 1600 ? random(200, 280) : random(220, 340);
    sensV = dpiMouse === 1600 ? random(200, 260) : random(200, 300);
  }

  let rows = [
    ['🖱️', 'DPI do Mouse', dpiMouse],
    ['📱', 'DPI do Celular', dpiCell],
    ['⚡', 'Aceleração do Contador', aceleracao.toFixed(1)],
    ['↔️', 'Sensibilidade Horizontal', sensH],
    ['↕️', 'Sensibilidade Vertical', sensV],
  ];

  if (comutadaAtiva) {
    rows.push(['↔️', 'Sens. Horizontal (Comutada)', Math.round(sensH * random(110, 125) / 100)]);
    rows.push(['↕️', 'Sens. Vertical (Comutada)',   Math.round(sensV * random(110, 125) / 100)]);
  }

  runLoading(() => {
    resultBox.style.display = 'block';
    resultBody.innerHTML = rows.map(([icon, label, val]) => `
      <div class="stat-row">
        <span class="stat-label">${icon} ${label}</span>
        <span class="stat-value">${val}</span>
      </div>
    `).join('');

    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (typeof gtag === 'function') {
      gtag('event', 'gerar_mobilador', {
        'event_category': 'engajamento',
        'nivel': nivelMob
      });
    }
  });
}

// ─── INFO MODAL ───
function openInfo() {
  document.getElementById('infoModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeInfo() {
  document.getElementById('infoModal').classList.remove('open');
  document.body.style.overflow = '';
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('infoModal')) closeInfo();
}