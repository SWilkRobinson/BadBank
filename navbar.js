function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" mdbTooltip="Tooltip on bottom" placement="bottom" title="Create a User Account" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" mdbTooltip="Tooltip on bottom" placement="bottom" title="Deposit into account" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" mdbTooltip="Tooltip on bottom" placement="bottom" title="Withdraw funds" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" mdbTooltip="Tooltip on bottom" placement="bottom" title="Data of Accounts" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}