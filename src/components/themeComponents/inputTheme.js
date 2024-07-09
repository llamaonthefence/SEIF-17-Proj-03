import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    outline: '1px solid lightgray',
    outlineOffset: '0px',
    _focus: {
      outline: '1px solid teal',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
