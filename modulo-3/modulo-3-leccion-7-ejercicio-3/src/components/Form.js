const Form = (props) => {
  const handleInput = (ev) => {
    props.handleInput(ev.currentTarget.value);
  };
  return (
    <>
      <form>
        <h2>Formulario</h2>
        <label>Nombre</label>
        <input name="name" id="name" value={props.name} onChage={handleInput} />

        <label>Idioma</label>
        <select
          name="language"
          id="language"
          value={props.language}
          onChage={handleSelect}
        >
          <option></option>
        </select>
      </form>
    </>
  );
};

export default Form;
