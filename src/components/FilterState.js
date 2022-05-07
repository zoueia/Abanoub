
function FilterState() {
    return (
<div id="orders_filter_wrapper">
        <ul id="orders_filter">
            <li><input type="checkbox" name="" id=""></input>Pending</li>
            <li><input type="checkbox" name="" id=""></input>Delivered</li>
            <li><input type="checkbox" name="" id=""></input>On the way</li>
            <li><input type="checkbox" name="" id=""></input>Canceled</li>
        </ul>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              Last Month
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">last day</a>
              <a class="dropdown-item" href="#">last week</a>
              <a class="dropdown-item" href="#">last year</a>
            </div>
          </div>
          </div>
    );
  }
  
  export default FilterState;