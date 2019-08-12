class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      displayMenu: false,
      selectedTeam: "",
      validationError: ""
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this)
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

  change(event) {
    this.setState({ value: event.target.value });
  }

  handleSelectChange(e) {
    var product_id = this.props.id.split("_")[1];
    var pincode = e.target.value;
    console.log(this.props.id.split("_")[1])
    console.log("hey isnide handle change")
    console.log(e.target);
    console.log($(this).parent())
    this.setState({ selectedTeam: e.target.value, validationError: e.target.value === "" ? "You must select your location" : "" })

    fetch("http://localhost:3000/updateprice?product_id=" + product_id + "&pincode=" + pincode)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        let new_price = data.data;
        console.log("new price here after discount", new_price)
        this.props.onAPICall(new_price);
      }).catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    fetch("http://localhost:3000/locations")
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log("inside did mount")
        console.log(data)
        let teamsFromApi = data.data.map(team => { return { value: team, display: team } })
        this.setState({ teams: [{ value: '', display: '(Select your location)' }].concat(teamsFromApi) });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "silver", width: "150px", marginTop: "25px" }} >
        <select value={this.state.selectedTeam}
          onChange={this.handleSelectChange}>
          {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
        </select>
        <div style={{ color: 'red', marginTop: '5px' }}>
          {this.state.validationError}
        </div>

      </div>

    );
  }
}
