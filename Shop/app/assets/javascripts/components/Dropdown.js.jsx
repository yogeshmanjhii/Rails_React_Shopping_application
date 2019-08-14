class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      displayMenu: false,
      selectedOption: "",
      validationError: ""
    };
    this.handleSelectChange = this.handleSelectChange.bind(this)
  };

  change(event) {
    this.setState({ value: event.target.value });
  }

  handleSelectChange(e) {
    var product_id = this.props.id.split("_")[1];
    var pincode = e.target.value;
    this.setState({ selectedOption: e.target.value, validationError: e.target.value === "" ? "You must select your location" : "" })
    fetch("http://localhost:3000/updatepricelocation?product_id=" + product_id + "&pincode=" + pincode)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        let new_price = data.data;
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
        this.setState({ locations: [{ value: '', display: '(Please Select location)' }].concat(teamsFromApi) });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "silver", width: "150px", marginTop: "25px" }} >
        <select value={this.state.selectedOption}
          onChange={this.handleSelectChange}>
          {this.state.locations.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
        </select>
        <div style={{ color: 'red', marginTop: '5px' }}>
          {this.state.validationError}
        </div>
      </div>

    );
  }
}
