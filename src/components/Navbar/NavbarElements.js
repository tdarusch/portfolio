import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #404040;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: rem calc((100vw - 1000px) / 2);
    z-index: 12;
    font-family: "Segoe UI", Arial, sans-serif;
    margin: 0px;
`;

export const NavLink = styled(Link)`
    color: #d9d9d9;
    border-color: #404040;
    border-style: solid;
    border-width: 0px 0px 3px 0px;
    font-family: "Segoe UI", Arial, sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 47px;
    cursor: pointer;
    &.active {
        border-color: #262626;
        border-style: solid;
        border-width: 0px 0px 3px 0px;
        color: #b3b3b3;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    font-family: Andale Mono, monospace;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

