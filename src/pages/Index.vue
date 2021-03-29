<template>
  <q-page class="row items-center justify-evenly">
    <clock-component @emitToggleDrawer="$emit('emitToggleDrawer')" />
  </q-page>
</template>

<script lang="ts">
import ClockComponent from 'src/components/ClockComponent.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { ClockComponent }
})
export default class PageIndex extends Vue {

}
</script>
