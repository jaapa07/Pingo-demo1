/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "826fa94a31";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-C4XqpntJ.js","assets/A-GN-J4aO5d5I.js","assets/A-LG-CaF6cLwF.js","assets/A-LG-posto-T7DibmS6.js","assets/A-LG-venda-BW9n1mQD.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-C9VYksCQ.js","assets/A-MT-BGdcTwqV.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-B-fOErv3.js","assets/A-R2-H0Wa96hE.js","assets/A-R3-K72qjIja.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-BNnTeqeP.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-bwnl0V9Y.js","assets/A-SF-casa-BtMrT08P.js","assets/A-SF-parque-DPXwQJ0w.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-cKZ9KSwU.js","assets/A1-casa-1-DiVwvCa3.js","assets/A1-casa-2-DfSXH0JJ.js","assets/A1-casa-jogador-IvgEXi-d.js","assets/A1-lab-vNsWqfi6.js","assets/A1-quarto-xckoZkV5.js","assets/A10-B_e-d1at.js","assets/A10-casa-1-CvOCVTDu.js","assets/A10-casa-2-B6_7WqUZ.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-DFSJViL4.js","assets/A10-posto-n1xmkyp-.js","assets/A10-venda-U8dYUael.js","assets/A2-BLZRMjWT.js","assets/A2-casa-1-DVwH8seM.js","assets/A2-casa-2-DZOo7zvF.js","assets/A2-casa-aroeira-CVi9oUqc.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-CDC5_TMY.js","assets/A2-venda-BhqqzFh6.js","assets/A3-casa-1-BosFgOte.js","assets/A3-casa-2-DH7KqJom.js","assets/A3-casa-3-CgzE2pGH.js","assets/A3-cfxzTvb3.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-DsHmzA8L.js","assets/A3-venda-DeNYg2RL.js","assets/A4-casa-1-iOhgSX0a.js","assets/A4-casa-2-D5_e1tCD.js","assets/A4-casa-3-NGQiE8eJ.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-kY9YruAQ.js","assets/A4-mercado-BwzJcruL.js","assets/A4-posto-bWfUz1O-.js","assets/A4-treino-eIjSOSGH.js","assets/A4-venda-BjCGv40q.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-COXUEeqt.js","assets/A5-casa-2-C0okNGgd.js","assets/A5-casa-3-BiaSzF-D.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-B7L7ZjFf.js","assets/A5-venda-DxWRlkh3.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-DBdNldJl.js","assets/A6-casa-2-Bct0pL9R.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-BfFk0I-j.js","assets/A6-posto-Bu1wy3bI.js","assets/A6-venda-nvAmRAQ-.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-BcoyEIRN.js","assets/A7-casa-2-Butt2_BS.js","assets/A7-casa-3-CB9QFiay.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-C3Nq0qEJ.js","assets/A7-venda-DXBQnB9U.js","assets/A8-casa-1-nHK_iAi-.js","assets/A8-casa-2-aS41o4Gs.js","assets/A8-casa-3-BZI_M-ia.js","assets/A8-forja-B5LLtdG_.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-CvyqqKoC.js","assets/A8-venda-CjR3_pqB.js","assets/A9-B0c2B8c-.js","assets/A9-casa-1-JtxomZUW.js","assets/A9-casa-2-C5eiY8dP.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-dHdsZ15n.js","assets/A9-venda-jKgmtFCt.js","assets/B-CE-C76svNtj.js","assets/B-CH-rxuN8FxM.js","assets/B-CV-BD4lcjlr.js","assets/B-FA-DlBPZrbl.js","assets/B-LG-D1TysTR8.js","assets/B-LG-cabana-DDqSjvmF.js","assets/B-PA-ukdGCmVR.js","assets/B-R1-DzEdP-tr.js","assets/B-R2-Ciegbbio.js","assets/B-R3-Bw-dr4pB.js","assets/B-R4-BWdbhUfC.js","assets/B-R5-CQWSighK.js","assets/B-SG-BZJJV_Zx.js","assets/B-TA-DRgS0b-f.js","assets/B-TA-gruta-CdZHifyJ.js","assets/B-VV-DwEyiwF5.js","assets/B1-Ck8SiLVz.js","assets/B1-casa-1-D8eRkkVG.js","assets/B1-casa-2-DQjN9-ya.js","assets/B1-casa-3-B7axHWRI.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-CtwvfPCq.js","assets/B1-posto-DCNyvcKi.js","assets/B1-salao-C7lAqloj.js","assets/B1-venda-6ULnKt2i.js","assets/B2-0h4iSQlz.js","assets/B2-casa-1-CaCooZTs.js","assets/B2-casa-2-DHgRmjhC.js","assets/B2-centro-BZalyrVG.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-CAr8kr7p.js","assets/B2-venda-CsvkXmCH.js","assets/B3--rZPQrMT.js","assets/B3-casa-1-BsjV5E_a.js","assets/B3-casa-2-Ci7uFWWF.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-DOP2ZlXO.js","assets/B3-mina-2-CSvjRPcu.js","assets/B3-posto-CFlZVTbz.js","assets/B3-venda-CU0o0ban.js","assets/B4-DKv3K8li.js","assets/B4-casa-1-0WS75YEw.js","assets/B4-forja-ZCFg_oR-.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-DiVaR5E7.js","assets/B4-venda-QnGk2fAj.js","assets/B5-casa-1-D6lgr_45.js","assets/B5-casa-2-B93GLQUt.js","assets/B5-casa-3-DMohWegO.js","assets/B5-casa-4-a8d228MI.js","assets/B5-fVIwGY8A.js","assets/B5-feira-CwMcEvIr.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-DFFU9jlz.js","assets/B5-venda-Dtru2vBH.js","assets/B6-DdEYuLB2.js","assets/B6-casa-1-auZcrjpe.js","assets/B6-casa-2-DelZu6_I.js","assets/B6-casa-3-BbWwnwdE.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-BK1MbxO0.js","assets/B6-lab-2-Dnuhg-dD.js","assets/B6-lab-3-C0nl6vgt.js","assets/B6-posto-D7vgrE-_.js","assets/B6-venda-RMaJV_aX.js","assets/B7-casa-1-BTbUxzvB.js","assets/B7-casa-2-DvuKHLC1.js","assets/B7-ctg-CcHJN3CT.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-DdMzJFc2.js","assets/B7-vEdO_t8c.js","assets/B7-venda-Bw2R83u9.js","assets/B8-C07m4KV6.js","assets/B8-casa-1-CEvrvr5z.js","assets/B8-casa-2-bMJh7dY9.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-CgMK1tk7.js","assets/B8-posto-Da5k7fA_.js","assets/B8-venda-D1nCChgV.js","assets/B9-B6pc_t_M.js","assets/B9-casa-1-DMfxbzIq.js","assets/B9-casa-2-B4yRr6DD.js","assets/B9-posto-BzMDFyhW.js","assets/B9-venda-Ds7a1Mt2.js","assets/PP-DpTfMxcq.js","assets/PP-conselho-CYOxjV7g.js","assets/PP-gruta-CySjp8n4.js","assets/PP-posto-C0i-aX0I.js","assets/PP-venda-BfsPMsvh.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-Kw0-pyTb.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BfpdMrzw.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-DFy1nNpy.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-BQgCBcHq.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-DUdTy4Fh.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-BHw2HsQd.js","assets/atlas.json","assets/audio-Dwu-20_b.js","assets/b1-C1-4sy1k.js","assets/b2-norte-h3eEiJgL.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/conselho-DALVX9-Q.js","assets/criatura-CFfMWKcF.js","assets/decoracao-D5OuO55_.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-DZLgrTwq.js","assets/index-Dkeok2Is.js","assets/index-aPRhnhn1.js","assets/liga-Cjmm7176.js","assets/mecanicas-WNBPezLT.js","assets/palco-C2rxa7xg.css","assets/palco-DJoFhY4F.js","assets/raras.json","assets/registro-BVL3fu47.js","assets/registro-BZe2HXlu.css","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-BUZK5A7R.js","assets/visitantes-alJGiS7I.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
const LOTE = 16;
const BASE = self.registration.scope;
const abs = (c) => new URL(c, BASE).href;

async function emLotes(lista, tamanho, f) {
  for (let i = 0; i < lista.length; i += tamanho) await Promise.all(lista.slice(i, i + tamanho).map(f));
}
/** baixa da rede para o cache; com o hash da lista, recusa conteúdo que não confere (publicação pela metade ou cache intermediário velho) */
async function baixar(cache, caminho, h) {
  const r = await fetch(new Request(abs(caminho), { cache: 'reload' }));
  if (!r.ok) throw new Error('falha ao baixar ' + caminho + ' (' + r.status + ')');
  if (h && self.crypto && self.crypto.subtle) {
    const d = new Uint8Array(await self.crypto.subtle.digest('SHA-256', await r.clone().arrayBuffer()));
    let hex = ''; for (let i = 0; i < 6; i++) hex += d[i].toString(16).padStart(2, '0');
    if (hex !== h) throw new Error('o conteúdo de ' + caminho + ' não é o desta versão');
  }
  await cache.put(abs(caminho), r);
}
async function listaDe(cache) {
  try {
    const r = await cache.match(abs('pingo-arquivos.json'));
    if (!r) return null;
    const j = await r.json();
    return new Map(j.arquivos.map((a) => [a[0], a[1]]));
  } catch (e) { return null; }
}
let hashes = null; // caminho → hash desta versão (lido do núcleo quando o SW acorda)
function mapa() {
  if (!hashes) hashes = caches.open(CACHE_NUCLEO).then(listaDe).then((m) => m || new Map());
  return hashes;
}

self.addEventListener('install', (ev) => {
  ev.waitUntil((async () => {
    const cache = await caches.open(CACHE_NUCLEO);
    // a lista nova primeiro: com ela dá para aproveitar do núcleo antigo o que não mudou
    await baixar(cache, 'pingo-arquivos.json');
    const nova = await listaDe(cache);
    // a lista tem de ser a desta versão: se o site entregar sw.js novo com lista velha, a instalação é refeita depois
    const jl = await (await cache.match(abs('pingo-arquivos.json'))).json();
    if (jl.v !== VERSAO) { await caches.delete(CACHE_NUCLEO); throw new Error('lista de arquivos de outra versão (' + jl.v + ')'); }
    const antigos = [];
    for (const nome of await caches.keys()) {
      if (!nome.startsWith(PREFIXO + 'n-') || nome === CACHE_NUCLEO) continue;
      const c = await caches.open(nome), l = await listaDe(c);
      if (l) antigos.push([c, l]);
    }
    const pendentes = NUCLEO.filter((c) => c !== 'pingo-arquivos.json');
    await emLotes(pendentes, LOTE, async (caminho) => {
      if (await cache.match(abs(caminho))) return;
      const h = nova && nova.get(caminho);
      for (const [c, l] of antigos) {
        if (h && l.get(caminho) === h) { const r = await c.match(abs(caminho)); if (r) { await cache.put(abs(caminho), r); return; } }
      }
      await baixar(cache, caminho, h);
    });
    // assume assim que instalar (padrão mais previsível nos navegadores). A página que já estava aberta segue
    // funcionando: os núcleos antigos só são apagados quando uma página nova pedir a faxina.
    if (!(await caches.has(CACHE_NUCLEO)) || !(await cache.match(abs('index.html')))) throw new Error('o núcleo foi apagado durante a instalação');
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (ev) => { ev.waitUntil(self.clients.claim()); });

async function faxina() {
  // nunca durante a instalação de outra versão (o núcleo dela ainda está sendo montado)
  if (self.registration.installing || self.registration.waiting || self.registration.active !== self.serviceWorker && self.serviceWorker) return;
  for (const nome of await caches.keys()) {
    if (nome.startsWith(PREFIXO) && nome !== CACHE_NUCLEO && nome !== CACHE_DADOS) await caches.delete(nome);
  }
}
self.addEventListener('message', (ev) => {
  // enviada por src/core/offline.ts ao abrir o jogo: a página já é desta versão, os núcleos velhos podem sair
  if (ev.data === 'faxina') ev.waitUntil(faxina());
  if (ev.data === 'versao' && ev.source) ev.source.postMessage({ pingoVersao: VERSAO });
});

/** página aberta antes da atualização pedindo um pedaço de código da versão anterior */
async function doNucleoAntigo(url) {
  for (const nome of await caches.keys()) {
    if (!nome.startsWith(PREFIXO + 'n-') || nome === CACHE_NUCLEO) continue;
    const r = await (await caches.open(nome)).match(url);
    if (r) return r;
  }
  return null;
}
async function responder(req) {
  const nucleo = await caches.open(CACHE_NUCLEO);
  const pagina = () => nucleo.match(abs('index.html'));
  if (req.mode === 'navigate') { const p = await pagina(); if (p) return p; }
  const limpa = req.url.split('#')[0].split('?')[0];
  const doNucleo = await nucleo.match(limpa);
  if (doNucleo) return doNucleo;
  const antigo = req.mode === 'navigate' ? null : await doNucleoAntigo(limpa);
  if (antigo) return antigo;
  const h = (await mapa()).get(decodeURIComponent(limpa.slice(BASE.length)));
  const dados = h ? await caches.open(CACHE_DADOS) : null;
  if (dados) { const guardado = await dados.match(limpa + '?h=' + h); if (guardado) return guardado; }
  // página aberta antes da atualização, sem rede: vale a cópia guardada de qualquer versão do arquivo
  const deOutraVersao = async () => (await caches.open(CACHE_DADOS)).match(limpa, { ignoreSearch: true });
  try {
    const r = await fetch(req);
    // por demanda: o que é do pacote e ainda não estava guardado entra no cache ao ser usado
    if (dados && r.ok && r.type === 'basic') void dados.put(limpa + '?h=' + h, r.clone()).catch(() => undefined);
    if (!r.ok) { const v = await deOutraVersao(); if (v) return v; }
    return r;
  } catch (e) {
    if (req.mode === 'navigate') { const p = await pagina(); if (p) return p; }
    const v = await deOutraVersao(); if (v) return v;
    return new Response('', { status: 504, statusText: 'sem rede e fora do cache' });
  }
}
self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET' || !req.url.startsWith(BASE)) return;
  if (req.url === abs('sw.js')) return;
  // o download em lotes da página (src/core/offline.ts) vai direto à rede e grava ele mesmo no cache
  if (req.cache === 'reload') return;
  ev.respondWith(responder(req));
});
