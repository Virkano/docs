import { useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme'
// import './custom.css'
import './styles/main.css'
import './styles/global.css'
import './styles/demo.scss'
import './styles/utils.css'
import './styles/vars.css'
import 'uno.css'

const theme = {
  ...DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // Should there be a new?
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}

export default theme
