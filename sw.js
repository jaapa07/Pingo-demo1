/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "58e292770f";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-BhLqESn7.js","assets/A-GN-BQWzwDJk.js","assets/A-LG-DLO24Am2.js","assets/A-LG-posto-Boa4BNmV.js","assets/A-LG-venda-p82JvLvj.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-CvCtB9zL.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-Ya2soRS2.js","assets/A-R2-BnDBjzKv.js","assets/A-R3-DTjmLQqu.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-Dco2bqkJ.js","assets/A-R7-Df5WNUac.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-casa-0xkysNh9.js","assets/A-SF-gazuAPH9.js","assets/A-SF-parque-CvRBaJ9F.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-casa-1-6KEY3-Lm.js","assets/A1-casa-2-CDHZmJiA.js","assets/A1-casa-jogador-COt6bYLL.js","assets/A1-lab-CdA0RQUa.js","assets/A1-quarto-Bf_YcadW.js","assets/A1-sFLmf8hB.js","assets/A10-Buvwwrw3.js","assets/A10-casa-1-Beod_pwB.js","assets/A10-casa-2-CWwaNLcv.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-CzjH18fV.js","assets/A10-posto-DCI6XFPW.js","assets/A10-venda-CsfzWbBf.js","assets/A2-BNAGQFvr.js","assets/A2-casa-1-BtzhdGkF.js","assets/A2-casa-2-DQXyAViA.js","assets/A2-casa-aroeira-DL_zAfKv.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-DzBuJjcb.js","assets/A2-venda-BdXAmydH.js","assets/A3-CaYGi197.js","assets/A3-casa-1-CrHS_U9l.js","assets/A3-casa-2-BUMNdOro.js","assets/A3-casa-3-D7uavZBL.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-CK_MsN1n.js","assets/A3-venda-DwMo9_6P.js","assets/A4-B8UXPV5O.js","assets/A4-casa-1-DPyBNJ4R.js","assets/A4-casa-2-CUqZ-wwI.js","assets/A4-casa-3-WYIWGWJ6.js","assets/A4-estacao-C2m9Mkzj.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-BAFsWXGF.js","assets/A4-posto-OzCP6eIF.js","assets/A4-treino-DnSVcZna.js","assets/A4-venda-BynKqgRw.js","assets/A5-CBM2p4qM.js","assets/A5-casa-1-Do3KUk05.js","assets/A5-casa-2-CdiHHTT7.js","assets/A5-casa-3-B687mzAq.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-BAcUkpq1.js","assets/A5-venda-DkfDp2eg.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-iBXldVyF.js","assets/A6-casa-2-CuxnzeJf.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-CzN8Qqjj.js","assets/A6-posto-D1cJy3I4.js","assets/A6-venda-CopKlLwN.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-BZjMO8Dj.js","assets/A7-casa-2-CZ-3eepN.js","assets/A7-casa-3-DDRVRPHp.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-CBZiZlRf.js","assets/A7-venda-CRD2F-ow.js","assets/A8-casa-1-BI6qc1cv.js","assets/A8-casa-2-BhuerN4R.js","assets/A8-casa-3-q8fquF0d.js","assets/A8-forja-BV8EJF6f.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto--dQ3i2R6.js","assets/A8-venda-CepoF6hO.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-BYQzwGxp.js","assets/A9-casa-2-BEd8SS-m.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-DVzV93LK.js","assets/A9-venda-xKoNeC_e.js","assets/B-CE-CWAAulBQ.js","assets/B-CH-BGTKjzgK.js","assets/B-CV-BmqRqkNO.js","assets/B-FA-BKUIM8P7.js","assets/B-LG-D8VqGT3G.js","assets/B-LG-cabana-Cvko8I4x.js","assets/B-PA-B16cjhQQ.js","assets/B-R1-CyLgp0zI.js","assets/B-R2-DDxmRcfA.js","assets/B-R3-BfGlVgIZ.js","assets/B-R4-KgUFkdWr.js","assets/B-R5-DEIY3kLb.js","assets/B-SG-sBIqbIcp.js","assets/B-TA-DALtpOAw.js","assets/B-TA-gruta-Bp13BX7J.js","assets/B-VV-9VGHhKF4.js","assets/B1-DTCIb0JY.js","assets/B1-casa-1-DcfqU0zV.js","assets/B1-casa-2-CC_LFWzg.js","assets/B1-casa-3-LODf6WMx.js","assets/B1-estacao-Bb9uf4Yr.js","assets/B1-lab-CpHziIuy.js","assets/B1-posto-CD7_pH-i.js","assets/B1-salao-DlL2Gwom.js","assets/B1-venda-BGcvhYGD.js","assets/B2-B6ViQ4bc.js","assets/B2-casa-1-CaiqliqC.js","assets/B2-casa-2-DAvjm-A4.js","assets/B2-centro-C1oAcOfe.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-CqkpoPNv.js","assets/B2-venda-D6zk8jRl.js","assets/B3-_t-U-ls1.js","assets/B3-casa-1-8buGgqWc.js","assets/B3-casa-2-BXW0YNLi.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-Dnm6elgz.js","assets/B3-mina-2-BpG3ykaM.js","assets/B3-posto-DtFvY-eh.js","assets/B3-venda-DIzxTTIo.js","assets/B4-D-jviKhx.js","assets/B4-casa-1-BCk5zijR.js","assets/B4-forja-CZvB7YfA.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-B8W32ZVf.js","assets/B4-venda-HBLFUiKq.js","assets/B5-Bv7yoRKh.js","assets/B5-casa-1-CdSteIiQ.js","assets/B5-casa-2-CFBkrmy0.js","assets/B5-casa-3-C_UCO6cg.js","assets/B5-casa-4-DLeLfUDx.js","assets/B5-feira-DkdW4g1p.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-Dnn4dZg5.js","assets/B5-venda-D_4Jros6.js","assets/B6-D3dRq3J2.js","assets/B6-casa-1-CUvMnKtF.js","assets/B6-casa-2-DQutIewD.js","assets/B6-casa-3-Ceexs3Vy.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-DlKgd4bM.js","assets/B6-lab-2-MjWlpnM_.js","assets/B6-lab-3-g2anyuW7.js","assets/B6-posto-AP-_WeeL.js","assets/B6-venda-BkrLfhHu.js","assets/B7-DYPCzt2P.js","assets/B7-casa-1-DjXopGMr.js","assets/B7-casa-2-B-cfCbWZ.js","assets/B7-ctg-cpFWiHUy.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-DEgd7y-1.js","assets/B7-venda-B1lRYkT_.js","assets/B8-a4Krc911.js","assets/B8-casa-1-C6jLs0EZ.js","assets/B8-casa-2-DHS2z4lI.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-1y89Mteb.js","assets/B8-posto-BSQ-88HY.js","assets/B8-venda-YEjo0icT.js","assets/B9-BBTSpL7x.js","assets/B9-casa-1-Bev0r2Io.js","assets/B9-casa-2-_mJEumch.js","assets/B9-posto-B5Oj0rBx.js","assets/B9-venda-CrC8oK2q.js","assets/PP-conselho-Cp7vlcD4.js","assets/PP-gruta-DXGgvY6o.js","assets/PP-posto-Dgojs7OX.js","assets/PP-qLvkTeqX.js","assets/PP-venda-Lonlze9N.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-BJ4gYna1.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BBc2TWmi.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-DFnxiywH.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-CjaChehl.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-DyHoEcZh.js","assets/_teste-b-CZORAJyn.js","assets/a1-BDa4IZ4I.js","assets/a2-C52V0pPe.js","assets/atlas.json","assets/audio-DxEZ5NbC.js","assets/b1-C1-4sy1k.js","assets/b2-norte-DqWfCic9.js","assets/b2-sul-0qKX4xRs.js","assets/batalha-Ce4e4C8w.js","assets/catalogo-objetos-DY9qXVWe.js","assets/cena-BL42p4Bw.js","assets/conselho-De5UxrBo.js","assets/criatura-D5R8spkd.js","assets/decoracao-DuJHrcm1.js","assets/diario-5MnAAYd5.js","assets/eventos-a-BGsE8Ipi.js","assets/eventos-b-CdLvnYHD.js","assets/extras-iC6uTp3S.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-Bn7cewnX.js","assets/index-DTsdBYHL.js","assets/index-Dtsdk12j.js","assets/itens-D8FCvGNS.js","assets/liga-Cjmm7176.js","assets/mecanicas-BPZRTLnO.js","assets/palco-gDZxmYC5.js","assets/raras.json","assets/registro--uG31bLm.css","assets/registro-DKDwuvcz.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui-DKbu2IGg.js","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-BNDKlByQ.js","assets/visitantes-CRjxMh4x.js","assets/voltar-B2TgYqgC.js","assets/voltar-C2rxa7xg.css","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
