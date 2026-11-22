/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "9ea0c670f9";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-BkjLD61n.js","assets/A-GN-aEA_F9Xn.js","assets/A-LG-kcHsaMGF.js","assets/A-LG-posto-cz1RHfCp.js","assets/A-LG-venda-CtOaJkaz.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-DE-gtwj4.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-gXniwpDh.js","assets/A-R2-DqtW59r_.js","assets/A-R3-B5naoAZF.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-BNDJL6Uy.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-CJff8-_B.js","assets/A-SF-casa-C8kQ-gCp.js","assets/A-SF-parque-D3NQ8xgv.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-CZymzDGJ.js","assets/A1-casa-1-wPbxJtYc.js","assets/A1-casa-2-DOyXa1n9.js","assets/A1-casa-jogador-CxbuH-xs.js","assets/A1-lab-DZlED9SN.js","assets/A1-quarto-JhjIRMbF.js","assets/A10-DyFYh-Lo.js","assets/A10-casa-1-BaIpM5zQ.js","assets/A10-casa-2-CyTm9Ox0.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-C-dZ6gzr.js","assets/A10-posto-qg_uALSl.js","assets/A10-venda-DzhRV7yY.js","assets/A2-D_jPDTSF.js","assets/A2-casa-1-mwhZGznE.js","assets/A2-casa-2-U4MI4ujW.js","assets/A2-casa-aroeira-CRx0xc2a.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-Cei0lVF1.js","assets/A2-venda-4B60leOQ.js","assets/A3-CwgvhtNy.js","assets/A3-casa-1-Cx6Mh_zm.js","assets/A3-casa-2-UqO6wdXm.js","assets/A3-casa-3-CjjOU9yQ.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-BKQBptzY.js","assets/A3-venda-DDQpjwgN.js","assets/A4-DaSL6no7.js","assets/A4-casa-1-mq1VgbT5.js","assets/A4-casa-2-Bzwg3rVH.js","assets/A4-casa-3-BdiE3uMS.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-BJ46KZhb.js","assets/A4-posto-DjKpZaOC.js","assets/A4-treino-DfF4cZqo.js","assets/A4-venda-SgdR6Y0b.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-DZsab0ps.js","assets/A5-casa-2-F-jkod5v.js","assets/A5-casa-3-Cz_qNzvk.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-C8V7VWFl.js","assets/A5-venda-Cg6N0rh0.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-BLsc0DAG.js","assets/A6-casa-2-CafYUJFu.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-YfooMR4F.js","assets/A6-posto-C_XEDDP7.js","assets/A6-venda-Cju23fk2.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-CIOcDWrl.js","assets/A7-casa-2-CxkM7rx8.js","assets/A7-casa-3-Da3d8HGw.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-DvmlpnLD.js","assets/A7-venda-BIzSXYE-.js","assets/A8-casa-1-CrdCWrP4.js","assets/A8-casa-2--853pgDi.js","assets/A8-casa-3-C_Lr6wXf.js","assets/A8-forja-t66hjSFB.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-7YXzW7ZU.js","assets/A8-venda-CUVq_ct0.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-CpV2H32G.js","assets/A9-casa-2-DOrCQnIh.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-CXX-Ykfd.js","assets/A9-venda-D024CflC.js","assets/B-CE-BqNt0Wv0.js","assets/B-CH-D_nh1cBu.js","assets/B-CV-CL6KTkWV.js","assets/B-FA-B9D7bC4g.js","assets/B-LG-DTw84jEc.js","assets/B-LG-cabana-Bf9fKRKt.js","assets/B-PA-Cu9NIBtM.js","assets/B-R1-BEipv2qo.js","assets/B-R2-BXfXTLny.js","assets/B-R3-CQA_dDsk.js","assets/B-R4-DZqJKgGF.js","assets/B-R5-XmbNSBDF.js","assets/B-SG-BtN21dRT.js","assets/B-TA-DBWeXnXv.js","assets/B-TA-gruta-ol2iDGgW.js","assets/B-VV-DWREFVPx.js","assets/B1-DjMR3jRs.js","assets/B1-casa-1-CO4ABnbH.js","assets/B1-casa-2-Dppg1_uW.js","assets/B1-casa-3-CXSMY8Mx.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-BRiiY9xk.js","assets/B1-posto-CpQCxgxL.js","assets/B1-salao-hJakVgtV.js","assets/B1-venda-f7dKbcEv.js","assets/B2-casa-1-Dv6BbbTl.js","assets/B2-casa-2-DaPoQr1L.js","assets/B2-centro-hVXaHVpY.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-DNKorolQ.js","assets/B2-venda-Bx_57I0q.js","assets/B2-vm8Wtcgx.js","assets/B3-UDlQkn6m.js","assets/B3-casa-1-DEbtMeWy.js","assets/B3-casa-2-SEtIxWeM.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-Z-pIbDw5.js","assets/B3-mina-2-Dp9kjt5W.js","assets/B3-posto-DQ43GzBl.js","assets/B3-venda-D07B-400.js","assets/B4-CfqdVO8z.js","assets/B4-casa-1-CoM-FJCl.js","assets/B4-forja-B5pG5Pej.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-tXleCIIH.js","assets/B4-venda-DEkHalc3.js","assets/B5-8cVp1-oB.js","assets/B5-casa-1-Dz0PEAFc.js","assets/B5-casa-2-DCKkR2s_.js","assets/B5-casa-3-DPJajukV.js","assets/B5-casa-4-C1oA0jCO.js","assets/B5-feira-DXkQqokP.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-DzzSh1Nl.js","assets/B5-venda-DrH58tQ1.js","assets/B6-Cvs1T_1R.js","assets/B6-casa-1-CYSBjbX-.js","assets/B6-casa-2-CqJills7.js","assets/B6-casa-3-Pf67w7WH.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-CJoYNpfD.js","assets/B6-lab-2-BL5H-TYS.js","assets/B6-lab-3-B6jez63B.js","assets/B6-posto-D7g9auRP.js","assets/B6-venda-CwupmJYP.js","assets/B7-Cnvt1yeq.js","assets/B7-casa-1-DjyrZz-3.js","assets/B7-casa-2-CzkOlvMp.js","assets/B7-ctg-DcXuX6ZE.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-DLRRZR-T.js","assets/B7-venda-Bdfq4Bn8.js","assets/B8-BRSetVA8.js","assets/B8-casa-1-DFKWjegD.js","assets/B8-casa-2-CBQY3TJH.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-C0yllyva.js","assets/B8-posto-BEP5xKDn.js","assets/B8-venda-BCIEC-Qk.js","assets/B9-BXue8aJD.js","assets/B9-casa-1-fCeMx8hu.js","assets/B9-casa-2-BaI_rIyK.js","assets/B9-posto-aY9rQnFo.js","assets/B9-venda-Dg7DYxVI.js","assets/PP-conselho-BqKscQ3h.js","assets/PP-flcENMr0.js","assets/PP-gruta-BjsOIJxv.js","assets/PP-posto-mNFwKXxa.js","assets/PP-venda-D6PEgDQB.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-B4GQPMHB.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BmNNsvro.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-MXGycy_g.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-CKWZl_ja.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-BRhFJqTp.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-Bt4I1L_5.js","assets/atlas.json","assets/audio-WEwgiFwb.js","assets/b1-C1-4sy1k.js","assets/b2-norte-fRarKeF-.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/cena-sdiIgYyP.js","assets/conselho-De5UxrBo.js","assets/criatura-Cl0rNUq5.js","assets/decoracao-DEecanu-.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-BfHXMFWh.js","assets/index-X9jTEiEj.js","assets/index-oQVQnu-v.js","assets/liga-Cjmm7176.js","assets/mecanicas-D5w6xnGU.js","assets/palco-BcYgDMEl.js","assets/raras.json","assets/registro--uG31bLm.css","assets/registro-6ZgO0dz9.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-BNIhMjJv.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-DJogsurj.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
