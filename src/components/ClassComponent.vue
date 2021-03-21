<template>
    <div>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('emitToggleDrawer')"
        class="fixed-top-left"
      />
      <section id="time" class="section">
          <h3 class="title is-3 shadow">{{ $t('currentTime') }}</h3>
          <p class="time shadow" v-text="currentTime"></p>
      </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import moment from 'moment'
import i18n from '../i18n'

@Component
export default class ClassComponent extends Vue {
  message = 'Current Time:'
  currentTime = ''

  updateCurrentTime () {
    this.currentTime = moment().format('LTS')
  }

  created () {
    this.updateCurrentTime()
    setInterval(() => this.updateCurrentTime(), 1 * 1000)
  }
}
</script>
<style lang="scss">
$top-color: LightSteelBlue;
$bottom-color: LightSalmon;

body, html {
  width: 100%;
  height: 100%;
}

#time {
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient($top-color, $bottom-color);
  background: -o-linear-gradient($top-color, $bottom-color);
  background: -moz-linear-gradient($top-color, $bottom-color);
  background: linear-gradient($top-color, $bottom-color);
}

section.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
}

h3.is-3, p.time {
  color: white;
}

h3.is-3:not(:last-child) {
  margin: 0;
  padding: 0;
}

.time {
  font-size: 16vw;
}

.shadow {
  text-shadow: 0 0 15px rgba(100, 100, 100, .35);
}
</style>
