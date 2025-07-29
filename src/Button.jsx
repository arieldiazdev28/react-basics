const Button = () => {
  const handleClick = (e) => {
    e.target.textContent = "OUCH!";
    console.log(e);
  };

  return <button onDoubleClick={(e) => handleClick(e)}>Click me</button>;
};

export default Button;
