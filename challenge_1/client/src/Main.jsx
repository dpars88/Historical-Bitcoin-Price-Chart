import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';
import Axios from 'axios';
import Paginate from './Paginate.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      first: 0,
      prev: 0,
      next: 0,
      last: 0,
      page: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.pageClick = this.pageClick.bind(this);
  }

  handleChange(event) {
    console.log('this is event', event.target.value)
    this.setState({
      value: event.target.value
    });
  }

  handleSearch(event) {
    event.preventDefault();
    var searchParams = this.state.value;
    console.log(searchParams)

    Axios.get(`/events/?q=${searchParams}&_page=1`)
      .then(response => {
        var data = response.data;
        var header = response.headers.link;
        var split = header.split(',')
        var numberOfPages;
        for (var i = 0; i < split.length; i ++) {
          if (split[i].includes("first")) {
            var first = split[i];
            var fNum = split[i].split("_page=").pop();
            var realFirst = Number(fNum.split(">").shift());
            var fStepOne = split[i].split("<").pop();
            var fStepTwo = fStepOne.split(">").shift();
          }
          if (split[i].includes("next")) {
            var next = split[i];
            var nNum = split[i].split("_page=").pop();
            var realNext = Number(nNum.split(">").shift());
            var nStepOne = split[i].split("<").pop();
            var nStepTwo = nStepOne.split(">").shift();
          }
          if (split[i].includes("prev")) {
            var prev = split[i];
            var pNum = split[i].split("_page=").pop();
            var realPrev = Number(pNum.split(">").shift());
            var pStepOne = split[i].split("<").pop();
            var pStepTwo = pStepOne.split(">").shift();
          }
          if (split[i].includes("last")) {
            var last = split[i];
            var lNum = split[i].split("_page=").pop();
            var realLast = Number(lNum.split(">").shift());
            var stepOne = split[i].split("<").pop();
            var stepTwo = stepOne.split(">").shift();
          }
        }
        console.log('this should be new string', header)
        console.log('header', header.match(/page=(\d+)>; rel=\"last\"/)[1])
        console.log('this should be next', fStepTwo)
        console.log('this should be prev', nStepTwo)
        console.log('this should be last', pStepTwo)
        console.log('this should be last', stepTwo)

        this.setState({
          page: response.data,
          first: first,
          next: next,
          prev: prev,
          last: realLast,
          lastLink: stepTwo,
          firstLink: fStepTwo,
          previousLink: pStepTwo,
          nextLink: nStepTwo
        })
      })
      .catch(error => {
        console.error(error);
      });

  }

  pageClick(event) {

    console.log('this is the event', event)
  }

  render() {
    return (
      <div>
        Hello From Main
        <div>
          <Search change={this.handleChange} search={this.handleSearch} value={this.value}/>
        </div>
        <div>
          <List page={this.state.page} />
        </div>
        <div>
          <Paginate first={this.state.first} next={this.state.next} prev={this.state.prev} last={this.state.last} pageClick={this.pageClick}/>
        </div>
      </div>
    )
  }
}

export default Main;