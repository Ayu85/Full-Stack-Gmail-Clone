import React from 'react'

const MailContainer = ({bar}) => {
  return (
    <div className={`bg-white ${bar&&'w-[95%]'} transition-all rounded-2xl h-[90%] m-auto mt-8  overflow-scroll w-[90%] scrollbar-hide`}>
      mails here
    </div>
  )
}

export default MailContainer
