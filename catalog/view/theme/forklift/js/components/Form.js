import React from 'react';
import Rx from "rxjs";
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import {CloseButton} from "./App";
const R = require('ramda');

export const Container = styled.div`
    position: relative;
`;

export const InputItem = styled.div`
    margin-bottom: 15px;
    input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        padding: 12px 5px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        border-bottom-color: #d7d7d7;
        transition: all .2s ease;
        ${p => p.err && 'border-bottom-color: #e7322b;'}
        
        ::-webkit-input-placeholder {
            color: #00244b;
        }
        ::-moz-placeholder {
            color: #00244b;
        }
        :-ms-input-placeholder {
            color: #00244b;
        }
        :-moz-placeholder {
            color: #00244b;
        }
        
        :hover {
            border-bottom-color: #c9c9c9;
            ${p => p.err && 'border-bottom-color: #e7322b;'}
        }
        
        :focus {
            border-bottom-color: #00244b;
            ${p => p.err && 'border-bottom-color: #e7322b;'}
            ::-webkit-input-placeholder {
              color: #cad0d7;
            }
            ::-moz-placeholder {
              color: #cad0d7;
            }
            :-ms-input-placeholder {
              color: #cad0d7;
            }
            :-moz-placeholder {
              color: #cad0d7;
            }
        }
        
        @media screen and (max-width: 960px) {
            :hover {
                border-bottom-color: #00b6f4;
            }
        }
    }
    
    textarea {
        max-width: 100%;
        min-width: 100%;
        min-height: 75px;
        max-height: 150px;
        
        @media screen and (max-width: 480px) {
            max-width: 100%;
        }
    }
`;

export const ButtonItem = styled.div`
    padding-top: 15px;
    text-align: center;
`;

export const Button = styled.button`
    padding: 8px 25px;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
`;

export const ErrMsg = styled.div`
    font-size: 12px;
    padding: 4px 0;
    line-height: 1.1;
    color: #e7322b;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    text-align: center;
    color: #000;
    line-height: 1.3;
    font-size: 18px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    h4 {
        margin-bottom: 15px;
        flex-basis: 100%;
    }
    @media screen and (max-width: 740px) {
        position: fixed;
        padding: 20px;
    }
`;

export const TitleError = styled.h4`
    color: #bd0000;
`;

export const TitleSuccess = styled.h4`
    color: #47bd00;
`;


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisibleThanks: false,
            isVisibleError: false,
            isVisiblePreloader: false,
            fio: "",
            email: "",
            phone: "",
            city: "",
            company: "",
            comment: "",
            model: props.model || "none",
            fioErr: false,
            fioErrMsg: '',
            emailErr: false,
            emailErrMsg: '',
            phoneErr: false,
            phoneErrMsg: '',
            cityErr: false,
            cityErrMsg: '',
            companyErr: false,
            companyErrMsg: ''
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
            fio: "",
            email: "",
            phone: "",
            city: "",
            company: "",
            comment: "",
            fioErr: false,
            fioErrMsg: '',
            emailErr: false,
            emailErrMsg: '',
            phoneErr: false,
            phoneErrMsg: '',
            cityErr: false,
            cityErrMsg: '',
            companyErr: false,
            companyErrMsg: ''
        });
    }

    clearFieldsErr() {
        this.setState({
            isVisiblePreloader: true,
            fioErr: false,
            fioErrMsg: '',
            emailErr: false,
            emailErrMsg: '',
            phoneErr: false,
            phoneErrMsg: '',
            cityErr: false,
            cityErrMsg: '',
            companyErr: false,
            companyErrMsg: ''
        });
    }

    setData() {
        const {fio, phone, email, city, company, comment, model} = this.state;

        this.clearFieldsErr();

        if(R.isEmpty(fio)) {
            this.setState({
                fioErr: true,
                fioErrMsg: "Поле не должно быть пустым"
            });
        }
        if(R.isEmpty(phone)) {
            this.setState({
                phoneErr: true,
                phoneErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(email)) {
            this.setState({
                emailErr: true,
                emailErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(city)) {
            this.setState({
                cityErr: true,
                cityErrMsg: "Поле не должно быть пустым"
            })
        }
        if(R.isEmpty(company)) {
            this.setState({
                companyErr: true,
                companyErrMsg: "Поле не должно быть пустым"
            })
        }

        if(R.isEmpty(fio) || R.isEmpty(phone) || R.isEmpty(email) || R.isEmpty(city) || R.isEmpty(company)) return;


        Rx.Observable.of("/mail/send_form.php")
            .flatMap(url => Rx.Observable.ajax({
                url,
                method: "POST",
                body: {
                    title: this.props.title,
                    fio,
                    email,
                    phone,
                    city,
                    company,
                    comment,
                    model,
                    systemEmail: this.props.email,
                    hostname: location.hostname,
                    modelUrl: encodeURIComponent(location.href)
                }
            }))
            .catch(() => {
                this.setState({isVisibleError: true});
                setTimeout(() => {
                    this.setState({
                        isVisibleError: false,
                        fio: "",
                        email: "",
                        phone: "",
                        city: "",
                        company: "",
                        comment: ""
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
                            fio: "",
                            email: "",
                            phone: "",
                            city: "",
                            company: "",
                            comment: ""
                        });
                    }, 5000);
                }

                if(status === "SUCCESS") {
                    this.setState({
                        fioErr: false,
                        fioErrMsg: '',
                        emailErr: false,
                        emailErrMsg: '',
                        phoneErr: false,
                        phoneErrMsg: '',
                        cityErr: false,
                        cityErrMsg: '',
                        companyErr: false,
                        companyErrMsg: '',
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
                            fio: "",
                            email: "",
                            phone: "",
                            city: "",
                            company: "",
                            comment: ""
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
        const {fio, phone, email, city, company, comment,
            fioErr, phoneErr, emailErr, cityErr, companyErr,
            fioErrMsg, phoneErrMsg, emailErrMsg, cityErrMsg, companyErrMsg,
            isVisibleThanks, isVisibleError} = this.state;

        return (
            <Container>
                <h2>{this.props.title}</h2>

                <div className="form indexPage-form">

                    <InputItem className="form__item" err={fioErr}>
                        <input placeholder="Фамилия Имя Отчество *"
                               type="text"
                               value={fio}
                               onChange={(e) => this.changeCommon(e, "fio")}
                        />
                        {fioErr && <ErrMsg className="animated fadeIn">{fioErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item" err={phoneErr}>
                        <InputMask mask="+7 (999) 999-99-99"
                                   maskChar="_"
                                   type="tel"
                                   value={phone}
                                   placeholder="Телефон *"
                                   onChange={(e) => this.changeCommon(e, "phone")}
                        />
                        {phoneErr && <ErrMsg className="animated fadeIn">{phoneErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item" err={emailErr}>
                        <input placeholder="E-mail *"
                               type="email"
                               value={email}
                               onChange={(e) => this.changeCommon(e, "email")}
                        />
                        {emailErr && <ErrMsg className="animated fadeIn">{emailErrMsg}</ErrMsg>}
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

                    <InputItem className="form__item" err={companyErr}>
                        <input placeholder="Компания *"
                               type="text"
                               value={company}
                               onChange={(e) => this.changeCommon(e, "company")}
                        />
                        {companyErr && <ErrMsg className="animated fadeIn">{companyErrMsg}</ErrMsg>}
                    </InputItem>

                    <InputItem className="form__item">
                        <textarea placeholder="Комментарий"
                                  value={comment}
                                  onChange={(e) => this.changeCommon(e, "comment")}
                        />
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