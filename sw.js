/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "eb0530d7f2";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-B_NO-dv6.js","assets/A-GN-CAUxzx6T.js","assets/A-LG-CBzv-EjR.js","assets/A-LG-posto-BditJJVA.js","assets/A-LG-venda-nzc6CBBC.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-IikytVIA.js","assets/A-MT-BGdcTwqV.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-BfgG-a3j.js","assets/A-R2-DmkhxbZ1.js","assets/A-R3-ClSWikp3.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-CeOI3AQq.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-Beow6i2q.js","assets/A-SF-casa-CDZOcqFI.js","assets/A-SF-parque-CSkwKlBS.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-DqjMRk5k.js","assets/A1-casa-1-L0pqV6tW.js","assets/A1-casa-2-B_OASWKe.js","assets/A1-casa-jogador-BYze8ysi.js","assets/A1-lab-CbzZfH4_.js","assets/A1-quarto-CMDD8Z8S.js","assets/A10-BGQcHYii.js","assets/A10-casa-1-D9Z7sm1S.js","assets/A10-casa-2-DJ3fH2AG.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-Jqw7GKVH.js","assets/A10-posto-C7Vxyxt8.js","assets/A10-venda-CF65PxWG.js","assets/A2-Drlmbxtw.js","assets/A2-casa-1-Dncm4QTC.js","assets/A2-casa-2-DPmF0bMC.js","assets/A2-casa-aroeira-BOdDMYEB.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-B_jvFAF9.js","assets/A2-venda-Dj_yGGKO.js","assets/A3--5qjjPVK.js","assets/A3-casa-1-BMobYxXt.js","assets/A3-casa-2-b5qVuEzN.js","assets/A3-casa-3-BTA8zBeK.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-DMeW9_cX.js","assets/A3-venda-BMcrOtGw.js","assets/A4-2TYUQE_5.js","assets/A4-casa-1-0rKRdshz.js","assets/A4-casa-2-CHv2kgZw.js","assets/A4-casa-3-DYM8B20R.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-Bl_i-DqV.js","assets/A4-posto-pI0j5dEe.js","assets/A4-treino-Dyseampq.js","assets/A4-venda-D9Hevw3W.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-DMcmMGf7.js","assets/A5-casa-2-gS6y2C4i.js","assets/A5-casa-3-BjSsFgUJ.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-DprWCjwR.js","assets/A5-venda-CkpURPHR.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-DIuECPMV.js","assets/A6-casa-2-BhRO2NZ_.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-GtdQFOgE.js","assets/A6-posto-Cj1OpXiG.js","assets/A6-venda-CiBPi1gJ.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-XEAGCM6y.js","assets/A7-casa-2-RDgrGupP.js","assets/A7-casa-3-Duh2dVUX.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-Dox2IW06.js","assets/A7-venda-D5z_BmGf.js","assets/A8-casa-1-DSdBxQEq.js","assets/A8-casa-2-KIJ09cpZ.js","assets/A8-casa-3-ChZqdQd8.js","assets/A8-forja-TO6YYxla.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-DDqWw3Ds.js","assets/A8-venda-BHEyisz2.js","assets/A9-B0c2B8c-.js","assets/A9-casa-1-Bqeg5Em-.js","assets/A9-casa-2-CA6VajXh.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-Cbeu-6JI.js","assets/A9-venda-zKYkHjpc.js","assets/B-CE-CT_rHjgf.js","assets/B-CH-B69Lnzyc.js","assets/B-CV-Ch5DqWpI.js","assets/B-FA-WdseoiK0.js","assets/B-LG-DN7Qabgg.js","assets/B-LG-cabana-D2ixj11S.js","assets/B-PA-BTvSa9nF.js","assets/B-R1-CtGYJMgJ.js","assets/B-R2-B6y27yR7.js","assets/B-R3-DdHmmo9z.js","assets/B-R4-DrmOwUuU.js","assets/B-R5-BUGTlni9.js","assets/B-SG-C6ZV4eiY.js","assets/B-TA-gruta-Cy0g04bx.js","assets/B-TA-ouHQDeh5.js","assets/B-VV-BevHhFFX.js","assets/B1-DXjVfdKI.js","assets/B1-casa-1-BF7L77G3.js","assets/B1-casa-2-1keK-lgF.js","assets/B1-casa-3-Dx3pQ4sP.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-BWyEU6zg.js","assets/B1-posto-Cflcizuj.js","assets/B1-salao-UYnDVoKd.js","assets/B1-venda-CELm6CUx.js","assets/B2-Cko9zeGF.js","assets/B2-casa-1-DuzD0Tf0.js","assets/B2-casa-2-BY5SdM6D.js","assets/B2-centro-BmQRt6zq.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-oZdR761K.js","assets/B2-venda-vQTTlrt8.js","assets/B3-B4jmus3J.js","assets/B3-casa-1-CQYtJ4aS.js","assets/B3-casa-2-BwevM2ah.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-CarJWJDS.js","assets/B3-mina-2-BNgLYO7n.js","assets/B3-posto-D68tzvcQ.js","assets/B3-venda-BkGsJBHb.js","assets/B4-BJm3oHgp.js","assets/B4-casa-1-DZgYaS2s.js","assets/B4-forja-B242vLMW.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-C6IVjywV.js","assets/B4-venda-CTEOFgqF.js","assets/B5-Dui86SQY.js","assets/B5-casa-1-BXgytYjB.js","assets/B5-casa-2-CdKABNBZ.js","assets/B5-casa-3-ghLir_1I.js","assets/B5-casa-4-n9eiNnMy.js","assets/B5-feira-DnQZhsCS.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-C7jFqDDX.js","assets/B5-venda-Dut69RqV.js","assets/B6-ChdUBAGJ.js","assets/B6-casa-1-Cy4E-R_C.js","assets/B6-casa-2-DZU6B42z.js","assets/B6-casa-3-CyE2TfUl.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-DZVZw9xa.js","assets/B6-lab-2-DQtt3OAh.js","assets/B6-lab-3-DMO48fhi.js","assets/B6-posto-DS91McMx.js","assets/B6-venda-04DzZwSo.js","assets/B7-casa-1-Dn02gZ5y.js","assets/B7-casa-2-CUXn0n5C.js","assets/B7-ctg-D0cUmDBS.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-BUW74lF6.js","assets/B7-venda-Dgf3FZ3Q.js","assets/B7-zp9upyiA.js","assets/B8-D18OyFYx.js","assets/B8-casa-1-dEkRVZpi.js","assets/B8-casa-2-qU5F5Wa6.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-DI7Mi8ZC.js","assets/B8-posto-uB2L91En.js","assets/B8-venda-BQQRxIvv.js","assets/B9-DVTRxcbW.js","assets/B9-casa-1-PtRZRymO.js","assets/B9-casa-2-DTcn0TiD.js","assets/B9-posto-Bp9MEJvl.js","assets/B9-venda-DAPBD-6k.js","assets/PP-C00GWxzF.js","assets/PP-conselho-H44mWAry.js","assets/PP-gruta-B5mxSD2D.js","assets/PP-posto-C0oOLbhw.js","assets/PP-venda-D29wzCDE.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-DtCJTfpL.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-CIyC0-Py.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-DH_VQyLi.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-Cs-k6i5l.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-CWcpQ6wn.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-BHw2HsQd.js","assets/atlas.json","assets/audio-dY1WDRn5.js","assets/b1-C1-4sy1k.js","assets/b2-norte-h3eEiJgL.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/conselho-DALVX9-Q.js","assets/criatura-CKNgi-2D.js","assets/decoracao-C6R9b2yk.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-C5o_FWe1.js","assets/index-DNqYe1WW.js","assets/index-mcYNtn84.js","assets/liga-Cjmm7176.js","assets/mecanicas-Crg5Eoob.js","assets/palco-B-dsHDrg.js","assets/palco-C2rxa7xg.css","assets/raras.json","assets/registro-BZe2HXlu.css","assets/registro-Dv0VvDr4.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-COYhxzW8.js","assets/visitantes-alJGiS7I.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
