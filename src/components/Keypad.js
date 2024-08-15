// Code Keypad Component Here


const Keypad = () => {
  const handleInput = (event) => {
    console.log("Entering password...");
  };

  return (
    <input 
      type="password"
      onChange={handleInput}
    />
  );
};

export default Keypad;