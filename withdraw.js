function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [update, setUpdate] = React.useState('false');
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);
  let data = ctx.users[ctx.users.length-1].balance;

  const handleTextChange = (event) => {
    setValue(event.target.value);
  }; 

  function handleWithdraw(){
    let balance = document.getElementById("balance").value;
      if (balance > 0 && balance <= data && !isNaN(balance)) {
        data -= Number(balance);
        setUpdate(true);
        setShow(false);
        ctx.users[0].balance = data
        setValue("")
      }
      else if (!NaN){
        alert("That input is not allowed, please input a positive number below or at current amount.")
      }
      else if (balance > data){ 
        alert("Sorry, couldn't withdraw funds. Amount is over balance.");
      } 
      else {
        alert("Sorry, couldn't withdraw funds. Please use a positive number.");
      }
  }

  function clearWithdrawForm(){
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      body={show? (
        <>
          <h4> {update ? "Current balance: "+ data : "Current balance: " + data} </h4>
          <h5>Withdraw</h5>
            <input type="input" className="form-control" onChange={handleTextChange} id="balance" value= {value}/>
            <button type="submit" className="btn btn-light" disabled= {value ? false:true} onClick={handleWithdraw}>Submit</button>
        </>):(
          <>
          <h5>"Success! Funds have been taken out."</h5>
          <button type="submit" className="btn btn-light" onClick={clearWithdrawForm}>Back to withdraw form</button> 
          </>
        )}
    />
  )
}