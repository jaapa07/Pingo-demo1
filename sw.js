/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "ba6e7546f8";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-B3bfgbHI.js","assets/A-GN-7Q-fuXmn.js","assets/A-LG-CMRMkJ0F.js","assets/A-LG-posto-BumaXNFx.js","assets/A-LG-venda-BMsbwgYJ.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-PMqRRUsK.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-B7nU_4bO.js","assets/A-R2-C-IE7Hou.js","assets/A-R3-DrbQpb-s.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-BcLdeZuI.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-_4-ZuKky.js","assets/A-SF-casa-B9UDKRZq.js","assets/A-SF-parque-CBpzElxa.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-JHsP-3-4.js","assets/A1-casa-1-B8t9eABa.js","assets/A1-casa-2-DSecsGU9.js","assets/A1-casa-jogador-we3qfKJZ.js","assets/A1-lab-DoeWsR5g.js","assets/A1-quarto-rjEUV4lm.js","assets/A10-BL6RMu4g.js","assets/A10-casa-1-BLfEK-vH.js","assets/A10-casa-2-DhGUQdwj.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-CWogb2ea.js","assets/A10-posto-BtRjYS6K.js","assets/A10-venda-DdfQCZjh.js","assets/A2-B7RnMNEx.js","assets/A2-casa-1-C_Oe-3HU.js","assets/A2-casa-2-DBPOrfgI.js","assets/A2-casa-aroeira-I4KVH47f.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-B8hGx-is.js","assets/A2-venda-BOm3X1w1.js","assets/A3-BYfZ_kN6.js","assets/A3-casa-1-B6OebU6u.js","assets/A3-casa-2-jBtnorGn.js","assets/A3-casa-3-CjgWA-Sy.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-6CJ6NoNB.js","assets/A3-venda-CjRCvQXT.js","assets/A4-D4qd2tpI.js","assets/A4-casa-1-BTcLrq60.js","assets/A4-casa-2-BNok9ii3.js","assets/A4-casa-3-BbgAoKC7.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-DEDGb0yH.js","assets/A4-posto-DSD4uYwO.js","assets/A4-treino-BBEjAE00.js","assets/A4-venda-Cey7DBWs.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-DMdk2NGT.js","assets/A5-casa-2-OmW1__W3.js","assets/A5-casa-3-Dv3zvQdT.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-COSYZSYA.js","assets/A5-venda-D-ZxZvIr.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-DAF0lf1c.js","assets/A6-casa-2-DFKhPifi.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-CyU6hvAL.js","assets/A6-posto-DubzQA61.js","assets/A6-venda-BLpBzQQ2.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-BmUW_ezu.js","assets/A7-casa-2-DV_gRfQ0.js","assets/A7-casa-3-DhytVn12.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-BMyvPL00.js","assets/A7-venda-DAv8EKZt.js","assets/A8-casa-1-iSni-_MV.js","assets/A8-casa-2-CGkKQf7r.js","assets/A8-casa-3-BIEeMZGS.js","assets/A8-forja-C6jAMmoq.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-bn58LqFv.js","assets/A8-venda-Nh4u42qt.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-D23L8Y89.js","assets/A9-casa-2-Bh3-GTFd.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-8Jk0_gYo.js","assets/A9-venda-DAfZ34pC.js","assets/B-CE-0qyeWYrH.js","assets/B-CH-DRzefwcC.js","assets/B-CV-DtKIq6d4.js","assets/B-FA-Cc_eKf7H.js","assets/B-LG-Di8JSR9v.js","assets/B-LG-cabana-Ba77MWHJ.js","assets/B-PA-DWpt85u3.js","assets/B-R1-DSgeO4gh.js","assets/B-R2-B87-GNT7.js","assets/B-R3-DN-1XPRk.js","assets/B-R4-C0F8kSd2.js","assets/B-R5-B3dmpS_1.js","assets/B-SG-CiRvZm3m.js","assets/B-TA-CvJ-Osu7.js","assets/B-TA-gruta-B0-nZd_-.js","assets/B-VV-Cesdfz8d.js","assets/B1-GdJOQXB5.js","assets/B1-casa-1-BF-5vlHQ.js","assets/B1-casa-2-C3bG12N7.js","assets/B1-casa-3-gzZmYs84.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-BWRMcqpe.js","assets/B1-posto-Da2xv2T1.js","assets/B1-salao-D1fCbBzn.js","assets/B1-venda-C3uXq8rz.js","assets/B2-C2uS0P1v.js","assets/B2-casa-1-79juA9wm.js","assets/B2-casa-2--IhuUHVP.js","assets/B2-centro-EObb7xak.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-DOuqE6IO.js","assets/B2-venda-Ch7H07A0.js","assets/B3-casa-1-ml6B92Lj.js","assets/B3-casa-2-D5AD_eKY.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-nSiRBFCP.js","assets/B3-mina-2-DpiJ6aqI.js","assets/B3-posto-CW-y3reH.js","assets/B3-venda-fHXDJm5s.js","assets/B3-w5ow500n.js","assets/B4-casa-1-SAzQdfPk.js","assets/B4-forja-D-dTh4TZ.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-p-puB_Qk.js","assets/B4-posto-Cf7O2WPW.js","assets/B4-venda-b2jZwlPF.js","assets/B5-Bl7U2f2M.js","assets/B5-casa-1-4pYx-uzC.js","assets/B5-casa-2-sVhdKyk4.js","assets/B5-casa-3-BnvHm5ak.js","assets/B5-casa-4-B8YXP3dx.js","assets/B5-feira-BWQHbHMx.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-D-OP7VS3.js","assets/B5-venda-9xUlW5vv.js","assets/B6-CZFatKrX.js","assets/B6-casa-1-B-efZeBv.js","assets/B6-casa-2-Cw2sDIKZ.js","assets/B6-casa-3-D6dp2SaU.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-BrpTAuOl.js","assets/B6-lab-2-Dc0d1Zoc.js","assets/B6-lab-3-CXeKbccB.js","assets/B6-posto-HC-vZyjm.js","assets/B6-venda-BURJ89Wp.js","assets/B7-90dcPXxj.js","assets/B7-casa-1-BkFIPfni.js","assets/B7-casa-2-DHPjvivh.js","assets/B7-ctg-Bx8CpYfJ.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-BRSXvhEO.js","assets/B7-venda-ClcM_8pl.js","assets/B8-CInMNrjO.js","assets/B8-casa-1-BABBXdyE.js","assets/B8-casa-2-ZcxD371U.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-CgrUItKL.js","assets/B8-posto-CzSwqzMz.js","assets/B8-venda-CpqUZPIS.js","assets/B9-CJ6QdKPp.js","assets/B9-casa-1-Cwn8Awxx.js","assets/B9-casa-2-DDcvC2Py.js","assets/B9-posto-DpBn_jV0.js","assets/B9-venda-Cb7Xp7Qe.js","assets/PP-C8IrdKLU.js","assets/PP-conselho-exYIJtqY.js","assets/PP-gruta-pfEd8nCc.js","assets/PP-posto-qa_bMca6.js","assets/PP-venda-CbRrIKI-.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-9c_HOI6-.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-qJPTcCqT.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-D4jc8gkN.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-DBKYP3iE.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-BD_WkENG.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-Bt4I1L_5.js","assets/atlas.json","assets/audio-vxF-L9mX.js","assets/b1-C1-4sy1k.js","assets/b2-norte-fRarKeF-.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/cena-B1VmzZid.js","assets/conselho-De5UxrBo.js","assets/criatura-3kIuDlzr.js","assets/decoracao-Dw7aWAaE.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-CSd6kWkC.js","assets/index-Coi9HoXO.js","assets/index-bz58jlpL.js","assets/liga-Cjmm7176.js","assets/mecanicas-BgXthqOH.js","assets/palco-CZQXyr2r.js","assets/raras.json","assets/registro-CC_GsxOa.js","assets/registro-DwqY7BYB.css","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-UXDIVWD0.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-C3c46KMC.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
