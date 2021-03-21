<template>
  <q-page class="row items-center justify-evenly">
    <example-component @emitToggleDrawer="$emit('emitToggleDrawer')">
    </example-component>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ClassComponent.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {

}
</script>
