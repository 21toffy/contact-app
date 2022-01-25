import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Image, Menu } from 'semantic-ui-react';
import logo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom';
const Header = (props) => {
  return <Menu secondary pointing>
      <Image src={logo} width={60}/>
      <Menu.Item as={Link} to="/" style={{fontSize:24}}>Contacts </Menu.Item>

      <Menu.Item position='right'>
          <Button as={Link} to="/contacts/create" basic primary icon>
              <Icon name="add"></Icon>
                Create Contacts
          </Button>
      </Menu.Item>

      <Button color="red" basic icon>
              <Icon name="log out"></Icon>
              Logout
          </Button>

  </Menu>;
};

Header.propTypes = {};

export default Header;
