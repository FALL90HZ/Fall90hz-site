function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerar(){
  const celular = document.getElementById("celular").value.trim();
  const nivel   = document.getElementById("nivel").value;
  const erro    = document.getElementById("erro");
  const resultadoBox  = document.getElementById("resultado");
  const resultadoBody = document.getElementById("resultado-body");

  erro.innerHTML = "";
  resultadoBox.style.display = "none";

  if(celular === ""){
    erro.innerHTML = "⚠ Digite o modelo do celular!";
    return;
  }
  if(!todosModelos.includes(celular)){
    erro.innerHTML = "⚠ Modelo não reconhecido! Digite um modelo de celular válido.";
    return;
  }

  // Avisa se o usuário digitou iPhone mas está na aba Android (e vice-versa)
  const modeloEhiOS = modelosApple.includes(celular);
  if (currentPlatform === 'android' && modeloEhiOS) {
    erro.innerHTML = '⚠ Esse é um iPhone! Selecione a plataforma iOS acima.';
    return;
  }
  if (currentPlatform === 'ios' && !modeloEhiOS) {
    erro.innerHTML = '⚠ Esse modelo é Android! Selecione a plataforma Android acima.';
    return;
  }

  let geral, redDot, doisX, quatroX, awm, dpi, tamanho, rolagem;
  const isIOS = modeloEhiOS;

  if(nivel === "alta"){
    geral=random(170,200); redDot=random(170,200); doisX=random(160,190);
    quatroX=random(140,180); awm=random(120,170); dpi=random(700,1000);
    rolagem=random(80,100); tamanho=random(40,55);
  }
  if(nivel === "media"){
    geral=random(140,170); redDot=random(140,170); doisX=random(130,160);
    quatroX=random(110,150); awm=random(90,140); dpi=random(500,800);
    rolagem=random(60,85); tamanho=random(45,60);
  }
  if(nivel === "baixa"){
    geral=random(100,140); redDot=random(100,140); doisX=random(90,130);
    quatroX=random(80,120); awm=random(70,110); dpi=random(360,600);
    rolagem=random(40,70); tamanho=random(50,65);
  }

  const rows = isIOS ? [
    ["📱","Celular",`<b>${celular}</b>`],
    ["🎯","Geral",geral],
    ["🔴","Red Dot",redDot],
    ["🔭","2X",doisX],
    ["🔎","4X",quatroX],
    ["🎯","AWM",awm],
    ["🍎","Rastreamento (iOS)",rolagem],
    ["🔘","Tamanho do Botão",tamanho],
  ] : [
    ["📱","Celular",`<b>${celular}</b>`],
    ["🎯","Geral",geral],
    ["🔴","Red Dot",redDot],
    ["🔭","2X",doisX],
    ["🔎","4X",quatroX],
    ["🎯","AWM",awm],
    ["⚙","DPI",dpi],
    ["🔘","Tamanho do Botão",tamanho],
  ];

  runLoading(() => {
    resultadoBox.style.display = "block";
    resultadoBody.innerHTML = rows.map(([icon, label, val]) => `
      <div class="stat-row">
        <span class="stat-label">${icon} ${label}</span>
        <span class="stat-value">${val}</span>
      </div>
    `).join('');

    resultadoBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if(typeof gtag === "function"){
      gtag('event','gerar_sensibilidade',{
        'event_category':'engajamento',
        'event_label': celular,
        'nivel_escolhido': nivel
      });
    }
  });
}
// ─── LOADING ANIMATION ───
function runLoading(callback) {
  const overlay  = document.getElementById('loadingOverlay');
  const percent  = document.getElementById('loadingPercent');
  const ring     = document.getElementById('ringFill');
  const label    = document.getElementById('loadingLabel');
  const bar      = document.getElementById('ldBar');
  const circumf  = 415; // 2 * PI * 66

  // Cada mensagem aparece em um trecho específico do progresso
  const labels = [
    { at: 0,  text: 'Calculando precisão...'   },
    { at: 28, text: 'Analisando dispositivo...' },
    { at: 55, text: 'Otimizando valores...'     },
    { at: 80, text: 'Quase pronto...'           },
    { at: 98, text: 'Pronto! 🔥'               },
  ];

  let current = 0;
  let lastLabel = '';
  overlay.classList.add('active');
  percent.textContent = '0%';
  label.textContent = labels[0].text;

  const interval = setInterval(() => {
    // Passo lento — total ~6 segundos
    const step = current < 85
      ? Math.random() * 0.6 + 0.3   // bem lento no início
      : Math.random() * 1.2 + 0.6;  // um pouco mais rápido no final

    current = Math.min(100, current + step);

    // Atualiza anel e barra
    const offset = circumf - (circumf * current / 100);
    ring.style.strokeDashoffset = offset;
    if (bar) bar.style.width = current + '%';

    // Atualiza porcentagem
    percent.textContent = Math.floor(current) + '%';

    // Atualiza label quando mudar de faixa
    for (let i = labels.length - 1; i >= 0; i--) {
      if (current >= labels[i].at) {
        if (labels[i].text !== lastLabel) {
          lastLabel = labels[i].text;
          label.textContent = labels[i].text;
        }
        break;
      }
    }

    if (current >= 100) {
      clearInterval(interval);
      percent.textContent = '100%';
      label.textContent = 'Pronto! 🔥';
      setTimeout(() => {
        overlay.classList.remove('active');
        callback();
      }, 500);
    }
  }, 35);
}
