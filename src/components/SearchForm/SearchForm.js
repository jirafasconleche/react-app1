import React from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {
  constructor(props){
    super(props);
    //Blinds
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      search:''
    }
  }

  onChange(e){
    this.setState({ search: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <label>Buscar eventos</label>
      <input type='text' className='u-full-width' placeholder='teatro, exposicion, etc..'
        onChange= { this.onChange } defaultValue= { this.state.search } />
      <p className='align-center'>
        <input type='submit' className='button-primary' value='search'/>
      </p>
    </form>;
  }
}

// Export the class
export default SearchForm;
