/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "26c6de7e1f";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-DtylBuJs.js","assets/A-GN-DBnIn3_b.js","assets/A-LG-BjfKTv7R.js","assets/A-LG-posto-fJupvBIz.js","assets/A-LG-venda-DRXS7rYV.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-DC4t9eF3.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-sAOP0HRg.js","assets/A-R2-CJPtsM7y.js","assets/A-R3-Bi9CwWSp.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-Dco2bqkJ.js","assets/A-R7-DUSmuEJ1.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-CFvxBzI2.js","assets/A-SF-casa-BSy4sD8N.js","assets/A-SF-parque-BdUbM8rj.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-Cr3at8hP.js","assets/A1-casa-1-LTIY-uxX.js","assets/A1-casa-2-i7botGOx.js","assets/A1-casa-jogador-D_tlkN_O.js","assets/A1-lab-BXeO0Kcj.js","assets/A1-quarto-BN1evqpX.js","assets/A10-BwKIYHhf.js","assets/A10-casa-1-C46QEQpA.js","assets/A10-casa-2-Bv81sRI1.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-BtQ0AaSb.js","assets/A10-posto-DMArj512.js","assets/A10-venda-DxqBqfib.js","assets/A2-casa-1-FoXF0aiL.js","assets/A2-casa-2-B5nYYDUm.js","assets/A2-casa-aroeira-C7nugHp0.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-MjzgTLDJ.js","assets/A2-venda-CQFXCVq0.js","assets/A2-yjyapvFn.js","assets/A3-B9ed5sGq.js","assets/A3-casa-1-CseTfZ7k.js","assets/A3-casa-2-CngUFE8k.js","assets/A3-casa-3-BfhzO3ZE.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-DfvXhoHS.js","assets/A3-venda-Cn0ykNab.js","assets/A4--uyPelB9.js","assets/A4-casa-1-DeXB5d8L.js","assets/A4-casa-2-CwltuPwb.js","assets/A4-casa-3-BCCu0KmN.js","assets/A4-estacao-C2m9Mkzj.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-roGFC97t.js","assets/A4-posto-CNfyDQXB.js","assets/A4-treino-D9wQOUGt.js","assets/A4-venda-DcRiQltU.js","assets/A5-CBM2p4qM.js","assets/A5-casa-1-GgI2g6Mo.js","assets/A5-casa-2-BH2y7qvM.js","assets/A5-casa-3-CLnuTiqR.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-BvRGgWqr.js","assets/A5-venda-BwCyJ06Z.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-Br9npsLr.js","assets/A6-casa-2-CC1vldMq.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-CC-1bjwf.js","assets/A6-posto-C3tKcYFd.js","assets/A6-venda-asDFCxtZ.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-mCRladp-.js","assets/A7-casa-2-Du1DRhsV.js","assets/A7-casa-3-CpfYNnWp.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-DOkF8rZc.js","assets/A7-venda-BqnhOYWy.js","assets/A8-casa-1-q-cMaxHC.js","assets/A8-casa-2-ZllThGPq.js","assets/A8-casa-3-CB_D1CXn.js","assets/A8-forja-BTPmG2QV.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-B_Bb2zC9.js","assets/A8-venda-DE689qVF.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-MZEfyTTI.js","assets/A9-casa-2-DCuZPoNw.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-CQM81UXx.js","assets/A9-venda-DTh2OIoK.js","assets/B-CE-DKqwU1eW.js","assets/B-CH-RSmEu_Lg.js","assets/B-CV-iTZIlf_X.js","assets/B-FA-BoGidCBv.js","assets/B-LG-cabana-BABjM6f-.js","assets/B-LG-glqucitU.js","assets/B-PA-CpABqoOI.js","assets/B-R1-BxS7CSRV.js","assets/B-R2-DFv6Ixz1.js","assets/B-R3-F34TfGsD.js","assets/B-R4-jdo7CQnn.js","assets/B-R5-BXcqBojT.js","assets/B-SG-C9XnZV90.js","assets/B-TA-FQ8FQbFr.js","assets/B-TA-gruta-CbwxCbzW.js","assets/B-VV-DE-Fr5z2.js","assets/B1-DWXcqoE7.js","assets/B1-casa-1-Cg6p7Pr5.js","assets/B1-casa-2-B9KgpY4W.js","assets/B1-casa-3-c63aQPx7.js","assets/B1-estacao-Bb9uf4Yr.js","assets/B1-lab-DpjbiYSE.js","assets/B1-posto-9gHTLFuw.js","assets/B1-salao-BAII5o4w.js","assets/B1-venda-C8sBdhmc.js","assets/B2-casa-1-BXLwI_P4.js","assets/B2-casa-2-CS6IMjXX.js","assets/B2-centro-BZ3HnHcX.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-CQIRqH6y.js","assets/B2-venda-BCUO9yUg.js","assets/B2-whs2w0X0.js","assets/B3-D_qjA26R.js","assets/B3-casa-1-DOWn70uq.js","assets/B3-casa-2-BmVrO2Dc.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-BqFt2im0.js","assets/B3-mina-2-D_rc01vi.js","assets/B3-posto-BrcxAf5s.js","assets/B3-venda-C43jDpW8.js","assets/B4-BlfZM_lk.js","assets/B4-casa-1-BUczFrio.js","assets/B4-forja-DFBqAwVA.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-BTG27W4X.js","assets/B4-venda-BuIw1oVf.js","assets/B5-BK31-DF5.js","assets/B5-casa-1-DZ7xGTvD.js","assets/B5-casa-2-Crs3l3Dz.js","assets/B5-casa-3-B55jAopx.js","assets/B5-casa-4-BEKzD0p3.js","assets/B5-feira-BmMplcdg.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-CfiS_lAj.js","assets/B5-venda-nMB0HLzj.js","assets/B6-ZD7MMeLN.js","assets/B6-casa-1-B8pvr9ov.js","assets/B6-casa-2-DIpgv-qU.js","assets/B6-casa-3-Bal7K16L.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-DLjx6z2l.js","assets/B6-lab-2-BySTuI-I.js","assets/B6-lab-3-Y4qnHp5u.js","assets/B6-posto-CD3sXbz3.js","assets/B6-venda-bXavDClD.js","assets/B7-B8PftorI.js","assets/B7-casa-1-BlS9P1QS.js","assets/B7-casa-2-Cktgkd-f.js","assets/B7-ctg-BbRk_7v3.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-BXdjjgO-.js","assets/B7-venda-Bbo4-VnX.js","assets/B8-SokBtqUe.js","assets/B8-casa-1-Ibd061AA.js","assets/B8-casa-2-BrzEoSRY.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-D99QJdBE.js","assets/B8-posto-B_qRQ3El.js","assets/B8-venda-4tVJZ83w.js","assets/B9-DkqgD4Is.js","assets/B9-casa-1-CH2zWfvb.js","assets/B9-casa-2-tzZbTVGF.js","assets/B9-posto-Bqyx7pxR.js","assets/B9-venda-D9tN_0Po.js","assets/PP-F-hQBAH4.js","assets/PP-conselho-BbFgfPzX.js","assets/PP-gruta-D290ZKXb.js","assets/PP-posto-Pmdco69s.js","assets/PP-venda-C9vgwYXT.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-Bqcrt1uD.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BMYZoEA2.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-DSKtVDvf.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-BMDfVdI-.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-pIcWTreW.js","assets/_teste-b-CZORAJyn.js","assets/a1-BDa4IZ4I.js","assets/a2-C52V0pPe.js","assets/atlas.json","assets/audio-BtMp840H.js","assets/b1-C1-4sy1k.js","assets/b2-norte-DqWfCic9.js","assets/b2-sul-0qKX4xRs.js","assets/batalha-Ce4e4C8w.js","assets/catalogo-objetos-DY9qXVWe.js","assets/cena-BhImaAQL.js","assets/conselho-De5UxrBo.js","assets/criatura-kkkaXYML.js","assets/decoracao-B0QwEGej.js","assets/diario-5MnAAYd5.js","assets/eventos-a-BGsE8Ipi.js","assets/eventos-b-CdLvnYHD.js","assets/extras-iC6uTp3S.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-BGB57421.js","assets/index-BgQ7qLqD.js","assets/index-CjhE3fhk.js","assets/itens-D8FCvGNS.js","assets/liga-Cjmm7176.js","assets/mecanicas-Cm3TBBhO.js","assets/palco-lK4FqAMr.js","assets/raras.json","assets/registro--uG31bLm.css","assets/registro-3fj4XmGP.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui-DKbu2IGg.js","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-D96LI11w.js","assets/visitantes-CRjxMh4x.js","assets/voltar-BuJtVUhS.js","assets/voltar-C2rxa7xg.css","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
