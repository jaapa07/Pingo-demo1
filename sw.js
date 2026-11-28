/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "2853a18f3a";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-BTARwzHt.js","assets/A-GN-BnoaPAHs.js","assets/A-LG-DULqiKnC.js","assets/A-LG-posto-EIn2JpI9.js","assets/A-LG-venda-CyGo8UUY.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-BrKktyWs.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-DUr3aNN9.js","assets/A-R2-BMsiVqn3.js","assets/A-R3-CbsC76m7.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-Dco2bqkJ.js","assets/A-R7-fkV2cN_w.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-BFnykBUZ.js","assets/A-SF-casa-mJyGuPNJ.js","assets/A-SF-parque-ehlsAVlF.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-WPQeFF9r.js","assets/A1-casa-1-BexYwmep.js","assets/A1-casa-2-CYkOaxuv.js","assets/A1-casa-jogador-DY1K8l37.js","assets/A1-lab-CoP9YT9V.js","assets/A1-quarto-DDOuYk71.js","assets/A10-CXy1gSSs.js","assets/A10-casa-1-D73i9LeK.js","assets/A10-casa-2-DSH3gixD.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-6OQlnzUZ.js","assets/A10-posto-BpU4OkH1.js","assets/A10-venda-Cf8x5P7u.js","assets/A2-DCsRYf1H.js","assets/A2-casa-1-DGsu2Uxl.js","assets/A2-casa-2-BE-QBXKd.js","assets/A2-casa-aroeira-CJThK83G.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-0c_-vCdl.js","assets/A2-venda-XHOGVpgb.js","assets/A3-B0xVPNjb.js","assets/A3-casa-1-C3_SacRn.js","assets/A3-casa-2-DW0H5uWE.js","assets/A3-casa-3-ussAFE5M.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-D3F4qCZT.js","assets/A3-venda-C50ja_qr.js","assets/A4-DggdneOp.js","assets/A4-casa-1-D796TVms.js","assets/A4-casa-2-CH2sSliT.js","assets/A4-casa-3-D4KZn3nl.js","assets/A4-estacao-C2m9Mkzj.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-Di6OdQen.js","assets/A4-posto-vyhKKF6w.js","assets/A4-treino-Be7nD5_-.js","assets/A4-venda-B0P5Oxc9.js","assets/A5-CBM2p4qM.js","assets/A5-casa-1-Bbwyc5bh.js","assets/A5-casa-2-BQQEW8d2.js","assets/A5-casa-3-Czu5dRyE.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-BHSyg3Ya.js","assets/A5-venda-DEYcIBBJ.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-CmpOkTnS.js","assets/A6-casa-2-XJYn36BW.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-BK2kBW8h.js","assets/A6-posto-CPWYeDyk.js","assets/A6-venda-CpFVzEjZ.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-Dk7dqea8.js","assets/A7-casa-2-JC01Qaxc.js","assets/A7-casa-3-DlCv0mqF.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-Do5sZhM6.js","assets/A7-venda-BVuMknVY.js","assets/A8-casa-1-aIOh26JP.js","assets/A8-casa-2-0gyA3ULw.js","assets/A8-casa-3-CTGl44Gi.js","assets/A8-forja-B1FgVxeg.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-B31Pex12.js","assets/A8-venda-D4pYoQwA.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-ipRu_vWz.js","assets/A9-casa-2-DKJ_ns1g.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-hyPtkQ3Q.js","assets/A9-venda-CzQLIGl0.js","assets/B-CE-BLpYoMjZ.js","assets/B-CH-DNPJNG8F.js","assets/B-CV-Bixj7SZY.js","assets/B-FA-qhmtEVt5.js","assets/B-LG-cabana-Dzu7rASS.js","assets/B-LG-smwfgqwV.js","assets/B-PA-DOf58kDc.js","assets/B-R1-B_Xu9fm0.js","assets/B-R2-DoJmmIlU.js","assets/B-R3-Co_5a7oy.js","assets/B-R4-CVSdevOP.js","assets/B-R5-DaUdYD4k.js","assets/B-SG-BvGWNMqh.js","assets/B-TA-D7-RNCW8.js","assets/B-TA-gruta-DP0dVr77.js","assets/B-VV-CgQKhaEf.js","assets/B1-D863TVqw.js","assets/B1-casa-1-63n_Vhp2.js","assets/B1-casa-2-CR-sCH-u.js","assets/B1-casa-3-BmeeSFmC.js","assets/B1-estacao-Bb9uf4Yr.js","assets/B1-lab-BrTmhWZO.js","assets/B1-posto-D0M1Lmve.js","assets/B1-salao-ClDWVLkG.js","assets/B1-venda-dy0q03bt.js","assets/B2-BbGaZRAu.js","assets/B2-casa-1-iIcw8t7U.js","assets/B2-casa-2-D_7TDJXE.js","assets/B2-centro-CYhzoVu4.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-CTi6IJAi.js","assets/B2-venda-B0w-ifMy.js","assets/B3-D0ukFeMS.js","assets/B3-casa-1-B3OtGz8s.js","assets/B3-casa-2-DPIhErsY.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-BiDW6Png.js","assets/B3-mina-2-Bono2Q8F.js","assets/B3-posto-CHFzeVNs.js","assets/B3-venda-CysjBGQh.js","assets/B4-C7WJezfj.js","assets/B4-casa-1-CAZh6igA.js","assets/B4-forja-JOWoQG5b.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-9HLtY_xj.js","assets/B4-venda-NCUlrscf.js","assets/B5-Nac1mCdf.js","assets/B5-casa-1-D1Dgv1hF.js","assets/B5-casa-2-CsgRfgAx.js","assets/B5-casa-3-DK2lspSS.js","assets/B5-casa-4-CPqG2L-A.js","assets/B5-feira-CwkeRNQI.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-ChiXYRDL.js","assets/B5-venda-Bt6Crh0C.js","assets/B6-Ce3qjEzh.js","assets/B6-casa-1-DZxtCUXd.js","assets/B6-casa-2-B1qBkXGa.js","assets/B6-casa-3-BOmhOG5V.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-BkmStJ9-.js","assets/B6-lab-2-CV6K0WFS.js","assets/B6-lab-3-DvoC69TC.js","assets/B6-posto-dO0dfyf_.js","assets/B6-venda-DXthJ6Vq.js","assets/B7-CVEf2j_D.js","assets/B7-casa-1-BG_6w--v.js","assets/B7-casa-2-K8fyWMJ0.js","assets/B7-ctg-CuPOoyHP.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-CTfLzVZu.js","assets/B7-venda-Cqa8qbD6.js","assets/B8-C7wRuxTx.js","assets/B8-casa-1-D7Bxja_7.js","assets/B8-casa-2-DN3bv2II.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-DQ0P0UBm.js","assets/B8-posto-CmQhG-fg.js","assets/B8-venda-CRJ0Q6Om.js","assets/B9-DnCzgKyv.js","assets/B9-casa-1-BUiX0JNK.js","assets/B9-casa-2-CE6K2sgc.js","assets/B9-posto-3rI53FK9.js","assets/B9-venda-Dq9ehs-h.js","assets/PP-DJxzT1k3.js","assets/PP-conselho-FLBH7F5E.js","assets/PP-gruta-jxG7uhp9.js","assets/PP-posto-BoLI8omZ.js","assets/PP-venda-DqdmrwjO.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-D2hN04gX.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-Bezgbp-V.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-DVGBSmqL.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-BAK9v0kC.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-Dd026mTU.js","assets/_teste-b-CZORAJyn.js","assets/a1-BDa4IZ4I.js","assets/a2-C52V0pPe.js","assets/atlas.json","assets/audio-C8eeQQ4O.js","assets/b1-C1-4sy1k.js","assets/b2-norte-DqWfCic9.js","assets/b2-sul-0qKX4xRs.js","assets/batalha-Ce4e4C8w.js","assets/catalogo-objetos-DY9qXVWe.js","assets/cena-CKxQkRv0.js","assets/conselho-De5UxrBo.js","assets/criatura-Cf7480A7.js","assets/decoracao-CNyryZqd.js","assets/diario-5MnAAYd5.js","assets/eventos-a-BGsE8Ipi.js","assets/eventos-b-CdLvnYHD.js","assets/extras-iC6uTp3S.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-By1QtIQG.js","assets/index-C0HIgX0q.js","assets/index-CLwrE20S.js","assets/itens-D8FCvGNS.js","assets/liga-Cjmm7176.js","assets/mecanicas-DOqjB4jG.js","assets/palco-zqTAqjDK.js","assets/raras.json","assets/registro--uG31bLm.css","assets/registro-CzDKNbLN.js","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui-DKbu2IGg.js","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-B9LzoJJB.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-hE8TEEe3.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
