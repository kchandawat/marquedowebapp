import { chakra } from '@chakra-ui/react'
import * as React from 'react'

export const BannerLink = (props) => (
  <chakra.a
    {...props}
    href="https://wa.me/917760168711?text=Hi!%20There%0AI%20was%20scrolling%20through%20your%20website%20and%20found%20your%20product%20interesting%20can%20you%20tell%20me%20more%20about%20it%3F"
    px="4"
    py="1.5"
    textAlign="center"
    borderWidth="1px"
    borderColor="whiteAlpha.400"
    fontWeight="medium"
    rounded="base"
    _hover={{
      bg: 'whiteAlpha.200',
    }}
  />
)
