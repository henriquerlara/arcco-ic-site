# ARCCO — Inteligência Comercial

Institucional em Vue 3, Vite e Tailwind, com HTML pré-renderizado no build. Apresenta a plataforma própria de gestão e automação comercial para empresas que fornecem produtos e serviços à construção.

## Executar

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Saída estática em `dist/`, sem backend de renderização. Hospedagem e CNAME preservados.

## Estrutura atual

1. Abertura com a imagem administrativa/comercial enviada pelo usuário, identificação de software e CTA para a solução.
2. Apresentação da plataforma com a imagem de especificações e links para as três áreas.
3. Relacionamento, Negócios e Operação em capítulos independentes. As fotografias são panorâmicas no desktop, chegam às bordas e se dissolvem no fundo de cada capítulo. No mobile, recuperam a proporção original. No desktop os capítulos usam altura de 100svh, com a fotografia ocupando o espaço restante depois do texto. No mobile, a altura acompanha o conteúdo.
4. Detalhes nativos expansíveis explicam as frentes de cada área. Um item abre por vez, com animação de altura e opacidade de 280 ms na abertura e no fechamento. Uma reserva intrínseca com o maior texto mantém a seção estável, acompanhando a largura e as fontes. O texto de medição fica oculto e fora da árvore de acessibilidade. Sem JavaScript, os detalhes continuam funcionando nativamente.
5. Seção própria para o relacionamento pelo WhatsApp, explicando o que a combinação de automação e plataforma facilita para clientes, equipe e empresa. As funcionalidades apresentadas têm como referência o institucional público em `https://arccoic.com/`, consultado em 13/11/2026. Sem reprodução da interface de um aplicativo.
6. Fechamento claro dedicado ao produto, separado do rodapé petróleo e sem repetição do logo: proposta da plataforma e síntese das frentes. Rodapé com logo e dados institucionais reais.

A abertura adapta o uso da fotografia para telas menores. Não há faixa de imagens comprimidas, altura máxima cortando texto, navbar, rolagem presa ou scroll-snap obrigatório.

O movimento usa CSS e IntersectionObserver, com deslocamentos pequenos e conteúdo legível desde o início. Entrada coordenada da fotografia, do título e da explicação. Um deslocamento relativo discreto acompanha a rolagem das imagens no desktop, sem loops em repouso. `prefers-reduced-motion` remove movimento e transições. Observers e eventos são limpos ao desmontar.

## Contato

O usuário confirmou que o canal comercial será informado depois. `VITE_WHATSAPP_URL` permanece vazio. O encerramento exibe o produto sem um botão de contato sem destino. A configuração aceita apenas links HTTPS válidos de `wa.me` ou `api.whatsapp.com/send`.

## Ativos e conteúdo

As cinco imagens atuais foram enviadas pelo usuário. WebP locais, com versões de 640, 960 e 1440 px, preservam as proporções e o conteúdo dos arquivos. [Créditos e mapeamento](artifacts/CREDITOS.md).

Instrument Sans local, com licença OFL. Logo oficial, CNPJ e domínio preservados. Não foram inventados planos, resultados, clientes, recursos fiscais específicos ou contatos.

[Validação desta revisão](artifacts/VALIDACAO.md). Os relatórios Lighthouse e capturas anteriores em `artifacts/` são históricos e não descrevem esta nova composição.

O recorte fixo da abertura contém uma camada interna única com fotografia e filtro. Só essa camada interna se desloca, com margem de segurança para o parallax; a imagem não ultrapassa o filtro nem o limite da seção.

No desktop, abertura, apresentação e áreas ocupam um viewport por seção; o fechamento e o rodapé dividem o último viewport. Tipografia, espaçamentos e fotografia se ajustam à altura disponível. Janelas extremamente baixas (até 480 px) e a versão móvel preservam o fluxo de leitura. As animações dos dropdowns são canceladas ao desmontar, redimensionar ou ativar movimento reduzido.
