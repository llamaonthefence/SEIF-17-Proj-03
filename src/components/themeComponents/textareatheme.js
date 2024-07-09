import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const outline = defineStyle({
  outline: '1px solid lightgray',
  outlineOffset: '0px',
  _focus: {
    outline: '1px solid teal',
  },
})

export const textareaTheme = defineStyleConfig({
  variants: { outline },
})
