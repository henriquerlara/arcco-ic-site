<template>
  <main class="min-h-screen overflow-hidden bg-[#082f34] text-[#f1ede4] selection:bg-[#b8aa97]/30">
    <div class="pointer-events-none fixed inset-0 opacity-80">
      <div class="blob-float-a absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#b8aa97]/6 blur-3xl" />
      <div class="blob-float-b absolute right-[-14rem] top-[20rem] h-[34rem] w-[34rem] rounded-full bg-[#8b7b66]/6 blur-3xl" />
      <div class="blob-float-c absolute bottom-[-18rem] left-[-12rem] h-[36rem] w-[36rem] rounded-full bg-[#b8aa97]/5 blur-3xl" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_38%,#082f34_75%)]" />
    </div>

    <nav class="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="#" class="group flex items-center gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b8aa97]/25 bg-[#041c20] p-2 transition">
          <ArccoMark />
        </div>
        <div>
          <p class="font-marca text-2xl font-extrabold leading-none tracking-tight text-[#d9cec0]">
            ARCCO
          </p>
          <p class="mt-1.5 text-[10px] uppercase tracking-[0.42em] text-[#d9cec0]/80">
            Inteligência Comercial
          </p>
        </div>
      </a>

      <a href="#contato" class="hidden rounded-full border border-[#b8aa97]/30 px-5 py-2 text-sm text-[#d9cec0] transition hover:border-[#b8aa97] hover:bg-[#b8aa97]/10 md:block">
        Falar no WhatsApp
      </a>
    </nav>

    <section class="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-32 lg:pt-20">
      <div class="animate-fade-up">
        <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b8aa97]/20 bg-[#b8aa97]/10 px-4 py-2 text-sm text-[#d9cec0]">
          <Sparkles class="h-4 w-4" />
          Tecnologia comercial para quem vende à obra
        </div>

        <h1 class="fonte-marca max-w-4xl text-5xl leading-[0.98] tracking-tight text-[#fffdf9] md:text-7xl lg:text-8xl">
          A fala vira
          <span class="title-shimmer block bg-[linear-gradient(110deg,#f1ede4_0%,#b8aa97_35%,#f1ede4_55%,#8b7b66_75%,#f1ede4_100%)] bg-clip-text text-transparent">
            pedido.
          </span>
        </h1>

        <p class="mt-7 max-w-2xl text-lg leading-8 text-[#d9cec0] md:text-xl">
          CRM e WhatsApp para iluminação, concreto, piso, esquadria, material e serviço. O comercial continua no chat — o quadro é que passa a nascer dali.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a :href="whatsappLink" class="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f1ede4] to-[#b8aa97] px-7 py-4 font-medium text-[#082f34] transition hover:scale-[1.02]">
            Falar no WhatsApp
            <ArrowRight class="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a href="#solucao" class="inline-flex items-center justify-center rounded-full border border-[#f1ede4]/10 px-7 py-4 font-medium text-[#f1ede4] transition hover:border-[#b8aa97]/40 hover:bg-[#f1ede4]/5">
            Ver como funciona
          </a>
        </div>
        <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium tracking-tight text-[#d9cec0]/80">
          <li v-for="ramo in ramos" :key="ramo">{{ ramo }}</li>
        </ul>
      </div>

      <div class="relative mx-auto w-full max-w-xl animate-scale-in">
        <div class="absolute inset-0 rounded-[2.2rem] bg-[#041c20]/40 blur-3xl" />
        <div class="panel-float relative rounded-[2.2rem] border border-[#f1ede4]/10 bg-[#041c20]/80 p-6 shadow-[0_24px_48px_-20px_rgba(4,28,32,.55)] backdrop-blur-xl">
          <div class="mb-5 flex items-center justify-between">
            <div>
              <p class="text-xs uppercase tracking-[0.34em] text-[#b8aa97]">Pedido agora</p>
              <h2 class="mt-2 text-2xl font-semibold">Iluminação · Lourdes</h2>
            </div>
            <div class="pulse-dot rounded-full bg-emerald-400/10 py-1 pl-5 pr-3 text-xs text-emerald-300">online</div>
          </div>

          <div class="space-y-3">
            <div
              v-for="(item, idx) in dashboardItems"
              :key="item.label"
              class="rounded-2xl border border-[#f1ede4]/8 bg-[#f1ede4]/[0.035] p-4 transition hover:border-[#b8aa97]/30 hover:bg-[#b8aa97]/5"
              data-reveal
              :data-reveal-delay="idx * 120"
            >
              <div class="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#b8aa97]/70">
                <span>{{ item.label }}</span>
                <CheckCircle2 class="h-4 w-4 text-[#b8aa97]" />
              </div>
              <p class="text-base text-[#f1ede4]">{{ item.value }}</p>
              <p class="mt-1 text-sm text-[#b8aa97]/70">{{ item.sub }}</p>
            </div>
          </div>

          <div class="mt-5 grid grid-cols-3 gap-3">
            <div
              v-for="(stat, idx) in stats"
              :key="stat.label"
              class="rounded-2xl bg-[#b8aa97]/10 p-4 text-center transition hover:bg-[#b8aa97]/20"
              data-reveal="zoom"
              :data-reveal-delay="400 + idx * 110"
            >
              <p class="fonte-marca text-2xl text-[#d9cec0]">{{ stat.number }}</p>
              <p class="mt-1 text-xs text-[#d9cec0]/80">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="solucao" class="relative z-10 py-24">
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#f1ede4]/[0.018] to-transparent" />
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8aa97]/25 to-transparent" />
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b8aa97]/25 to-transparent" />

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm uppercase tracking-[0.34em] text-[#b8aa97]" data-reveal>O que a ARCCO faz</p>
          <h2 class="fonte-marca mt-4 text-4xl text-[#fffdf9] md:text-6xl" data-reveal data-reveal-delay="120">
            Não é para quem constrói. É para quem vende para a obra.
          </h2>
          <p class="mt-5 text-lg leading-8 text-[#d9cec0]/80" data-reveal data-reveal-delay="220">
            Cada empresa com o seu WhatsApp, o seu funil e o seu estoque. O bot faz a triagem; o atendente entra quando precisa.
          </p>
        </div>

        <div class="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(service, idx) in services"
            :key="service.title"
            class="card-lift group rounded-[2rem] border border-[#f1ede4]/10 bg-[#073b42]/80 p-6 hover:border-[#b8aa97]/35 hover:bg-[#0d4a51]"
            data-reveal
            :data-reveal-delay="idx * 130"
          >
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8aa97]/10 text-[#d9cec0] ring-1 ring-[#b8aa97]/20 transition group-hover:bg-[#b8aa97]/20 group-hover:ring-[#b8aa97]/40">
              <component :is="service.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold text-[#fffdf9]">{{ service.title }}</h3>
            <p class="mt-3 leading-7 text-[#d9cec0]/80">{{ service.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
      <div>
        <p class="text-sm uppercase tracking-[0.34em] text-[#b8aa97]" data-reveal="left">Como entra</p>
        <h2 class="fonte-marca mt-4 text-4xl text-[#fffdf9] md:text-6xl" data-reveal="left" data-reveal-delay="100">
          Do WhatsApp ao quadro, sem recopy
        </h2>
        <p class="mt-6 text-lg leading-8 text-[#d9cec0]/80" data-reveal="left" data-reveal-delay="200">
          O time não abandona o chat. A ARCCO escuta o pedido, monta o card e mostra se tem lote — no ramo certo.
        </p>
      </div>

      <div class="rounded-[2.6rem] border border-[#f1ede4]/10 bg-[#073b42]/80 p-5 md:p-8" data-reveal="right">
        <div class="space-y-4">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="flex gap-5 rounded-[1.6rem] border border-[#f1ede4]/8 bg-[#f1ede4]/[0.035] p-5 transition hover:border-[#b8aa97]/30 hover:bg-[#0d4a51]"
            data-reveal="right"
            :data-reveal-delay="index * 140 + 200"
          >
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f1ede4] font-marca text-xl font-extrabold text-[#082f34]">
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-lg font-semibold text-[#fffdf9]">{{ step.title }}</h3>
              <p class="mt-1 text-[#b8aa97]/70">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div class="grid overflow-hidden rounded-[3rem] border border-[#b8aa97]/20 bg-gradient-to-br from-[#073b42] to-[#082f34] lg:grid-cols-3">
        <div
          v-for="(item, idx) in highlights"
          :key="item.title"
          class="border-[#f1ede4]/10 p-8 transition hover:bg-[#b8aa97]/5 lg:border-r last:border-r-0"
          data-reveal
          :data-reveal-delay="idx * 150"
        >
          <component :is="item.icon" class="h-8 w-8 text-[#b8aa97]" />
          <h3 class="mt-6 text-2xl font-semibold text-[#fffdf9]">{{ item.title }}</h3>
          <p class="mt-3 leading-7 text-[#d9cec0]/80">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <section id="contato" class="relative z-10 mx-auto max-w-5xl px-6 pb-28 text-center lg:px-8">
      <div class="rounded-[3rem] border border-[#b8aa97]/25 bg-[#041c20]/90 p-10 md:p-16" data-reveal="zoom">
        <div class="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#b8aa97]/10 text-[#d9cec0] ring-1 ring-[#b8aa97]/25">
          <Users class="h-8 w-8" />
        </div>
        <p class="text-sm uppercase tracking-[0.34em] text-[#b8aa97]">Uma volta no seu ramo</p>
        <h2 class="fonte-marca mt-4 text-4xl text-[#fffdf9] md:text-6xl">Manda o WhatsApp. A gente mostra o expediente.</h2>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d9cec0]/80">
          Sem cadastro e sem teatro de software. Iluminação, concreto, piso, esquadria, material ou serviço — o chat é o mesmo; o quadro muda.
        </p>
        <a :href="whatsappLink" class="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f1ede4] to-[#b8aa97] px-8 py-4 font-medium text-[#082f34] transition hover:scale-[1.02]">
          Chamar no WhatsApp
          <ArrowRight class="h-5 w-5" />
        </a>
      </div>
    </section>

    <footer class="relative z-10 px-6 py-10 text-center text-xs uppercase tracking-[0.42em] text-[#b8aa97]/70 lg:px-8">
      © {{ new Date().getFullYear() }} ARCCO · Inteligência Comercial
    </footer>
  </main>
</template>

<script setup>
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Gauge,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from '@/icons'

import ArccoMark from '@/components/ArccoMark.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const whatsappLink = 'https://wa.me/5500000000000'

const ramos = ['Iluminação', 'Concreto', 'Piso', 'Esquadria', 'Material', 'Serviço']

const dashboardItems = [
  {
    label: 'WhatsApp',
    value: '40 luminárias IP65',
    sub: 'Obra em Lourdes · veio do chat',
  },
  {
    label: 'Prazo',
    value: 'Sexta',
    sub: 'Quem assina: engenharia',
  },
  {
    label: 'Funil',
    value: 'Andamento',
    sub: 'Sem copiar do grupo',
  },
]

const stats = [
  { number: 'Chat', label: 'bot + humano' },
  { number: 'Obra', label: 'no card' },
  { number: 'Lote', label: 'no radar' },
]

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
  },
  {
    title: 'O bot confirma o que o grupo esquece',
    text: 'Obra, prazo, volume e quem assina — antes de virar “já te falei”.',
  },
  {
    title: 'O card entra no funil',
    text: 'Andamento com os dados certos. Sem recopy, sem planilha paralela.',
  },
  {
    title: 'O lote entra no radar',
    text: 'Se controla estoque, a reserva aparece. Se faltar, o pedido não some.',
  },
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
</script>

<style scoped>
.animate-fade-up {
  animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.animate-scale-in {
  animation: scale-in 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-up,
  .animate-scale-in {
    animation: none;
  }
}
</style>
