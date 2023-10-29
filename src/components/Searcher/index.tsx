import './style.css';
import { Component } from 'react';
import Item, { ItemType } from '../Item';

interface SearcherProps {}

interface SearcherState {
  isLoading: boolean;
  query: string;
  results: ItemType[];
}
class Searcher extends Component {
  state: SearcherState;

  constructor(props: SearcherProps) {
    super(props);
    this.state = {
      isLoading: true,
      query: '',
      results: [],
    };
  }

  async componentDidMount() {
    const query = localStorage.getItem('query');
    if (query) {
      await this.setState({ query });
      this.search();
    } else await this.setState({ isLoading: false });
  }

  setQuery(queryStr: string) {
    const query = queryStr.trim();
    if (query !== this.state.query)
      this.setState({
        query: queryStr,
      });
  }

  async search() {
    if (!this.state.query) return;
    const query = this.state.query;
    localStorage.setItem('query', query);
    await this.setState({ isLoading: true });
    const API_URL = 'http://www.omdbapi.com/?apikey=eb0d38';
    const response = await fetch(`${API_URL}&s=${query}&plot=full`);
    const data = await response.json();
    await this.setState({ isLoading: false });
    this.setState({
      results: data.Search,
    });
  }

  raiseError() {
    throw new Error('Catastrophic error!');
  }

  render() {
    return (
      <div className="searcher">
        <div className="searcher-query">
          <input
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={(e) => this.setQuery(e.target.value)}
          />
          <button onClick={() => this.search()}>Search</button>
          <button onClick={() => this.raiseError()}>Error</button>
        </div>
        <div className="searcher-results">
          {this.state.isLoading ? (
            <div className="searcher-results-none">
              <img
                className="loading"
                src="/images/loading.gif"
                alt="Loading"
              />
            </div>
          ) : !this.state.results || this.state.results.length === 0 ? (
            <div className="searcher-results-none">No results</div>
          ) : (
            this.state.results.map((item: ItemType) => (
              <Item key={item.imdbID} item={item} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Searcher;
