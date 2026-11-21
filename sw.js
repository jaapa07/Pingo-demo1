/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "0ca11fa93e";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-hxMRRgwf.js","assets/A-GN-BU2bAyJl.js","assets/A-LG-iYSDFrth.js","assets/A-LG-posto-BK5ti1jP.js","assets/A-LG-venda-B-71gDpQ.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-7DPQweSa.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-BTeRLWfS.js","assets/A-R2-B32DTxZy.js","assets/A-R3-BPa4XqW-.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-vBKz2gx6.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-CJ_C2U3Q.js","assets/A-SF-casa-Cmuwk6OC.js","assets/A-SF-parque-mibWHs_d.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-DBQLLION.js","assets/A1-casa-1-Bj4O27Le.js","assets/A1-casa-2-4iPj910T.js","assets/A1-casa-jogador-DPDe29jk.js","assets/A1-lab-CrBvEQw5.js","assets/A1-quarto-JyQlGpJ8.js","assets/A10-1xXk3t15.js","assets/A10-casa-1-BUGWCu98.js","assets/A10-casa-2-BmMk_f2D.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-CVKnQSQV.js","assets/A10-posto-B37ernw2.js","assets/A10-venda-DPNSqx5g.js","assets/A2-C9Oc051M.js","assets/A2-casa-1-BJ7b6mFI.js","assets/A2-casa-2-BUMNwTeg.js","assets/A2-casa-aroeira-DQt_0oN1.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-DrN8Q029.js","assets/A2-venda-NFwfDSSJ.js","assets/A3-D7RxcDmC.js","assets/A3-casa-1-Mod8rSHL.js","assets/A3-casa-2-D5jmKTWz.js","assets/A3-casa-3-BfqJoywr.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-Bc6I643K.js","assets/A3-venda-DHUUCWKE.js","assets/A4-D9GXBaKz.js","assets/A4-casa-1-DbKjCEQu.js","assets/A4-casa-2-HdHx6S56.js","assets/A4-casa-3-CIRRubAH.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-CMH_wSvo.js","assets/A4-posto-CFfva1MQ.js","assets/A4-treino-BOmE7tiY.js","assets/A4-venda-CQRog6XY.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-BU3DTEnX.js","assets/A5-casa-2-CEtBcCmL.js","assets/A5-casa-3-6dYuvnf2.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-J9sRSxZo.js","assets/A5-venda-CivUmA7s.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-BXtLPGTw.js","assets/A6-casa-2-DSEtT7b_.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-D04sENFz.js","assets/A6-posto-DAGkflQo.js","assets/A6-venda-Dl-gDctm.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-Dk23OeKq.js","assets/A7-casa-2-CrQBqLzo.js","assets/A7-casa-3-CERit9LL.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-B-iyvzX1.js","assets/A7-venda-C8FwW6nD.js","assets/A8-casa-1-CQpctDhy.js","assets/A8-casa-2-CiPj9vxp.js","assets/A8-casa-3-DTc7T_pv.js","assets/A8-forja-PxeB-Umn.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-CiKtBd4Z.js","assets/A8-venda-cLrkISsR.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-DK25bag6.js","assets/A9-casa-2-xJOrOPNn.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-CEBKpC2y.js","assets/A9-venda-C-bHOBDT.js","assets/B-CE-C_Zo4bpQ.js","assets/B-CH-CvSP0GSw.js","assets/B-CV-CRazDarM.js","assets/B-FA-B1rGkUud.js","assets/B-LG-cabana-j31A4KVP.js","assets/B-LG-n5xLXnYB.js","assets/B-PA-FpZBQKDQ.js","assets/B-R1-CRbYJOv1.js","assets/B-R2-BMaFpo47.js","assets/B-R3-DFBq5Dnu.js","assets/B-R4-BQez5J4_.js","assets/B-R5-CicF4X-A.js","assets/B-SG-BYgAI3gc.js","assets/B-TA-CGhsfBG0.js","assets/B-TA-gruta-sHwD-Mwg.js","assets/B-VV-6IVpma6z.js","assets/B1-DlpcEUAx.js","assets/B1-casa-1-DSO_jGPX.js","assets/B1-casa-2-Cju1v8Oo.js","assets/B1-casa-3-DTCIx47a.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-5RArp4-S.js","assets/B1-posto-B5SGPLgn.js","assets/B1-salao-COScKrq4.js","assets/B1-venda-pSms9vdX.js","assets/B2-_9Uv6T6H.js","assets/B2-casa-1-DENIln_1.js","assets/B2-casa-2-Aoe-7EUE.js","assets/B2-centro-CzCeHWkd.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-CNoGGm3j.js","assets/B2-venda-a5GvHde-.js","assets/B3-casa-1-DvH3f3k8.js","assets/B3-casa-2-DqqWfT4E.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-C9hNu9ZF.js","assets/B3-mina-2-CGFaN-1x.js","assets/B3-posto-aIetx-KS.js","assets/B3-venda-DZuQ4LsV.js","assets/B3-vvSvoa1E.js","assets/B4-BH7cBnkG.js","assets/B4-casa-1-CcHDZg4t.js","assets/B4-forja-DyIWvyxb.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-DnQ_sN1_.js","assets/B4-venda-C5MHeIOc.js","assets/B5-CTFpQWt7.js","assets/B5-casa-1-BNghQ2MP.js","assets/B5-casa-2-DvSJejni.js","assets/B5-casa-3-Bi5a8Xvl.js","assets/B5-casa-4-BWSMx5yQ.js","assets/B5-feira-De_e40pG.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-BEiXEbKE.js","assets/B5-venda-1sQU2DuX.js","assets/B6-C98M1oag.js","assets/B6-casa-1-BeeNQZBr.js","assets/B6-casa-2-DRk6EIJE.js","assets/B6-casa-3-uf2Umk93.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-CFrhKuii.js","assets/B6-lab-2-LL_PsRnq.js","assets/B6-lab-3-D86e7X1d.js","assets/B6-posto-Dsiz8XUN.js","assets/B6-venda-x2569kSQ.js","assets/B7-casa-1-CE3YLiyQ.js","assets/B7-casa-2-B3IPz2f9.js","assets/B7-ctg-CCJ8miAL.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-lqY-uI7c.js","assets/B7-posto-B17hK506.js","assets/B7-venda-DQwVcfgh.js","assets/B8-B-6NXyWw.js","assets/B8-casa-1-CHMU9mKT.js","assets/B8-casa-2-MPiI7fhN.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-CVqkdSnM.js","assets/B8-posto-BJr3-yP5.js","assets/B8-venda-D866LXrP.js","assets/B9-DJsuJYfK.js","assets/B9-casa-1-XgKNMt00.js","assets/B9-casa-2-TfWgqhZk.js","assets/B9-posto-DxiND9Nf.js","assets/B9-venda-BXWfc31L.js","assets/PP-D8vXDLQI.js","assets/PP-conselho-B_vfU4Sv.js","assets/PP-gruta-CG0-wgiH.js","assets/PP-posto-DV5fVqgO.js","assets/PP-venda-C2Tx6JKA.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-DAUi8IYM.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BL_cd0WX.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-BHxKKOHg.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-BW98m-IY.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-BF2ROfnF.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-Bt4I1L_5.js","assets/atlas.json","assets/audio-CCIGam1z.js","assets/b1-C1-4sy1k.js","assets/b2-norte-fRarKeF-.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/cena-DDJSMV0v.js","assets/conselho-De5UxrBo.js","assets/criatura-BsKkJqjO.js","assets/decoracao-D_IU0RyZ.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-BJr_Fu1K.js","assets/index-CrH9n6Pn.js","assets/index-D8cqSROA.js","assets/liga-Cjmm7176.js","assets/mecanicas-rMmUH_Um.js","assets/palco-CeF_-BFG.js","assets/raras.json","assets/registro-CxTh-B9I.js","assets/registro-DwqY7BYB.css","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-SrT9Hg3c.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-COBk0h-6.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
