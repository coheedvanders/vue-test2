import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRobot, faSkullCrossbones, faCheck,faSpinner,faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRobot,faSkullCrossbones,faCheck, faSpinner, faArrowDown)
 
Vue.component('fa-icon', FontAwesomeIcon)