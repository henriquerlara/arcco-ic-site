import { h } from 'vue'

function svg(children) {
  return (props, { attrs }) =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        ...attrs,
      },
      children,
    )
}

export const ArrowRight = svg([
  h('path', { d: 'M5 12h14' }),
  h('path', { d: 'm12 5 7 7-7 7' }),
])

export const Sparkles = svg([
  h('path', {
    d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z',
  }),
  h('path', { d: 'M20 3v4' }),
  h('path', { d: 'M22 5h-4' }),
  h('path', { d: 'M4 17v2' }),
  h('path', { d: 'M5 18H3' }),
])

export const CheckCircle2 = svg([
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('path', { d: 'm9 12 2 2 4-4' }),
])

export const MessageCircle = svg([h('path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' })])

export const DatabaseZap = svg([
  h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
  h('path', { d: 'M3 5V19a9 3 0 0 0 18 0V5' }),
  h('path', { d: 'M3 12a9 3 0 0 0 18 0' }),
])

export const Workflow = svg([
  h('rect', { width: '8', height: '8', x: '3', y: '3', rx: '2' }),
  h('path', { d: 'M7 11v4a2 2 0 0 0 2 2h4' }),
  h('rect', { width: '8', height: '8', x: '13', y: '13', rx: '2' }),
])

export const Bot = svg([
  h('path', { d: 'M12 8V4H8' }),
  h('rect', { width: '16', height: '12', x: '4', y: '8', rx: '2' }),
  h('path', { d: 'M2 14h2' }),
  h('path', { d: 'M20 14h2' }),
  h('path', { d: 'M15 13v2' }),
  h('path', { d: 'M9 13v2' }),
])

export const Building2 = svg([
  h('path', { d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' }),
  h('path', { d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' }),
  h('path', { d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' }),
  h('path', { d: 'M10 6h4' }),
  h('path', { d: 'M10 10h4' }),
  h('path', { d: 'M10 14h4' }),
  h('path', { d: 'M10 18h4' }),
])

export const Gauge = svg([
  h('path', { d: 'm12 14 4-4' }),
  h('path', { d: 'M3.34 19a10 10 0 1 1 17.32 0' }),
])

export const ShieldCheck = svg([
  h('path', {
    d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
  }),
  h('path', { d: 'm9 12 2 2 4-4' }),
])

export const Package = svg([
  h('path', { d: 'm7.5 4.27 9 5.15' }),
  h('path', {
    d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
  }),
  h('path', { d: 'm3.3 7 8.7 5 8.7-5' }),
  h('path', { d: 'M12 22V12' }),
])

export const Users = svg([
  h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '9', cy: '7', r: '4' }),
  h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
  h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }),
])
