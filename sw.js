/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "858bab0ecf";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-C_ZGDhOj.js","assets/A-GN-BZTxsch0.js","assets/A-LG-BGzoMSrB.js","assets/A-LG-posto-9lWOVjgR.js","assets/A-LG-venda-MOQRsbeJ.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-BBkpmmlw.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-gM3SIG9V.js","assets/A-R2-BpAH6jdb.js","assets/A-R3-DtrNy2Vg.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-Dco2bqkJ.js","assets/A-R7-TkuPDYf2.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-DQyBinVP.js","assets/A-SF-casa-DDYWgssP.js","assets/A-SF-parque-DjMsdPmn.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-BB1kzcrE.js","assets/A1-casa-1-D1vQcoHd.js","assets/A1-casa-2-CXbJtPYa.js","assets/A1-casa-jogador-BGsTAg3K.js","assets/A1-lab-BkykN-uN.js","assets/A1-quarto-CaaxYdsM.js","assets/A10-DkfYHA77.js","assets/A10-casa-1-BgsHO_F3.js","assets/A10-casa-2-CTPxtc6m.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-LONDc2GM.js","assets/A10-posto-DwLIBbd-.js","assets/A10-venda-CFSULd4K.js","assets/A2-DCSSE7hR.js","assets/A2-casa-1-BXwlWC4z.js","assets/A2-casa-2-Bc2GnGYW.js","assets/A2-casa-aroeira-BeYyN_W7.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-CdNGaxVg.js","assets/A2-venda-DHVxrdrL.js","assets/A3-LsaPJ_bD.js","assets/A3-casa-1-2el9AsvF.js","assets/A3-casa-2-BqSR4pqw.js","assets/A3-casa-3-CHCgtgeu.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-BbVaQ2Vb.js","assets/A3-venda-CS0k-o4p.js","assets/A4-casa-1-BeyObLiK.js","assets/A4-casa-2-B186hOCk.js","assets/A4-casa-3-RXvvQkWO.js","assets/A4-estacao-C2m9Mkzj.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-DRBBH9PL.js","assets/A4-posto-CTH6Oo01.js","assets/A4-treino-CmXup1L9.js","assets/A4-uRQP3Wiz.js","assets/A4-venda-DQiBXPOH.js","assets/A5-CBM2p4qM.js","assets/A5-casa-1-DmlGH8qm.js","assets/A5-casa-2-4CxGm0vF.js","assets/A5-casa-3-fjHPeGuQ.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-Bo-jXobZ.js","assets/A5-venda-Cl1KuarB.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-BuE7X4D0.js","assets/A6-casa-2-Xczb3MR7.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-CaE8UASL.js","assets/A6-posto-3RuHWIzL.js","assets/A6-venda-LMZcZFUj.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-DrgC9lDn.js","assets/A7-casa-2-Drmjoelv.js","assets/A7-casa-3-CloJ3SUa.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-fUZUBpbP.js","assets/A7-venda-9cj1TZ7O.js","assets/A8-casa-1-D1hPuBxM.js","assets/A8-casa-2-BG2KVuxe.js","assets/A8-casa-3-CQt7d9iE.js","assets/A8-forja-CxzGpNqC.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-D1ZyEKY9.js","assets/A8-venda-PaoHa5kj.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-CLv8nPl5.js","assets/A9-casa-2-1iiJP0bb.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-6Rx2eq6N.js","assets/A9-venda-Bh7mxdIV.js","assets/B-CE-BrCXuyJf.js","assets/B-CH-QtzVjY5y.js","assets/B-CV-BNFjL6pv.js","assets/B-FA-BvvlDQan.js","assets/B-LG-C6XTIJz_.js","assets/B-LG-cabana-Cb8ijicA.js","assets/B-PA-C4_Ico9w.js","assets/B-R1-B6t6x9LI.js","assets/B-R2-BCTx9s2v.js","assets/B-R3-tbWhc8Px.js","assets/B-R4-B0yq0g-z.js","assets/B-R5-BIhheDiR.js","assets/B-SG-CJIrzbFy.js","assets/B-TA-BmdOfmPU.js","assets/B-TA-gruta-BssY9cYw.js","assets/B-VV-C2gu_JBW.js","assets/B1-BGfm2gXm.js","assets/B1-casa-1-D3rOO_WJ.js","assets/B1-casa-2-CI1kFfHD.js","assets/B1-casa-3-BRx_wqcV.js","assets/B1-estacao-Bb9uf4Yr.js","assets/B1-lab-D59aX9iY.js","assets/B1-posto-CAPQ-Aek.js","assets/B1-salao-QHeddv1S.js","assets/B1-venda-OkTznGsq.js","assets/B2-CKudEqIW.js","assets/B2-casa-1-Cp2GP96n.js","assets/B2-casa-2-D7qoz0tT.js","assets/B2-centro-CpwT0_78.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-qbXD8-EF.js","assets/B2-venda-CyuMGvG7.js","assets/B3-DhDg_cF6.js","assets/B3-casa-1-CIfo8LfH.js","assets/B3-casa-2-CNdD1DNb.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-95LQfyZ3.js","assets/B3-mina-2-BdrN7sUk.js","assets/B3-posto-BSlXRTFx.js","assets/B3-venda-B41LqJn0.js","assets/B4-CyM-bkEA.js","assets/B4-casa-1-yJzUcktg.js","assets/B4-forja-Dmc5x62C.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-CEOSpnFU.js","assets/B4-venda-D6Jn-T7o.js","assets/B5-B9FwhW2R.js","assets/B5-casa-1-D9yuamr3.js","assets/B5-casa-2-DK0nnPAM.js","assets/B5-casa-3-Ere4Gswp.js","assets/B5-casa-4-D63u6c4v.js","assets/B5-feira-DcolDubW.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-CjnwP7GS.js","assets/B5-venda-B1x4eAHY.js","assets/B6-DMX8vj0t.js","assets/B6-casa-1-CluaOOYF.js","assets/B6-casa-2-DsACHFJ2.js","assets/B6-casa-3-DT9jL875.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-DJRf4SV0.js","assets/B6-lab-2-MiSu50Zp.js","assets/B6-lab-3-BJ8ldl2X.js","assets/B6-posto-C7bCgTbY.js","assets/B6-venda-DOqDOj7_.js","assets/B7-RV-BB8AZ.js","assets/B7-casa-1-DaDP-VCK.js","assets/B7-casa-2-2p1lvudT.js","assets/B7-ctg-vvsWb2x0.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-BdsyyR1b.js","assets/B7-venda-B-yUEOkQ.js","assets/B8-CtzKllBR.js","assets/B8-casa-1-JoVF2eIT.js","assets/B8-casa-2-CveV5Rjo.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-C2DTooea.js","assets/B8-posto-Cxi5z6Wx.js","assets/B8-venda-DnrdeWsy.js","assets/B9-casa-1--fCrnL1_.js","assets/B9-casa-2-BHwEEgdt.js","assets/B9-posto-oJYB4pwI.js","assets/B9-sZWImaC0.js","assets/B9-venda-Bzv5cJ16.js","assets/PP-Dl497RxJ.js","assets/PP-conselho-BTFXYsjY.js","assets/PP-gruta-Dbv2QJYs.js","assets/PP-posto-BNqdEV48.js","assets/PP-venda-YCLPOwO0.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-BkDkVpDN.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BPG7-ARs.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-WPzOnjN9.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-LbLkn1cI.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-C93UYe8h.js","assets/_teste-b-CZORAJyn.js","assets/a1-BDa4IZ4I.js","assets/a2-C52V0pPe.js","assets/atlas.json","assets/audio-C1k_Xngv.js","assets/b1-C1-4sy1k.js","assets/b2-norte-DqWfCic9.js","assets/b2-sul-0qKX4xRs.js","assets/batalha-Ce4e4C8w.js","assets/catalogo-objetos-DY9qXVWe.js","assets/cena-D6oPVCpx.js","assets/conselho-De5UxrBo.js","assets/criatura-BZ_Pqb3D.js","assets/decoracao-BmwNcAjK.js","assets/diario-5MnAAYd5.js","assets/eventos-a-BGsE8Ipi.js","assets/eventos-b-CdLvnYHD.js","assets/extras-iC6uTp3S.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-BGY7nrEk.js","assets/index-DwFN8whX.js","assets/index-hJ0YZVbb.js","assets/itens-D8FCvGNS.js","assets/liga-Cjmm7176.js","assets/mecanicas-DMxykDOb.js","assets/palco-DAXF060o.js","assets/raras.json","assets/registro--uG31bLm.css","assets/registro-BZePJ3R-.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui-DKbu2IGg.js","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-BEEWm-Ci.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-DmQ60ced.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
