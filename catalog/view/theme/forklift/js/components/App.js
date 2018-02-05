import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';


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
    height: 100%;
    .feedback {
        height: 48px;
        line-height: 48px;
        padding: 0;
    }
`;
const Top = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
`;
const Middle = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
`;
const Bottom = styled.div`
    padding: 30px 15px 15px;
`;
const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    padding: 15px 10px 10px;
    max-width: 250px;
    text-align: center;
    img {
        width: 40%
    }
`;
const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px rgba(0,0,0,.25);
    background-color: #fff;
`;
const Phone = styled.div`
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
    padding-top: 30px;
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
    padding-top: 30px;
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
const PhoneIcon = styled.button`
    width: 60px;
    height: 60px;
    background: url(catalog/view/theme/forklift/images/ic_phone.svg) center center no-repeat;
    border: none;
`;
const DialogTitle = styled.div`
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 30px;
    color: #000;
    @media screen and (max-width: 380px) {
        font-size: 18px;
    }
`;
const DialogText = styled.div`
    font-size: 18px;
    margin-bottom: 30px;
    a {
        color: #000;
    }
`;



function regExp(text) {
    const arr = text.match(/\d/g);
    let str = "";
    arr.forEach(item => str += item);
    return str;
}

const {address, phone, email, topMenu, categories} = window.utils;

const TopMenu = ({updateState}) => {
    const menuItems = topMenu.links.map((link, i) => <Link key={i}>
                                                        <MenuItem onClick={() => location.href = link.href}>
                                                            {link.name}
                                                        </MenuItem>
                                                    </Link>);

    const categoriesHtml = categories.map((cat, j) => <Link key={j}>
                                                          <MenuItem onClick={() => location.href = cat.href}>
                                                              {cat.name}
                                                          </MenuItem>
                                                      </Link>);

    return (
        <Menu>
            <Top>
                <Feedback>
                    <a className="feedback"
                       href="#popup-form"
                       onClick={() => updateState({openDrawer: false})}>
                        Отправить запрос
                    </a>
                </Feedback>
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
            openDrawer: false,
            openPhoneDialog: false
        };
        this.updateState = this.updateState.bind(this);
        this.handleOpenPhone = this.handleOpenPhone.bind(this);
        this.handleClosePhone = this.handleClosePhone.bind(this);
    }

    handleToggleDrawer = () => this.setState({openDrawer: !this.state.openDrawer});

    handleOpenPhone = () => {
        this.setState({openPhoneDialog: true});
    };

    handleClosePhone = () => {
        this.setState({openPhoneDialog: false});
    };

    updateState(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Container>
                    <Drawer open={this.state.openDrawer}
                            overlayClassName="overlay"
                            docked={false}
                            onRequestChange={(open) => this.setState({openDrawer: open})}>
                        <TopMenu updateState={this.updateState}/>
                    </Drawer>
                    <Panel>
                        <FlatButton style={{minWidth: '60px', height: '60px'}}
                                    onClick={this.handleToggleDrawer}
                                    icon={<FontIcon className="material-icons"
                                                    color="#000"
                                                    style={{fontSize: '28px'}}>menu</FontIcon>}/>
                        <Logo><img src={window.utils.logo}/></Logo>
                        <div>
                            <PhoneIcon onClick={this.handleOpenPhone}/>
                            <Dialog modal={false}
                                    open={this.state.openPhoneDialog}
                                    onRequestClose={this.handleClosePhone}>
                                <DialogTitle>Свяжитесь с нами</DialogTitle>
                                <DialogText><a href={`tel:+${regExp(phone)}`}>{phone}</a></DialogText>
                                <DialogText><a href={`mailto:${email}`}>{email}</a></DialogText>
                            </Dialog>
                        </div>
                    </Panel>
                </Container>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.js-app'));