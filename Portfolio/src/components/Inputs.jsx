function Inputs({labelText,name,type="text",placeholder="",dataInput,handler,pattern}) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} value={dataInput} onChange={handler} placeholder={placeholder} pattern={pattern}/>
    </div>
  )
}

export default Inputs