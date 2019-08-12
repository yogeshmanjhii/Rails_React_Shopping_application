class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
  console.log("hey i")
  console.log(event);
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"silver",width:"200px",marginTop:"25px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Select Location </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#560006">560006</a></li>
         <li><a href="#560007">560007</a></li>
         <li><a href="#560007">560008</a></li>
         <li><a href="#560007">560009</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}
