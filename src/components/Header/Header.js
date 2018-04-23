import React from 'react';

// Importamos los estilos
import './Header.css';

/**
 * Muestra el header de nuestra aplicación. No necesitamos que se actualice por
 * dejamos shouldComponenteUpdate nunca retornará true.
 */
class Header extends React.Component {
  /**
   * Al ser contenido estático, no necesitamos actualizar este componente.
   */
  constructor (props){
    super(props);
    this.props={
      title:"titulo default props"
    }

  }
  shouldComponenteUpdate() {
    return false;
  }

  /**
   * Render the Header component
   */
  render() {
    return <header className="Header">
      <h1>{this.props.title}</h1>
    </header>
  }
}

// Export the class
export default Header;
