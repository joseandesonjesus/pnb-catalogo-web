import 'swiper/element/css/navigation'
import 'swiper/element/css/pagination'
import 'swiper/element/css/effect-fade'
import 'swiper/element/css/autoplay'

import {register} from 'swiper/element/bundle'

export default defineNuxtPlugin(NuxtApp => {
	register()
	return {}
})
