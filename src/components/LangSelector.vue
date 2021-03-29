<template>
  <div>
    <div class="locale-changer">
      <q-select
        v-model="$i18n.locale"
        outlined
        :options="availableLocales"
        :label="$t('configuration.language')"
        emit-value
        map-options
        @input="setLang($i18n.locale)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LOCALES } from '../i18n/locales'
import { Action } from 'vuex-class'
import type { ActionMethod } from 'vuex'

@Component({})
export default class LangSelector extends Vue {
  availableLocales = LOCALES
  @Action('setLang', { namespace: 'config' }) setLang!: ActionMethod
}
</script>

<style lang="scss">

</style>
