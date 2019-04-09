import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { ListWrapper, ListItem, EllipsisH2 } from './styledComponent.js'

import { withRouter } from 'react-router-dom'

import { ListView } from 'antd-mobile'

import { getListAsync } from 'pages/home/cookbooks/swiper/actionCreator'

const mapState = state => {
  return {
    list: state.getIn(['list', 'list']).toJS()
  }
}

const mapDispatch = dispatch => {
  return {
    loadData() {
      dispatch(getListAsync())
    }
  }
}

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
      pageNo: 1
    };
  }

  componentDidMount() {

    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;

    this.setState({
      height: hei,
      isLoading: false
    })

    if (this.props.list.length === 0) {
      this.props.loadData()
    }
  }

  onEndReached = (event) => {
    if (this.state.isLoading) {
      return;
    }

    this.setState(prevState => {
      return {
        pageNo: prevState.pageNo + 1,
        isLoading: false
      }
    });
  }

  render() {
    const row = (rowData, sectionId, rowId) => {
      return (
        <ListWrapper>
          <ListItem>
            <div><img src={rowData.img} alt=""/></div>
            <div>
              <h1>{rowData.name}</h1>
              <EllipsisH2>{rowData.burdens}</EllipsisH2>
              <h3>{rowData.all_click} 浏览 {rowData.favorites} 收藏</h3>
            </div>
          </ListItem>
        </ListWrapper>
      )
    }

    return (
      <>
        <div>header</div>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource.cloneWithRows(this.props.list.slice(0, this.state.pageNo * 10))}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderBodyComponent={() => <MyBody />}
          renderRow={row}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={4}
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </>
    );
  }
}

export default connect(mapState, mapDispatch)(withRouter(List))