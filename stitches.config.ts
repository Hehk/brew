import { createStitches } from "@stitches/react"

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
    },
    fontSizes: {
      1: "16px",
      2: "20px",
      3: "24px",
    },
  },
})
