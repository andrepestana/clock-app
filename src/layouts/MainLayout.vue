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
      <lang-selector />
    </q-drawer>
    <q-page-container>
      <router-view @emitToggleDrawer="leftDrawerOpen = !leftDrawerOpen" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import LangSelector from 'components/LangSelector.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { LangSelector }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false
}
</script>
