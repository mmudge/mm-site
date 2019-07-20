import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.red.darken1,
    secondary: colors.blue.lighten4,
    accent: colors.indigo.base,
    red: colors.red.darken1, //  #e53935;
    purple: colors.deepPurple.deepPurple, //  #673ab7;
    blue: colors.blue.accent4, //  #2962ff;
    background: colors.blue.lighten4,
    bluetext: colors.blue.darken4


  }
})





//   #09FDD9
