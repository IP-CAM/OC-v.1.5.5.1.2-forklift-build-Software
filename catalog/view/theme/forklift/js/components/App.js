import React from 'react';
import ReactDOM from 'react-dom';
import Rx from "rxjs";
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import {Form} from "./Form";
import {PartsForm} from "./PartsForm";
import {TopMenu} from "./TopMenu";
import {regExp} from "../model/helpers";

const Container = styled.div`
    height: 60px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    position: fixed;
`;
const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    padding: 15px 10px 10px;
    max-width: 250px;
    img {
        width: 150px;
    }
`;
const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    box-shadow: 0 0 8px rgba(0,0,0,.25);
    background-color: #fdc60a;
`;
const PhoneIcon = styled.button`
    width: 58px;
    height: 58px;
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
export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: transparent;
    font-size: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    
    ::before {
        content: '';
        width: 17px;
        height: 1px;
        background-color: #a5a5a5;
        position: absolute;
        top: 19px;
        right: 12px;
        transform: rotate(-45deg);
    }
    ::after {
        content: '';
        width: 1px;
        height: 17px;
        background-color: #a5a5a5;
        position: absolute;
        top: 11px;
        right: 20px;
        transform: rotate(-45deg);
    }
`;


window.subject$ = new Rx.Subject();

const {phone, email} = window.utils;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            openDrawer: false,
            openPhoneDialog: false,
            openFormFeedbackDialog: false,
            openFormProductDialog: false,
            openProductImageDialog: false,
            renderFormParts: Boolean(document.querySelector(".js-parts-form"))
        };
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        const feedbackBtn = document.querySelector(".js-feedback-btn");
        const getPriceBtn = document.querySelector(".js-get-price-btn");
        const productImage = document.querySelector(".product__image-box_image a");

        const rightColumn = $(".main-wrap__content");
        const leftColumn = $(".main-wrap__column-left");
        const leftColumnOffset = leftColumn.offset();
        const screenWidth = window.screen.width;
        const seoText = $(".mainpage-SEO");
        const seoTextOffset = seoText.offset();

        if (feedbackBtn !== null) {
            feedbackBtn.addEventListener("click", () => {
                this.setState({openFormFeedbackDialog: true});
            }, false);
        }

        if (getPriceBtn !== null) {
            getPriceBtn.addEventListener("click", () => {
                this.setState({openFormProductDialog: true});
                if (window.innerWidth < 768) {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        document.body.style.overflow = "auto"
                    }, 100);
                }
            }, false);
        }

        if (productImage !== null) {
            productImage.addEventListener("click", event => {
                event.preventDefault();
                this.setState({openProductImageDialog: true});
            }, false);
        }

        if (leftColumn !== null && screenWidth > 1170) {
            $(window).scroll(function () {

                let scrolledToBottom = $(".root")[0].offsetHeight - $(window).scrollTop() < 1207;

                if (document.querySelector(".mainpage-SEO") !== null) {
                    if ($(window).scrollTop() + 350 > seoTextOffset.top) {
                        $(".category-box__item a").css("color", "#fdc60a");
                    } else {
                        $(".category-box__item a").css("color", "#fff");
                    }
                }

                if ($(window).scrollTop() > leftColumnOffset.top && !scrolledToBottom) {
                    leftColumn.css("position", "fixed").css("top", "0");
                    rightColumn.css("margin-left", 270);
                } else if (scrolledToBottom) {
                    leftColumn.css("position", "absolute").css("bottom", "290px").css("top", "auto");
                    rightColumn.css("margin-left", 270);
                } else {
                    leftColumn.css("position", "static");
                    rightColumn.css("margin-left", 0);
                }
            });
        }

        // Subject$
        window.subject$.subscribe(({type, data}) => {
            if (type === "DIALOG") {
                this.setState(data);
            }
        });


        this.pageWrap = document.querySelector(".page-wrap");
        this.isProductPage = this.pageWrap.dataset.page === "product/product";
        this.formTitle = "";
        if (this.isProductPage) {
            this.formTitle = document.querySelector(".product-card h1").innerHTML;
            const productImage = document.querySelector(".product-card__image-box_image a");
            this.productImageUrl = productImage.getAttribute("href");
        }

    }

    handleToggleDrawer = () => this.setState({openDrawer: !this.state.openDrawer});

    updateState(obj) {
        this.setState(obj);
    }

    componentWillMount() {
        if (this.state.renderFormParts) {
            ReactDOM.render(<PartsForm email={email}/>, document.querySelector('.js-parts-form'));
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
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

                            <PhoneIcon onClick={() => this.setState({openPhoneDialog: true})}/>
                        </Panel>

                    </Container>


                    <Dialog modal={false}
                            open={this.state.openPhoneDialog}
                            onRequestClose={() => this.setState({openPhoneDialog: false})}>
                        <DialogTitle>Свяжитесь с нами</DialogTitle>
                        <DialogText><a href={`tel:+${regExp(phone)}`}>{phone}</a></DialogText>
                        <DialogText><a href={`mailto:${email}`}>{email}</a></DialogText>
                    </Dialog>

                    {/* Отправить заявку */}
                    <Dialog modal={false}
                            open={this.state.openFormFeedbackDialog}
                            autoScrollBodyContent={true}
                            className="popup__body"
                            contentClassName="popup__inner"
                            bodyClassName="popup__b"
                            onRequestClose={() => this.setState({openFormFeedbackDialog: false})}>

                        <div className="popup">
                            <CloseButton onClick={() => this.setState({openFormFeedbackDialog: false})}/>
                            <Form title="Отправить заявку" email={email}/>
                        </div>
                    </Dialog>

                    {/* Запросить стоимость */}
                    {this.isProductPage &&
                    <Dialog modal={false}
                            open={this.state.openFormProductDialog}
                            autoScrollBodyContent={true}
                            className="popup__body"
                            contentClassName="popup__inner"
                            bodyClassName="popup__b"
                            onRequestClose={() => this.setState({openFormProductDialog: false})}>

                        <div className="popup">
                            <CloseButton onClick={() => this.setState({openFormProductDialog: false})}/>
                            <Form title="Запросить стоимость" email={email} model={this.formTitle}/>
                        </div>
                    </Dialog>
                    }

                    {/*{this.isProductPage && (window.innerWidth > 768) &&*/}
                    {/*<Dialog modal={false}*/}
                    {/*contentClassName="product-card__dialog"*/}
                    {/*open={this.state.openProductImageDialog}*/}
                    {/*onRequestClose={() => this.setState({openProductImageDialog: false})}>*/}

                    {/*<img src={this.productImageUrl} alt=""/>*/}

                    {/*</Dialog>*/}
                    {/*}*/}
                </div>
            </MuiThemeProvider>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('.js-app'));

// На главной странице форма
// const pageWrap = document.querySelector(".page-wrap");
// if(pageWrap.dataset.page === "common/home") {
//     ReactDOM.render(<Form title="Напишите нам" email={email}/>, document.querySelector('.mainpage-feedback-section > .inner'));
// }
