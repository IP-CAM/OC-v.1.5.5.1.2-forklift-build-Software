import React from 'react';
import Rx from "rxjs";
import InputMask from 'react-input-mask';
import extend from 'styled-components';
import {Container, InputItem, ButtonItem, Button, ErrMsg, Overlay, TitleError, TitleSuccess} from './Form';
import {CloseButton} from "./App";
const R = require('ramda');

const InputItemParts = InputItem.extend`
    input {
        border-right-color: #d7d7d7;
    }
`;

export class PartsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisibleThanks: false,
            isVisibleError: false,
            isVisiblePreloader: false,
            model: "",
            year: "",
            serial: "",
            org: "",
            phone: "",
            mail: "",
            city: "",
            listOfParts: "",
            modelErr: false,
            modelErrMsg: "",
            yearErr: false,
            yearErrMsg: "",
            serialErr: false,
            serialErrMsg: "",
            orgErr: false,
            orgErrMsg: "",
            phoneErr: false,
            phoneErrMsg: "",
            mailErr: false,
            mailErrMsg: "",
            cityErr: false,
            cityErrMsg: "",
            listOfPartsErr: false,
            listOfPartsErrMsg: ""
        };
        this.changeCommon = this.changeCommon.bind(this);
        this.setData = this.setData.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.clearFieldsErr = this.clearFieldsErr.bind(this);
        this.closeThanksClick = this.closeThanksClick.bind(this);
    }

    changeCommon({target}, key) {
        const {value} = target;
        this.setState({[key]: value});
    }

    clearFields() {
        this.setState({
            isVisiblePreloader: true,
            model: "",
            year: "",
            serial: "",
            org: "",
            phone: "",
            mail: "",
            city: "",
            listOfParts: "",
            modelErr: false,
            modelErrMsg: "",
            yearErr: false,
            yearErrMsg: "",
            serialErr: false,
            serialErrMsg: "",
            orgErr: false,
            orgErrMsg: "",
            phoneErr: false,
            phoneErrMsg: "",
            mailErr: false,
            mailErrMsg: "",
            cityErr: false,
            cityErrMsg: "",
            listOfPartsErr: false,
            listOfPartsErrMsg: ""
        });
    }

    clearFieldsErr() {
        this.setState({
            isVisiblePreloader: true,
            modelErr: false,
            modelErrMsg: "",
            yearErr: false,
            yearErrMsg: "",
            serialErr: false,
            serialErrMsg: "",
            orgErr: false,
            orgErrMsg: "",
            phoneErr: false,
            phoneErrMsg: "",
            mailErr: false,
            mailErrMsg: "",
            cityErr: false,
            cityErrMsg: "",
            listOfPartsErr: false,
            listOfPartsErrMsg: ""
        });
    }

    setData() {
        const {model, year, serial, org, phone, mail, city, listOfParts} = this.state;

        this.clearFieldsErr();

        if(R.isEmpty(model)) {
            this.setState({
                modelErr: true,
                modelErrMsg: "Поле не должно быть пустым"
            });
        }
        if(R.isEmpty(year)) {
            this.setState({
                yearErr: true,
                yearErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(serial)) {
            this.setState({
                serialErr: true,
                serialErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(org)) {
            this.setState({
                orgErr: true,
                orgErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(phone)) {
            this.setState({
                phoneErr: true,
                phoneErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(mail)) {
            this.setState({
                mailErr: true,
                mailErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(city)) {
            this.setState({
                cityErr: true,
                cityErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(listOfParts)) {
            this.setState({
                listOfPartsErr: true,
                listOfPartsErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(model) || R.isEmpty(year) || R.isEmpty(serial) || R.isEmpty(org) || R.isEmpty(phone) || R.isEmpty(mail) || R.isEmpty(city) || R.isEmpty(listOfParts)) return;

        Rx.Observable.of("/mail/send_parts.php")
            .flatMap(url => Rx.Observable.ajax({
                url,
                method: "POST",
                body: {
                    title: "Запчасти",
                    model,
                    year,
                    serial,
                    org,
                    phone,
                    mail,
                    city,
                    listOfParts,
                    systemEmail: this.props.email,
                    hostname: location.hostname
                }
            }))
            .catch(() => {
                this.setState({isVisibleError: true});
                setTimeout(() => {
                    this.setState({
                        isVisibleError: false,
                        model: "",
                        year: "",
                        serial: "",
                        org: "",
                        phone: "",
                        mail: "",
                        city: "",
                        listOfParts: ""
                    });
                }, 5000);
            })
            .subscribe(data => {
                console.log("data: ", data);
                const {status} = data.response;

                if(status === "FAIL") {
                    this.setState({isVisibleError: true});
                    setTimeout(() => {
                        this.setState({
                            isVisibleError: false,
                            model: "",
                            year: "",
                            serial: "",
                            org: "",
                            phone: "",
                            mail: "",
                            city: "",
                            listOfParts: ""
                        });
                    }, 5000);
                }

                if(status === "SUCCESS") {
                    this.setState({
                        modelErr: false,
                        modelErrMsg: "",
                        yearErr: false,
                        yearErrMsg: "",
                        serialErr: false,
                        serialErrMsg: "",
                        orgErr: false,
                        orgErrMsg: "",
                        phoneErr: false,
                        phoneErrMsg: "",
                        mailErr: false,
                        mailErrMsg: "",
                        cityErr: false,
                        cityErrMsg: "",
                        listOfPartsErr: false,
                        listOfPartsErrMsg: "",
                        isVisiblePreloader: false,
                        isVisibleThanks: true,
                        isVisibleError: false
                    });
                    setTimeout(() => {
                        window.subject$.next({type: "DIALOG", data: {
                            openFormFeedbackDialog: false,
                            openFormProductDialog: false
                        }});
                        this.setState({
                            isVisibleThanks: false,
                            model: "",
                            year: "",
                            serial: "",
                            org: "",
                            phone: "",
                            mail: "",
                            city: "",
                            listOfParts: ""
                        });
                    }, 5000);
                }
            }, err => {});
    }

    closeThanksClick() {
        this.setState({isVisibleThanks: false});
        window.subject$.next({type: "DIALOG", data: {
            openFormFeedbackDialog: false
        }});
    }

    render() {
        const {model, year, serial, org, phone, mail, city, listOfParts,
            modelErr, yearErr, serialErr, orgErr, phoneErr, mailErr, cityErr, listOfPartsErr,
            modelErrMsg, yearErrMsg, serialErrMsg, orgErrMsg, phoneErrMsg, mailErrMsg,
            cityErrMsg, listOfPartsErrMsg, isVisibleError, isVisibleThanks} = this.state;

        return (
            <Container>
                <h2>{this.props.title}</h2>

                <div className="form parts-form">

                    <InputItemParts className="form__item" err={modelErr}>
                        <input placeholder="Марка и модель техники *"
                               type="text"
                               value={model}
                               onChange={(e) => this.changeCommon(e, "model")}
                        />
                        {modelErr && <ErrMsg className="animated fadeIn">{modelErrMsg}</ErrMsg>}
                    </InputItemParts>

                    <InputItemParts className="form__item" err={yearErr}>
                        <input placeholder="Год выпуска *"
                               type="text"
                               value={year}
                               onChange={(e) => this.changeCommon(e, "year")}
                        />
                        {yearErr && <ErrMsg className="animated fadeIn">{yearErrMsg}</ErrMsg>}
                    </InputItemParts>

                    <InputItemParts className="form__item" err={serialErr}>
                        <input placeholder="Серийный номер техники *"
                               type="text"
                               value={serial}
                               onChange={(e) => this.changeCommon(e, "serial")}
                        />
                        {serialErr && <ErrMsg className="animated fadeIn">{serialErrMsg}</ErrMsg>}
                    </InputItemParts>

                    <InputItem className="form__item" err={orgErr}>
                        <input
                            placeholder="Организация *"
                            type="text"
                            value={org}
                            onChange={(e) => this.changeCommon(e, "org")}
                        />
                        {orgErr && <ErrMsg className="animated fadeIn">{orgErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item" err={phoneErr}>
                        <InputMask  mask="+7 (999) 999-99-99"
                                    maskChar="_"
                                    type="tel"
                                    value={phone}
                                    placeholder="Контактный телефон *"
                                    onChange={(e) => this.changeCommon(e, "phone")}
                                    />
                        {phoneErr && <ErrMsg className="animated fadeIn">{phoneErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item" err={mailErr}>
                        <input placeholder="E-mail *"
                               type="email"
                               autoComplete="email"
                               value={mail}
                               onChange={(e) => this.changeCommon(e, "mail")}
                        />
                        {mailErr && <ErrMsg className="animated fadeIn">{mailErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item" err={cityErr}>
                        <input
                            placeholder="Город *"
                            type="text"
                            value={city}
                            onChange={(e) => this.changeCommon(e, "city")}
                        />
                        {cityErr && <ErrMsg className="animated fadeIn">{cityErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item" err={listOfPartsErr}>
                        <textarea placeholder="Список требуемых запчастей *"
                                  value={listOfParts}
                                  onChange={(e) => this.changeCommon(e, "listOfParts")}
                        />
                        {listOfPartsErr && <ErrMsg className="animated fadeIn">{listOfPartsErrMsg}</ErrMsg>}
                    </InputItem>

                    <ButtonItem>
                        <Button className="btn" onClick={this.setData}>Отправить</Button>
                    </ButtonItem>

                </div>

                {isVisibleThanks &&
                <Overlay className="form-thanks animated fadeIn">
                    {window.innerWidth < 740 && <CloseButton onClick={() => this.closeThanksClick()}/>}
                    <TitleSuccess>Спасибо за обращение!</TitleSuccess>
                    <p>Наши менеджеры свяжутся с вами в ближайшее время.</p>
                </Overlay>
                }

                {isVisibleError &&
                <Overlay className="form-thanks animated fadeIn">
                    <TitleError>Ошибка</TitleError>
                    <p>Произошла ошибка при отправке данных</p>
                </Overlay>
                }

            </Container>
        );
    }
}