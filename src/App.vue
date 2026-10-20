<template>
  <main class="relative min-h-screen overflow-x-hidden text-[#f1ede4]">
    <div class="atm" aria-hidden="true">
      <div class="atm__rad-a" />
      <div class="atm__rad-b" />
      <div class="atm__rad-c" />
      <div class="atm__rad-d" />
      <div class="atm__grain" />
    </div>

    <header class="site-nav" :class="scrolled ? 'site-nav--scrolled' : ''">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" class="group flex items-center gap-3.5">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#b8aa97]/22 bg-[#041c20] p-2"
          >
            <ArccoMark />
          </div>
          <div>
            <p class="font-marca text-xl font-extrabold leading-none tracking-tight text-[#d9cec0]">
              ARCCO
            </p>
            <p class="mt-1 text-[9px] uppercase tracking-[0.4em] text-[#d9cec0]/70">
              Inteligência Comercial
            </p>
          </div>
        </a>

        <a :href="whatsappLink" class="btn-nav hidden md:inline-flex">Falar no WhatsApp</a>
      </nav>
    </header>

    <!-- HERO -->
    <section
      class="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-16"
    >
      <div>
        <div
          class="hero-enter mb-7 inline-flex items-center gap-2 rounded-full border border-[#b8aa97]/18 bg-[#b8aa97]/8 px-4 py-2 text-sm text-[#d9cec0]"
        >
          <Sparkles class="h-4 w-4" />
          Tecnologia comercial para quem vende à obra
        </div>

        <h1
          class="fonte-marca hero-title hero-enter hero-enter-delay-1 max-w-[11ch] text-[clamp(2.75rem,7vw,5.5rem)] text-[#fffdf9]"
        >
          A fala vira
          <span class="hero-title__pedido block">pedido.</span>
        </h1>

        <p
          class="hero-enter hero-enter-delay-2 mt-7 max-w-[30rem] text-[1.05rem] leading-8 text-[#d9cec0] md:text-lg"
        >
          CRM e WhatsApp para iluminação, concreto, piso, esquadria, material e serviço. O comercial
          continua no chat — o quadro é que passa a nascer dali.
        </p>

        <div class="hero-enter hero-enter-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a :href="whatsappLink" class="btn-primary group">
            Falar no WhatsApp
            <ArrowRight class="h-5 w-5 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#solucao" class="btn-ghost">Ver como funciona</a>
        </div>

        <ul
          class="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium tracking-tight text-[#d9cec0]/70"
        >
          <li v-for="ramo in ramos" :key="ramo">{{ ramo }}</li>
        </ul>
      </div>

      <div class="hero-enter hero-enter-delay-2 relative mx-auto w-full max-w-md lg:max-w-xl">
        <div
          class="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,#0d4a51_18%,transparent),transparent_72%)]"
          aria-hidden="true"
        />
        <PedidoAoVivo />
      </div>
    </section>

    <!-- O QUE A ARCCO FAZ -->
    <section id="solucao" class="section-bridge relative z-10 py-20 md:py-24">
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm uppercase tracking-[0.34em] text-[#b8aa97]" data-reveal>
            O que a ARCCO faz
          </p>
          <h2
            class="fonte-marca mt-4 text-[clamp(1.85rem,4.2vw,3.4rem)] leading-[1.08] text-[#fffdf9]"
            data-reveal
            data-reveal-delay="100"
          >
            Não é para quem constrói. É para quem vende para a obra.
          </h2>
          <p
            class="mt-5 text-lg leading-8 text-[#d9cec0]/75"
            data-reveal
            data-reveal-delay="180"
          >
            Cada empresa com o seu WhatsApp, o seu funil e o seu estoque. O bot faz a triagem; o
            atendente entra quando precisa.
          </p>
        </div>

        <div class="svc-grid mt-14">
          <article
            v-for="(service, idx) in services"
            :key="service.title"
            class="svc-card"
            data-reveal
            :data-reveal-delay="idx * 100"
            @mousemove="onCardMove"
            @mouseleave="onCardLeave"
          >
            <span class="svc-card__glow" aria-hidden="true" />
            <div
              class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8aa97]/10 text-[#d9cec0] ring-1 ring-[#b8aa97]/18"
            >
              <component :is="service.icon" class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-semibold tracking-tight text-[#fffdf9]">{{ service.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-7 text-[#d9cec0]/75">{{ service.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- COMO ENTRA — fluxo scroll -->
    <section class="relative z-10 py-20 md:py-24">
      <div
        class="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8"
        data-flow-track
      >
        <div class="lg:sticky lg:top-28 lg:self-start">
          <p class="text-sm uppercase tracking-[0.34em] text-[#b8aa97]" data-reveal="left">
            Como entra
          </p>
          <h2
            class="fonte-marca mt-4 text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.08] text-[#fffdf9]"
            data-reveal="left"
            data-reveal-delay="90"
          >
            Do WhatsApp ao quadro, sem recopy
          </h2>
          <p
            class="mt-5 max-w-md text-lg leading-8 text-[#d9cec0]/75"
            data-reveal="left"
            data-reveal-delay="160"
          >
            O time não abandona o chat. A ARCCO escuta o pedido, monta o card e mostra se tem lote —
            no ramo certo.
          </p>

          <!-- Mini UI scraps -->
          <div class="mt-10 hidden space-y-3 lg:block" data-reveal="left" data-reveal-delay="220">
            <div class="ui-scrap max-w-xs">
              <p class="ui-scrap__label">Conversa</p>
              <p class="mt-2 text-sm text-[#f1ede4]">40 luminárias IP65 · Lourdes</p>
            </div>
            <div class="ui-scrap max-w-[14rem] translate-x-6">
              <p class="ui-scrap__label">Oportunidade</p>
              <p class="mt-2 font-marca text-sm tracking-tight text-[#d9cec0]">OP-2048</p>
              <p class="mt-1 text-xs text-[#b8aa97]/70">Andamento</p>
            </div>
          </div>
        </div>

        <div class="flow-track">
          <div class="flow-line" aria-hidden="true">
            <div class="flow-line__fill" :style="{ height: `${progress * 100}%` }" />
          </div>

          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="flow-step"
            :class="activeIndex >= index ? 'flow-step--active' : ''"
            :data-step="index"
          >
            <div class="flow-step__num">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="flow-step__body">
              <h3 class="text-base font-semibold text-[#fffdf9] sm:text-lg">{{ step.title }}</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-[#b8aa97]/75">{{ step.text }}</p>
              <div class="flow-mini">
                <span v-for="tag in step.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Software real — floating panels -->
    <section class="relative z-10 pb-8 pt-4 md:pb-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal
        >
          <article
            v-for="(panel, idx) in uiPanels"
            :key="panel.label"
            class="ui-scrap"
            :class="idx % 2 === 1 ? 'sm:translate-y-4' : ''"
            data-reveal
            :data-reveal-delay="idx * 90"
          >
            <p class="ui-scrap__label">{{ panel.label }}</p>
            <p class="mt-2 text-[0.95rem] font-medium text-[#fffdf9]">{{ panel.value }}</p>
            <p class="mt-1 text-xs text-[#b8aa97]/70">{{ panel.sub }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div class="hl-strip grid lg:grid-cols-3">
        <div
          v-for="(item, idx) in highlights"
          :key="item.title"
          class="hl-cell border-[#f1ede4]/10 lg:border-r lg:last:border-r-0"
          data-reveal
          :data-reveal-delay="idx * 110"
        >
          <component :is="item.icon" class="h-7 w-7 text-[#b8aa97]" />
          <h3 class="mt-5 text-xl font-semibold tracking-tight text-[#fffdf9]">{{ item.title }}</h3>
          <p class="mt-2.5 text-[0.95rem] leading-7 text-[#d9cec0]/75">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contato" class="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-4 lg:px-8 lg:pb-28">
      <div class="cta-shell px-8 py-12 text-center md:px-16 md:py-16" data-reveal="zoom">
        <div class="cta-shell__light" aria-hidden="true" />

        <p class="relative text-sm uppercase tracking-[0.34em] text-[#b8aa97]">
          Uma volta no seu ramo
        </p>
        <h2
          class="fonte-marca relative mx-auto mt-4 max-w-[14ch] text-[clamp(1.9rem,4.5vw,3.5rem)] leading-[1.05] text-[#fffdf9]"
        >
          Manda o WhatsApp. A gente mostra o expediente.
        </h2>
        <p class="relative mx-auto mt-5 max-w-xl text-base leading-8 text-[#d9cec0]/75 md:text-lg">
          Sem cadastro e sem teatro de software. Iluminação, concreto, piso, esquadria, material ou
          serviço — o chat é o mesmo; o quadro muda.
        </p>

        <div
          class="relative mx-auto mt-8 flex max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          data-reveal
          data-reveal-delay="120"
        >
          <div class="cta-mini flex-1">
            <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b8aa97]">
              WhatsApp
            </p>
            <p class="mt-1.5 text-sm text-[#f1ede4]">40 IP65 · Lourdes · sexta</p>
          </div>
          <div class="hidden text-[#b8aa97]/50 sm:block" aria-hidden="true">→</div>
          <div class="cta-mini flex-1">
            <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b8aa97]">
              Oportunidade
            </p>
            <p class="mt-1.5 font-marca text-sm tracking-tight text-[#d9cec0]">OP-2048 · Andamento</p>
          </div>
        </div>

        <a :href="whatsappLink" class="btn-primary relative mt-10 inline-flex">
          Chamar no WhatsApp
          <ArrowRight class="h-5 w-5" />
        </a>
      </div>
    </section>

    <footer
      class="relative z-10 px-6 py-10 text-center text-[11px] uppercase tracking-[0.38em] text-[#b8aa97]/55 lg:px-8"
    >
      © {{ new Date().getFullYear() }} ARCCO · Inteligência Comercial
    </footer>
  </main>
</template>

<script setup>
import {
  ArrowRight,
  Bot,
  Gauge,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from '@/icons'

import ArccoMark from '@/components/ArccoMark.vue'
import PedidoAoVivo from '@/components/PedidoAoVivo.vue'
import {
  useScrollReveal,
  useStickyNav,
  useStepProgress,
} from '@/composables/useScrollReveal'

useScrollReveal()
const { scrolled } = useStickyNav()
const { activeIndex, progress } = useStepProgress()

const whatsappLink = 'https://wa.me/5500000000000'

const ramos = ['Iluminação', 'Concreto', 'Piso', 'Esquadria', 'Material', 'Serviço']

const services = [
  {
    icon: MessageCircle,
    title: 'WhatsApp com chatbot',
    text: 'O bot pergunta metragem, prazo e quem assina. Se emperrar, passa para o atendente — o comercial não some no grupo.',
  },
  {
    icon: Workflow,
    title: 'Funil que nasce da conversa',
    text: 'A oportunidade vira card com obra, volume e prazo. O time vê o quadro, não um print de ontem.',
  },
  {
    icon: Bot,
    title: 'CRM multiempresa',
    text: 'Contatos, obras do cliente e atividades no mesmo expediente — cada empresa com o seu ramo e o seu WhatsApp.',
  },
  {
    icon: Package,
    title: 'Estoque do que você vende',
    text: 'O pedido encontra o lote. Se faltar, o card espera — não vende o que não tem.',
  },
]

const steps = [
  {
    title: 'O comercial continua no WhatsApp',
    text: 'Ninguém troca de tela para anotar. O pedido chega onde já chega.',
    tags: ['Inbox', 'Bot + humano'],
  },
  {
    title: 'O bot confirma o que o grupo esquece',
    text: 'Obra, prazo, volume e quem assina — antes de virar “já te falei”.',
    tags: ['Obra', 'Prazo', 'Volume'],
  },
  {
    title: 'O card entra no funil',
    text: 'Andamento com os dados certos. Sem recopy, sem planilha paralela.',
    tags: ['OP-2048', 'Andamento'],
  },
  {
    title: 'O lote entra no radar',
    text: 'Se controla estoque, a reserva aparece. Se faltar, o pedido não some.',
    tags: ['Lote A-14', 'Reserva'],
  },
]

const uiPanels = [
  { label: 'Contato', value: 'Eng. Marina Costa', sub: 'Construtora · Lourdes' },
  { label: 'Oportunidade', value: 'OP-2048', sub: 'Iluminação · Andamento' },
  { label: 'Orçamento', value: '40 × IP65', sub: 'Prazo: sexta' },
  { label: 'Estoque', value: 'Lote A-14', sub: 'Reservado · 40 un.' },
]

const highlights = [
  {
    icon: Users,
    title: 'Quem vende para a obra',
    text: 'Iluminação, concreto, piso, esquadria, material, serviço — não é ferramenta de construtora.',
  },
  {
    icon: Gauge,
    title: 'O grupo deixa de ser o CRM',
    text: 'Menos áudio perdido, menos “me manda de novo”, mais previsibilidade no comercial.',
  },
  {
    icon: ShieldCheck,
    title: 'Pedido, funil e estoque juntos',
    text: 'O mesmo expediente. Sem inventar número: o quadro mostra o que o chat já fechou.',
  },
]

function onCardMove(e) {
  const card = e.currentTarget
  const glow = card.querySelector('.svc-card__glow')
  if (!glow) return
  const rect = card.getBoundingClientRect()
  glow.style.left = `${e.clientX - rect.left}px`
  glow.style.top = `${e.clientY - rect.top}px`
}

function onCardLeave(e) {
  const glow = e.currentTarget.querySelector('.svc-card__glow')
  if (glow) glow.style.opacity = '0'
}
</script>
