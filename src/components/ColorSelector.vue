<template>
  <div>
    <div class="color-selector">
      <q-input
        filled
        v-model="draftColor"
        class="my-input"
        :label="label"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="draftColor" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class ColorSelector extends Vue {
  private draftColor = ''

  @Prop({ default: '' })
  private color!: string

  @Prop({ default: '' })
  private label!: string

  @Emit('emitColorHasChanged')
  private emitColorHasChanged (newColor: string): void {}

  @Watch('color', { immediate: true })
  private onColorPropChanged (): void {
    this.draftColor = this.color
  }

  @Watch('draftColor')
  private onDraftColorChanged (): void {
    this.emitColorHasChanged(this.draftColor)
  }
}
</script>

<style lang="scss">

</style>
