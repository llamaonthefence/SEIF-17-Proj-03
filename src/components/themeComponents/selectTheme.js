import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    outline: '1px solid lightgray',
    outlineOffset: '0px',
    _focus: {
      outline: '1px solid teal',
    },
  },
  icon: {
    color: 'black',
  },
})

export const selectTheme = defineMultiStyleConfig({ baseStyle })