<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      behavior="mobile"
      content-class="bg-grey-1"
    >
      <div class="text-h6">
        {{ $t('configuration.title') }}
      </div>
      <lang-selector />
      <color-selector
        :color="getBackgroundColor"
        @emitColorHasChanged="setBackgroundColorAndRemoveBackgroundImage($event)"
        :label="$t('configuration.backgroundColor')" />
      <color-selector
        :color="getFontColor"
        @emitColorHasChanged="setFontColor($event)"
        :label="$t('configuration.fontColor')"/>
      <bg-image
        @newBgImage="setBackgroundImage($event)"></bg-image>
      <p class="text-center">{{ $t('version') }}: {{version}}</p>
    </q-drawer>
    <q-page-container>
      <router-view @emitToggleDrawer="leftDrawerOpen = !leftDrawerOpen" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import LangSelector from 'components/LangSelector.vue'
import ColorSelector from 'components/ColorSelector.vue'
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import type { ActionMethod } from 'vuex'
import BgImage from 'components/BgImage.vue'
import { version } from '../../package.json'

@Component({
  components: { LangSelector, ColorSelector, BgImage }
})
export default class MainLayout extends Vue {
  version = version
  leftDrawerOpen = false

  @Getter('getBackgroundColor', { namespace: 'config' }) getBackgroundColor!: string
  @Getter('getFontColor', { namespace: 'config' }) getFontColor!: string
  @Getter('getBackgroundImage', { namespace: 'config' }) getBackgroundImage!: string

  @Action('setBackgroundColor', { namespace: 'config' }) setBackgroundColor!: ActionMethod
  @Action('setFontColor', { namespace: 'config' }) setFontColor!: ActionMethod
  @Action('setBackgroundImage', { namespace: 'config' }) setBackgroundImage!: ActionMethod

  async setBackgroundColorAndRemoveBackgroundImage (newColor: string) {
    await this.setBackgroundColor(newColor)
    await this.setBackgroundImage('')
  }
}
</script>
