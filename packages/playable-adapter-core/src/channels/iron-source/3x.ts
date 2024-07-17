import { AD_SDK_SCRIPT, ONLOAD_SCRIPT } from './inject-vars'
import { exportSingleFile } from "@/exporter/3x"
import { getChannelRCSdkScript } from '@/utils'
import { TChannel, TChannelPkgOptions } from "@/typings"

export const export3xIronSource = async (options: TChannelPkgOptions) => {
  const channel: TChannel = 'IronSource'
  await exportSingleFile({
    ...options,
    channel,
    transformHTML: async ($) => {
      const sdkInjectScript = getChannelRCSdkScript(channel) || AD_SDK_SCRIPT
      $('body script').first().before(sdkInjectScript)

      const sdkOnloadScript = getChannelRCSdkScript(channel) || ONLOAD_SCRIPT
      $('body script').first().before(sdkOnloadScript)
    }
  })
}