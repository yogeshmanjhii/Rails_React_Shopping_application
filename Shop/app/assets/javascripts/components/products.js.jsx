Products = React.createClass({
  getInitialState: function () {
    return { text: '' }
  },
  handleChange: function(product_id,price) {
    fetch("http://localhost:3000/updatepriceinput?product_id=" + product_id + "&price=" + price)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let new_price = data.data;
      this.setState({
        text: price
      });
      // console.log("new price here after discount", new_price)
      // this.props.onAPICall(new_price);
    }).catch(error => {
      console.log(error);
    });
  },
  onClickButton: function (price) {
    this.setState({
      text: price
    });
  },
  render: function () {
    return (
      <div id={this.props.serialno} className="row">
        <div className="col-md-1">
          <h1>{}</h1>
        </div>
        <div className="col-md-2">
          <h1>{this.props.name}</h1>
        </div>
        <div className="col-md-2">
        <input
        type="text"
        style={{ marginTop: '25px' }}
        defaultValue={this.props.price}
        onChange={(e)=>{this.handleChange(this.props.serialno,e.target.value)}}
      />
        </div>

        <div id={"drop_" + this.props.serialno} className="col-md-2">
          <Dropdown onAPICall={this.onClickButton} id={"dropdown_" + this.props.serialno} />
        </div>

        <div className="col-md-4">
          <h1>Final Price: {this.state.text}</h1>
        </div>
      </div>
    )
  }
});