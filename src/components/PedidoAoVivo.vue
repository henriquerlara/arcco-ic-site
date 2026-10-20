<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { CheckCircle2 } from '@/icons'

const fase = ref(0)
/** 0 idle · 1 msg · 2 produto · 3 obra · 4 prazo · 5 funil */
const online = ref(true)
let timers = []

function depois(fn, ms) {
  timers.push(setTimeout(fn, ms))
}

function limpar() {
  timers.forEach(clearTimeout)
  timers = []
}

function iniciar() {
  limpar()
  fase.value = 0
  depois(() => {
    fase.value = 1
  }, 200)
  depois(() => {
    fase.value = 2
  }, 700)
  depois(() => {
    fase.value = 3
  }, 1100)
  depois(() => {
    fase.value = 4
  }, 1500)
  depois(() => {
    fase.value = 5
  }, 1900)
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    fase.value = 5
    return
  }
  iniciar()
})

onBeforeUnmount(limpar)

const itens = [
  {
    faseMin: 2,
    label: 'WhatsApp',
    value: '40 luminárias IP65',
    sub: 'Obra em Lourdes · veio do chat',
  },
  {
    faseMin: 4,
    label: 'Prazo',
    value: 'Sexta',
    sub: 'Quem assina: engenharia',
  },
  {
    faseMin: 5,
    label: 'Funil',
    value: 'Andamento',
    sub: 'Sem copiar do grupo',
  },
]

const chips = [
  { faseMin: 2, label: 'Chat' },
  { faseMin: 3, label: 'Obra' },
  { faseMin: 5, label: 'Lote' },
]
</script>

<template>
  <div class="pedido-panel">
    <div class="pedido-panel__shine" aria-hidden="true" />

    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b8aa97]">
          Pedido agora
        </p>
        <h2 class="mt-2 text-[1.35rem] font-semibold tracking-tight text-[#fffdf9] sm:text-2xl">
          Iluminação · Lourdes
        </h2>
      </div>
      <div class="pulse-dot flex shrink-0 items-center rounded-full bg-[#39785e]/15 py-1 pl-5 pr-3 text-[11px] font-medium text-[#7eb89a]">
        <span v-if="online">online</span>
      </div>
    </div>

    <!-- Mensagem entrando -->
    <div
      class="pedido-msg"
      :class="fase >= 1 ? 'pedido-msg--on' : ''"
      aria-hidden="true"
    >
      <p class="text-[13px] leading-relaxed text-[#f1ede4]/90">
        Preciso de <span :class="fase >= 2 ? 'pedido-hit' : ''">40 luminárias IP65</span>
        para a obra em
        <span :class="fase >= 3 ? 'pedido-hit' : ''">Lourdes</span>
        — prazo
        <span :class="fase >= 4 ? 'pedido-hit' : ''">sexta</span>.
      </p>
    </div>

    <div class="mt-4 space-y-2.5">
      <div
        v-for="item in itens"
        :key="item.label"
        class="pedido-row"
        :class="fase >= item.faseMin ? 'pedido-row--on' : ''"
      >
        <div class="mb-1 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8aa97]/70">
          <span>{{ item.label }}</span>
          <CheckCircle2
            class="h-3.5 w-3.5 text-[#b8aa97] transition-opacity duration-200"
            :class="fase >= item.faseMin ? 'opacity-100' : 'opacity-0'"
          />
        </div>
        <p class="text-[15px] font-medium text-[#f1ede4]">
          <span v-if="fase >= item.faseMin">{{ item.value }}</span>
          <span v-else class="inline-block h-4 w-28 rounded bg-[#f1ede4]/8" />
        </p>
        <p class="mt-0.5 min-h-[1.1rem] text-[12px] text-[#b8aa97]/65">
          <span v-if="fase >= item.faseMin">{{ item.sub }}</span>
        </p>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-3 gap-2">
      <div
        v-for="chip in chips"
        :key="chip.label"
        class="pedido-chip"
        :class="fase >= chip.faseMin ? 'pedido-chip--on' : ''"
      >
        <p class="fonte-marca text-[15px] tracking-tight text-[#d9cec0]">{{ chip.label }}</p>
        <p class="mt-0.5 text-[10px] text-[#d9cec0]/55">
          {{ chip.label === 'Chat' ? 'bot + humano' : chip.label === 'Obra' ? 'no card' : 'no radar' }}
        </p>
      </div>
    </div>

    <div
      class="pedido-funil"
      :class="fase >= 5 ? 'pedido-funil--on' : ''"
    >
      <span class="fonte-marca text-[10px] tracking-[0.2em] text-[#082f34]">OP-2048 · ANDAMENTO</span>
    </div>
  </div>
</template>
