import React, { Component } from 'react';
import Gallery from 'components/Gallery';
import SearchForm from 'components/SearchForm';
import { fetchData } from 'API';

export default class GalleryContainer extends Component {
  state = {
    galleryItems: []
  };

  handleFormSubmit = query => {
    fetchData(query).then(data => {
      this.setState({
        galleryItems: data
      });
    });
  };

  componentWillMount() {
    fetchData('cat').then(data => {
      this.setState({
        galleryItems: data
      });
    });
  }

  render() {
    const { galleryItems } = this.state;
    return (
      <div>
        <SearchForm getImages={this.handleFormSubmit} />
        <Gallery items={galleryItems} />
      </div>
    );
  }
}
