Products = React.createClass({
  getInitialState: function () {
    return { text: '' }
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
          <h1>Rs: {this.props.price}</h1>
        </div>
        <div className="col-md-1">
          <button style={{ marginTop: '25px' }} onClick={() => { this.onClickButton(this.props.price) }}>Select</button>
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