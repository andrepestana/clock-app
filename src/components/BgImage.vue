<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn id="changeBgImage" push color="teal" :label="$t('configuration.changeBackground')" @click.native="refresh" />
    <q-img class="image"
        :src="getBackgroundImage"
        spinner-color="white" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'
import { QImg, QBtn } from 'quasar'
import { Getter } from 'vuex-class'

@Component({
  name: 'BgImage',
  components: { QImg, QBtn }
})
export default class BgImage extends Vue {
  @Getter('getBackgroundImage', { namespace: 'config' }) getBackgroundImage!: string

  private url: string | null = null

  private refresh () {
    this.url = 'https://placeimg.com/500/300/nature?t=' + Math.random().toString()
    this.emitNewBgImage(this.url)
  }

  @Emit('newBgImage')
  private emitNewBgImage (val: string) {}
}
</script>
