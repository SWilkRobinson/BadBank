function Deposit(){
  const ctx = React.useContext(UserContext);
  const [update, setUpdate] = React.useState('false');
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);
  let data = ctx.users[ctx.users.length-1].balance;

  const handleTextChange = (event) => {
    setValue(event.target.value);
  }; 

  function handleDeposit(){
    let balance = document.getElementById("balance").value;
      if (balance > 0 && !isNaN(balance)) {
        data += Number(balance);
        setUpdate(true);
        setShow(false);
        ctx.users[0].balance = data
        setValue("")
      }
      else if (!NaN){
        alert("That input is not a number, please input a positive number.")
      }
      else{
        alert("Please use a Positive Number");
    }
  }

  function clearDepositForm(){
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      body={show? (
        <>
          <h4> {update ? "Current balance: "+ data : "Current balance: " + data} </h4>
          <h5>Deposit</h5>
            <input type="input" className="form-control" onChange={handleTextChange} id="balance" value= {value}/>
            <button type="submit" className="btn btn-dark" disabled= {value ? false:true} onClick={handleDeposit}>Submit</button>
        </>):( 
          <>
          <h5>Success! Funds have been added.</h5>
          <button type="submit" className="btn btn-dark" onClick={clearDepositForm}>Back to deposit form</button>
          </>
        )}      
    />
  )
}