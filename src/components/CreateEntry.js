import React from 'react'

function CreateEntry() {
  return (
    <form>
        <input type="title" name="title" placeholder={'Title'} />
        <input type="summary" name="summary" placeholder={'Summary'} />
        <input type="file" name="file" placeholder="" />
        <textarea name="content" placeholder={'Content'} cols={30} rows={10}/>
    </form>
  )
}

export default CreateEntry