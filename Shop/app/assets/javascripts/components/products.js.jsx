// import Dropdown from './Dropdown.js.jsx';
window.Products = React.createClass({

  // state:function() {
  //  return {text: 'No item selected'}
  // },
  onClickButton:function(price) {
    // $('#item_price').text(price);
    this.setState({
      text: price
    });
  },
  // constructor(props) {
  //   // super(props);

  //   // this.state = {
  //   //   data: 'Initial data...'
  //   // }
  //   // this.updateState = this.updateState.bind(this);
  // },
  getInitialState: function() {
    return {text: ''}
  },
  // updateState() {
  //   console.log("i am in update block");
  //   // $("final_price").val("78787");
  //   // $('item_price').text('test');
  //   $('#item_price').text('test')
  //   this.setState({ data: 'Data updated...' })
  // },
  render: function () {
    return (
      <div id={this.props.serialno} className="row">
        <div className="col-md-1">
          <h1>{this.props.serialno}</h1>
        </div>
        <div className="col-md-1">
          <h1>{this.props.name}</h1>
        </div>
        <div className="col-md-2">
          <h1>Rs: {this.props.price}</h1>
        </div>
        <div className="col-md-2">
        <button style={{ marginTop: '25px' }}  onClick={()=>{this.onClickButton(this.props.price)}}>Select</button>
        </div>
        <div className="col-md-2">
        <Dropdown />
        </div>

        <div className="col-md-4">
        <h1>Final Price: {this.state.text}</h1>
        </div>
      </div>
    )
  }
});