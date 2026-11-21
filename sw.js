/* Adventures of Pingo: Service Worker gerado por tools/build-sw.ts. Não edite à mão. */
'use strict';
const VERSAO = "73454423d9";
const PREFIXO = 'pingodemo-';
const CACHE_NUCLEO = PREFIXO + 'n-' + VERSAO; // página, código, interface: um por versão
const CACHE_DADOS = PREFIXO + 'dados';        // sprites, arenas e zonas: um só, com o hash na chave
const NUCLEO = ["assets/A-BA-DGii2K8Y.js","assets/A-GB-1-BIrcbzf7.js","assets/A-GB-2-ChJ12mdS.js","assets/A-GE-BYhFt5Kv.js","assets/A-GN-BGRB-CNz.js","assets/A-LG-CbbsfChZ.js","assets/A-LG-posto-BSDkAnQ6.js","assets/A-LG-venda-DcnIT0PX.js","assets/A-MG-Co5wk_YT.js","assets/A-MS-BaoonlTs.js","assets/A-MT-ClxeTg7R.js","assets/A-MT-gruta-DrJloqAy.js","assets/A-PR-GsnZf-mT.js","assets/A-R1-D-7JN6gZ.js","assets/A-R2-6Q8Raoew.js","assets/A-R3-DNOa6B3z.js","assets/A-R4-BgpJFOin.js","assets/A-R5-BuEgttM1.js","assets/A-R6-BoHzR8y0.js","assets/A-R7-DgY52QB0.js","assets/A-RS-CUzEx1bg.js","assets/A-SF-CsRn1tRy.js","assets/A-SF-casa-PSncEgei.js","assets/A-SF-parque-D7TeekhL.js","assets/A-US-1-B1rUc-4Z.js","assets/A-US-2-B9S_sxSU.js","assets/A-US-3-PVLioNDq.js","assets/A1-Cp4P-MaJ.js","assets/A1-casa-1-BGKnQU0Y.js","assets/A1-casa-2-C88CfLuq.js","assets/A1-casa-jogador-DMTaK9KR.js","assets/A1-lab-BkzBNwQ4.js","assets/A1-quarto-4RCt9wXo.js","assets/A10-Djy8d3zp.js","assets/A10-casa-1-B7y9ixgm.js","assets/A10-casa-2-B5EdlwQm.js","assets/A10-ginasio-BQ7KqxBy.js","assets/A10-lab-DAzyN37k.js","assets/A10-posto-D7uqR6Nu.js","assets/A10-venda-Kn5zyTBS.js","assets/A2-BP4RHWBB.js","assets/A2-casa-1-DmM8dqTU.js","assets/A2-casa-2-DYJQ-6fY.js","assets/A2-casa-aroeira-B3UM_HW3.js","assets/A2-ginasio-BAn1QSK6.js","assets/A2-posto-D4BDFGvZ.js","assets/A2-venda-CQB4_HXL.js","assets/A3-B_uzwFzU.js","assets/A3-casa-1-CSuwbj8M.js","assets/A3-casa-2-CknR7YZE.js","assets/A3-casa-3-ByT-4P2b.js","assets/A3-ginasio-Cn8U92Bn.js","assets/A3-posto-DI9RZsEq.js","assets/A3-venda-3poDFQ0p.js","assets/A4-DbyC6t0i.js","assets/A4-casa-1-CapMZwlv.js","assets/A4-casa-2-CFzEctE7.js","assets/A4-casa-3-CQiCK2Fr.js","assets/A4-estacao-yC52RbFS.js","assets/A4-ginasio-B9CT4fMo.js","assets/A4-mercado-mmhOXQc9.js","assets/A4-posto-CNLqaPBc.js","assets/A4-treino-BSIHkqj-.js","assets/A4-venda-DY1kXrQ0.js","assets/A5-Cpa-neOr.js","assets/A5-casa-1-J2PYClgV.js","assets/A5-casa-2-mPVp1839.js","assets/A5-casa-3-BE0SGZn8.js","assets/A5-ginasio-BAUuUkJd.js","assets/A5-posto-CV5UmeLd.js","assets/A5-venda-CqsBNbgR.js","assets/A6-Ctkze9_8.js","assets/A6-casa-1-oH5ehrYb.js","assets/A6-casa-2-DRo3uyF0.js","assets/A6-farol-1-DHt6CWrM.js","assets/A6-farol-2-OEjkpfha.js","assets/A6-farol-3-DBLzwSLD.js","assets/A6-farol-4-29yJ9-nl.js","assets/A6-ginasio-An9WlYjd.js","assets/A6-oficina-DWl3lruj.js","assets/A6-posto-CBKptj1G.js","assets/A6-venda-Cm8L-CSk.js","assets/A7-B9SeTy7A.js","assets/A7-casa-1-CW9mLo6u.js","assets/A7-casa-2-DkGlzWWu.js","assets/A7-casa-3-Bu9BVF-g.js","assets/A7-ginasio-MNM54nh6.js","assets/A7-posto-Dyx4maDD.js","assets/A7-venda-BIUeZikv.js","assets/A8-casa-1-CV5vP30A.js","assets/A8-casa-2-7zD6sQMj.js","assets/A8-casa-3-DCVbU5Gy.js","assets/A8-forja-S34KeNQa.js","assets/A8-ginasio-DZmYmrun.js","assets/A8-hcsdPr9w.js","assets/A8-posto-C5FW8Co2.js","assets/A8-venda-Dr0-Um-b.js","assets/A9-D2C8VJMH.js","assets/A9-casa-1-BZzRbee5.js","assets/A9-casa-2-Dtgal0uF.js","assets/A9-ginasio-jzdszJQg.js","assets/A9-posto-D1gMKfni.js","assets/A9-venda-mp-9WxGJ.js","assets/B-CE-Ie9K28Jl.js","assets/B-CH--ESZyJCC.js","assets/B-CV-C2s2YlCw.js","assets/B-FA-BrnpYKvH.js","assets/B-LG-cabana-Bemeezcg.js","assets/B-LG-wfShE3u3.js","assets/B-PA-DLNcLT15.js","assets/B-R1-DayPkhri.js","assets/B-R2-CmeWV9Dn.js","assets/B-R3-DPsv17oa.js","assets/B-R4-CWeTirqB.js","assets/B-R5-CK5n0BCJ.js","assets/B-SG-wy_H5lic.js","assets/B-TA-gruta-DT2ZZBHd.js","assets/B-TA-nT92dCvi.js","assets/B-VV-DcuidX7G.js","assets/B1-BtsfqQkL.js","assets/B1-casa-1-Xq8jcwPr.js","assets/B1-casa-2-Bp7DR3yR.js","assets/B1-casa-3-yzj95313.js","assets/B1-estacao-BEJ5S_zE.js","assets/B1-lab-iYy2y-Ta.js","assets/B1-posto-DHRuK3ej.js","assets/B1-salao-BosCRlNQ.js","assets/B1-venda-CVxvRrk1.js","assets/B2-DNC3ud0r.js","assets/B2-casa-1-BCnpsKsR.js","assets/B2-casa-2-Dj5SxYDX.js","assets/B2-centro-Cf_xVCHD.js","assets/B2-ginasio-CAvOP5HK.js","assets/B2-posto-BcUVkB3V.js","assets/B2-venda-Cm6PC6c6.js","assets/B3-CpGvZ19I.js","assets/B3-casa-1-FkbN0Mdg.js","assets/B3-casa-2-DD48A3fs.js","assets/B3-ginasio-Rg3wNPqj.js","assets/B3-mina-1-B4zaElCl.js","assets/B3-mina-2-aHDK1BZ_.js","assets/B3-posto-C8lGaN2M.js","assets/B3-venda-Ylxnvdth.js","assets/B4-Bu2UL8tw.js","assets/B4-casa-1-BliviOvU.js","assets/B4-forja-BowyUqRt.js","assets/B4-ginasio-DYOGQqOs.js","assets/B4-posto-BkC28tOj.js","assets/B4-venda-B_ooNaEp.js","assets/B5-CarrX0aP.js","assets/B5-casa-1-ChgQL2MY.js","assets/B5-casa-2-HZZgMgWH.js","assets/B5-casa-3-GkemnA_B.js","assets/B5-casa-4-BTUqsxex.js","assets/B5-feira-BVwzrCys.js","assets/B5-ginasio-CTM7PCK1.js","assets/B5-posto-DVt4RuIc.js","assets/B5-venda-CWv_65bf.js","assets/B6-9Xoburv9.js","assets/B6-casa-1-BrRw9GUP.js","assets/B6-casa-2-KhBHPxDp.js","assets/B6-casa-3-Dq8IpUln.js","assets/B6-ginasio-H0ZVvoBU.js","assets/B6-lab-1-C7FKVUp4.js","assets/B6-lab-2-B8sMWi_n.js","assets/B6-lab-3-Ijdtx1vK.js","assets/B6-posto-BDvO3G7Z.js","assets/B6-venda-kjPVNxrh.js","assets/B7-BF37E1FF.js","assets/B7-casa-1-DrioYyU6.js","assets/B7-casa-2-CuF7EnPd.js","assets/B7-ctg-CXvxPFtZ.js","assets/B7-ginasio-zfMe3fB1.js","assets/B7-posto-BrlX9QaS.js","assets/B7-venda-CG16mE87.js","assets/B8-Cfqq4WK6.js","assets/B8-casa-1-C_pdhge4.js","assets/B8-casa-2-CVi2XYda.js","assets/B8-ginasio-BXpU_qza.js","assets/B8-observatorio-JcHBUbZH.js","assets/B8-posto-D-kih9It.js","assets/B8-venda-CKvkduOL.js","assets/B9-1poxqdZJ.js","assets/B9-casa-1-DPTq63dm.js","assets/B9-casa-2-ru5OD7PX.js","assets/B9-posto-D4MUQ0jG.js","assets/B9-venda-D5VAGz9B.js","assets/PP-D0a3EI8f.js","assets/PP-conselho-1424ZbyQ.js","assets/PP-gruta-CQIU_iby.js","assets/PP-posto-CLD52ReY.js","assets/PP-venda-CuqZTP-n.js","assets/X-EA-DGD_ypWv.js","assets/_a1-grade-B9AoyYfm.js","assets/_a2-grade-4kWy_6EB.js","assets/_b1-lib-BAzf4MAI.js","assets/_b2-lib-DguaUL68.js","assets/_b2n-lib-Bd5vXUvk.js","assets/_b2n-ligacoes-C9bAJNd7.js","assets/_b2s-lib-BE49Ht3E.js","assets/_demo-brejo-D3Yzre2k.js","assets/_demo-caverna-kX3F40SB.js","assets/_demo-cerrado-CIF-Jccj.js","assets/_demo-chapada-wJT7ejTh.js","assets/_demo-costa-B9JhqZCf.js","assets/_demo-ferrugem-C-eg169o.js","assets/_demo-geada-BentvFm4.js","assets/_demo-int-casa-CL9jEOj7.js","assets/_demo-int-ginasio-Dwo4_-FA.js","assets/_demo-int-industrial-DQKxn9GG.js","assets/_demo-int-predio-CYga2X74.js","assets/_demo-int-quarto-DfEHedT5.js","assets/_demo-mata-tEBg66Uk.js","assets/_demo-pantanal-mgPe4Mdo.js","assets/_demo-pico-CB9ErExY.js","assets/_demo-planalto-BP-yk1Ku.js","assets/_demo-serra-BWfiGp0j.js","assets/_demo-submerso-DYiC1VWg.js","assets/_teste-a-CENib0sb.js","assets/_teste-b-CZORAJyn.js","assets/a1-DgHVQNre.js","assets/a2-Bt4I1L_5.js","assets/atlas.json","assets/audio-BwJPVwAm.js","assets/b1-C1-4sy1k.js","assets/b2-norte-fRarKeF-.js","assets/b2-sul-BOnmUpTI.js","assets/catalogo-objetos-yYtBHNPw.js","assets/cena-BFIZvrbf.js","assets/conselho-De5UxrBo.js","assets/criatura-CzX8-FEa.js","assets/decoracao-Dmloc-3g.js","assets/fx/fx.png","assets/ginasio-01-DHzWt1VA.js","assets/ginasio-02-RK9xLaKV.js","assets/ginasio-03-D7RDQg_C.js","assets/ginasio-04-CFrl6qYr.js","assets/ginasio-05-BcHJnIfH.js","assets/ginasio-06-so_C90Zu.js","assets/ginasio-07-CtMbAdwR.js","assets/ginasio-08-COzflR2c.js","assets/ginasio-09-DnxM0tF8.js","assets/ginasio-10-DSaKzsGt.js","assets/ginasio-11-D0m4hQDi.js","assets/ginasio-12-nhzEbhcs.js","assets/ginasio-13-0xpdTZ4u.js","assets/ginasio-14-D07Wr7e-.js","assets/ginasio-15-xQtdvs2U.js","assets/ginasio-16-WfgQGb4A.js","assets/index-0nM4c5Rw.css","assets/index-B0_lbNeG.js","assets/index-CmepI-S7.js","assets/index-D2hw7aUU.js","assets/liga-Cjmm7176.js","assets/mecanicas-DP-Q7VIF.js","assets/palco-BQPTiuiC.js","assets/raras.json","assets/registro-ClgnLUD2.js","assets/registro-DwqY7BYB.css","assets/tiles/brejo.json","assets/tiles/brejo.png","assets/tiles/casa.json","assets/tiles/casa.png","assets/tiles/caverna.json","assets/tiles/caverna.png","assets/tiles/cerrado.json","assets/tiles/cerrado.png","assets/tiles/chapada.json","assets/tiles/chapada.png","assets/tiles/costa.json","assets/tiles/costa.png","assets/tiles/decoracao.json","assets/tiles/decoracao.png","assets/tiles/ferrugem.json","assets/tiles/ferrugem.png","assets/tiles/geada.json","assets/tiles/geada.png","assets/tiles/ginasio.json","assets/tiles/ginasio.png","assets/tiles/industrial.json","assets/tiles/industrial.png","assets/tiles/mata.json","assets/tiles/mata.png","assets/tiles/pantanal.json","assets/tiles/pantanal.png","assets/tiles/pico.json","assets/tiles/pico.png","assets/tiles/planalto.json","assets/tiles/planalto.png","assets/tiles/predio.json","assets/tiles/predio.png","assets/tiles/serra.json","assets/tiles/serra.png","assets/tiles/submerso.json","assets/tiles/submerso.png","assets/ui/camadas/logo-pingo.png","assets/ui/camadas/logo-sub.png","assets/ui/camadas/mar.png","assets/ui/camadas/mata.png","assets/ui/camadas/morros.png","assets/ui/camadas/nuvem.png","assets/ui/camadas/palha.png","assets/ui/camadas/serra.png","assets/ui/camadas/sol.png","assets/ui/fonte12.png","assets/ui/fonte8.png","assets/ui/ui.png","assets/view-B8W6i3nQ.js","assets/visitantes-CRjxMh4x.js","assets/voltar-C2rxa7xg.css","assets/voltar-DCjDEY6G.js","icones/apple-touch-icon.png","icones/favicon-32.png","icones/icone-192.png","icones/icone-512.png","icones/icone-maskable-192.png","icones/icone-maskable-512.png","index.html","manifest.webmanifest","pingo-arquivos.json"];
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
