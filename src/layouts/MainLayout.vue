<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      behavior="mobile"
      content-class="bg-grey-1"
    >
      <div class="text-h6">{{ $t('configuration.title') }}</div>
      <div class="locale-changer">
        <q-select outlined
          v-model="$i18n.locale"
          :options="availableLocales"
          label="Language"
          emit-value
          map-options
          @input="setLang($i18n.locale)"/>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view @emitToggleDrawer="leftDrawerOpen = !leftDrawerOpen" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { Vue, Component } from 'vue-property-decorator'
import { LOCALES } from '../i18n/locales'
import { Action } from 'vuex-class'
import type { ActionMethod } from 'vuex'

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false
  availableLangs: unknown[] = []
  availableLocales = LOCALES

  @Action('setLang', { namespace: 'example' }) setLang!: ActionMethod
}
</script>
