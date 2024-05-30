import postcssPresetEnv from 'postcss-preset-env'
import postcssHoverMediaFeature from 'postcss-hover-media-feature'

export default function () {
  return {
    plugins: [
      postcssHoverMediaFeature,
      postcssPresetEnv({
        features: {}
      })
    ]
  }
}
