// ============================================================
//  MAPEAMENTO DE CARACTERÍSTICAS E CORES
// ============================================================

const CARACTERISTICAS_CONFIG = {
    corajoso: { cor: "#2563eb", label: "🦁 Corajoso" },
    inteligente: { cor: "#8b5cf6", label: "🧠 Inteligente" },
    ambicioso: { cor: "#dc2626", label: "⚡ Ambicioso" },
    misterioso: { cor: "#1f2937", label: "🌙 Misterioso" },
    protetor: { cor: "#059669", label: "🛡️ Protetor" },
    cinico: { cor: "#92400e", label: "😏 Cínico" },
    obsessivo: { cor: "#7c3aed", label: "🔍 Obsessivo" },
    traumatizado: { cor: "#a16207", label: "💔 Traumatizado" },
    idealista: { cor: "#0891b2", label: "✨ Idealista" },
    rebelde: { cor: "#ea580c", label: "✊ Rebelde" },
    leal: { cor: "#16a34a", label: "💎 Leal" },
    impulsivo: { cor: "#dc2626", label: "⚡ Impulsivo" },
    calculista: { cor: "#4f46e5", label: "📊 Calculista" },
    solitario: { cor: "#6b7280", label: "🚶 Solitário" },
    manipulador: { cor: "#d97706", label: "🎭 Manipulador" }
};

const agentes = [
    {
        nome: "Lian",
        imagem: "Liann.png",
        classe: "Combatente",
        audio: "eliasmusica.mp3",
        status: "Vivo",
        caracteristicas: ["corajoso", "obsessivo", "traumatizado", "protetor"],
        historia: "Lian acorda sem memórias em um laboratório estranho e começa a descobrir que pode ter ajudado a criar algo perigoso",
        stats: { PV: "112", NEX: "55%", DET: "47" },
        atributos: { agilidade: 2, forca: 3, vigor: 2, intelecto: 2, presenca: 1 },
        pericias: { acrobacia: 0, adestramento: 0, artes: 0, atletismo: 0, atualidades: 0, ciencias: 0, crime: 0, diplomacia: 0, enganacao: 0, fortitude: 14, furtividade: 0, iniciativa: 10, intimidacao: 0, intuicao: 0, investigacao: 0, luta: 15, medicina: 0, ocultismo: 0, percepcao: 5, pilotagem: 0, pontaria: 0, profissao: 0, reflexos: 15, religiao: 0, sobrevivencia: 0, tatica: 5, tecnologia: 0, vontade: 10 },
        relacionamentos: { 
            irmaos: "Agatha",
            Affair: "??"
        }
    },
    {
        nome: "Clarissa",
        imagem: "clarissa.webp",
        classe: "Especialista",
        audio: "URL_DA_MUSICA_1",
        status: "Vivo",
        caracteristicas: ["calculista", "leal", "inteligente", "cinico"],
        historia: "Clarissa é extremamente inteligente e analítica, sempre buscando entender os padrões e a lógica por trás de cada teste.",
        stats: { PV: "72", NEX: "55%", DET: "70" },
        atributos: { agilidade: 3, forca: 2, vigor: 1, intelecto: 3, presenca: 2 },
        pericias: { acrobacia: 5, adestramento: 0, artes: 0, atletismo: 5, atualidades: 5, ciencias: 0, crime: 15, diplomacia: 0, enganacao: 0, fortitude: 0, furtividade: 5, iniciativa: 0, intimidacao: 0, intuicao: 0, investigacao: 10, luta: 5, medicina: 5, ocultismo: 0, percepcao: 5, pilotagem: 0, pontaria: 15, profissao: 0, reflexos: 20, religiao: 0, sobrevivencia: 0, tatica: 5, tecnologia: 0, vontade: 0 },
        relacionamentos: { 
            Melhor_amiga: "Sacha",
            Affair: "??"
        }
    },
    {
        nome: "Sacha",
        imagem: "japaazul.webp",
        classe: "Ocultista",
        audio: "URL_DA_MUSICA_1",
        status: "Vivo",
        caracteristicas: ["misterioso", "protetor", "obsessivo", "rebelde"],
        historia: "Sacha acorda em um laboratório sentindo que algo invisível a observa. Guiada por visões e sussurros, ela busca a verdade enquanto duvida da própria mente.",
        stats: { PV: "58", NEX: "60%", DET: "101" },
        atributos: { agilidade: 2, forca: 0, vigor: 2, intelecto: 3, presenca: 3 },
        pericias: { acrobacia: 0, adestramento: 0, artes: 0, atletismo: 0, atualidades: 0, ciencias: 0, crime: 0, diplomacia: 5, enganacao: 0, fortitude: 0, furtividade: 0, iniciativa: 0, intimidacao: 0, intuicao: 0, investigacao: 0, luta: 0, medicina: 5, ocultismo: 15, percepcao: 5, pilotagem: 0, pontaria: 10, profissao: 0, reflexos: 12, religiao: 0, sobrevivencia: 0, tatica: 0, tecnologia: 0, vontade: 10 },
        relacionamentos: {
            protegidos: "??",
            parceiro_de_guarda: "??"
        }
    },
    {
        nome: "Dilan",
        imagem: "Dilan.jpg",
        classe: "Especialista",
        audio: "URL_DA_MUSICA_1",
        status: "Vivo",
        caracteristicas: ["traumatizado", "leal", "inteligente", "impulsivo"],
        historia: "O especialista do grupo: inteligente, observador e envolto em mistérios, sempre analisando tudo ao seu redor em silêncio.",
        stats: { PV: "98", NEX: "55%", DET: "70" },
        atributos: { agilidade: 3, forca: 2, vigor: 2, intelecto: 3, presenca: 2 },
        pericias: { acrobacia: 0, adestramento: 0, artes: 0, atletismo: 0, atualidades: 10, ciencias: 0, crime: 10, diplomacia: 5, enganacao: 5, fortitude: 0, furtividade: 0, iniciativa: 10, intimidacao: 0, intuicao: 0, investigacao: 10, luta: 0, medicina: 0, ocultismo: 0, percepcao: 5, pilotagem: 0, pontaria: 15, profissao: 0, reflexos: 10, religiao: 0, sobrevivencia: 0, tatica: 5, tecnologia: 0, vontade: 0 },
        relacionamentos: { Melhor_amig0: "??" }
    },
    {
        nome: "Leni",
        imagem: "leni.jpg",
        classe: "Ocultista",
        audio: "URL_DA_MUSICA_1",
        status: "Vivo",
        caracteristicas: ["rebelde", "traumatizado", "leal", "solitario"],
        historia: "Uma criança usada como arma para todos os crimes de guerra possíveis, movida por sangue e um leve sonho de liberdade. Nunca teve a oportunidade de criar opiniões próprias sobre o mundo, sempre seguindo ordens alheias.",
        stats: { PV: "98", NEX: "30%", DET: "33" },
        atributos: { agilidade: 4, forca: 2, vigor: 3, intelecto: 2, presenca: 2 },
        pericias: { acrobacia: 0, adestramento: 0, artes: 0, atletismo: 0, atualidades: 0, ciencias: 0, crime: 0, diplomacia: 0, enganacao: 0, fortitude: 10, furtividade: 10, iniciativa: 10, intimidacao: 0, intuicao: 0, investigacao: 5, luta: 25, medicina: 0, ocultismo: 5, percepcao: 10, pilotagem: 0, pontaria: 0, profissao: 0, reflexos: 30, religiao: 0, sobrevivencia: 0, tatica: 0, tecnologia: 0, vontade: 15 },
        relacionamentos: {}
    },
    {
        nome: "Ethan",
        imagem: "ethan.png",
        classe: "Combatente",
        audio: "musicavicent.mp3",
        status: "Vivo",
        caracteristicas: ["protetor", "leal", "traumatizado", "corajoso"],
        historia: "Ethan desperta sem memórias, mas com habilidades de combate e marcas que revelam um passado sombrio. Agora, ele tenta descobrir se ainda controla as próprias ações.teger quem ama. Colecionou cicatrizes pelo corpo.",
        stats: { PV: "165", NEX: "55%", DET: "47" },
        atributos: { agilidade: 2, forca: 3, vigor: 3, intelecto: 2, presenca: 1 },
        pericias: { acrobacia: 0, adestramento: 0, artes: 0, atletismo: 0, atualidades: 0, ciencias: 0, crime: 0, diplomacia: 0, enganacao: 0, fortitude: 30, furtividade: 0, iniciativa: 0, intimidacao: 10, intuicao: 0, investigacao: 0, luta: 20, medicina: 0, ocultismo: 0, percepcao: 0, pilotagem: 0, pontaria: 0, profissao: 0, reflexos: 10, religiao: 0, sobrevivencia: 0, tatica: 0, tecnologia: 0, vontade: 10 },
        relacionamentos: {
            protegidos: "Sua familia", 
            apoio: "??"
        }
    },
  
    
       
    
];

const bosses = [
    {
        nome: "Dr.Aether",
        imagem: "Dr. Aether.png",
        classe: "?",
        audio: "fuchsmusica.mp3",
        status: "Vivo",
        caracteristicas: ["misterioso", "calculista", "manipulador"],
        historia: "Dr.Aether é um cientista brilhante e frio, obcecado pelo desconhecido.",
        stats: { PD: "???", NEX: "???", DET: "???" },
    },
    {
        nome: "Celeste Noctis",
        imagem: "Celeste.png",
        classe: "?",
        audio: "",
        status: "Vivo",
        caracteristicas: ["ambicioso", "manipulador", "inteligente"],
        historia: "Elegante e fria, ela esconde intenções perigosas atrás de um olhar calmo e sofisticado. Sua presença silenciosa causa mais medo do que qualquer ameaça.",
        stats: { PD: "???", NEX: "???", DET: "???" },
        relacionamentos: {}
    },
    {
        nome: "Silas Reed",
        imagem: "cilas.png",
        classe: "?",
        audio: "kessler_musica.mp3",
        status: "Vivo",
        caracteristicas: ["cinico", "ambicioso", "obsessivo"],
        historia: "Braço esquerdo do Dr. Aether.",
        stats: { PD: "???", NEX: "???", DET: "???" },
        relacionamentos: { irmaos: "Elias"}
    }
];

const COR_STATUS = {
    "Vivo":        "#a90a0a",
    "Morto":       "#2f2f2f",
    "Desaparecido":"#ff9500",
    "Pertubado":  "#784582",
    "Enlouquecendo": "#0b00a4",
    "Insano": "#043100"
};

// ============================================================
//  FUNÇÕES DE CARACTERÍSTICAS
// ============================================================

function obterCorModalPorCaracteristicas(caracteristicas) {
    if (!caracteristicas || caracteristicas.length === 0) return "#d4af37";
    
    const caracs = caracteristicas.slice(0, 3);
    const cores = caracs.map(c => CARACTERISTICAS_CONFIG[c]?.cor || "#d4af37");
    
    // Se tem apenas uma, retorna a cor dela
    if (cores.length === 1) return cores[0];
    
    // Se tem múltiplas, cria um gradiente
    return `linear-gradient(135deg, ${cores.join(", ")})`;
}

function criarBadgesCaracteristicas(caracteristicas) {
    if (!caracteristicas || caracteristicas.length === 0) return "";
    
    return caracteristicas
        .map(c => {
            const config = CARACTERISTICAS_CONFIG[c];
            if (!config) return "";
            return `<span class="badge-caracteristica" style="background: ${config.cor}; color: #fff;">${config.label}</span>`;
        })
        .join("");
}

function getFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos") || "[]");
}

function toggleFavorito(nome) {
    let favs = getFavoritos();
    if (favs.includes(nome)) {
        favs = favs.filter(n => n !== nome);
    } else {
        favs.push(nome);
    }
    localStorage.setItem("favoritos", JSON.stringify(favs));
    return favs.includes(nome);
}

function ehFavorito(nome) {
    return getFavoritos().includes(nome);
}

function gerarLinkCompartilhar(nome) {
    return `${location.origin}${location.pathname}#${encodeURIComponent(nome)}`;
}

function copiarLink(nome) {
    const link = gerarLinkCompartilhar(nome);
    navigator.clipboard.writeText(link).then(() => {
        mostrarToast("Link copiado!");
    }).catch(() => {
        mostrarToast("Copie: " + link);
    });
}

function mostrarToast(mensagem) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = mensagem;
    toast.classList.add("toast-visivel");
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove("toast-visivel"), 2500);
}

function verificarHashInicial() {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (!hash) return;
    const todos = [...agentes, ...bosses];
    const personagem = todos.find(p => p.nome === hash);
    if (personagem) setTimeout(() => abrirModal(personagem), 400);
}

// ============================================================
//  EXPORTAR FICHA EM PDF (usando jsPDF library)
// ============================================================

function exportarFichaPDF(personagem) {
    // Criar um script para carregar jsPDF
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    
    script.onload = () => {
        const element = document.createElement('div');
        element.style.padding = '20px';
        element.style.fontFamily = 'Arial, sans-serif';
        element.style.backgroundColor = '#fff';
        element.style.color = '#000';
        
        const atributos = personagem.atributos;
        const pericias = personagem.pericias;
        
        let html = `
            <h1 style="text-align: center; margin-bottom: 10px;">${personagem.nome}</h1>
            <p style="text-align: center; margin: 5px 0; font-size: 14px;">
                <strong>Classe:</strong> ${personagem.classe} | 
                <strong>Status:</strong> ${Array.isArray(personagem.status) ? personagem.status.join(', ') : personagem.status}
            </p>
            <hr style="margin: 20px 0;">
            
            <h2 style="font-size: 18px; margin-top: 20px; margin-bottom: 10px;">CARACTERÍSTICAS</h2>
            <p style="margin-bottom: 15px;">
                ${(personagem.caracteristicas || []).map(c => {
                    const config = CARACTERISTICAS_CONFIG[c];
                    return config ? config.label : c;
                }).join(" • ")}
            </p>
            
            <h2 style="font-size: 18px; margin-top: 20px; margin-bottom: 10px;">ATRIBUTOS</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 5px; border: 1px solid #ccc;"><strong>Agilidade:</strong> ${atributos.agilidade}</td>
                    <td style="padding: 5px; border: 1px solid #ccc;"><strong>Força:</strong> ${atributos.forca}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; border: 1px solid #ccc;"><strong>Vigor:</strong> ${atributos.vigor}</td>
                    <td style="padding: 5px; border: 1px solid #ccc;"><strong>Intelecto:</strong> ${atributos.intelecto}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; border: 1px solid #ccc;"><strong>Presença:</strong> ${atributos.presenca}</td>
                    <td style="padding: 5px; border: 1px solid #ccc;"></td>
                </tr>
            </table>
            
            <h2 style="font-size: 18px; margin-top: 20px; margin-bottom: 10px;">PERÍCIAS</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
        `;
        
        const pericasArray = Object.entries(pericias);
        for (let i = 0; i < pericasArray.length; i += 2) {
            html += '<tr>';
            const [nome1, valor1] = pericasArray[i];
            html += `<td style="padding: 5px; border: 1px solid #ccc; width: 50%;"><strong>${nome1.charAt(0).toUpperCase() + nome1.slice(1)}:</strong> ${valor1}</td>`;
            
            if (i + 1 < pericasArray.length) {
                const [nome2, valor2] = pericasArray[i + 1];
                html += `<td style="padding: 5px; border: 1px solid #ccc; width: 50%;"><strong>${nome2.charAt(0).toUpperCase() + nome2.slice(1)}:</strong> ${valor2}</td>`;
            } else {
                html += `<td style="padding: 5px; border: 1px solid #ccc; width: 50%;"></td>`;
            }
            html += '</tr>';
        }
        
        html += `
            </table>
            <p style="margin-top: 30px; font-size: 11px; color: #666; text-align: center;">
                Ficha gerada em ${new Date().toLocaleDateString('pt-BR')}
            </p>
        `;
        
        element.innerHTML = html;
        
        const opt = {
            margin: 10,
            filename: `${personagem.nome}_ficha.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };
        
        html2pdf().set(opt).from(element).save();
        mostrarToast(`Ficha de ${personagem.nome} exportada em PDF!`);
    };
    
    document.head.appendChild(script);
}

// ============================================================
//  GALERIA DE RELACIONAMENTOS
// ============================================================

function abrirGaleriaRelacionamentos(personagem) {
    const modal = document.createElement('div');
    modal.className = 'modal-relacionamentos';
    modal.innerHTML = `
        <div class="modal-overlay-rel" onclick="this.parentElement.remove()"></div>
        <div class="modal-conteudo-rel">
            <button class="modal-fechar-rel" onclick="this.parentElement.parentElement.remove()">&times;</button>
            <h2>🔗 Relacionamentos - ${personagem.nome}</h2>
            <div class="relacionamentos-container" id="relacionamentosContainer"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const container = modal.querySelector('#relacionamentosContainer');
    const rels = personagem.relacionamentos || {};
    
    if (Object.keys(rels).length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; padding: 20px;">Nenhum relacionamento registrado.</p>';
    } else {
        Object.entries(rels).forEach(([tipo, descricao]) => {
            const relCard = document.createElement('div');
            relCard.className = 'rel-card';
            relCard.innerHTML = `
                <div class="rel-tipo">💬 ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</div>
                <div class="rel-descricao">${descricao}</div>
            `;
            container.appendChild(relCard);
        });
    }
    
    const todos = [...agentes, ...bosses];
    const relacionadosCom = todos.filter(p => {
        const rels = p.relacionamentos || {};
        return Object.values(rels).some(desc => desc.includes(personagem.nome));
    });
    
    if (relacionadosCom.length > 0) {
        const titulo = document.createElement('h3');
        titulo.textContent = '🔗 Relacionado com:';
        titulo.style.marginTop = '30px';
        container.appendChild(titulo);
        
        relacionadosCom.forEach(p => {
            const relCard = document.createElement('div');
            relCard.className = 'rel-card rel-card-conectado';
            relCard.style.cursor = 'pointer';
            relCard.innerHTML = `
                <div class="rel-tipo">👤 ${p.nome}</div>
                <div class="rel-descricao">${p.classe} | ${Array.isArray(p.status) ? p.status[0] : p.status}</div>
            `;
            relCard.onclick = () => {
                modal.remove();
                abrirGaleriaRelacionamentos(p);
            };
            container.appendChild(relCard);
        });
    }
}

// ============================================================
//  ÁUDIO
// ============================================================

let fadeInterval = null;

function tocarAudio(url) {
    const player = document.getElementById("player-rpg");
    if (!player || !url || url.startsWith("URL_")) return;
    clearInterval(fadeInterval);
    player.src = url;
    player.volume = 0;
    player.play().catch(() => {});
    fadeInterval = setInterval(() => {
        if (player.volume < 0.5) {
            player.volume = Math.min(player.volume + 0.05, 0.5);
        } else {
            clearInterval(fadeInterval);
        }
    }, 50);
}

function pararAudio() {
    const player = document.getElementById("player-rpg");
    if (!player) return;
    clearInterval(fadeInterval);
    player.pause();
    player.currentTime = 0;
}

// ============================================================
//  RENDERIZAÇÃO DOS CARDS
// ============================================================

function criarCard(personagem) {
    const statsHTML = Object.entries(personagem.stats)
        .map(([chave, valor]) => `<span>${chave}: ${valor}</span>`)
        .join("");

    const statusList = Array.isArray(personagem.status) ? personagem.status : [personagem.status];
    const statusHTML = statusList
        .map(s => `<span class="card-status" style="background:${COR_STATUS[s] || '#aaa'}">${s}</span>`)
        .join("");
    const fav = ehFavorito(personagem.nome) ? "★" : "☆";

    return `
        <div class="card card-animado" data-audio="${personagem.audio}" data-nome="${personagem.nome}">
            <div class="card-image" style="background-image: url('${personagem.imagem}');" role="img" aria-label="Retrato de ${personagem.nome}">
                <div class="card-status-group">${statusHTML}</div>
                <button class="card-fav" aria-label="Favoritar ${personagem.nome}" data-fav="${personagem.nome}">${fav}</button>
            </div>
            <div class="card-content">
                <span class="classe">${personagem.classe}</span>
                <h3>${personagem.nome}</h3>
                <p>${personagem.historia}</p>
                <div class="stats">
                    ${statsHTML}
                </div>
            </div>
        </div>
    `;
}

function renderizarAgentes() {
    const galeria = document.getElementById("galeria");
    if (!galeria) return;

    const favs = getFavoritos();
    const ordenados = [
        ...agentes.filter(p => favs.includes(p.nome)),
        ...agentes.filter(p => !favs.includes(p.nome))
    ];

    galeria.innerHTML = ordenados.map(criarCard).join("");
}

function renderizarBosses() {
    const bossContainer = document.getElementById("boss-card");
    if (!bossContainer) return;
    
    bossContainer.innerHTML = bosses.map(boss => {
        const card = criarCard(boss);
        return card.replace('class="card card-animado"', 'class="card card-animado boss-card"');
    }).join("");
}

// ============================================================
//  ANIMAÇÃO DE ENTRADA
// ============================================================

function inicializarAnimacoes() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-visivel");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".card-animado").forEach((card, i) => {
        card.style.transitionDelay = `${i * 80}ms`;
        observer.observe(card);
    });
}

// ============================================================
//  EFEITO ESTÁTICA
// ============================================================

function iniciarEstatica(canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width  = canvas.offsetWidth  || 280;
    canvas.height = canvas.offsetHeight || 400;

    let frame = 0;
    const totalFrames = 30;
    let animId;

    function desenhar() {
        const progresso = frame / totalFrames;
        const opacidade = Math.max(0, 1 - progresso);

        const img = ctx.createImageData(canvas.width, canvas.height);
        for (let i = 0; i < img.data.length; i += 4) {
            const ruido = Math.random() > progresso ? (Math.random() * 255) : 0;
            img.data[i]     = ruido;
            img.data[i + 1] = ruido;
            img.data[i + 2] = ruido;
            img.data[i + 3] = Math.floor(255 * opacidade);
        }
        ctx.putImageData(img, 0, 0);

        frame++;
        if (frame <= totalFrames) {
            animId = requestAnimationFrame(desenhar);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    desenhar();
    return () => cancelAnimationFrame(animId);
}

// ============================================================
//  MODAL
// ============================================================

let cancelarEstatica = null;

function criarModal() {
    const modal = document.createElement("div");
    modal.id = "modal-ficha";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Ficha do personagem");
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-conteudo">
            <button class="modal-fechar" aria-label="Fechar ficha">&times;</button>
            <div class="modal-imagem" id="modal-img">
                <canvas id="modal-estatica"></canvas>
            </div>
            <div class="modal-corpo">
                <div class="modal-cabecalho">
                    <span class="classe" id="modal-classe"></span>
                    <div class="modal-status-group" id="modal-status-badge"></div>
                </div>
                <h2 id="modal-nome"></h2>
                <div class="modal-caracteristicas" id="modal-caracteristicas"></div>
                <p id="modal-historia"></p>
                <div class="stats modal-stats" id="modal-stats"></div>
                <div class="modal-acoes">
                    <button id="btn-play-audio">▶️ Tocar música</button>
                    <button class="btn-fav-modal" id="btn-fav-modal">☆ Favoritar</button>
                    <button class="btn-compartilhar" id="btn-compartilhar">⎘ Copiar link</button>
                    <button id="btn-relacionamentos">🔗 Relacionamentos</button>
                    <button id="btn-exportar-pdf">📄 Exportar Ficha</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".modal-overlay").addEventListener("click", fecharModal);
    modal.querySelector(".modal-fechar").addEventListener("click", fecharModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") fecharModal();
    });
}

function abrirModal(personagem) {
    const modal = document.getElementById("modal-ficha");

    // Aplicar cores dinâmicas baseado em características
    const corPrincipal = obterCorModalPorCaracteristicas(personagem.caracteristicas);
    const modalConteudo = modal.querySelector(".modal-conteudo");
    
    if (typeof corPrincipal === 'string' && corPrincipal.includes('linear-gradient')) {
        modalConteudo.style.borderImage = `${corPrincipal} 1`;
    } else {
        modalConteudo.style.borderColor = corPrincipal;
    }

    document.getElementById("modal-img").style.backgroundImage = `url('${personagem.imagem}')`;
    document.getElementById("modal-classe").textContent   = personagem.classe;
    document.getElementById("modal-nome").textContent     = personagem.nome;
    document.getElementById("modal-historia").textContent = personagem.historia;

    // Exibir características
    const caracDiv = document.getElementById("modal-caracteristicas");
    caracDiv.innerHTML = criarBadgesCaracteristicas(personagem.caracteristicas);

    const statusList = Array.isArray(personagem.status) ? personagem.status : [personagem.status];
    const badgeContainer = document.getElementById("modal-status-badge");
    badgeContainer.innerHTML = statusList
        .map(s => `<span class="modal-status" style="background:${COR_STATUS[s] || '#aaa'}">${s}</span>`)
        .join("");

    const statsHTML = Object.entries(personagem.stats)
        .map(([chave, valor]) => `<span>${chave}: ${valor}</span>`)
        .join("");
    document.getElementById("modal-stats").innerHTML = statsHTML;

    const btnFav = document.getElementById("btn-fav-modal");
    btnFav.textContent = ehFavorito(personagem.nome) ? "★ Favoritado" : "☆ Favoritar";
    btnFav.onclick = () => {
        const agora = toggleFavorito(personagem.nome);
        btnFav.textContent = agora ? "★ Favoritado" : "☆ Favoritar";
        mostrarToast(agora ? "Adicionado aos favoritos!" : "Removido dos favoritos.");
        renderizarAgentes();
        renderizarBosses();
        inicializarAnimacoes();
        inicializarHover();
        inicializarFavoritosCards();
    };

    document.getElementById("btn-compartilhar").onclick = () => copiarLink(personagem.nome);
    
    document.getElementById("btn-relacionamentos").onclick = () => {
        abrirGaleriaRelacionamentos(personagem);
    };
    
    document.getElementById("btn-exportar-pdf").onclick = () => {
        exportarFichaPDF(personagem);
    };

    modal.classList.add("modal-aberto");
    document.body.style.overflow = "hidden";

    const canvas = document.getElementById("modal-estatica");
    canvas.width  = 0;
    canvas.height = 0;
    requestAnimationFrame(() => {
        canvas.width  = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        if (cancelarEstatica) cancelarEstatica();
        cancelarEstatica = iniciarEstatica(canvas);
    });
}

function fecharModal() {
    const modal = document.getElementById("modal-ficha");
    modal.classList.remove("modal-aberto");
    document.body.style.overflow = "";
    if (cancelarEstatica) { cancelarEstatica(); cancelarEstatica = null; }
    pararAudio();
}

function inicializarModal() {
    criarModal();

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.closest(".card-fav")) return;

            const nome = card.dataset.nome;
            const todos = [...agentes, ...bosses];
            const personagem = todos.find(p => p.nome === nome);
            if (personagem) abrirModal(personagem);
            const btnPlay = document.getElementById("btn-play-audio");

            if (btnPlay) {
                btnPlay.textContent = "▶️ Tocar música";
                btnPlay.onclick = () => {
                    const player = document.getElementById("player-rpg");
                    if (player.paused) {
                        tocarAudio(personagem.audio);
                        btnPlay.textContent = "⏸️ Pausar música";
                    } else {
                        pararAudio();
                        btnPlay.textContent = "▶️ Tocar música";
                    }
                };
            }
        });
    });
}

// ============================================================
//  HOVER
// ============================================================

function inicializarHover() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            if (document.getElementById("modal-ficha").classList.contains("modal-aberto")) return;
            tocarAudio(card.getAttribute("data-audio"));
        });
        card.addEventListener("mouseleave", () => {
            if (document.getElementById("modal-ficha").classList.contains("modal-aberto")) return;
            pararAudio();
        });
    });
}

// ============================================================
//  FAVORITO
// ============================================================

function inicializarFavoritosCards() {
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".card-fav");
        if (!btn) return;
        e.stopPropagation();
        const nome = btn.dataset.fav;
        const agora = toggleFavorito(nome);
        mostrarToast(agora ? "Adicionado aos favoritos!" : "Removido dos favoritos.");
        renderizarAgentes();
        renderizarBosses();
        inicializarAnimacoes();
        inicializarHover();
    });
}

// ============================================================
//  SISTEMA DE DADOS COM ANIMAÇÃO
// ============================================================

function renderizarDados() {
    const container = document.querySelector("main");
    if (!container) return;

    const dadosHTML = `
        <section class="dados-section" aria-label="Sistema de dados para testes">
            <h2 class="dados-title">🎲 LANÇAR DADOS</h2>
            <div class="dados-container">
                <button class="dado-btn dado-d20" onclick="lancarDado(20)" title="d20 - 20 lados">
                    d20
                </button>
                <button class="dado-btn dado-d12" onclick="lancarDado(12)" title="d12 - 12 lados">
                    d12
                </button>
                <button class="dado-btn dado-d10" onclick="lancarDado(10)" title="d10 - 10 lados">
                    d10
                </button>
                <button class="dado-btn dado-d6" onclick="lancarDado(6)" title="d6 - 6 lados">
                    d6
                </button>
            </div>
        </section>
    `;

    container.insertAdjacentHTML("afterend", dadosHTML);
}

function lancarDado(lados) {
    const botao = event.target;
    botao.disabled = true;

    // Simular animação de rolagem
    let resultado = 0;
    let animacoes = 0;
    const maxAnimacoes = 15;

    const intervalo = setInterval(() => {
        resultado = Math.floor(Math.random() * lados) + 1;
        animacoes++;

        if (animacoes >= maxAnimacoes) {
            clearInterval(intervalo);
            resultado = Math.floor(Math.random() * lados) + 1;
            botao.disabled = false;
            mostrarResultadoDado(resultado, lados);
        }
    }, 60);
}

function mostrarResultadoDado(resultado, lados) {
    // Criar overlay
    const overlay = document.createElement("div");
    overlay.className = "dado-overlay";
    overlay.onclick = () => fecharResultadoDado();

    // Criar modal de resultado
    const modalResultado = document.createElement("div");
    modalResultado.className = "dado-resultado";
    modalResultado.innerHTML = `
        <div class="dado-resultado-tipo">d${lados}</div>
        <h1>${resultado}</h1>
        <div class="dado-resultado-botoes">
            <button onclick="lancarDado(${lados})">Lançar novamente</button>
            <button onclick="fecharResultadoDado()">Fechar</button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(modalResultado);

    // Gerar confete
    gerarConfete();

    // Fechar ao clicar no overlay
    overlay.addEventListener("click", fecharResultadoDado);
}

function fecharResultadoDado() {
    const overlay = document.querySelector(".dado-overlay");
    const resultado = document.querySelector(".dado-resultado");

    if (overlay) overlay.remove();
    if (resultado) resultado.remove();
}

function gerarConfete() {
    const cores = ["#d4af37", "#2563eb", "#dc2626", "#7c3aed", "#059669"];

    for (let i = 0; i < 30; i++) {
        const confete = document.createElement("div");
        confete.className = "confete";
        confete.style.left = Math.random() * window.innerWidth + "px";
        confete.style.top = "-10px";
        confete.style.background = cores[Math.floor(Math.random() * cores.length)];
        confete.style.animationDuration = (2 + Math.random() * 1) + "s";
        confete.style.animation = `confete ${2 + Math.random() * 1}s ease-in forwards`;

        document.body.appendChild(confete);

        setTimeout(() => confete.remove(), 3000);
    }
}

// ============================================================
//  INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    renderizarAgentes();
    renderizarBosses();
    renderizarDados();
    inicializarAnimacoes();
    inicializarModal();
    inicializarHover();
    inicializarFavoritosCards();
    verificarHashInicial();
})


const btnEntrar = document.getElementById('btn-entrar');
const telaInicio = document.getElementById('tela-inicio');

btnEntrar.addEventListener('click', () => {
    telaInicio.classList.add('sumir');
});