import React from "react";
import styled from "styled-components";
import axios from "axios";
import {useState} from "react";
import UpdateForm from "./Components/UpdateForm";
import {destroy, reset} from "redux-form";

const Block = styled.div`
  width: 250px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s, transform 0.2s ease;
  cursor: pointer;
  margin-bottom: 30px;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Id = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  letter-spacing: 0.3px;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  letter-spacing: 0.3px;
`;

const Description = styled.h3`
  font-weight: 400;
  font-size: 15px;
  color: #777;
  margin: 0;
  letter-spacing: 0.3px;
`;

const Price = styled.h3`
  font-weight: 800;
  margin: 0;
  color: #ff7272;
  letter-spacing: 0.6px;
`;

const Button = styled.button`
  background-color: #f75f5f;
  color: #fff;
  width: 100%;
  padding: 18px;
  border: 0;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s;
  text-transform: uppercase;
  &:hover {
    background-color: #ff7070;
  }
`;

const BlockInfo = styled.div`padding: 20px;`;

const TicketsInfo = ({price, seat, id_ticket}) =>
    <React.Fragment>
        <Description>Билет №: {id_ticket}</Description>
        <Description>Место: {seat}</Description>
        <Price>Цена: {price}р.</Price>
    </React.Fragment>

/**
 * Компонет, содержащий информацию о фильме
 * @param {*} param0
 */
const Product = ({id_film, film_name, description, price, image, onUpdate, country, regisseur, date_release, accessLevel}) => {
    const [update, setUpdate] = useState(false);
    const [tickets, setTickets] = useState(null);
    const date = new Date(date_release);
    !tickets && axios.get(`http://localhost:3002/movie_ticket/${id_film}`).then(res => setTickets(res.data))
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return (
        <Block>
            <Image src={image}/>
            <BlockInfo>
                <Title>{film_name}</Title>
                <Description>Страна: {country}</Description>
                <Description>Режиссёр: {regisseur}</Description>
                <Description>Год релиза: {date.toLocaleString("ru", options)}</Description>
            </BlockInfo>
            <BlockInfo>
                {tickets && tickets.map((ticket, index) =><TicketsInfo {...ticket} key={index}/>)}
            </BlockInfo>

            {
                accessLevel ?
                    <Button onClick={() => {
                        axios.delete(`http://localhost:3002/ticket/${id_film}`);
                        window.location.reload()
                    }}>Удалить</Button>
                    : null
            }
            {
                accessLevel ? <Button onClick={() => {
                        setUpdate(true)
                    }}>Обновить</Button>
                    : null
            }
            {
                update &&
                <UpdateForm id={id_film} onSubmit={values => {
                    axios.post(`http://localhost:3002/ticket/`, values), setUpdate(false);
                }
                }/>
            }
        </Block>
    );
}

export default Product;