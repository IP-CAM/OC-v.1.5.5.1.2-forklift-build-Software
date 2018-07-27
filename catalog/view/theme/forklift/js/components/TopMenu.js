import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';
import {regExp} from "../model/helpers";

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
const Feedback = styled.div`
    padding: 10px 15px;
`;
const Menu = styled.div`
    height: 100%;
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

const {address, phone, email, topMenu, categories} = window.utils;

export const TopMenu = ({updateState}) => {
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
                    <span className="feedback" onClick={() => {
                        updateState({openDrawer: false, openFormFeedbackDialog: true});
                        window.scrollTo(0, 0);
                        setTimeout(() => {
                            document.body.style.overflow = "auto"
                        }, 100);
                    }}>Оставить заявку</span>
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