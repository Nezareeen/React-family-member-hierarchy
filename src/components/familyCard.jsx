import React from 'react'

const FamilyCard = ({memberno,clikerFunction}) => {

  return (
    <div
    onClick={()=>clikerFunction(memberno)}
    >{`member no ${memberno}`}</div>
  )
}

export default FamilyCard;