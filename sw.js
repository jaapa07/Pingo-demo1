/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "12844ce75f";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-BqVxb5bF.js","assets/A-GN-nHZlGjqP.js","assets/A-LG-CHor4Izs.js","assets/A-LG-posto-CJ8XUM8n.js","assets/A-LG-venda-73VFOjcm.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-BwbqybRc.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-D-LXH1oW.js","assets/A-R2-9aGZauEW.js","assets/A-R3-BRNfp52Q.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-C8QC_1xM.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-CXmrbVkw.js","assets/A-SF-casa-DSbm_PYk.js","assets/A-SF-parque-CTCCJoY5.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-C_1j8AIp.js","assets/A1-casa-1-FUMbbQif.js","assets/A1-casa-2-DzgVbK3h.js","assets/A1-casa-jogador-B_wAH1KN.js","assets/A1-lab-B5o0wwYM.js","assets/A1-quarto-CMdtw5Ib.js","assets/A10-C4LpS6ij.js","assets/A10-casa-1-DwZpOJ88.js","assets/A10-casa-2-DWP5_qQ8.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-BQz0nlCy.js","assets/A10-posto-DM6zee6Z.js","assets/A10-venda-DpQb_Okm.js","assets/A2-KvduQBdw.js","assets/A2-casa-1-ByR6f4kf.js","assets/A2-casa-2-CcG5q6Bu.js","assets/A2-casa-aroeira-BU-e5mgA.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-ggMNxAIw.js","assets/A2-venda-r3vubsRd.js","assets/A3-DiBfRdi6.js","assets/A3-casa-1-BSK1mVe1.js","assets/A3-casa-2-BwZN0Xe8.js","assets/A3-casa-3-Cp8y1Pv5.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-DxlFx7s7.js","assets/A3-venda-BFznmtbr.js","assets/A4-CLZ535Ny.js","assets/A4-casa-1-D2qLGcQF.js","assets/A4-casa-2-BL15YGQN.js","assets/A4-casa-3-uKjWRDWy.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-BotehbJ_.js","assets/A4-posto-C_di21tR.js","assets/A4-treino-CWyH-WJg.js","assets/A4-venda-BDVipEky.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-Da0MwPEY.js","assets/A5-casa-2-51F2km7o.js","assets/A5-casa-3-Bd6H8YE0.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-D85dlzsm.js","assets/A5-venda-CGg33kjU.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-BkAPI6fo.js","assets/A6-casa-2-M48-Ndgh.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-DldlugQ0.js","assets/A6-posto-FVSGim1B.js","assets/A6-venda-BgTNWoow.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-CI72RgwD.js","assets/A7-casa-2-CYQSQkId.js","assets/A7-casa-3-DbTz9iZ5.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-lScxbg2d.js","assets/A7-venda-XiOsT5Jf.js","assets/A8-casa-1-BJ_m7vPe.js","assets/A8-casa-2-BKD1KHu6.js","assets/A8-casa-3-LnnmmioJ.js","assets/A8-forja-CIkS1MKn.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-Cy8eIjmL.js","assets/A8-venda--Xj-neVD.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-B84Ckhb-.js","assets/A9-casa-2-BEaw-f5Q.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-BMF-FASq.js","assets/A9-venda-BrcwNx6_.js","assets/B-CE-CSKthbSq.js","assets/B-CH-DjzSHcyQ.js","assets/B-CV-R00Me9fi.js","assets/B-FA-D7gTZ0zh.js","assets/B-LG-Y_gDeYbs.js","assets/B-LG-cabana-BGbwWS4f.js","assets/B-PA-BPZgeakM.js","assets/B-R1-DcaAXOpZ.js","assets/B-R2-CRW53uM8.js","assets/B-R3-BKyIIRzW.js","assets/B-R4-DLjPFo3f.js","assets/B-R5-25ywxz7C.js","assets/B-SG-D6xBmJcI.js","assets/B-TA-DofLfSVi.js","assets/B-TA-gruta-C33nPuLg.js","assets/B-VV-BSCM4lNr.js","assets/B1-casa-1-DiZpwuaM.js","assets/B1-casa-2-CEO_fWdf.js","assets/B1-casa-3-C-2dVYiG.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-Dr8yt4fO.js","assets/B1-posto-BPmNeH_n.js","assets/B1-r8NLUOHm.js","assets/B1-salao-Bl6xPun1.js","assets/B1-venda-BiLMavHA.js","assets/B2-DUtUvWOJ.js","assets/B2-casa-1-CnZcck0J.js","assets/B2-casa-2-DtZxWWNg.js","assets/B2-centro-Bmnfzgoo.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-Cfc3hXXg.js","assets/B2-venda-B6yax_EW.js","assets/B3-BkQCptAm.js","assets/B3-casa-1-BQirWYei.js","assets/B3-casa-2-CM88iIBS.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-D5nZwLuK.js","assets/B3-mina-2-1f_WmglN.js","assets/B3-posto-dMXAgHNk.js","assets/B3-venda-BC5tTnz2.js","assets/B4-DdrtDtrw.js","assets/B4-casa-1-CT6BjMRm.js","assets/B4-forja-DInGmqJN.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-Bixi08xt.js","assets/B4-venda-DKZJdEPO.js","assets/B5-D0YGAkDc.js","assets/B5-casa-1-YpGZfXYH.js","assets/B5-casa-2-CjLMjjin.js","assets/B5-casa-3-BnjWg3It.js","assets/B5-casa-4-BnJNheUU.js","assets/B5-feira-BorbC3xv.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto--ZKN-ONJ.js","assets/B5-venda-uqqzYUqN.js","assets/B6-GjVtfzkJ.js","assets/B6-casa-1-Dw4frWcz.js","assets/B6-casa-2-BQH6HqKp.js","assets/B6-casa-3-B2N9O_b7.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-RHUT8bvN.js","assets/B6-lab-2-CYjQageX.js","assets/B6-lab-3-Cnz4s_nE.js","assets/B6-posto-CYl5Rh6C.js","assets/B6-venda-D0WjolPL.js","assets/B7-C4yrGmcu.js","assets/B7-casa-1-0Ud-a7An.js","assets/B7-casa-2-BOp0Sbaz.js","assets/B7-ctg-CidIxcGt.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-BSYEO__d.js","assets/B7-venda-CgqetKkC.js","assets/B8-B1wFK3Bn.js","assets/B8-casa-1-CL84eI73.js","assets/B8-casa-2-D5fsT5WB.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-GSLzpuLG.js","assets/B8-posto-D9k64A_m.js","assets/B8-venda-CAjbxOfU.js","assets/B9-DnggmzCt.js","assets/B9-casa-1-DqNbz9c4.js","assets/B9-casa-2-Ce71fIip.js","assets/B9-posto-CkSRJrh8.js","assets/B9-venda-CpHQ6i-W.js","assets/PP-conselho-DdBcqXUa.js","assets/PP-gruta-CYilkxdj.js","assets/PP-posto-B4W88Ass.js","assets/PP-venda-BAyAyLn2.js","assets/PP-zBe9nsFQ.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-BVOkWCpF.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-CxnqOf2T.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-CYYdzAxa.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-idQHz2nC.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-BgZ6P3Zd.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-Bt4I1L_5.js","assets/atlas.json","assets/audio-Dw2J10Lr.js","assets/b1-C1-4sy1k.js","assets/b2-norte-fRarKeF-.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/cena-zNuHbXWQ.js","assets/conselho-De5UxrBo.js","assets/criatura-BfdBz2E6.js","assets/decoracao-rg83yr83.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-BNK156Na.js","assets/index-DZP4NLYr.js","assets/index-DlvGJ7HQ.js","assets/liga-Cjmm7176.js","assets/mecanicas-CcamgDTU.js","assets/palco-DcW7j9zf.js","assets/raras.json","assets/registro-BZe2HXlu.css","assets/registro-C7GMlLwM.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-BUnQ-3En.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-DKAbZXiy.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
