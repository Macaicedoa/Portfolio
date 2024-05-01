
function TextMessage({labelText,name,type="text",placeholder="",dataInput,handler}) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <textarea type={type} name={name} value={dataInput} onChange={handler} placeholder={placeholder}/>
    </div>
  )
}

export default TextMessage