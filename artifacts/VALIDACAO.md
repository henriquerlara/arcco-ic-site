# Validação — correção isolada da apresentação

13/11/2026. Alteração restrita a `SolutionIntro.vue` e às regras dessa apresentação em `style.css`.

- CSS da apresentação isolado no componente; removida a sobreposição de regras globais específicas dessa seção.
- Mantidos os 100svh do desktop. A grade interna distribui a altura entre composição principal, legenda e índice inferior.
- Foto ampliada no espaço disponível; título e parágrafos com espaçamento consistente. Índice inferior separado por intervalo próprio.
- Legenda devolvida ao elemento figure, fora da área recortada da imagem.
- Hashes de oito arquivos de componentes, movimento e conteúdo conferidos: sem alterações fora do escopo. Hero, áreas, dropdowns, fechamento, rodapé e dados preservados.
- `npm test`: 2 testes passaram. `npm run build`: passou com pré-renderização.
- HTML gerado conferido e `git diff --check` passou.

Sem nova inspeção no navegador, conforme preferência do usuário. Nenhum commit, push ou publicação.

## Fotos, mobile e favicon — 13/11/2026

- Relacionamento e Negócios substituídos pelas duas novas imagens enviadas, na ordem solicitada. Cada uma tem versões WebP de 640, 960 e 1440 px, com dimensões intrínsecas atualizadas.
- Degradês dos capítulos vinculados ao quadro da foto, separados da legenda. No mobile, o quadro segue a proporção de cada imagem; removida a combinação de imagem menor com quadro mais alto.
- Foto da abertura e seu degradê preenchem o mesmo quadro no mobile. Ajustados respiros, tamanhos de toque dos dropdowns e links, leitura do rodapé e quebra de conteúdo em colunas estreitas.
- Apresentação com foto até as bordas no mobile, degradê superior e inferior e indicação correta do tamanho de download. Alturas das seções no desktop e lógica das animações preservadas.
- Favicon e apple-touch-icon com cantos arredondados e transparência externa; mantido o símbolo oficial. Versão dos links atualizada para renovar o cache dos ícones.
- `npm test`: 2 testes passaram. `npm run build`: passou com pré-renderização. Seis WebP e dois PNG conferidos por leitura e dimensões; `git diff --check` passou.

Validação pelo código e build. Sem nova inspeção visual ou de interação no navegador, conforme preferência do usuário.

## Degradê apenas na base das fotos no responsivo — 13/11/2026

- Alterações limitadas às regras de até 900 px: retirado somente o degradê superior. Degradês inferiores das fotos dos capítulos e da apresentação restaurados, com proporções originais e legendas separadas por respiro.
- Abertura mobile com foto e mensagem em blocos separados e transição inferior restaurada para o fundo sólido da seção.
- Entrada das fotos no mobile por mudança leve de opacidade, sem ampliar as bordas. Animações de texto e dropdowns mantidas.
- Desktop preservado. Formatação conferida e build com pré-renderização concluído.
- Sem nova inspeção no navegador, conforme preferência do usuário.

Correção posterior da emenda no responsivo: degradês inferiores com faixa final opaca de 16 px na cor exata da seção; sobreposição de 1 px nos quadros das fotos e fundos correspondentes. Alterações limitadas às regras de até 900 px, sem mudar dimensões ou espaçamentos.

## Operação em azul e seção de WhatsApp — 13/11/2026

- Operação usa o mesmo tema petróleo de Relacionamento, incluindo o fundo do degradê, textos, legendas, divisórias, dropdowns e foco de teclado.
- Nova seção de atendimento automatizado pelo WhatsApp entre Operação e o fechamento. Explica coleta de informações do pedido, oportunidade no funil, conexão com estoque e continuidade com a equipe, sem reproduzir uma interface de aplicativo.
- Fonte: [institucional público da ARCCO](https://arccoic.com/), consultado nesta data. A página e seu JavaScript público foram lidos por HTTP; as ofertas foram conferidas também na versão original do repositório. Nenhum canal de contato ou funcionalidade adicional foi inventado.
- Mantida uma tela por seção no desktop, com ajustes para janelas baixas e composição empilhada no mobile. Movimentos usam o composable existente e respeitam movimento reduzido.
- `npm test`: 2 testes passaram. Build com pré-renderização e formatação conferidos. HTML final validado: tema escuro em Operação, seção WhatsApp presente, todas as âncoras internas existentes, apenas dois logos e ausência do termo de atendimento rejeitado pelo usuário.
- Sem nova inspeção visual no navegador, conforme preferência do usuário. Nenhum commit, push ou publicação.

## Clareza da proposta e redução de repetição — 13/11/2026

- A abertura apresenta WhatsApp, automação e gestão como uma solução para facilitar a relação com os clientes e a rotina da empresa.
- Seção WhatsApp reformulada como relacionamento comercial, da primeira conversa aos próximos negócios. Três perspectivas explicam o benefício para clientes, equipe e empresa, sem restringir a oferta à triagem ou repetir a lista de módulos.
- Retirado o parágrafo redundante da seção. Textos das áreas mais diretos e fechamento voltado ao resultado no dia a dia, sem repetir as funcionalidades já detalhadas.
- Preservados layout, imagens, altura das seções, tema azul de Operação, degradês e interações. Nenhuma nova funcionalidade ou destino comercial anunciado.
- Build com pré-renderização, dois testes e `git diff --check` passaram. HTML final conferido, incluindo os três públicos e a ausência dos termos de atendimento rejeitados. Sem inspeção no navegador, conforme preferência do usuário.
