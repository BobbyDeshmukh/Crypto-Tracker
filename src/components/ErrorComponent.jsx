import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = () => {
  return (
    <Alert status='error' position={"fixed"} bottom={"10"} left={"50%"}
      transform={"translateX(-50%)"} w={"container.lg"} h={"10"}>
      <AlertIcon flexDirection={"row"}>
        Error 
      </AlertIcon>
    </Alert>
  )
}

export default ErrorComponent