import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';

const Container = styled.div`
    height: 60px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    position: fixed;
`;
const Feedback = styled.div`
    padding: 10px 15px;
`;
const Menu = styled.div`
    .feedback {
        height: 48px;
        //line-height: 48px;
    }
`;
const Top = styled.div`
    line-height: 20px;
    text-transform: uppercase;
    border-bottom: 1px solid #fff;
`;
const Middle = styled.div`
    border-bottom: 1px solid #fff;
`;
const Bottom = styled.div`
    border-bottom: 1px solid #fff;
`;
const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    padding: 15px 0 10px;
    max-width: 250px;
    img {
        max-width: 100%;
        min-width: 130px;
    }
`;
const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0 0 8px rgba(0,0,0,.25);
    background: url("./catalog/view/theme/forklift/images/mobile-top-menu.jpg") no-repeat left;
    z-index: 1500;
    position: absolute;
    width: 100%;
`;
const Phone = styled.div`
    line-height: 48px;
    padding: 0 16px;
    a {
        color: #000;
        :hover {
            text-decoration: underline;
        }
        :active {
            color: #98b20b;
        }
    }
`;
const Address = styled.div`
    font-size: 12px;
    line-height: 48px;
    padding: 0 16px;
    a {
        color: #000;
        :hover {
            text-decoration: underline;
        }
        :active {
            color: #98b20b;
        }
    }
`;
const Email = styled.div`
    line-height: 48px;
    padding: 0 16px;
    a {
        color: #000;
        :hover {
            text-decoration: underline;
        }
        :active {
            color: #98b20b;
        }
    }
`;
const Link = styled.div`
    [role="menuitem"] > div > div {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;


function regExp(text) {
    const arr = text.match(/\d/g);
    let str = "";
    arr.forEach(item => str += item);
    return str;
}


const TopMenu = ({updateState}) => {
    const {address, phone, email, topMenu, categories} = window.utils;

    const menuItems = topMenu.links.map((link, i) => <Link key={i}>
                                                        <MenuItem className="m-top-menu__modal_menuItem" onClick={() => location.href = link.href}>
                                                            {link.name}
                                                        </MenuItem>
                                                    </Link>);

    const categoriesHtml = categories.map((cat, j) => <Link key={j}>
                                                          <MenuItem className="m-top-menu__modal_menuItem" onClick={() => location.href = cat.href}>
                                                              {cat.name}
                                                          </MenuItem>
                                                      </Link>);

    return (
        <Menu>
            <Top>
                {/*<Feedback>*/}
                    {/*<a className="feedback"*/}
                       {/*href="#popup-form"*/}
                       {/*onClick={() => updateState({openDrawer: false})}>*/}
                        {/*Заказать звонок*/}
                    {/*</a>*/}
                {/*</Feedback>*/}
                <div>{menuItems}</div>
            </Top>
            <Middle>
                {categoriesHtml}
            </Middle>
            <Bottom>
                <Phone><a href={`tel:+${regExp(phone)}`}>{phone}</a></Phone>
                <Email><a href={`mailto:${email}`}>{email}</a></Email>
                <Address><a href="https://yandex.ru/maps/-/CBaZ6HSJtA">{address}</a></Address>
            </Bottom>
        </Menu>
    );
};


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            openDrawer: false
        };
        this.updateState = this.updateState.bind(this);
    }

    handleToggle = () => {
        this.setState({openDrawer: !this.state.openDrawer});
        //this.state.openDrawer ? document.body.classList.remove("ofhidden") : document.body.classList.add("ofhidden");
    };

    handleClose = () => {
        this.setState({openDrawer: false});
    };

    componentDidMount() {

    }

    updateState(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <MuiThemeProvider>
                {/*<AppBar*/}
                    {/*title="Forklift"*/}
                    {/*iconClassNameRight="muidocs-icon-navigation-expand-more"*/}
                {/*/>*/}
                <Container>
                    <Drawer containerClassName="m-top-menu__modal"
                            width="100%"
                            swipeAreaWidth={0}
                            open={this.state.openDrawer}
                            overlayClassName="overlay"
                            docked={false}
                            onRequestChange={(open) => this.setState({openDrawer: open})}>
                        <TopMenu updateState={this.updateState}/>
                    </Drawer>
                    <Panel>
                        <FlatButton style={{minWidth: '40px'}}
                                    onClick={this.handleToggle}
                                    icon={<FontIcon className="material-icons" color="#000" style={{fontSize: '28px'}}>menu</FontIcon>}/>
                        {/*<Logo><img src={window.utils.logo}/></Logo>*/}
                        <a className="feedback" href="#popup-form">Оставить заявку</a>
                    </Panel>
                </Container>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.js-app'));