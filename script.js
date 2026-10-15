/* ============ CONFIGURAÇÕES ============ */
// Logo oficial: coloque aqui o endereço/arquivo da imagem (ex.: "logo-ifpr.png"). Vazio = mostra o selo "IF".
const LOGO_SRC = "logo.png";


// Dados da planilha "Lista de Servidores" (t: D=docente, S=substituto, T=técnico).
const PROFESSORES = [{"t":"D","grupo":"Eng. Elétrica","nome":"Alex Miyamoto Mussi","emails":["alex.mussi@ifpr.edu.br"],"area":"Eng. Elétrica","obs":""},{"t":"D","grupo":"Física","nome":"Alex Soares de Brito","emails":["alex.brito@ifpr.edu.br"],"area":"Física","obs":"Coordenador de Pesquisa e Extensão"},{"t":"D","grupo":"Administração e Gestão","nome":"Alexandre José Schumacher","emails":["alexandre.schumacher@ifpr.edu.br"],"area":"Gestão","obs":"Coordenador da Especialização em Gestão Corporativa"},{"t":"D","grupo":"Geografia","nome":"Alexandre Roberto Valcarenghi","emails":["alexandre.valcarenghi@ifpr.edu.br"],"area":"Geografia","obs":"Coordenador do NAPNE"},{"t":"D","grupo":"Informática e Computação","nome":"Alexandre Rodrigues Monge","emails":["alexandre.monge@ifpr.edu.br"],"area":"Informática","obs":""},{"t":"D","grupo":"História","nome":"Amilcar Machado Profeta Filho","emails":["amilcar.filho@ifpr.edu.br"],"area":"História","obs":"Afastado (pós-graduação)"},{"t":"D","grupo":"Química","nome":"Antonio Cesar Godoy","emails":["antonio.godoy@ifpr.edu.br","tec.ccte.assis@ifpr.edu.br"],"area":"Química","obs":"Coordenador do Curso de Eletromecânica"},{"t":"D","grupo":"Informática e Computação","nome":"Caroline Domingues Porto do Nascimento Barbieri","emails":["caroline.barbieri@ifpr.edu.br"],"area":"Eng. Software","obs":""},{"t":"D","grupo":"Português e Línguas","nome":"Celina de Oliveira Barbosa Gomes","emails":["celina.gomes@ifpr.edu.br"],"area":"Português/Inglês","obs":""},{"t":"D","grupo":"Química","nome":"Cosme Oliveira da Silva","emails":["cosme.silva@ifpr.edu.br"],"area":"Química","obs":""},{"t":"D","grupo":"Eng. Mecânica e Automação","nome":"Darlan Roque Dapieve","emails":["darlan.dapieve@ifpr.edu.br"],"area":"Eng. Mecânica","obs":""},{"t":"D","grupo":"Informática e Computação","nome":"Douglas Barbosa Sousa","emails":["douglas.sousa@ifpr.edu.br"],"area":"Informática","obs":"Coordenador do Curso de Análise e Desenvolvimento de Sistemas"},{"t":"D","grupo":"Informática e Computação","nome":"Eduardo Alberto Felippsen","emails":["eduardo.felippsen@ifpr.edu.br"],"area":"Informática","obs":"Afastado (pós-graduação)"},{"t":"D","grupo":"Matemática","nome":"Elenice Josefa Kolancko Setti","emails":["elenice.setti@ifpr.edu.br"],"area":"Matemática","obs":"Coordenadora da Pós em Matemática"},{"t":"D","grupo":"Biologia","nome":"Eliana Peliçon Pereira Figueira","emails":["eliana.figueira@ifpr.edu.br"],"area":"Biologia","obs":""},{"t":"D","grupo":"Ciências Agrárias","nome":"Elias Franco","emails":["elias.franco@ifpr.edu.br"],"area":"Eng. Agrônomo","obs":""},{"t":"D","grupo":"Matemática","nome":"Elizangela Mendes Pereira","emails":["elizangela.mendes@ifpr.edu.br"],"area":"Matemática","obs":""},{"t":"D","grupo":"Sociologia e Filosofia","nome":"Everaldo Lorensetti","emails":["everaldo.lorensetti@ifpr.edu.br","diepex.assis@ifpr.edu.br","esp.ge.assis@ifpr.edu.br"],"area":"Sociologia","obs":"Diretor de Ensino, Pesquisa e Extensão"},{"t":"D","grupo":"Eng. Mecânica e Automação","nome":"Fábio Fernandes da Silva","emails":["fabio.fernandes@ifpr.edu.br"],"area":"Eng. Mecânica","obs":""},{"t":"D","grupo":"Educação Física","nome":"Franciele Fernandes Baliero","emails":["franciele.baliero@ifpr.edu.br"],"area":"Ed. Física","obs":""},{"t":"D","grupo":"Administração e Gestão","nome":"Haroldo Yutaka Misunaga","emails":["haroldo.misunaga@ifpr.edu.br","sup.cctgc.assis@ifpr.edu.br"],"area":"Administração","obs":""},{"t":"D","grupo":"Informática e Computação","nome":"Humberto Fioravante Ferro","emails":["humberto.ferro@ifpr.edu.br"],"area":"Informática","obs":"Coordenador do Técnico em Informática para Internet (Assis)"},{"t":"D","grupo":"História","nome":"Jael dos Santos","emails":["jael.dossantos@ifpr.edu.br"],"area":"História","obs":""},{"t":"D","grupo":"Eng. Elétrica","nome":"Jair Fajardo Junior","emails":["jair.junior@ifpr.edu.br"],"area":"Eng. Elétrica","obs":""},{"t":"D","grupo":"Geografia","nome":"Jhones Donizetti Mendes","emails":["jhones.mendes@ifpr.edu.br"],"area":"Geografia","obs":""},{"t":"D","grupo":"Informática e Computação","nome":"Joaquim José Honorio de Lima","emails":["joaquim.lima@ifpr.edu.br","direcao.assis@ifpr.edu.br"],"area":"Ciência da Computação","obs":"Diretor Geral"},{"t":"D","grupo":"Matemática","nome":"Jonatan Ismael Eisermann","emails":["jonatan.eisermann@ifpr.edu.br"],"area":"Matemática","obs":""},{"t":"D","grupo":"Sociologia e Filosofia","nome":"José Jurandir Pereira Junior","emails":["jose.jurandir@ifpr.edu.br"],"area":"Filosofia","obs":""},{"t":"D","grupo":"Sociologia e Filosofia","nome":"José Provetti Júnior","emails":["jose.provetti@ifpr.edu.br"],"area":"Filosofia","obs":""},{"t":"D","grupo":"Artes","nome":"Josiane Paula Maltauro","emails":["josiane.maltauro@ifpr.edu.br"],"area":"Artes","obs":""},{"t":"D","grupo":"Eng. Elétrica","nome":"Juliano da Rocha Queiroz","emails":["juliano.queiroz@ifpr.edu.br","tec.cctel.assis@ifpr.edu.br"],"area":"Eletrotécnica","obs":"Coordenador do Curso de Eletrotécnica"},{"t":"D","grupo":"Biologia","nome":"Karina Dias Espartosa","emails":["karina.espartosa@ifpr.edu.br"],"area":"Biologia","obs":""},{"t":"D","grupo":"Português e Línguas","nome":"Kátia Cristiane Kobus Novaes","emails":["katia.novaes@ifpr.edu.br"],"area":"Português/Inglês","obs":""},{"t":"D","grupo":"Administração e Gestão","nome":"Keyla Christina Almeida Portela","emails":["keyla.portela@ifpr.edu.br"],"area":"Secretariado Executivo","obs":""},{"t":"D","grupo":"Educação Física","nome":"Kleber Augusto Michalichem","emails":["kleber.michalichem@ifpr.edu.br"],"area":"Educação Física","obs":""},{"t":"D","grupo":"Biologia","nome":"Leandro Luiz Borges","emails":["leandro.borges@ifpr.edu.br","tec.ccta.assis@ifpr.edu.br"],"area":"Biologia","obs":"Coordenador do Técnico em Alimentos"},{"t":"D","grupo":"Administração e Gestão","nome":"Lechan Colares Santos","emails":["lechan.santos@ifpr.edu.br"],"area":"Administração","obs":"Cooperação técnica no Campus Arapongas"},{"t":"D","grupo":"Ciências Agrárias","nome":"Leiliane Cristine de Souza","emails":["leiliane.souza@ifpr.edu.br"],"area":"Zootecnia","obs":""},{"t":"D","grupo":"Administração e Gestão","nome":"Leocadia Candido da Silva","emails":["leocadia.silva@ifpr.edu.br"],"area":"Administração","obs":""},{"t":"D","grupo":"Informática e Computação","nome":"Luís Henrique Manosso Von Mecheln","emails":["luis.vonmecheln@ifpr.edu.br","sepae.assis@ifpr.edu.br"],"area":"Informática","obs":"Chefe da Seção Pedagógica e de Assuntos Estudantis"},{"t":"D","grupo":"Eng. Mecânica e Automação","nome":"Luiz Inácio Chaves","emails":["luiz.chaves@ifpr.edu.br"],"area":"Eng. Mecânica","obs":""},{"t":"D","grupo":"Educação Especial e Pedagogia","nome":"Marcia Aparecida Barbosa","emails":["marcia.barbosa@ifpr.edu.br"],"area":"Pedagogia","obs":"Afastada (pós-graduação)"},{"t":"D","grupo":"Ciências Agrárias","nome":"Marcos Rogério Oliveira","emails":["marcos.rogerio@ifpr.edu.br"],"area":"Veterinária","obs":"Coordenador do Técnico em Agropecuária"},{"t":"D","grupo":"Eng. Mecânica e Automação","nome":"Mario Eduardo de Barros Gomes e Nunes da Silva","emails":["mario.silva@ifpr.edu.br"],"area":"Automação Industrial","obs":""},{"t":"D","grupo":"Matemática","nome":"Mauro Cesar de Souza Siena","emails":["mauro.siena@ifpr.edu.br","tec.cctcom.assis@ifpr.edu.br"],"area":"Matemática","obs":"Coordenador do Técnico em Comércio"},{"t":"D","grupo":"Português e Línguas","nome":"Michelli Cristina Galli","emails":["michelli.galli@ifpr.edu.br"],"area":"Português/Espanhol","obs":""},{"t":"D","grupo":"Topografia e Geomática","nome":"Octavio Henrique Viana","emails":["octavio.viana@ifpr.edu.br"],"area":"Topografia/Geomática","obs":""},{"t":"D","grupo":"Informática e Computação","nome":"Olavo José Luiz Junior","emails":["olavo.junior@ifpr.edu.br"],"area":"Informática","obs":""},{"t":"D","grupo":"Educação Especial e Pedagogia","nome":"Paula Fabiane de Souza","emails":["paula.souza@ifpr.edu.br"],"area":"Educação Especial","obs":"Afastada (pós-graduação)"},{"t":"D","grupo":"Informática e Computação","nome":"Rafael Gil Ferques","emails":["rafael.ferques@ifpr.edu.br"],"area":"Ciência da Computação","obs":""},{"t":"D","grupo":"Informática e Computação","nome":"Rafael Luis Bartz","emails":["rafael.bartz@ifpr.edu.br"],"area":"Ciência da Computação","obs":""},{"t":"D","grupo":"Geografia","nome":"Renato Lada Guerreiro","emails":["renato.guerreiro@ifpr.edu.br"],"area":"Geografia","obs":""},{"t":"D","grupo":"Ciências Agrárias","nome":"Roberto Haruyoshi Ito","emails":["roberto.ito@ifpr.edu.br"],"area":"Zootecnia","obs":""},{"t":"D","grupo":"Química","nome":"Sabrina Kerkhoff","emails":["sabrina.kerkhoff@ifpr.edu.br"],"area":"Química","obs":"Chefe da Seção de Inovação e Empreendedorismo; afastada (licença saúde)"},{"t":"D","grupo":"Informática e Computação","nome":"Sergio Ricardo Ferrazoli","emails":["sergio.ferrazoli@ifpr.edu.br","tec.ccti.assis@ifpr.edu.br"],"area":"Informática","obs":"Coordenador do Técnico em Informática para Internet (Toledo)"},{"t":"D","grupo":"Eng. Mecânica e Automação","nome":"Sérgio Takahashi","emails":["sergio.takahashi@ifpr.edu.br"],"area":"Eng. Mecânica","obs":""},{"t":"D","grupo":"Artes","nome":"Simone de Miranda","emails":["simone.miranda@ifpr.edu.br"],"area":"Artes","obs":""},{"t":"D","grupo":"Ciências Agrárias","nome":"Sônia Maria Mandotti","emails":["sonia.mandotti@ifpr.edu.br"],"area":"Eng. Agrônoma","obs":"Afastada (pós-graduação)"},{"t":"D","grupo":"História","nome":"Suzane Conceição Pantolfi Tostes","emails":["suzane.tostes@ifpr.edu.br"],"area":"História","obs":""},{"t":"D","grupo":"Educação Física","nome":"Tiago Amaral Silva","emails":["tiago.amaral@ifpr.edu.br","sup.cb.assischateaubriand@ifpr.edu.br"],"area":"Ed. Física","obs":"Coordenador do Curso de Ciências Biológicas"},{"t":"D","grupo":"Informática e Computação","nome":"Vagner Simões Santos","emails":["vagner.simoes@ifpr.edu.br","coens.assis@ifpr.edu.br"],"area":"Informática","obs":"Coordenador de Ensino"},{"t":"D","grupo":"Física","nome":"Vinicius de Souza Lamego","emails":["vinicius.lamego@ifpr.edu.br"],"area":"Física","obs":""},{"t":"D","grupo":"Física","nome":"Vitor Prestes Luzio","emails":["vitor.luzio@ifpr.edu.br"],"area":"Física","obs":""},{"t":"D","grupo":"Eng. Elétrica","nome":"Wylliam Salviano Gongora","emails":["wylliam.gongora@ifpr.edu.br"],"area":"Eng. Elétrica","obs":""},{"t":"D","grupo":"Português e Línguas","nome":"Yohana Diel Saheli","emails":["yohana.saheli@ifpr.edu.br"],"area":"Português/Inglês","obs":"Afastada (pós-graduação)"},{"t":"D","grupo":"Educação Especial e Pedagogia","nome":"Janaina Alves de Oliveira Cordeiro do Amaral","emails":["janaina.oliveira@ifpr.edu.br"],"area":"Educação Especial","obs":""},{"t":"D","grupo":"Português e Línguas","nome":"Patricia Denicolo David Prati","emails":["patricia.prati@ifpr.edu.br"],"area":"Português","obs":""},{"t":"S","grupo":"História","nome":"André Alexandre Valentini","emails":["andre.valentini@ifpr.edu.br"],"area":"História","obs":""},{"t":"S","grupo":"Português e Línguas","nome":"Andrey Felipe Martins","emails":["andrey.martins@ifpr.edu.br"],"area":"Português/Inglês","obs":""},{"t":"S","grupo":"Química","nome":"Ariane Regina de Souza Rossin","emails":["ariane.rossin@ifpr.edu.br"],"area":"Química","obs":""},{"t":"S","grupo":"Alimentos","nome":"Beatriz de Souza Gonçalves Proença","emails":["beatriz.proenca@ifpr.edu.br"],"area":"Alimentos","obs":""},{"t":"S","grupo":"Administração e Gestão","nome":"Daiane Cristina da Silva","emails":["daiane.cristina@ifpr.edu.br"],"area":"Administração","obs":""},{"t":"S","grupo":"Administração e Gestão","nome":"Diego Padovan Vieira","emails":["diego.padovan@ifpr.edu.br"],"area":"Administração","obs":""},{"t":"S","grupo":"Ciências Agrárias","nome":"Fernanda da Silva Ferreira","emails":["fernanda.ferreira@ifpr.edu.br"],"area":"Agronomia","obs":""},{"t":"S","grupo":"Sociologia e Filosofia","nome":"Olavo Henrique Vieira Veiga","emails":["olavo.veiga@ifpr.edu.br"],"area":"Sociologia/Filosofia","obs":""},{"t":"S","grupo":"Eng. Elétrica","nome":"Samir El Halabi","emails":["samir.halabi@ifpr.edu.br"],"area":"Elétrica","obs":""},{"t":"S","grupo":"Educação Especial e Pedagogia","nome":"Tatiane Soares da Silva","emails":["tatiane.dasilva@ifpr.edu.br"],"area":"Educação Especial","obs":""},{"t":"T","grupo":"Técnicos administrativos","nome":"Ademir Rodrigo de Araújo Santos","emails":["ademir.santos@ifpr.edu.br","estagios.assis@ifpr.edu.br","comunicacao.assis@ifpr.edu.br"],"area":"Aux. Biblioteca / Seção de Estágios e Relações Comunitárias","obs":"Chefe da Seção de Estágios e Relações Comunitárias"},{"t":"T","grupo":"Técnicos administrativos","nome":"Amanda Rottava","emails":["amanda.rottava@ifpr.edu.br"],"area":"Psicóloga","obs":"Afastada (outro órgão)"},{"t":"T","grupo":"Técnicos administrativos","nome":"Cesar Augusto Silveira Junior","emails":["cesar.junior@ifpr.edu.br"],"area":"Assistente Administrativo / Biblioteca","obs":""},{"t":"T","grupo":"Técnicos administrativos","nome":"Cler Rosane Coldebella Muraro","emails":["cler.muraro@ifpr.edu.br","biblioteca.assis@ifpr.edu.br"],"area":"Bibliotecária","obs":""},{"t":"T","grupo":"Técnicos administrativos","nome":"Cristiane Tatiane Anzanello","emails":["cristiane.anzanello@ifpr.edu.br"],"area":"Secretária Executiva / Gabinete da Direção","obs":""},{"t":"T","grupo":"Técnicos administrativos","nome":"Edson Alberto Becker","emails":["edson.becker@ifpr.edu.br"],"area":"Técnico em Contabilidade / Coordenadoria Contábil, Financeira e Orçamentária","obs":"Coordenador"},{"t":"T","grupo":"Técnicos administrativos","nome":"Elizangela Marroque Michalichem","emails":["elizangela.michalichem@ifpr.edu.br"],"area":"TAE / Biopark","obs":""}];
/* ======================================= */

const $ = s => document.querySelector(s);
const root = document.documentElement;
const store = {
  get(k){ try{ return localStorage.getItem(k) }catch(e){ return null } },
  set(k,v){ try{ localStorage.setItem(k,v) }catch(e){} }
};

/* Preferências */
let size = parseInt(store.get("fs")) || 100;
const applyPrefs = () => {
  root.style.setProperty("--fs", size + "%");
  const t = store.get("theme"); if (t) root.dataset.theme = t;
  if (store.get("contrast") === "1") root.dataset.contrast = "high";
  if (store.get("motion") === "1") document.body.classList.add("no-motion");
};
applyPrefs();

document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const a = b.dataset.act;
  if (a === "bigger"){ size = Math.min(160, size + 10); store.set("fs", size) }
  if (a === "smaller"){ size = Math.max(80, size - 10); store.set("fs", size) }
  if (a === "theme"){
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark"; store.set("theme", root.dataset.theme);
  }
  if (a === "contrast"){
    const on = root.dataset.contrast !== "high";
    on ? root.dataset.contrast = "high" : delete root.dataset.contrast;
    store.set("contrast", on ? "1" : "0"); b.setAttribute("aria-pressed", on);
  }
  if (a === "motion"){
    const on = document.body.classList.toggle("no-motion");
    store.set("motion", on ? "1" : "0"); b.setAttribute("aria-pressed", on);
  }
  root.style.setProperty("--fs", size + "%");
});

/* Logo */
if (LOGO_SRC) document.querySelectorAll("[data-logo]").forEach(el => {
  const img = document.createElement("img"); img.src = LOGO_SRC; img.alt = "Logo do IFPR Campus Assis Chateaubriand";
  img.className = "logo"; el.replaceWith(img);
});

/* Lista */
// No celular/tablet: abre o app de e-mail do aparelho (mailto:).
// No computador: abre o Gmail no navegador.
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || matchMedia("(pointer: coarse)").matches;
const gmail = email => isMobile
  ? "mailto:" + email
  : "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);
const alvo = isMobile ? "" : ' target="_blank" rel="noopener noreferrer"';
const dica = isMobile ? "(abre o app de e-mail)" : "(abre o Gmail em nova aba)";
const esc = s => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

let tipo = "P";
function render(term){
  const t = term.toLowerCase();
  const groups = {};
  PROFESSORES.filter(p => (tipo === "T") === (p.t === "T")).forEach(p => {
    if (!t || (p.nome + " " + p.grupo + " " + p.area).toLowerCase().includes(t)) (groups[p.grupo] ||= []).push(p);
  });
  const names = Object.keys(groups).sort((a,b) => a.localeCompare(b, "pt-BR"));
  $("#grid").innerHTML = names.map(m => `
    <section class="card" aria-labelledby="m-${esc(m)}">
      <h2 id="m-${esc(m)}"><svg aria-hidden="true"><use href="#book"/></svg>${esc(m)}</h2>
      <ul>${groups[m].sort((a,b)=>a.nome.localeCompare(b.nome,"pt-BR")).map(p => {
        const info = [p.area && p.area !== m ? p.area : "", p.t === "S" ? "Substituto(a)" : "", p.obs].filter(Boolean).join(" • ");
        return `<li class="item"><a href="${gmail(p.emails[0])}"${alvo}
               aria-label="Enviar e-mail para ${esc(p.nome)} ${dica}">
          ${esc(p.nome)}<small>${esc(p.emails[0])}</small>${info ? `<small>${esc(info)}</small>` : ""}</a>
          ${p.emails.length > 1 ? `<div class="extra">${p.emails.slice(1).map(x => `<a href="${gmail(x)}"${alvo} aria-label="Enviar e-mail para ${esc(x)} ${dica}">${esc(x.split("@")[0])}</a>`).join("")}</div>` : ""}</li>`; }).join("")}
      </ul>
    </section>`).join("");
  $("#empty").hidden = names.length > 0;
}
document.querySelectorAll("[data-tipo]").forEach(b => b.addEventListener("click", () => {
  tipo = b.dataset.tipo;
  document.querySelectorAll("[data-tipo]").forEach(x => { const on = x === b; x.setAttribute("aria-pressed", on); x.classList.toggle("primary", on); });
  render($("#q").value);
}));
$("#q").addEventListener("input", e => render(e.target.value));

render("");