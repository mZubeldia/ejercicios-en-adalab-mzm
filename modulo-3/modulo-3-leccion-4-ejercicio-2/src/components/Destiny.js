const Destiny = () => {
  const handleSelect = (ev) => {
    alert(`El destino seleccionado es ${ev.target.value}`);
  };
  return (
    <form>
      <label>Elige tu destino ideal: </label>
      <select name="destination" onChange={handleSelect}>
        <option value="">...</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    </form>
  );
};

export default Destiny;
