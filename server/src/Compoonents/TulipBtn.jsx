import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "../../components/ui/tooltip"
import { Button } from '../../components/ui/button'
  

const TulipBtn = ({btn, msg, dis}) => {

  return (<>
    <TooltipProvider>
    <Tooltip>
        <Button disabled={dis} className="ac-bg hover:bg-[#5a7a45]">
      <TooltipTrigger>{btn}</TooltipTrigger>
        </Button>
      <TooltipContent className="mb-5">
        <p>{msg}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  </>
  
  )
}


export default TulipBtn